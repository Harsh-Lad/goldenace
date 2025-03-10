"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Image from "next/image";

interface FeaturedPostSectionProps {
  post: BlogPost;
}

function FeaturedPostSection({ post }: FeaturedPostSectionProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl group">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-8">
          <Badge className="mb-3 self-start bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black">
            {post.category}
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            {post.title}
          </h2>
          <p className="text-white/80 mb-5 max-w-2xl text-lg">{post.excerpt}</p>
          <div className="flex flex-wrap gap-6 text-white/70 text-sm mb-5">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <Button className="self-start bg-[#FFBF00] text-black hover:bg-[#FFBF00]/80 transition-all duration-300">
            Read Article <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturedPostSection;
