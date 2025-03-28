/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import SectionHeader from "@/components/common/section-header";
import { COMPANY_SERVICES } from "@/lib/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Configuration
  const SECTION_HEIGHT = "80vh";
  const PARALLAX_HEIGHT = "300vh";

  // Update container size on resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const size = Math.min(rect.width * 0.65, window.innerHeight * 0.55);
        setContainerSize({
          width: size,
          height: size,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transform values based on scroll
  const stackToCircleProgress = useTransform(
    scrollYProgress,
    [0, 0.15], // Stack to circle during first 15% of scroll
    [0, 1]
  );

  const rotationProgress = useTransform(
    scrollYProgress,
    [0.15, 0.9], // Rotate during 15-90% of scroll
    [0, 0.25] // Slower rotation by 0.25x
  );

  const wheelRotation = useTransform(
    rotationProgress,
    [0, 1],
    [0, -360] // Full rotation (negative for counterclockwise)
  );

  // Calculate dimensions
  const radius = Math.min(containerSize.width, containerSize.height) * 0.75;
  const cardWidth = Math.min(containerSize.width, containerSize.height) * 0.48;
  const cardHeight = cardWidth * 1.8;

  // Precompute transforms for each card
  const cardTransforms = COMPANY_SERVICES.map((_, index) => {
    const angle = (360 / COMPANY_SERVICES.length) * index;
    const radian = (angle * Math.PI) / 180;

    // Calculate final circular position
    const circleX = Math.cos(radian) * radius;
    const circleY = Math.sin(radian) * radius;

    // Calculate stacked position (with slight offset for each card)
    const stackedOffsetX = (index - COMPANY_SERVICES.length / 2) * 5;
    const stackedOffsetY = -index * 8;

    // Interpolate between stacked and circular positions
    const x = useTransform(
      stackToCircleProgress,
      [0, 1],
      [stackedOffsetX, circleX - cardWidth / 2]
    );

    const y = useTransform(
      stackToCircleProgress,
      [0, 1],
      [stackedOffsetY, circleY - cardHeight / 2]
    );

    return { x, y, angle };
  });

  return (
    <section
      ref={sectionRef}
      className="relative backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)] rounded-[10px] border border-[rgba(255,255,255,0.3)] z-10 mx-6 overflow-hidden"
      style={{
        height: SECTION_HEIGHT,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Services" description="Golden Ace Ventures LLP" />

        <div
          ref={containerRef}
          className="relative flex flex-col items-center justify-center py-16 px-4"
          style={{
            height: "100%",
            zIndex: 10,
          }}
        >
          {/* Radial Cards Container */}
          <div
            className="relative mx-auto scale-90 translate-y-1/2 h-[300vh]"
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
                stiffness: 30,
                damping: 40,
              }}
            >
              {COMPANY_SERVICES.map((service, index) => {
                const transform = cardTransforms[index];
                if (!transform) return null;
                const { x, y, angle } = transform;

                return (
                  <motion.div
                    key={service.id}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    className="absolute rounded-2xl overflow-hidden shadow-lg"
                    style={{
                      width: cardWidth,
                      height: cardHeight,
                      top: "50%",
                      left: "50%",
                      x,
                      y,
                      rotate: useTransform(
                        stackToCircleProgress,
                        [0, 1],
                        [0, angle + 90]
                      ),
                      zIndex: COMPANY_SERVICES.length - index,
                      transformOrigin: "center center",
                    }}
                  >
                    <div
                      className="relative w-full h-full"
                      style={{
                        backgroundColor: service.color,
                        filter: "brightness(0.9)",
                      }}
                    >
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover mix-blend-overlay opacity-60"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <motion.div
                        className="absolute inset-0 p-6 flex flex-col justify-end"
                        style={{
                          // Keep text readable by countering card rotation when in circle mode
                          rotate: useTransform(
                            stackToCircleProgress,
                            [0, 1],
                            [0, -angle - 90]
                          ),
                          transformOrigin: "center center",
                        }}
                      >
                        <h3 className="text-xl font-bold text-white">
                          {service.title}
                        </h3>
                        <p className="text-sm text-white/80 mt-2 line-clamp-4">
                          {service.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute right-8 top-1/2 -translate-y-1/2 w-0.5 h-32 bg-white/10 rounded-full overflow-hidden"
        style={{ scaleY: scrollYProgress }}
      >
        <div className="w-full h-full bg-white/50 origin-top" />
      </motion.div>

      {/* Invisible spacer to create parallax effect */}
      <div
        style={{
          position: "absolute",
          top: "100%",
          height: PARALLAX_HEIGHT,
          width: "100%",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
