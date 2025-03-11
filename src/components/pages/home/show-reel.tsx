/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import CircularText from "@/components/common/circular-text";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ShowReelProps {
  className?: string;
}

export function ShowReel({ className }: ShowReelProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        //ts-ignore
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [isVisible]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleShowReel = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative m-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 z-0"></div>
        <section
          className="px-4 sm:px-6 md:px-9 2xl:px-12 py-10 sm:py-20 relative"
          ref={containerRef}
        >
          <motion.button
            type="button"
            onClick={handleShowReel}
            className={cn(
              "absolute top-0 rounded-full flex items-center justify-center z-10 bg-black translate-x-8 sm:translate-x-12",
              "before:absolute before:w-full before:h-full before:rounded-full before:border before:border-black",
              !isPlaying && "before:animate-ping before:opacity-75",
              "transition-transform hover:scale-110",
              className
            )}
          >
            <CircularText
              text="Golden*Ace*Ventures"
              onHover="slowDown"
              spinDuration={20}
            />
          </motion.button>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="flex items-center justify-center bg-black/90 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative w-full">
                <video
                  ref={videoRef}
                  className={cn(
                    "w-full object-cover transition-all duration-300 ease-in-out max-h-[90vh] aspect-video"
                  )}
                  src="/assets/videos/video.mp4"
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                />
                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-t from-black/50 to-transparent">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={togglePlay}
                    className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    ) : (
                      <Play className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    )}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    ) : (
                      <Volume2 className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
    </section>
  );
}
