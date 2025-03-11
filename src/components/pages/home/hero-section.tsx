import { SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";

const HomePageHeroSection = () => {
  return (
    <section className="relative h-[84svh] overflow-hidden">
      {/* Hero Text - Top Left */}
      <div className="absolute top-10 left-10 lg:left-36 z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          <span className="text-[#FFC000]">Innovative</span> Solutions
        </h1>
        <p className="text-xl md:text-2xl max-w-md">
          Transforming ideas into digital reality
        </p>
      </div>

      {/* Hero Text - Bottom Right */}
      <div className="absolute bottom-36 right-10 lg:right-36 z-10 text-right text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-2">
          Creative <span className="text-[#FFC000]">Excellence</span>
        </h2>
        <p className="text-lg md:text-xl max-w-md ml-auto">
          Pushing boundaries with cutting-edge technology
        </p>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-2 md:gap-4 absolute bottom-10 left-10 z-10 text-white">
        {SOCIAL_LINKS.map(({ icon: Icon, href }) => (
          <Link key={href} href={href}>
            <Icon className="hover:scale-125 hover:text-[#FFC000] transition-all" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomePageHeroSection;
