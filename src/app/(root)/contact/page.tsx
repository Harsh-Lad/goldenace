"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 1000);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Your message has been saved to Google Sheets (Sheet2)!");
        form.reset();
        setOpen(false);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("There was a problem submitting your information. Please try again.");
    }
  }

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
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
              Your Name
            </label>
            <input
              {...form.register("name")}
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-lg bg-black/50 text-white placeholder-white/50 border border-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none"
              placeholder="Enter your name"
            />
            <p className="text-red-500 text-sm">{form.formState.errors.name?.message}</p>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
              Your Email
            </label>
            <input
              {...form.register("email")}
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg bg-black/50 text-white placeholder-white/50 border border-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none"
              placeholder="Enter your email"
            />
            <p className="text-red-500 text-sm">{form.formState.errors.email?.message}</p>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
              Your Message
            </label>
            <textarea
              {...form.register("message")}
              id="message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-black/50 text-white placeholder-white/50 border border-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none"
              placeholder="Write your message here"
            />
            <p className="text-red-500 text-sm">{form.formState.errors.message?.message}</p>
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
