"use client";

import { COMPANY_SERVICES } from "@/lib/constants";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // Update container size on window resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Use the smaller dimension to ensure it fits on all screens
        const size = Math.min(rect.width * 0.9, window.innerHeight * 0.8);
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

  // Scroll based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to rotation value
  const wheelRotation = useTransform(scrollYProgress, [0, 0.8], [0, 360]);

  // Update active index based on wheel rotation
  useEffect(() => {
    const unsubscribe = wheelRotation.onChange((value) => {
      const normalizedRotation = value % 360;
      const segmentSize = 360 / COMPANY_SERVICES.length;
      const newIndex =
        Math.floor(normalizedRotation / segmentSize) % COMPANY_SERVICES.length;
      setActiveIndex(newIndex);
    });

    return () => unsubscribe();
  }, [wheelRotation]);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Calculate wheel radius and card size
  const radius = Math.min(containerSize.width, containerSize.height) * 0.4;
  // Make cards taller
  const cardWidth = Math.min(containerSize.width, containerSize.height) * 0.28;
  const cardHeight = cardWidth * 1.8;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center py-16 px-4"
    >
      {/* Background Marquee Text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="whitespace-nowrap text-[150px] md:text-[200px] font-bold text-white/5 absolute top-1/2 -translate-y-1/2"
        >
          RENEWABLE GREEN & THERMAL RENEWABLE GREEN & THERMAL
        </motion.div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-gray-400 text-lg">Goldenace Ventures LLP</p>
        </div>

        {/* Active Service Description */}
        <div className="mb-12 h-[100px] text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-xl mx-auto"
            >
              <h3 className="text-3xl font-bold text-yellow-400">
                {COMPANY_SERVICES[activeIndex].title}
              </h3>
              <p className="text-gray-300 mt-2">
                {COMPANY_SERVICES[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Radial Cards Container */}
        <div
          className="relative mx-auto"
          style={{
            width: containerSize.width,
            height: containerSize.height,
          }}
        >
          {/* Center point indicator */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-400 rounded-full z-20"></div>

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

          {/* Navigation dots */}
          <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex gap-2">
            {COMPANY_SERVICES.map((service, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-yellow-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-[-70px] left-1/2 -translate-x-1/2 text-gray-400 text-sm animate-bounce">
            Scroll to explore services
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
