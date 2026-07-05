"use client";

import { createContext, useContext, type RefObject } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import type { AutoScrollType } from "embla-carousel-auto-scroll";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CarouselContextValue {
  /** The raw Embla API instance — use this to add plugins or advanced control. */
  emblaApi: EmblaCarouselType | undefined;
  /** Ref attached to the viewport div (the scroll container). */
  viewportRef: RefObject<HTMLDivElement | null>;
  /** Scroll to the previous slide. No-op when unavailable. */
  scrollPrev: () => void;
  /** Scroll to the next slide. No-op when unavailable. */
  scrollNext: () => void;
  /** Whether the carousel can scroll backward from the current position. */
  canScrollPrev: boolean;
  /** Whether the carousel can scroll forward from the current position. */
  canScrollNext: boolean;
  /** Index of the currently selected slide (0-based). */
  selectedIndex: number;
  /** Total number of scroll snaps (useful for pagination dots). */
  scrollSnapsCount: number;

  // ── AutoScroll ──────────────────────────────────────────────────────────
  /**
   * The raw AutoScroll plugin instance.
   * `null` when the `autoScroll` prop is not passed to `<Carousel>`.
   * Use this for advanced control (e.g. resetting delay, reading options).
   */
  autoScrollPlugin: AutoScrollType | null;
  /** `true` while the auto-scroll animation is actively running. */
  isAutoScrollPlaying: boolean;
  /** Start auto-scroll. No-op when the plugin is not enabled. */
  playAutoScroll: () => void;
  /** Stop auto-scroll. No-op when the plugin is not enabled. */
  stopAutoScroll: () => void;
  /** Stop if playing, play if stopped. */
  toggleAutoScroll: () => void;
  /** Stop + reset the internal scroll-delay timer. */
  resetAutoScroll: () => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

export const CarouselContext = createContext<CarouselContextValue | null>(null);

// ─── Hook ─────────────────────────────────────────────────────────────────────

/**
 * Consume carousel state and methods anywhere inside `<Carousel>`.
 * Throws a helpful message if used outside the provider.
 */
export function useCarousel(): CarouselContextValue {
  const ctx = useContext(CarouselContext);
  if (!ctx) {
    throw new Error(
      "`useCarousel` must be used inside a `<Carousel>` component."
    );
  }
  return ctx;
}
