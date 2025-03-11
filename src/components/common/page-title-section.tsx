"use client";

import { motion } from "framer-motion";

function PageTitleSection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="text-center max-w-3xl mx-auto py-16 md:py-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="text-xl font-bold text-muted-foreground max-w-2xl mx-auto"
      >
        {description}
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="w-24 h-1 bg-[#FFBF00] mx-auto mt-8"
      />
    </header>
  );
}

export default PageTitleSection;
