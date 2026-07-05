"use client";

import type {ButtonHTMLAttributes, ReactNode} from "react";
import {cn} from "@/lib/utils";
import {useCarousel} from "./CarouselContext";

// ─── Shared button base ───────────────────────────────────────────────────────

interface CarouselNavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon or label content rendered inside the button. */
  children?: ReactNode;
}

// ─── CarouselPrevButton ───────────────────────────────────────────────────────

/**
 * Calls `scrollPrev` on click and is automatically disabled when
 * the carousel cannot scroll backward.
 */
export function CarouselPrevButton({
                                     className,
                                     children,
                                     onClick,
                                     ...rest
                                   }: CarouselNavButtonProps) {
  const {scrollPrev, canScrollPrev} = useCarousel();

  return (
    <button
      type="button"
      aria-label="Previous slide"
      disabled={!canScrollPrev}
      onClick={(e) => {
        scrollPrev();
        onClick?.(e);
      }}
      className={cn(
        "disabled:pointer-events-none disabled:opacity-40 hover:cursor-pointer",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

// ─── CarouselNextButton ───────────────────────────────────────────────────────

/**
 * Calls `scrollNext` on click and is automatically disabled when
 * the carousel cannot scroll forward.
 */
export function CarouselNextButton({
                                     className,
                                     children,
                                     onClick,
                                     ...rest
                                   }: CarouselNavButtonProps) {
  const {scrollNext, canScrollNext} = useCarousel();

  return (
    <button
      type="button"
      aria-label="Next slide"
      disabled={!canScrollNext}
      onClick={(e) => {
        scrollNext();
        onClick?.(e);
      }}
      className={cn(
        "disabled:pointer-events-none disabled:opacity-40 hover:cursor-pointer",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
