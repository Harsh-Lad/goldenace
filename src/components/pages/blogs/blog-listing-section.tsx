"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BlogPost } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";

interface LatestArticlesSectionProps {
  currentPosts: BlogPost[];
  filteredPosts: BlogPost[];
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  categories: string[];
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
  postsPerPage: number;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

export default function LatestArticlesSection({
  currentPosts,
  filteredPosts,
  category,
  setCategory,
  categories,
  currentPage,
  setCurrentPage,
  totalPages,
  postsPerPage,
  setSearchTerm,
}: LatestArticlesSectionProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="my-20"
    >
      <motion.div
        variants={fadeInUp}
        className="flex flex-col md:flex-row justify-between items-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 md:mb-0 bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
          Latest Articles
        </h2>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            {filteredPosts.length} articles found
          </span>
          <Select
            value={category}
            onValueChange={(value) => {
              setCategory(value);
              setCurrentPage(1);
            }}
          >
            <SelectTrigger className="w-[180px] border-[#FFBF00]/20">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat.toLowerCase()}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {currentPosts.length > 0 ? (
          <motion.div
            key="posts"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentPosts.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-16 bg-[#FFBF00]/5 rounded-2xl border border-[#FFBF00]/20"
          >
            <p className="text-lg text-muted-foreground mb-4">
              No articles found matching your search criteria.
            </p>
            <Button
              variant="outline"
              className="border-[#FFBF00]/30 hover:bg-[#FFBF00]/10"
              onClick={() => {
                setSearchTerm("");
                setCategory("all");
                setCurrentPage(1);
              }}
            >
              Clear filters
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pagination */}
      {filteredPosts.length > postsPerPage && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      )}
    </motion.section>
  );
}

interface BlogCardProps {
  post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
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
      variants={fadeInUp}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full overflow-hidden border border-[#FFBF00]/20 hover:border-[#FFBF00]/50 transition-colors shadow-sm hover:shadow-md">
        <div className="relative h-[220px] overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 right-3">
            <Badge className="bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black">
              {post.category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-[#FFBF00] transition-colors">
            <Link href="#">{post.title}</Link>
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center text-sm text-muted-foreground">
            <User className="h-3 w-3 mr-1" />
            <span>{post.author}</span>
          </div>
        </CardContent>
        <CardFooter className="bg-[#FFBF00]/5 p-4 border-t border-[#FFBF00]/10">
          <Button
            variant="link"
            className="p-0 ml-auto text-[#FFBF00] hover:text-[#FFBF00]/80"
          >
            Read More <ArrowUpRight className="ml-1 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

interface PaginationProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}

function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) {
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
      variants={fadeInUp}
      className="flex justify-center items-center gap-2 mt-12"
    >
      <Button
        variant="outline"
        size="icon"
        className="border-[#FFBF00]/20 hover:bg-[#FFBF00]/10"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        &lt;
      </Button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? "default" : "outline"}
          size="icon"
          className={
            currentPage === page
              ? "bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black"
              : "border-[#FFBF00]/20 hover:bg-[#FFBF00]/10"
          }
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </Button>
      ))}

      <Button
        variant="outline"
        size="icon"
        className="border-[#FFBF00]/20 hover:bg-[#FFBF00]/10"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        &gt;
      </Button>
    </motion.div>
  );
}
