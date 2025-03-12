"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  return (
    <footer
      className={cn(
        "relative py-16 px-4 md:px-8 overflow-hidden",
        pathname === "/" &&
          "backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)] border-t rounded-t-xl border-[rgba(255,255,255,0.3)"
      )}
    >
      {/* Rest of the footer content remains the same... */}
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-xl md:text-2xl font-medium mb-6">
            Enter Our <span className="text-[#FFBF00]">World Of Power</span>{" "}
            that Doesn&apos;t Cost the Earth
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent border-white/20 placeholder:text-gray-400"
            />
            <Button className="bg-[#FFBF00] text-black hover:bg-white/90 transition-colors">
              Submit
            </Button>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-start max-w-6xl mx-auto w-full px-4 md:px-8 gap-6 mb-12">
          {SOCIAL_LINKS.map(({ icon: Icon, href }) => (
            <Link key={href} href={href}>
              <Icon className="hover:scale-125 hover:text-[#FFC000] transition-all" />
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 mb-12 max-w-6xl mx-auto"></div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-medium mb-4 text-[#FFBF00]">
              Visit Us
            </h3>
            <address className="not-italic text-sm text-gray-300 leading-relaxed">
              B - 42, Idea Square, 5th Floor,
              <br />
              Veera Ind Estate, Off New Link Rd,
              <br />
              Andheri West, W, Maharashtra 400053
            </address>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-medium mb-4 text-[#FFBF00]">Call Us</h3>
            <div className="text-sm text-gray-300 space-y-1">
              <p>Games (+91) 9619287810</p>
              <p>Ivas (+91) 8655321536</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-medium mb-4 text-[#FFBF00]">
              Email Us
            </h3>
            <div className="text-sm text-gray-300 space-y-1">
              <p>info@games.in</p>
              <p>xperia@games.in</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
