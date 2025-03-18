import AboutSection from "@/components/pages/home/about-section";
import Blogs from "@/components/pages/home/blog-section";
// import HomePageHeroSection from "@/components/pages/home/hero-section";
import NewsAndEvents from "@/components/pages/home/news-section";
import Projects from "@/components/pages/home/project-section";
import { ShowReel } from "@/components/pages/home/show-reel";
import type { NextPage } from "next";
import ScrollAnimation from "../components/scroll-animation";
import ScrollSections from "@/components/common/scroll-section";
import { LeadGenerationForm } from "@/components/pages/home/lead-generation-form";
import { Button } from "@/components/ui/button";

const Home: NextPage = () => {
  return (
    <section>
      <ScrollAnimation />
      <div className="fixed bottom-8 right-8 z-50">
        <Button className="text-white p-6 rounded-4xl bg-amber-400 hover:bg-amber-300 cursor-pointer font-bold font-xl" >
          Contact Us
        </Button>
      </div>
      {/* <HomePageHeroSection /> */}
      <section className="backdrop-blur-[10px] bg-[rgba(255,255,255,0)]">
        <ShowReel />
        <AboutSection />
        <ScrollSections/>
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