"use client";

import PageTitleSection from "@/components/common/page-title-section";
import LatestArticlesSection from "@/components/pages/blogs/blog-listing-section";
import FeaturedPostSection from "@/components/pages/blogs/feature-section";
import BlogQuerySidebar from "@/components/pages/blogs/query-sidebar";
import { COMPANY_BLOGS } from "@/lib/constants";
import { useState } from "react";

function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = ["Energy", "Infrastructure", "Technology", "Business"];
  const featuredPost = COMPANY_BLOGS[0];

  const filteredPosts = COMPANY_BLOGS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      category === "all" ||
      post.category.toLowerCase() === category.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <main className="container mx-auto px-4 py-12">
      <PageTitleSection
        title="Blog & Industry Insights"
        description="Stay updated with the latest trends, insights, and developments in energy, infrastructure, and technology"
      />

      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start my-16">
          <div className="md:col-span-2">
            <FeaturedPostSection post={featuredPost} />
          </div>
          <div>
            <BlogQuerySidebar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              category={category}
              setCategory={setCategory}
              categories={categories}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
        <LatestArticlesSection
          currentPosts={currentPosts}
          filteredPosts={filteredPosts}
          category={category}
          setCategory={setCategory}
          categories={categories}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          postsPerPage={postsPerPage}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </section>
    </main>
  );
}

export default BlogPage;
