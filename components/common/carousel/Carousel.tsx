"use client";

import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  type HTMLAttributes,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import type {
  EmblaEventType,
  EmblaOptionsType,
  EmblaPluginType,
} from "embla-carousel";
import AutoScrollPlugin from "embla-carousel-auto-scroll";
import type {
  AutoScrollOptionsType,
  AutoScrollType,
} from "embla-carousel-auto-scroll";
import { cn } from "@/lib/utils";
import { CarouselContext, type CarouselContextValue } from "./CarouselContext";

// ─── Props ────────────────────────────────────────────────────────────────────

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  /** Embla configuration object — passed directly to useEmblaCarousel. */
  options?: EmblaOptionsType;
  /**
   * Additional Embla plugins beyond autoScroll.
   * Pass a stable reference (useMemo) to avoid unnecessary re-inits.
   */
  plugins?: EmblaPluginType[];
  /**
   * Enable the AutoScroll plugin.
   */
  autoScroll?: AutoScrollOptionsType | boolean;
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Root carousel wrapper.
 */
export function Carousel({
  options,
  plugins,
  autoScroll,
  className,
  children,
  ...rest
}: CarouselProps) {
  // ── AutoScroll plugin ────────────────────────────────────────────────────
  const autoScrollPlugin = useMemo<AutoScrollType | null>(() => {
    if (!autoScroll) return null;
    return AutoScrollPlugin(
      typeof autoScroll === "object" ? autoScroll : undefined
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally empty — plugin is configuration, not reactive state

  const allPlugins = useMemo<EmblaPluginType[]>(() => {
    const base = plugins ?? [];
    return autoScrollPlugin ? [...base, autoScrollPlugin] : base;
  }, [plugins, autoScrollPlugin]);

  const [emblaRef, emblaApi] = useEmblaCarousel(options, allPlugins);

  // Cast so we can pass it through context as a typed RefObject.
  const viewportRef =
    emblaRef as unknown as React.RefObject<HTMLDivElement | null>;

  // ── Core scroll state ────────────────────────────────────────────────────
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnapsCount, setScrollSnapsCount] = useState(0);

  // ── AutoScroll state ─────────────────────────────────────────────────────
  const [isAutoScrollPlaying, setIsAutoScrollPlaying] = useState(
    autoScrollPlugin ? (autoScrollPlugin.options.playOnInit ?? true) : false
  );

  // ── Scroll handlers ──────────────────────────────────────────────────────
  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  // ── AutoScroll handlers ──────────────────────────────────────────────────
  const playAutoScroll = useCallback(() => {
    autoScrollPlugin?.play();
  }, [autoScrollPlugin]);

  const stopAutoScroll = useCallback(() => {
    autoScrollPlugin?.stop();
  }, [autoScrollPlugin]);

  const toggleAutoScroll = useCallback(() => {
    if (!autoScrollPlugin) return;
    autoScrollPlugin.isPlaying()
      ? autoScrollPlugin.stop()
      : autoScrollPlugin.play();
  }, [autoScrollPlugin]);

  const resetAutoScroll = useCallback(() => {
    autoScrollPlugin?.reset();
  }, [autoScrollPlugin]);

  // ── State sync ───────────────────────────────────────────────────────────
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onReInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnapsCount(emblaApi.scrollSnapList().length);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    // Sync immediately on mount.
    setScrollSnapsCount(emblaApi.scrollSnapList().length);
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onReInit);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi, onSelect, onReInit]);

  useEffect(() => {
    if (!emblaApi || !autoScrollPlugin) return;

    const onPlay = () => setIsAutoScrollPlaying(true);
    const onStop = () => setIsAutoScrollPlaying(false);

    emblaApi.on("autoScrollPlay" as EmblaEventType, onPlay);
    emblaApi.on("autoScrollStop" as EmblaEventType, onStop);

    return () => {
      emblaApi.off("autoScrollPlay" as EmblaEventType, onPlay);
      emblaApi.off("autoScrollStop" as EmblaEventType, onStop);
    };
  }, [emblaApi, autoScrollPlugin]);

  const contextValue: CarouselContextValue = {
    emblaApi,
    viewportRef,
    scrollPrev,
    scrollNext,
    canScrollPrev,
    canScrollNext,
    selectedIndex,
    scrollSnapsCount,
    autoScrollPlugin,
    isAutoScrollPlaying,
    playAutoScroll,
    stopAutoScroll,
    toggleAutoScroll,
    resetAutoScroll,
  };

  return (
    <CarouselContext.Provider value={contextValue}>
      <div
        role="region"
        aria-roledescription="carousel"
        className={cn("relative", className)}
        {...rest}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}
