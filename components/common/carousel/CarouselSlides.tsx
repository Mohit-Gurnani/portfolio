"use client";

import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { useCarousel } from "./CarouselContext";

// ─── CarouselContent ──────────────────────────────────────────────────────────

interface CarouselContentProps extends HTMLAttributes<HTMLDivElement> {
  /** Extra classes on the inner flex container (the Embla "container"). */
  containerClassName?: string;
}

/**
 * Renders the Embla viewport + slide container.
 */
export function CarouselContent({
  className,
  containerClassName,
  children,
  ...rest
}: CarouselContentProps) {
  const { viewportRef } = useCarousel();

  return (
    <div
      ref={viewportRef}
      className={cn("overflow-x-clip", className)}
      {...rest}
    >
      {/* Embla requires this immediate child to be the scroll container. */}
      <div className={cn("flex", containerClassName)}>{children}</div>
    </div>
  );
}

// ─── CarouselItem ─────────────────────────────────────────────────────────────

interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * A single carousel slide.
 */
export function CarouselItem({
  className,
  children,
  ...rest
}: CarouselItemProps) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
