"use client";  // Add this at the top to mark as Client Component

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";

function NewsAndEvents() {
  // Function to handle PDF opening in new tab
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePdfOpen = (article: any) => {
    window.open(article.pdfUrl, '_blank');
  };

  const articles = [
    {
      category: "Articles",
      date: "Sep 27, 2025",
      title: "Game Changers",
      image: "/assets/images/tsb.png",
      pdfUrl: "/assets/pdfs/DOC-20250211-WA0008..pdf",
    },
    {
      category: "Press releases",
      date: "Sep 24, 2025",
      title: "Interview between Rahul Tarani and Avi Mittal",
      image: "/assets/images/inter.png",
      pdfUrl: "/assets/pdfs/Interview - Skyytop.pdf",
    },
    {
      title: "Outlook Business",
      // date: "March 5, 2023",
      category: "Speaking",
      excerpt:
        "Avi Mittal: Powering Innovation, Transforming Industries, and Leading India’s Green Revolution",
      image: "/assets/images/son.jpg",
      pdfUrl: "/assets/pdfs/Trusted_Brands___Leaders_compressed-1-2.pdf"
    }
    // {
    //   category: "Investments",
    //   date: "Sep 21, 2025",
    //   title: "Congratulations on new Webflow's Series D investment round",
    //   image: "/assets/images/webflow.jpg",
    //   pdfUrl: "/assets/pdfs/webflow-investment.pdf",
    // },
  ];

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">News & Events</h2>
          <p className="text-gray-400 text-lg">
            Discover the latest new and events.
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => handlePdfOpen(article)}
            >
              <article className="h-full bg-gray-900/50 rounded-2xl p-4 border border-white/10">
                <div className="relative aspect-[4/3] mb-4">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="rounded-xl object-contain bg-white"
                  />
                </div>
                <div className="flex items-center gap-4 text-sm mb-3">
                  <span className="text-white/60">{article.category}</span>
                  <span className="text-white/60">—</span>
                  <span className="text-white/60">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">
                  {article.title}
                </h3>
              </article>
            </div>
          ))}
        </div>

        {/* Updated Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <Link 
            href="/media" 
            className="group relative h-12 overflow-hidden rounded-full bg-yellow-400 font-bold px-8 py-2 transition-all hover:bg-yellow-500 inline-flex items-center"
          >
            <span className="relative flex items-center">
              View All
              <span className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <ArrowRight className="h-4 w-4 text-yellow-400 -rotate-45" />
              </span>
            </span>
          </Link>

          <Link href="/contact" className="group relative h-12 flex items-center justify-center overflow-hidden rounded-full border-2 border-yellow-400 px-8 py-2 transition-all hover:bg-yellow-400 hover:text-white font-bold">
            <span className="relative flex items-center">
              Contact us
              <span className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 group-hover:bg-white transition-colors duration-500">
                <ArrowRight className="h-4 w-4 text-black -rotate-45" />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NewsAndEvents;
