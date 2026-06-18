"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryProps {
  images: string[];
  projectTitle: string;
}

export default function Gallery({ images, projectTitle }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!images.length) return null;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
        {images.map((src, index) => (
          <button
            key={src}
            onClick={() => setSelectedIndex(index)}
            className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer"
          >
            <Image
              src={src}
              alt={`${projectTitle} - Imagen ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl cursor-pointer"
            aria-label="Cerrar"
          >
            ✕
          </button>
          <div className="relative w-full max-w-4xl aspect-[4/3]">
            <Image
              src={images[selectedIndex]}
              alt={`${projectTitle} - Imagen ${selectedIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <div className="absolute bottom-4 text-white/60 text-small">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
