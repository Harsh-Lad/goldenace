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
      image: "https://cdn.corporatefinanceinstitute.com/assets/public-infrastructure.jpeg",
    },
    {
      id: 1,
      title: "Power Distribution",
      description:
        "Exploring innovative solutions in power distribution networks.",
      image: "https://www.customtruck.com/wp-content/uploads/2021/06/shutterstock_1493916902-scaled.jpg",
    },
    {
      id: 2,
      title: "Technology Stack",
      description:
        "Behind the scenes of our cutting-edge technology implementation.",
      image: "https://img.freepik.com/free-vector/big-data-processing-isometric-graph-diagram-inform-analysis-statistics-technology-objects_39422-910.jpg?semt=ais_hybrid",
    },
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">BLOGS</h2>
          <p className="text-gray-400 text-lg">GOLDEN ACE VENTURES LLP</p>
        </div>

        {/* Render slides as a list on small screens */}
        <div className="block md:hidden space-y-8">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative w-full h-[300px] rounded-3xl overflow-hidden"
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {slide.title}
                </h3>
                <p className="text-sm text-gray-200">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel - Slider for larger screens */}
        <div className="hidden md:block relative mb-8">
          <div className="flex flex-row gap-4">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={cn(
                  "relative w-full h-[500px] transition-all duration-500 ease-in-out rounded-3xl overflow-hidden cursor-pointer",
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
                  <h3 className="text-3xl font-bold mb-2 text-white">
                    {slide.title}
                  </h3>
                  {index === activeSlide && (
                    <p className="text-base text-gray-200">
                      {slide.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <div className="hidden md:flex justify-start mt-8">
          <button
            onClick={handleNext}
            className="bg-[#FFBF00] text-xl text-white font-bold py-2 px-6 rounded-full hover:bg-[#e0a800] transition-all duration-300"
            aria-label="Next Slide"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
