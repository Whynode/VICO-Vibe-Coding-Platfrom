"use client";

import { cn } from "@/lib/utils";
import type { VibeOrbsProps } from "@/types";

export function VibeOrbs({ className }: VibeOrbsProps) {
  return (
    <>
      <div
        className={cn(
          "vibe-orb vibe-orb-1 absolute w-[600px] h-[600px] rounded-full",
          "bg-[radial-gradient(circle,#bff0ae_0%,rgba(255,255,255,0)_70%)]",
          "blur-[80px] opacity-40 pointer-events-none select-none",
          className
        )}
        style={{
          top: "-200px",
          left: "-100px",
        }}
        aria-hidden="true"
      />
      <div
        className={cn(
          "vibe-orb vibe-orb-2 absolute w-[600px] h-[600px] rounded-full",
          "bg-[radial-gradient(circle,#f5c8b5_0%,rgba(255,255,255,0)_70%)]",
          "blur-[80px] opacity-40 pointer-events-none select-none",
          className
        )}
        style={{
          bottom: "-200px",
          right: "-100px",
        }}
        aria-hidden="true"
      />
    </>
  );
}