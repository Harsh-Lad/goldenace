"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { MENU_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed bottom-0 right-0 z-50 w-full">
      <div className="flex justify-end items-center p-8 gap-4">
        {/* Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="z-50 flex flex-col items-end gap-2 cursor-pointer bg-[#FFBF00] rounded-lg p-4"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <motion.span className="block h-1.5 rounded-full bg-white w-8" />
          <motion.span
            className="block h-1.5 rounded-full bg-white w-16"
            animate={{
              width: 16,
              x: isOpen ? -16 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Navigation Panel with Two-Phased Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
              closed: {
                transition: {
                  staggerChildren: 0.05,
                  staggerDirection: -1,
                },
              },
            }}
            className="fixed bottom-0 right-0 h-full pointer-events-none"
          >
            {/* Background expansion - first vertical then horizontal */}
            <motion.div
              className="absolute bottom-0 right-0 bg-[#FFBF00] max-h-[90svh] origin-bottom-right pointer-events-auto mx-3 my-3 rounded-3xl"
              variants={{
                closed: {
                  height: 0,
                  width: 0,
                  opacity: 0,
                  transition: {
                    width: { duration: 0.3, ease: "easeIn" },
                    height: { duration: 0.3, ease: "easeIn", delay: 0.2 },
                    opacity: { duration: 0.2, delay: 0.4 },
                  },
                },
                open: {
                  height: "100vh",
                  width: isMobile ? "300px" : "400px",
                  opacity: 1,
                  transition: {
                    height: { duration: 0.5, ease: "easeOut" },
                    width: { duration: 0.4, ease: "easeOut", delay: 0.4 },
                    opacity: { duration: 0.3 },
                  },
                },
              }}
            />

            {/* Content container - only appears after background expansion */}
            <motion.div
              className={cn(
                "fixed top-0 right-0 h-full flex flex-col justify-between py-24 px-10 pointer-events-auto",
                isMobile ? "w-[300px]" : "w-[400px]"
              )}
              variants={{
                closed: {
                  opacity: 0,
                  transition: { duration: 0.2 },
                },
                open: {
                  opacity: 1,
                  transition: { duration: 0.3, delay: 0.8 },
                },
              }}
            >
              {/* Menu Items */}
              <ul className="flex flex-col space-y-6 mt-16">
                {MENU_ITEMS.map((item, index) => (
                  <motion.li
                    key={item.number}
                    variants={{
                      closed: {
                        x: 20,
                        opacity: 0,
                      },
                      open: {
                        x: 0,
                        opacity: 1,
                        transition: {
                          delay: 0.9 + index * 0.05,
                          duration: 0.3,
                        },
                      },
                    }}
                  >
                    {index === 9 ? (
                      <Link
                        href="/contact"
                        className="group bg-black px-4 py-2 rounded-3xl font-bold text-2xl flex items-center group transition-all duration-500 w-fit translate-y-[200%] lg:translate-y-[350%]"
                      >
                        Contact
                        <span className="w-0 group-hover:w-6 h-6 grid place-items-center bg-white rounded-full transition-all duration-500 overflow-hidden ml-2">
                          <ArrowRight
                            className="text-[#FFBF00] -rotate-45"
                            size={20}
                          />
                        </span>
                      </Link>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-2xl font-bold text-white hover:text-black flex items-center group transition-all duration-500"
                      >
                        {item.title}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>

              {/* Bottom spacer to ensure content doesn't overlap with the fixed bottom buttons */}
              <div className="h-24"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavigationMenu;
