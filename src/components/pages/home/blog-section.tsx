"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

function Blogs() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 0,
      title: "Infrastructure Evolved",
      description:
        "Discover the latest developments in our robust and scalable infrastructure.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 1,
      title: "Power Distribution",
      description:
        "Exploring innovative solutions in power distribution networks.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Technology Stack",
      description:
        "Behind the scenes of our cutting-edge technology implementation.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Blogs</h2>
          <p className="text-gray-400 text-lg">Goldenace Ventures LLP</p>
        </div>

        {/* Carousel - Fixed height with clickable images */}
        <div className="relative mb-8">
          <div className="flex gap-4 items-start h-[500px]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={cn(
                  "relative h-full transition-all duration-500 ease-in-out rounded-3xl overflow-hidden cursor-pointer",
                  index === activeSlide
                    ? "flex-1"
                    : "w-[200px] opacity-70 hover:opacity-90"
                )}
                onClick={() => setActiveSlide(index)}
                role="button"
                tabIndex={0}
                aria-label={`View ${slide.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveSlide(index);
                  }
                }}
              >
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === activeSlide}
                />
                <div
                  className={cn(
                    "absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent",
                    index !== activeSlide && "opacity-0 group-hover:opacity-100"
                  )}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {slide.title}
                  </h3>
                  {index === activeSlide && (
                    <p className="text-sm md:text-base text-gray-200">
                      {slide.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-start gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(index)}
              className={cn(
                "h-2 rounded-full bg-yellow-400 transition-all duration-300",
                index === activeSlide
                  ? "w-12"
                  : "w-2 opacity-50 hover:opacity-75"
              )}
              aria-label={`View slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
