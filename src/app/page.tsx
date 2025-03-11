
import Blogs from "@/components/pages/home/blog-section";
import HomePageHeroSection from "@/components/pages/home/hero-section";
import NewsAndEvents from "@/components/pages/home/news-section";
import Projects from "@/components/pages/home/project-section";
import Services from "@/components/pages/home/service-section";
import { ShowReel } from "@/components/pages/home/show-reel";
import type { NextPage } from "next";
import ScrollAnimation from "../components/scroll-animation";
// import RadialCarousel from "@/components/pages/home/radial-carousel";

const Home: NextPage = () => {
  return (
    <section>
      {/* Background */}
      <ScrollAnimation />
      {/* Main Content */}
      <HomePageHeroSection />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 z-0"></div>
      <section className="relative backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)] rounded-[10px] border border-[rgba(255,255,255,0.3)] z-10"> */}
      <ShowReel />
      {/* <div className="z-50">
        <RadialCarousel />
      </div> */}
      {/* Services Section */}
      <Services />

      {/* Project Cards Section */}
      <Projects />

      {/* Blog Carousel */}
      <Blogs />

      {/* News and Events Section */}
      <NewsAndEvents />
      {/* </section> */}
    </section>
  );
};

export default Home;
