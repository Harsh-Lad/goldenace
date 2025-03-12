import AboutSection from "@/components/pages/home/about-section";
import Blogs from "@/components/pages/home/blog-section";
import HomePageHeroSection from "@/components/pages/home/hero-section";
import NewsAndEvents from "@/components/pages/home/news-section";
import Projects from "@/components/pages/home/project-section";
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
      <ShowReel />
      <AboutSection />

      {/* Services */}
      {/* <Services /> */}

      {/* Project Cards Section */}
      <Projects />

      {/* Blog Carousel */}
      <Blogs />

      {/* News and Events Section */}
      <NewsAndEvents />
    </section>
  );
};

export default Home;
