import AboutSection from "@/components/pages/home/about-section";
import Blogs from "@/components/pages/home/blog-section";
// import HomePageHeroSection from "@/components/pages/home/hero-section";
import NewsAndEvents from "@/components/pages/home/news-section";
import Projects from "@/components/pages/home/project-section";
import { ShowReel } from "@/components/pages/home/show-reel";
import type { NextPage } from "next";
import ScrollAnimation from "../components/scroll-animation";
import ScrollSections from "@/components/common/scroll-section";


const Home: NextPage = () => {
  return (
    <section>
      <ScrollAnimation />
      {/* <HomePageHeroSection /> */}
      <section className="backdrop-blur-[10px] bg-[rgba(255,255,255,0)]">
        <ShowReel />
        <AboutSection />
        <ScrollSections/>
        <Projects />
        <Blogs />
        <NewsAndEvents />
      </section>
    </section>
  );
};

export default Home;
