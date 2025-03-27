"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<{
    type: "success" | "error" | "already-subscribed" | null;
    message: string | null;
  }>({ type: null, message: null });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setSubscriptionStatus({
        type: "error",
        message: "Please enter a valid email address."
      });
      return;
    }

    setIsSubmitting(true);
    setSubscriptionStatus({ type: null, message: null });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setSubscriptionStatus({
          type: "success",
          message: "Thank you for subscribing to our newsletter!"
        });
        setEmail(""); // Clear input on success
      } else if (data.message && data.message.includes("already subscribed")) {
        // Specific handling for already subscribed emails
        setSubscriptionStatus({
          type: "already-subscribed",
          message: "This email is already subscribed to our newsletter."
        });
      } 
      else {
        setSubscriptionStatus({
          type: "error",
          message: data.message || "Failed to subscribe. Please try again."
        });
      }
    } catch (err) {
      // Log the error to console
      console.error("Newsletter subscription error:", err);
      
      setSubscriptionStatus({
        type: "error",
        message: "An error occurred. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      className={cn(
        "relative py-16 px-4 md:px-8 overflow-hidden",
        pathname === "/" &&
          "backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)] border-t rounded-t-xl border-[rgba(255,255,255,0.3)"
      )}
    >
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-xl md:text-2xl font-medium mb-6">
            Enter Our <span className="text-[#FFBF00]">World Of Power</span>{" "}
            that Doesn&apos;t Cost the Earth
          </h2>
          <form onSubmit={handleSubscribe} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent border-white/20 placeholder:text-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <Button 
                type="submit"
                className="bg-[#FFBF00] text-black hover:bg-white/90 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
            
            {subscriptionStatus.type && (
              <div className={cn(
                "text-sm p-2 rounded mt-2",
                subscriptionStatus.type === "success" 
                  ? "text-green-400 bg-green-900/30" 
                  : subscriptionStatus.type === "already-subscribed"
                    ? "text-yellow-400 bg-yellow-900/30"
                    : "text-red-400 bg-red-900/30"
              )}>
                {subscriptionStatus.message}
              </div>
            )}
          </form>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-start max-w-6xl mx-auto w-full px-4 md:px-8 gap-6 mb-12">
          {SOCIAL_LINKS.map(({ icon: Icon, href }) => (
            <Link key={href} href={href} target="_blank">
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
            Office Address: 609, The Epicentre,  
              <br />
              Off Eastern Freeway,
              <br />
              BEST Colony, Near Shivaji
              <br />
            Chowk, Chembur East, Mumbai – 400088
            </address>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-medium mb-4 text-[#FFBF00]">Call Us</h3>
            <div className="text-sm text-gray-300 space-y-1">
              <p>(+91) 9920038256</p>
              {/* <p>Ivas (+91) 8655321536</p> */}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-medium mb-4 text-[#FFBF00]">
              Email Us
            </h3>
            <div className="text-sm text-gray-300 space-y-1">
              <p>info@goldenaceventures.com</p>
              {/* <p>xperia@games.in</p> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;