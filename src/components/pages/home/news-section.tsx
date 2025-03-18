import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function NewsAndEvents() {

  const articles = [
    {
      category: "Articles",
      date: "Sep 27, 2025",
      title: "We are leading Series A investment round for BRIX Templates",
      image: "https://mms.businesswire.com/media/20201110005579/en/837048/5/Blog_announcement_Series_A.jpg",
      link: "#",
    },
    {
      category: "Press releases",
      date: "Sep 24, 2025",
      title: "Early Stage Fund details for 2025 are now available",
      image: "https://assets.techcircle.in/uploads/article-image/2019/04/images/18217-17025-funding.jpg",
      link: "#",
    },
    {
      category: "Investments",
      date: "Sep 21, 2025",
      title: "Congratulations on new Webflow's Series D investment round",
      image: "https://cdn.prod.website-files.com/63bc89e88fed43ecd62ec947/659b647ed30ee3a3670673c6_Webflow%20Guide%20Hero.webp",
      link: "#",
    },
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

        {/* Featured Article */}
        {/* <Link href={featuredArticle.link} className="block mb-12 group">
          <article className="grid md:grid-cols-2 gap-6 bg-gray-900/50 rounded-2xl p-4 md:p-6">
            <div className="relative aspect-[16/9] md:aspect-auto">
              <Image
                src={featuredArticle.image || "/placeholder.svg"}
                alt={featuredArticle.title}
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm mb-4">
                <span className="text-white/60">
                  {featuredArticle.category}
                </span>
                <span className="text-white/60">—</span>
                <span className="text-white/60">{featuredArticle.date}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
                {featuredArticle.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {featuredArticle.description}
              </p>
              <div className="flex items-center text-yellow-400 font-medium">
                Read article
                <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </article>
        </Link> */}

        {/* Article Grid - Updated with white border */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((article, index) => (
            <Link key={index} href={article.link} className="group">
              <article className="h-full bg-gray-900/50 rounded-2xl p-4 border border-white/10">
                <div className="relative aspect-[4/3] mb-4">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="rounded-xl object-cover"
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
            </Link>
          ))}
        </div>

        {/* Updated Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <button className="group relative h-12 overflow-hidden rounded-full bg-yellow-400 px-8 py-2 transition-all hover:bg-yellow-500">
            <span className="relative flex items-center">
              View All
              <span className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <ArrowRight className="h-4 w-4 text-yellow-400 -rotate-45" />
              </span>
            </span>
          </button>

          <button className="group relative h-12 flex items-center justify-center overflow-hidden rounded-full border-2 border-yellow-400 px-8 py-2 transition-all hover:bg-yellow-400 hover:text-black">
            <span className="relative flex items-center">
              Contact us
              <span className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 group-hover:bg-white transition-colors duration-500">
                <ArrowRight className="h-4 w-4 text-black -rotate-45" />
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsAndEvents;
