"use client"

import React, {useCallback, useEffect, useRef, useState} from 'react'
import {cn} from "@/lib/utils"

export interface RadarTarget {
	/** The title of the tech stack */
	name: string
	/** The content to render at this position — a string, ReactElement, or Component */
	content?: React.ReactNode | React.ComponentType<{ className?: string }>
	/** Angle in degrees (0 = top/12 o'clock, clockwise) */
	angle: number
	/** Distance from center as fraction 0–1 (0 = center, 1 = edge) */
	distance: number
}

export interface RadarProps {
	/** Array of targets to place on the radar */
	targets?: RadarTarget[]
	/** Duration of one full rotation in ms (default: 4000) */
	sweepDuration?: number
	/** Size of the radar in px or CSS value (default: 500) */
	size?: number | string
	/** Additional className for the root container */
	className?: string
	/** Color for the radar theme — defaults to tertiary green */
	color?: string
}

/**
 * Convert a target angle (0 = 12 o'clock, clockwise) to standard
 * canvas radians (0 = 3 o'clock, clockwise).
 */
function targetToCanvasRad(angleDeg: number): number {
	return ((angleDeg - 90) * Math.PI) / 180
}

export default function Radar({
	                              targets = [],
	                              sweepDuration = 4000,
	                              size = 500,
	                              className,
	                              color = "#22C55E",
                              }: RadarProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const animFrameRef = useRef<number>(0)
	const startTimeRef = useRef<number | null>(null)

	// Track each target's current brightness (0–1)
	const [targetBrightness, setTargetBrightness] = useState<number[]>(
		() => targets.map(() => 0)
	)
	const brightnessRef = useRef<number[]>(targets.map(() => 0))

	// Resolve numeric size for canvas
	const numericSize = typeof size === "number" ? size : 500

	const drawRadar = useCallback(
		(ctx: CanvasRenderingContext2D, w: number, h: number, sweepAngleDeg: number) => {
			const cx = w / 2
			const cy = h / 2
			const radius = Math.min(cx, cy) * 0.92

			ctx.clearRect(0, 0, w, h)

			// --- Grid lines (clipped to radar circle) ---
			ctx.save()
			ctx.beginPath()
			ctx.arc(cx, cy, radius, 0, Math.PI * 2)
			ctx.clip()

			ctx.strokeStyle = `${color}18`
			ctx.lineWidth = 1
			const gridCount = 10
			for (let i = 0; i <= gridCount; i++) {
				const pos = (i / gridCount) * w
				ctx.beginPath()
				ctx.moveTo(pos, 0)
				ctx.lineTo(pos, h)
				ctx.stroke()
				ctx.beginPath()
				ctx.moveTo(0, pos)
				ctx.lineTo(w, pos)
				ctx.stroke()
			}

			ctx.restore()

			// --- Concentric rings ---
			const ringCount = 4
			for (let i = 1; i <= ringCount; i++) {
				const r = (radius / ringCount) * i
				ctx.beginPath()
				ctx.arc(cx, cy, r, 0, Math.PI * 2)
				ctx.strokeStyle = i === ringCount ? `${color}50` : `${color}30`
				ctx.lineWidth = i === ringCount ? 1.5 : 1
				ctx.stroke()
			}

			// --- Cross-hair lines ---
			ctx.strokeStyle = `${color}30`
			ctx.lineWidth = 1
			ctx.beginPath()
			ctx.moveTo(cx - radius, cy)
			ctx.lineTo(cx + radius, cy)
			ctx.stroke()
			ctx.beginPath()
			ctx.moveTo(cx, cy - radius)
			ctx.lineTo(cx, cy + radius)
			ctx.stroke()

			// --- Diagonal cross-hair lines ---
			const diagLen = radius * Math.SQRT1_2
			ctx.strokeStyle = `${color}18`
			ctx.beginPath()
			ctx.moveTo(cx - diagLen, cy - diagLen)
			ctx.lineTo(cx + diagLen, cy + diagLen)
			ctx.stroke()
			ctx.beginPath()
			ctx.moveTo(cx + diagLen, cy - diagLen)
			ctx.lineTo(cx - diagLen, cy + diagLen)
			ctx.stroke()

			// --- Sweep gradient (conic-like wedge) ---
			const sweepRad = ((sweepAngleDeg - 90) * Math.PI) / 180
			const tailLength = (60 * Math.PI) / 180 // 60° gradient tail

			// Draw the gradient wedge using many thin arc slices
			const slices = 60
			for (let i = 0; i < slices; i++) {
				const t = i / slices
				const angle = sweepRad - t * tailLength
				const nextAngle = sweepRad - ((i + 1) / slices) * tailLength
				const alpha = (1 - t) * 0.35

				ctx.beginPath()
				ctx.moveTo(cx, cy)
				ctx.arc(cx, cy, radius, angle, nextAngle, true)
				ctx.closePath()
				ctx.fillStyle = `${color}${Math.round(alpha * 255).toString(16).padStart(2, "0")}`
				ctx.fill()
			}

			// --- Sweep line ---
			const lineEndX = cx + radius * Math.cos(sweepRad)
			const lineEndY = cy + radius * Math.sin(sweepRad)

			ctx.beginPath()
			ctx.moveTo(cx, cy)
			ctx.lineTo(lineEndX, lineEndY)
			ctx.strokeStyle = `${color}cc`
			ctx.lineWidth = 2
			ctx.shadowColor = color
			ctx.shadowBlur = 8
			ctx.stroke()
			ctx.shadowBlur = 0

			// --- Center dot ---
			ctx.beginPath()
			ctx.arc(cx, cy, 4, 0, Math.PI * 2)
			ctx.fillStyle = `${color}aa`
			ctx.fill()
			ctx.beginPath()
			ctx.arc(cx, cy, 2, 0, Math.PI * 2)
			ctx.fillStyle = color
			ctx.fill()
		},
		[color]
	)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const dpr = window.devicePixelRatio || 1
		const w = numericSize
		const h = numericSize
		canvas.width = w * dpr
		canvas.height = h * dpr
		canvas.style.width = `${w}px`
		canvas.style.height = `${h}px`
		const ctx = canvas.getContext("2d")!
		ctx.scale(dpr, dpr)

		const animate = (timestamp: number) => {
			if (startTimeRef.current === null) startTimeRef.current = timestamp
			const elapsed = timestamp - startTimeRef.current
			const sweepAngleDeg = ((elapsed % sweepDuration) / sweepDuration) * 360

			drawRadar(ctx, w, h, sweepAngleDeg)

			// --- Update target brightness ---
			// For each target, compute how far behind the sweep it is (in degrees).
			// If the sweep just passed over a target (0–8° behind), brightness = 1.
			// Then it linearly decays over the remaining ~352° of rotation.
			const newBrightness = targets.map((target) => {
				const tAngle = ((target.angle % 360) + 360) % 360
				// How many degrees behind the sweep is this target?
				const behind = ((sweepAngleDeg - tAngle) % 360 + 360) % 360

				if (behind <= 8) {
					// Sweep is on / just passed the target
					return 1
				}
				// Fade from 1 → 0 over the next 300°
				const fadeSpan = 300
				if (behind <= fadeSpan) {
					return Math.max(0, 1 - (behind - 8) / (fadeSpan - 8))
				}
				return 0
			})

			// Only update state when values actually change (avoid re-renders)
			const prev = brightnessRef.current
			const changed = newBrightness.some((v, i) => Math.abs(v - prev[i]) > 0.01)
			if (changed) {
				brightnessRef.current = newBrightness
				setTargetBrightness(newBrightness)
			}

			animFrameRef.current = requestAnimationFrame(animate)
		}

		animFrameRef.current = requestAnimationFrame(animate)

		return () => {
			cancelAnimationFrame(animFrameRef.current)
		}
	}, [numericSize, sweepDuration, targets, drawRadar])

	const containerSize = typeof size === "number" ? `${size}px` : size

	return (
		<div
			className={cn("relative select-none", className)}
			style={{width: containerSize, height: containerSize}}
		>
			{/* Canvas for the radar background, rings, sweep */}
			<canvas
				ref={canvasRef}
				className="absolute inset-0 w-full h-full"
			/>

			{/* Targets rendered as HTML overlays */}
			{targets.map((target, idx) => {
				const rad = targetToCanvasRad(target.angle)
				const r = target.distance * 46 // 46% of container (matches 0.92 * 50%)
				const x = 50 + r * Math.cos(rad)
				const y = 50 + r * Math.sin(rad)
				const brightness = targetBrightness[idx] ?? 0

				return (
					<div
						key={idx}
						className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
						style={{
							left: `${x}%`,
							top: `${y}%`,
							opacity: Math.max(0.06, brightness),
							filter: `brightness(${0.3 + brightness * 0.7})`,
						}}
					>
						{!target.content ? (
							<span
								className="font-primary text-xs font-semibold whitespace-nowrap"
								style={{
									color,
									textShadow: brightness > 0.3
										? `0 0 ${brightness * 14}px ${color}`
										: "none",
								}}
							>
								{target.name}
							</span>
						) : typeof target.content === "string" ? (
							<span
								className="font-primary text-xs font-semibold whitespace-nowrap"
								style={{
									color,
									textShadow: brightness > 0.3
										? `0 0 ${brightness * 14}px ${color}`
										: "none",
								}}
							>
                {target.content}
              </span>
						) : (
							<span
								style={{
									color,
									filter: brightness > 0.3
										? `drop-shadow(0 0 ${brightness * 10}px ${color})`
										: "none",
								}}
							>
                {typeof target.content === "function" ? (
	                React.createElement(target.content as React.ComponentType<{ className?: string }>, {
		                className: "size-7"
	                })
                ) : (
	                target.content
                )}
              </span>
						)}
					</div>
				)
			})}

			{/* Outer subtle glow ring */}
			<div
				className="absolute inset-0 rounded-full pointer-events-none"
				style={{
					boxShadow: `inset 0 0 30px 2px ${color}15, 0 0 40px 2px ${color}10`,
				}}
			/>
		</div>
	)
}