"use client";

// Import required components and types
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
// import { Search, Tag } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

// Interface defining the props for the BlogQuerySidebar component
interface BlogSidebarProps {
  searchTerm: string;                                    
  setSearchTerm: Dispatch<SetStateAction<string>>;      
  category: string;                                      
  setCategory: Dispatch<SetStateAction<string>>;        
  categories: string[];                                 
  setCurrentPage: Dispatch<SetStateAction<number>>;     
}

function BlogQuerySidebar({
  // searchTerm,
  // setSearchTerm,
  // setCurrentPage,
}: BlogSidebarProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // const popularTags = [
  //   "Renewable Energy",
  //   "Solar",
  //   "Smart Cities",
  //   "IoT",
  //   "AI",
  //   "Infrastructure",
  //   "Sustainability",
  //   "Investment",
  //   "Technology",
  //   "Innovation",
  // ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="space-y-6"
    >
      {/* Commented out Search Articles Card
      <Card className="overflow-hidden border border-[#FFBF00]/20 shadow-sm">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4 text-[#FFBF00]">
            Search Articles
          </h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by keyword..."
              className="pl-10 border-[#FFBF00]/20 focus-visible:ring-[#FFBF00]/30"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </CardContent>
      </Card>
      */}

      {/* Commented out Popular Tags Card
      <Card className="overflow-hidden border border-[#FFBF00]/20 shadow-sm">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4 text-[#FFBF00]">
            Popular Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-pointer border-[#FFBF00]/30 hover:bg-[#FFBF00]/10 hover:border-[#FFBF00]/50 transition-colors"
                onClick={() => setSearchTerm(tag)}
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
      */}
    </motion.div>
  );
}

export default BlogQuerySidebar;
