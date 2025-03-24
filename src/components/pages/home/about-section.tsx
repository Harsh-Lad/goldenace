"use client";

import CustomButton from "@/components/common/custom-button";
import SectionHeader from "@/components/common/section-header";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const scrollingText = `
Golden Ace Ventures LLP is a forward-thinking business consulting firm specializing in finance, infrastructure, smart technology, and investments. With a strong global presence, it develops high-potential projects with long-term sustainability.

We have a global presence, mainly operating out of India, Kenya, the UK, and Dubai.

We provide expertise in strategic capital, asset maximization, and business acceleration.
`;

const carouselImages = [
  "https://www.goldenaceventures.com/images/slide03.jpg",
  "https://www.goldenaceventures.com/images/slide01.jpg",
  "https://www.goldenaceventures.com/images/slide02.jpg",
];

export default function AboutSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [autoScrollSpeed, setAutoScrollSpeed] = useState(1); // pixels per frame
  const [isManualScrolling, setIsManualScrolling] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const scroll = (currentTime: number) => {
      if (!scrollRef.current || isManualScrolling) return;

      const deltaTime = currentTime - lastTime;
      const scrollAmount = (autoScrollSpeed * deltaTime) / 16; // normalize to 60fps

      scrollRef.current.scrollTop += scrollAmount;

      // Reset to top when reaching bottom
      if (
        scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
        scrollRef.current.scrollHeight
      ) {
        setTimeout(() => {
          if (scrollRef.current) {
            scrollRef.current.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        }, 3000); // 3 seconds delay
      }

      lastTime = currentTime;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [autoScrollSpeed, isManualScrolling]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const handleManualScrollStart = () => {
    setIsManualScrolling(true);
  };

  const handleManualScrollEnd = () => {
    // Add a small delay before re-enabling auto-scroll
    setTimeout(() => setIsManualScrolling(false), 2000);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="" description="" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-center leading-tight py-6"
        >
          Driving Innovation,
          <br />
          Delivering Sustainability
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto max-w-6xl mt-32">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-medium">
                Pioneering Solutions for a Better Tomorrow
              </h3>

              {/* Scrolling Text */}
              <div
                ref={scrollRef}
                onMouseEnter={handleManualScrollStart}
                onMouseLeave={handleManualScrollEnd}
                onTouchStart={handleManualScrollStart}
                onTouchEnd={handleManualScrollEnd}
                className="h-40 rounded-3xl p-4 overflow-y-auto scrollbar-hide bg-transparent shadow-lg"
              >
                <div className="space-y-4 text-lg font-bold">
                  {scrollingText.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* About Us Button */}
              <CustomButton
                href="/about"
                variant="link"
                buttonTransition="bg-[#FFBF00] text-black opacity-80 hover:opacity-100 transition-opacity duration-300"
                arrowClassName="w-6 h-6 group-hover:rotate-45 transition-transform duration-300"
                className="font-bold text-xl"
              >
                About Us
              </CustomButton>
            </motion.div>
          </div>

          {/* Right Column */}
          <aside className="flex flex-col gap-4">
            <figure className="relative h-80 w-full overflow-hidden">
              {carouselImages.map((src, index) => (
                <Image
                  key={index}
                  src={src || "/placeholder.svg"}
                  alt={`Carousel Image ${index + 1}`}
                  aria-label={`Carousel Image ${index + 1}`}
                  title={`Image ${index + 1}`}
                  className={cn(
                    `absolute top-0 left-0 h-full w-full transition-opacity duration-1000 rounded-4xl`,
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  )}
                  width={120}
                  height={120}
                  priority
                />
              ))}
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
}
