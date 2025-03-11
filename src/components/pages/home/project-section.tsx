"use client";

import SectionHeader from "@/components/common/section-header";
import { COMPANY_PROJECTS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function Projects() {
  const [cards, setCards] = useState([0, 1, 2]); // Indices of cards in stack order (top to bottom)
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to cycle to next card with animation
  const cycleCards = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    // Check if we're on the last card
    const isLastCard = cards[0] === COMPANY_PROJECTS.length - 1;

    // After animation completes, update the card order
    setTimeout(() => {
      if (isLastCard) {
        // Reset to original order if we're on the last card
        setCards([0, 1, 2]);
      } else {
        // Otherwise, move the top card to the bottom
        setCards((prevCards) => {
          const newCards = [...prevCards];
          const topCard = newCards.shift();
          if (topCard !== undefined) {
            newCards.push(topCard);
          }
          return newCards;
        });
      }
      setIsAnimating(false);
    }, 600); // Match this with the animation duration
  };

  // Get active project (top card)
  const activeProject = cards[0];

  // Check if we're on the last card
  const isLastCard = activeProject === COMPANY_PROJECTS.length - 1;

  // Card positions and animations
  const getCardStyles = (stackIndex: number) => {
    // Base positions for cards in the stack
    const basePositions = [
      { rotate: "-2deg", translateX: "-5px", translateY: "0px", scale: 1 },
      { rotate: "2deg", translateX: "5px", translateY: "-5px", scale: 0.97 },
      { rotate: "-1deg", translateX: "0px", translateY: "5px", scale: 0.94 },
    ];

    return basePositions[stackIndex];
  };

  return (
    <section className="py-16 px-4 md:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Projects" description="Goldenace Ventures LLP" />

        {/* Project Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl font-bold mb-6">
                  {COMPANY_PROJECTS[activeProject].title}
                </h3>
                <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                  {COMPANY_PROJECTS[activeProject].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Card Stack */}
          <div className="relative h-[400px] flex items-center justify-center">
            {/* Card Stack */}
            <div className="relative w-[300px] h-[300px] perspective-[1200px]">
              {cards.map((projectIndex, stackIndex) => {
                const isTopCard = stackIndex === 0;
                const cardStyles = getCardStyles(stackIndex);

                return (
                  <motion.div
                    key={`${projectIndex}-${cards.join("-")}`}
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      zIndex: cards.length - stackIndex,
                    }}
                    initial={cardStyles}
                    animate={{
                      ...cardStyles,
                      ...(isAnimating && isTopCard
                        ? {
                            y: [0, -50, 200],
                            x: [0, -100, 0],
                            rotate: [cardStyles.rotate, "-10deg", "5deg"],
                            scale: [1, 1.05, 0.9],
                            opacity: [1, 1, 0],
                            zIndex: 0,
                          }
                        : {}),
                      ...(isAnimating && !isTopCard
                        ? {
                            y:
                              stackIndex === 1
                                ? [cardStyles.translateY, "-5px", "0px"]
                                : [cardStyles.translateY, "0px", "-5px"],
                            x:
                              stackIndex === 1
                                ? [cardStyles.translateX, "0px", "-5px"]
                                : [cardStyles.translateX, "-5px", "5px"],
                            rotate:
                              stackIndex === 1
                                ? [cardStyles.rotate, "0deg", "-2deg"]
                                : [cardStyles.rotate, "-2deg", "2deg"],
                            scale: [
                              cardStyles.scale,
                              cardStyles.scale + 0.03,
                              cardStyles.scale + 0.06,
                            ],
                            zIndex: cards.length - stackIndex + 1,
                          }
                        : {}),
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg">
                      <Image
                        src={
                          COMPANY_PROJECTS[projectIndex].image ||
                          "/placeholder.svg"
                        }
                        alt={COMPANY_PROJECTS[projectIndex].title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold">
                        {String(COMPANY_PROJECTS[projectIndex].id).padStart(
                          2,
                          "0"
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={cycleCards}
              disabled={isAnimating}
              className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={
                isLastCard ? "Reset to first project" : "Next project"
              }
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
