"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { COMPANY_SERVICES } from "@/lib/constants";

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
}

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [isFixed, setIsFixed] = useState(false);

  // Update container size on window resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Use the smaller dimension to ensure it fits on all screens
        const size = Math.min(rect.width * 0.65, window.innerHeight * 0.55);
        setContainerSize({
          width: size,
          height: size,
        });
      }
    };

    // Initial size calculation
    updateSize();

    // Add resize listener
    window.addEventListener("resize", updateSize);

    // Cleanup
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Scroll based animations for the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to rotation value
  const wheelRotation = useTransform(scrollYProgress, [0, 1], [0, 180 + 180 / COMPANY_SERVICES.length]);

  // Calculate if section should be fixed based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      // Fix the section when scrolling through the cards (between 0.1 and 0.9 progress)
      setIsFixed(value > 0.1 && value < 0.9);

      // Calculate active index based on scroll progress
      const normalizedProgress = Math.min(Math.max(value, 0.1), 0.9);
      const normalizedValue = (normalizedProgress - 0.1) / 0.8; // Normalize to 0-1 range
      const newIndex = Math.floor(normalizedValue * COMPANY_SERVICES.length);
      if (newIndex >= 0 && newIndex < COMPANY_SERVICES.length) {
        setActiveIndex(newIndex);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, COMPANY_SERVICES.length]);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Calculate wheel radius and card size
  const radius = Math.min(containerSize.width, containerSize.height) * 0.75;
  const cardWidth = Math.min(containerSize.width, containerSize.height) * 0.48;
  const cardHeight = cardWidth * 1.8;

  return (
    <section
      ref={sectionRef}
      className="relative h-[120vh] pt-44 backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)] rounded-[10px] border border-[rgba(255,255,255,0.3)] z-10" // Make section taller to allow for scrolling space
    >
      <div
        ref={containerRef}
        className={`overflow-hidden flex flex-col items-center justify-center py-16 px-4 h-[50rem] ${
          isFixed ? "fixed top-0 left-0 right-0 z-50" : "relative"
        }`}
      >
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Blogs</h2>
          <p className="text-gray-400 text-lg">Goldenace Ventures LLP</p>
        </div>
        <div className="max-w-7xl w-full relative z-10 mt-[50rem]">
          {/* Radial Cards Container */}
          <div
            className="relative mx-auto"
            style={{
              width: containerSize.width,
              height: containerSize.height,
            }}
          >
            {/* Rotating wheel */}
            <motion.div
              className="relative w-full h-full"
              style={{ rotate: wheelRotation }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 30,
              }}
            >
              {COMPANY_SERVICES.map((service, index) => {
                // Calculate position on the wheel
                const angle = (360 / COMPANY_SERVICES.length) * index;
                const radian = (angle * Math.PI) / 180;

                // Calculate position
                const x = Math.cos(radian) * radius;
                const y = Math.sin(radian) * radius;

                // Determine if this is the active card
                const isActive = index === activeIndex;

                return (
                  <motion.div
                    key={service.id}
                    className="absolute rounded-2xl overflow-hidden shadow-lg"
                    style={{
                      width: cardWidth,
                      height: cardHeight,
                      top: "50%",
                      left: "50%",
                      x: x - cardWidth / 2,
                      y: y - cardHeight / 2,
                      // Rotate to be perpendicular to center
                      rotate: angle + 90,
                      scale: isActive ? 1.1 : 0.9,
                      opacity: isActive ? 1 : 0.7,
                      zIndex: isActive ? 10 : 5,
                      transition: "scale 0.3s ease, opacity 0.3s ease",
                    }}
                  >
                    <div
                      className="relative w-full h-full"
                      style={{
                        backgroundColor: service.color,
                        filter: isActive ? "brightness(1.1)" : "brightness(0.8)",
                      }}
                    >
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover mix-blend-overlay opacity-60"
                      />
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <h3 className="text-xl font-bold text-white">
                          {service.title}
                        </h3>
                        <p className="text-sm text-white/80 mt-2 line-clamp-4">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Spacer div to ensure proper scrolling behavior */}
      {/* <div style={{ height: "100vh" }} className="invisible" /> */}
    </section>
  );
}

