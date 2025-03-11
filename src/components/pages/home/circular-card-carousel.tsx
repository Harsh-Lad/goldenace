"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface CardProps {
  id: number
  title: string
  description: string
  image: string
  color: string
}

interface CircularCardCarouselProps {
  cards: CardProps[]
}

export default function CircularCardCarousel({ cards }: CircularCardCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })

  // Update container size on window resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        // Use the smaller dimension to ensure it fits on all screens
        const size = Math.min(rect.width * 0.9, window.innerHeight * 0.7)
        setContainerSize({
          width: size,
          height: size,
        })
      }
    }

    // Initial size calculation
    updateSize()

    // Add resize listener
    window.addEventListener("resize", updateSize)

    // Cleanup
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  // Function to animate cards along the circular path
  const animateCircularSlide = (direction: "next" | "prev") => {
    if (isAnimating) return

    setIsAnimating(true)

    // Calculate the next active index
    const nextIndex =
      direction === "next" ? (activeIndex + 1) % cards.length : (activeIndex - 1 + cards.length) % cards.length

    setActiveIndex(nextIndex)

    // After animation completes, reset animating state
    setTimeout(() => {
      setIsAnimating(false)
    }, 600)
  }

  // Handle direct navigation to a specific card
  const handleCardClick = (index: number) => {
    if (isAnimating || index === activeIndex) return

    // Determine direction for smoother animation
    const currentIndex = activeIndex
    const cardCount = cards.length

    // Calculate distance in both directions
    const clockwiseDistance = (index - currentIndex + cardCount) % cardCount
    const counterclockwiseDistance = (currentIndex - index + cardCount) % cardCount

    // Choose the shortest path
    const direction = clockwiseDistance <= counterclockwiseDistance ? "next" : "prev"

    animateCircularSlide(direction)
  }

  // Calculate wheel radius and card size
  const radius = Math.min(containerSize.width, containerSize.height) * 0.4
  const cardWidth = Math.min(containerSize.width, containerSize.height) * 0.25
  const cardHeight = cardWidth * 1.6

  return (
    <div
      ref={containerRef}
      className="relative mx-auto overflow-hidden"
      style={{
        height: containerSize.height,
        perspective: "1200px",
      }}
    >
      {/* Center point indicator */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-400 rounded-full z-20"></div>

      {/* Active Card Description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 text-center w-full max-w-md"
        >
          <h3 className="text-2xl font-bold text-yellow-400">{cards[activeIndex].title}</h3>
          <p className="text-gray-300 text-sm mt-2">{cards[activeIndex].description}</p>
        </motion.div>
      </AnimatePresence>

      {/* Cards Container */}
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {cards.map((card, index) => {
          // Calculate position on the wheel
          const cardCount = cards.length
          const angleStep = 360 / cardCount

          // Calculate the visual angle for this card relative to active card
          const relativeIndex = (index - activeIndex + cardCount) % cardCount
          const visualAngle = relativeIndex * angleStep

          // Convert to radians for position calculation
          const radian = (visualAngle * Math.PI) / 180

          // Calculate position
          const x = Math.cos(radian) * radius
          const y = Math.sin(radian) * radius

          // Determine visibility and z-index based on position
          const isActive = index === activeIndex
          const isVisible = relativeIndex <= 3 || relativeIndex >= cardCount - 3

          // Calculate opacity and scale based on position
          const distanceFromActive = Math.min(relativeIndex, cardCount - relativeIndex)

          const opacity = Math.max(0.4, 1 - distanceFromActive * 0.2)
          const scale = isActive ? 1.1 : Math.max(0.8, 1 - distanceFromActive * 0.1)

          if (!isVisible) return null

          return (
            <motion.div
              key={card.id}
              className="absolute rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              style={{
                width: cardWidth,
                height: cardHeight,
                top: "50%",
                left: "50%",
                x: x,
                y: y,
                translateX: "-50%",
                translateY: "-50%",
                // Rotate to be perpendicular to center
                rotate: visualAngle + 90,
                scale,
                opacity,
                zIndex: isActive ? 10 : 5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.6,
              }}
              onClick={() => handleCardClick(index)}
            >
              <div
                className="relative w-full h-full"
                style={{
                  backgroundColor: card.color,
                  filter: isActive ? "brightness(1.1)" : "brightness(0.8)",
                }}
              >
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  className="object-cover mix-blend-overlay opacity-60"
                />
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <h3 className={cn("font-bold text-white", isActive ? "text-lg" : "text-base")}>{card.title}</h3>
                  {isActive && <p className="text-xs text-white/80 mt-2 line-clamp-3">{card.description}</p>}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-4">
        <button
          onClick={() => animateCircularSlide("prev")}
          disabled={isAnimating}
          className="bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm disabled:opacity-50"
          aria-label="Previous card"
        >
          &lt;
        </button>

        {/* Navigation dots */}
        <div className="flex gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-yellow-400" : "bg-gray-600"
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => animateCircularSlide("next")}
          disabled={isAnimating}
          className="bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm disabled:opacity-50"
          aria-label="Next card"
        >
          &gt;
        </button>
      </div>
    </div>
  )
}

