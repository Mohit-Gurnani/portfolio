"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useCarousel } from "./CarouselContext";

// ─── Props ────────────────────────────────────────────────────────────────────

interface CarouselAutoScrollToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Content rendered when auto-scroll is playing.
   * Defaults to a simple pause icon (⏸).
   */
  playingContent?: ReactNode;
  /**
   * Content rendered when auto-scroll is stopped.
   * Defaults to a simple play icon (▶).
   */
  stoppedContent?: ReactNode;
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * A button that toggles the AutoScroll plugin on/off.
 */
export function CarouselAutoScrollToggle({
  className,
  onClick,
  playingContent = "⏸",
  stoppedContent = "▶",
  ...rest
}: CarouselAutoScrollToggleProps) {
  const { autoScrollPlugin, isAutoScrollPlaying, toggleAutoScroll } =
    useCarousel();

  // Render nothing when auto-scroll is not enabled on this carousel.
  if (!autoScrollPlugin) return null;

  return (
    <button
      type="button"
      aria-label={
        isAutoScrollPlaying ? "Pause auto-scroll" : "Play auto-scroll"
      }
      aria-pressed={isAutoScrollPlaying}
      onClick={(e) => {
        toggleAutoScroll();
        onClick?.(e);
      }}
      className={cn("transition-opacity", className)}
      {...rest}
    >
      {isAutoScrollPlaying ? playingContent : stoppedContent}
    </button>
  );
}
