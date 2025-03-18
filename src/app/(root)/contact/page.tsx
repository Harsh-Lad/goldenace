"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-neutral-900 to-black flex items-center justify-center px-6 py-12">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 backdrop-blur-md"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 max-w-4xl w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.3)] rounded-lg p-8 md:p-12 shadow-lg backdrop-blur-lg"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          Contact Us
        </h1>
        <p className="text-white/80 text-center mb-8">
          Have questions or want to get in touch? Fill out the form below, and
          we’ll get back to you as soon as possible.
        </p>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded-lg bg-black/50 text-white placeholder-white/50 border border-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-lg bg-black/50 text-white placeholder-white/50 border border-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-black/50 text-white placeholder-white/50 border border-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium shadow-md hover:shadow-lg transition-all"
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}