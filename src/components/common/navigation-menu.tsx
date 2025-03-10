"use client";

import { MENU_ITEMS } from "@/lib/constants";
import { globalAtom } from "@/store/global-atom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const NavigationMenuFooter = () => {
  const [globalState, setGlobalState] = useRecoilState(globalAtom);
  const { open } = globalState.navigationSheet;
  const pathname = usePathname();

  const toggleMenu = () => {
    setGlobalState({
      ...globalState,
      navigationSheet: {
        open: !open,
      },
    });
  };

  // Close menu when route changes
  useEffect(() => {
    setGlobalState({
      ...globalState,
      navigationSheet: {
        open: false,
      },
    });
  }, [pathname, setGlobalState]);

  return (
    <nav className="fixed top-0 right-0 z-50 h-full">
      Hi
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="absolute top-8 right-8 z-50 flex flex-col items-end gap-2 p-2"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <motion.span
          className="block h-0.5 bg-white w-8"
          animate={{ width: open ? 8 : 32 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block h-0.5 bg-white w-16"
          animate={{
            width: 16,
            x: open ? -8 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </button>
      {/* Navigation Panel with Two-Phased Animation */}
      <AnimatePresence>
        {open && (
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
            className="fixed top-0 right-0 h-full pointer-events-none"
          >
            {/* Background expansion - first vertical then horizontal */}
            <motion.div
              className="absolute top-8 right-8 bg-[#FFBF00] origin-top-right pointer-events-auto"
              variants={{
                closed: {
                  height: 0,
                  width: 0,
                  opacity: 0,
                },
                open: {
                  height: "100vh",
                  width: "100vw",
                  opacity: 1,
                  transition: {
                    height: { duration: 0.3, ease: "easeOut" },
                    width: { duration: 0.4, ease: "easeOut", delay: 0.2 },
                    opacity: { duration: 0.3 },
                  },
                },
              }}
            />

            {/* Content container - only appears after background expansion */}
            <motion.div
              className="fixed top-0 right-0 h-full w-full md:w-[400px] flex flex-col justify-between py-24 px-10 pointer-events-auto"
              variants={{
                closed: {
                  opacity: 0,
                  transition: { duration: 0.2 },
                },
                open: {
                  opacity: 1,
                  transition: { duration: 0.3, delay: 0.5 },
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
                          delay: 0.6 + index * 0.05,
                          duration: 0.3,
                        },
                      },
                    }}
                  >
                    <Link
                      href={item.href}
                      className="text-2xl font-bold text-white hover:text-black transition-colors flex items-center group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 mr-2 text-sm transition-opacity">
                        {item.number}
                      </span>
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Contact Button */}
              <motion.div
                className="mt-auto"
                variants={{
                  closed: {
                    y: 20,
                    opacity: 0,
                  },
                  open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.8,
                      duration: 0.4,
                    },
                  },
                }}
              >
                <Link href="/contact">
                  <motion.div
                    className="group relative flex items-center justify-between px-6 py-3 rounded-full border-2 border-black overflow-hidden"
                    whileHover="hover"
                  >
                    <motion.span className="font-bold text-black z-10">
                      CONTACT
                    </motion.span>

                    <motion.div
                      className="absolute inset-0 bg-black"
                      initial={{ scale: 0, opacity: 0 }}
                      variants={{
                        hover: {
                          scale: 1,
                          opacity: 1,
                          transition: { duration: 0.3 },
                        },
                      }}
                    />

                    <motion.div
                      className="relative z-10"
                      initial={{ opacity: 0, x: 10 }}
                      variants={{
                        hover: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.2 },
                        },
                      }}
                    >
                      <ArrowRight className="text-white ml-2" size={20} />
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavigationMenuFooter;
