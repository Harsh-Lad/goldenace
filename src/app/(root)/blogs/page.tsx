"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { COMPANY_BLOGS } from "@/lib/constants"
import LatestArticlesSection from "@/components/latest-articles-section"

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  // Extract unique categories
  const categories = Array.from(new Set(COMPANY_BLOGS.map((post) => post.category)))

  // Filter posts based on search term and category
  const filteredPosts = COMPANY_BLOGS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = category === "all" || post.category.toLowerCase() === category
    return matchesSearch && matchesCategory
  })

  // Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, category])

  return (
    <main className="container mx-auto px-4">
      <div className="py-12 md:py-16">
        <h1 className="text-4xl mt-24 md:text-5xl font-bold text-center mb-8 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
          Our Blog
        </h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Stay updated with the latest insights, trends, and news from our team of experts in renewable energy,
          infrastructure, and technology.
        </p>

        <div className="max-w-md mx-auto mb-16">
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-[#FFBF00]/20 focus:border-[#FFBF00] focus:ring-[#FFBF00]/20"
          />
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
      </div>
    </main>
  )
}

