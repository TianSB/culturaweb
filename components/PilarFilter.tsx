"use client";

import { PILARES, type PilarType } from "@/lib/constants";

interface PilarFilterProps {
  activePilar: PilarType | null;
  onChange: (pilar: PilarType | null) => void;
}

export default function PilarFilter({ activePilar, onChange }: PilarFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => onChange(null)}
        className={`px-5 py-2 rounded-full text-small font-medium transition-all duration-200 ${
          activePilar === null
            ? "bg-foreground text-[#FAFAF7]"
            : "bg-white text-muted border border-border hover:border-foreground hover:text-foreground"
        }`}
      >
        Todos
      </button>
      {PILARES.map((pilar) => (
        <button
          key={pilar.slug}
          onClick={() => onChange(pilar.slug)}
          className={`px-5 py-2 rounded-full text-small font-medium transition-all duration-200 ${
            activePilar === pilar.slug
              ? "text-white"
              : "bg-white text-muted border border-border hover:border-foreground hover:text-foreground"
          }`}
          style={
            activePilar === pilar.slug
              ? { backgroundColor: pilar.color, borderColor: pilar.color }
              : {}
          }
        >
          {pilar.label}
        </button>
      ))}
    </div>
  );
}
