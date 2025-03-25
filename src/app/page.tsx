import AboutSection from "@/components/pages/home/about-section";
import Blogs from "@/components/pages/home/blog-section";
// import HomePageHeroSection from "@/components/pages/home/hero-section";
import NewsAndEvents from "@/components/pages/home/news-section";
import Projects from "@/components/pages/home/project-section";
import { ShowReel } from "@/components/pages/home/show-reel";
import type { NextPage } from "next";
import ScrollAnimation from "../components/scroll-animation";
import { LeadGenerationForm } from "@/components/pages/home/lead-generation-form";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <section>
      <ScrollAnimation />
      <div className="fixed bottom-8 right-8 z-50">
      <Link href="/contact" className="text-white p-2 px-3 rounded-4xl bg-amber-400 hover:bg-amber-300 cursor-pointer font-bold font-xl">
                Contact Us
            </Link>
      </div>
      {/* <HomePageHeroSection /> */}
      <section className="backdrop-blur-[10px] bg-[rgba(255,255,255,0)]">
        <ShowReel />
        <AboutSection />
        {/* <ScrollSections/> */}
        <Projects />
        <Blogs />
        <NewsAndEvents />
        <div className="fixed bottom-5 right-5 z-50">
          <LeadGenerationForm />
        </div>
      </section>
    </section>
  );
};

export default Home;