"use client";

import { Badge } from "@/components/ui/badge";
import { COMPANY_TIMELINE } from "@/lib/constants";
import { motion } from "framer-motion";

export default function CompanyTimeline() {
  // Animation variants
  const lineVariant = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: 0 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2 + i * 0.1,
      },
    }),
  };

  const dotVariant = {
    hidden: { scale: 0 },
    visible: (i: number) => ({
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.3 + i * 0.1,
      },
    }),
  };

  return (
    <div className="relative">
      {/* Vertical line */}
      <motion.div
        className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-1 bg-[#FFBF00]/30 origin-top"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={lineVariant}
      ></motion.div>

      <div className="space-y-16">
        {COMPANY_TIMELINE.map((event, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 md:w-1/2"></div>

            {/* Circle marker - Fixed positioning to ensure it's centered on the line */}
            <motion.div
              className="absolute left-[22px] md:left-1/2 top-0 transform -translate-x-1/2 w-11 h-11 rounded-full bg-[#FFBF00]/20 flex items-center justify-center z-10"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={dotVariant}
            >
              <div className="w-5 h-5 rounded-full bg-[#FFBF00]"></div>
            </motion.div>

            <motion.div
              className="flex-1 pl-16 md:pl-0 md:px-8"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={itemVariant}
            >
              <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#FFBF00]/20 hover:border-[#FFBF00]/40">
                <Badge className="mb-3 bg-[#FFBF00]/10 text-[#FFBF00] hover:bg-[#FFBF00]/20 border-[#FFBF00]/30">
                  {event.category}
                </Badge>
                <div className="text-[#FFBF00] font-bold text-2xl mb-2">
                  {event.year}
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
