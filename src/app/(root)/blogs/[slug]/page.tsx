import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { COMPANY_BLOGS } from "@/lib/constants"
import { notFound } from "next/navigation"

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  // Find the blog post by slug (converted from title)
  const blog = COMPANY_BLOGS.find((blog) => createSlug(blog.title) === params.slug)

  // If blog not found, return 404
  if (!blog) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/blogs">
          <Button variant="ghost" className="mb-8 text-[#FFBF00] hover:text-[#FFBF00]/80 hover:bg-[#FFBF00]/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all blogs
          </Button>
        </Link>

        <div className="space-y-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{blog.readTime}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{blog.author}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
            {blog.title}
          </h1>

          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden my-8">
            <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" priority />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">{blog.excerpt}</p>

            {/* Sample content - in a real app, this would come from your CMS or database */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>

            <h2>Key Insights</h2>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>

            <ul>
              <li>Important point about {blog.category} industry</li>
              <li>Critical developments in the field</li>
              <li>Future outlook and predictions</li>
              <li>Practical applications and case studies</li>
            </ul>

            <h2>Industry Impact</h2>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>

            <blockquote>
              The {blog.category} sector is experiencing unprecedented growth and innovation, creating new opportunities
              for businesses and consumers alike.
            </blockquote>

            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

// Helper function to create URL-friendly slugs from titles
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
}

