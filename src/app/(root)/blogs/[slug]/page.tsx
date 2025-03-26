import { Button } from "@/components/ui/button";
import { COMPANY_BLOGS } from "@/lib/constants";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Find the blog post by slug (converted from title)
  const blog = COMPANY_BLOGS.find((blog) => createSlug(blog.title) === slug);

  // If blog not found, return 404
  if (!blog) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/blogs">
          <Button
            variant="ghost"
            className="mb-8 text-[#FFBF00] hover:text-[#FFBF00]/80 hover:bg-[#FFBF00]/10"
          >
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
            <Image
              src={blog.image || "/placeholder.svg"}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </main>
  );
}

// Helper function to create URL-friendly slugs from titles
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}
