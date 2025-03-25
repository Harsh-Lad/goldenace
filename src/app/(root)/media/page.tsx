"use client";

import PageTitleSection from "@/components/common/page-title-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Download,
  ExternalLink,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function MediaPage() {
  const [activeTab, setActiveTab] = useState("news");

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const newsItems = [
    {
      title:
        "Golden Ace Ventures Announces Partnership with Secutech for Smart City Projects",
      date: "June 15, 2023",
      category: "Partnership",
      excerpt:
        "Golden Ace Ventures LLP has announced a strategic partnership with Secutech to develop and implement smart city solutions across India.",
      image: "/assets/images/Secutech.jpg",
    },
    {
      title: "Golden Ace Ventures to Participate in RE Invest 2024",
      date: "April 10, 2023",
      category: "Event",
      excerpt:
        "Golden Ace Ventures LLP will be participating in RE Invest 2024, showcasing its renewable energy solutions and investment opportunities.",
      image: "/assets/images/RE.jpg",
    },
    {
      title: "Aparajeet Mittal Speaks at Infrastructure Development Summit",
      date: "March 5, 2023",
      category: "Speaking",
      excerpt:
        "Managing Partner Aparajeet Mittal delivered a keynote address on the future of infrastructure development at the annual Infrastructure Development Summit.",
      image: "/assets/images/ak.jpg",
    },
  ];

  const upcomingEvents = [
    {
      title: "Renewable Energies Expo 2023",
      date: "August 15-17, 2023",
      location: "Mumbai, India",
      description:
        "Golden Ace Ventures will be exhibiting at Booth #123, showcasing our latest renewable energy solutions and projects.",
    },
    {
      title: "Smart Infrastructure Conference",
      date: "September 22-23, 2023",
      location: "Delhi, India",
      description:
        "Aparajeet Mittal will be speaking on 'The Future of Smart Infrastructure in India' at this premier industry event.",
    },
    {
      title: "Energy Innovation Summit",
      date: "October 10-12, 2023",
      location: "Bangalore, India",
      description:
        "Join us for panel discussions and presentations on the latest innovations in energy technology and sustainability.",
    },
  ];

  const pressReleases = [
    {
      title:
        "Golden Ace Ventures Announces Expansion of Solar Manufacturing Capacity",
      date: "July 1, 2023",
      excerpt:
        "Golden Ace Ventures LLP today announced plans to expand its solar PV manufacturing capacity to 1300 MW, reinforcing its commitment to renewable energy development in India.",
    },
    {
      title:
        "Golden Ace Ventures Partners with Gener8tor for Startup Acceleration Program",
      date: "June 15, 2023",
      excerpt:
        "Golden Ace Ventures LLP has partnered with Gener8tor to launch a startup acceleration program focused on energy and infrastructure innovation.",
    },
    {
      title:
        "Golden Ace Ventures Completes Funding Round for Infrastructure Projects",
      date: "May 20, 2023",
      excerpt:
        "Golden Ace Ventures LLP has successfully completed a funding round to support its portfolio of infrastructure development projects across India.",
    },
  ];

  const mediaResources = [
    {
      title: "Company Brochure",
      type: "PDF",
      size: "2.5 MB",
      description:
        "Comprehensive overview of Golden Ace Ventures LLP, our services, and key projects.",
    },
    {
      title: "Corporate Presentation",
      type: "PPT",
      size: "5.8 MB",
      description:
        "Detailed presentation on Golden Ace Ventures' vision, mission, and strategic initiatives.",
    },
    {
      title: "Brand Guidelines",
      type: "PDF",
      size: "3.2 MB",
      description:
        "Official brand guidelines including logo usage, color palette, and typography.",
    },
    {
      title: "Company Fact Sheet",
      type: "PDF",
      size: "1.1 MB",
      description:
        "Quick reference guide with key facts and figures about Golden Ace Ventures LLP.",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <PageTitleSection
        title="Media & Press"
        description="Latest news, events, and resources from Golden Ace Ventures"
      />

      <NewsTicker />

      <section className="max-w-7xl mx-auto">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="my-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border border-[#FFBF00]/20">
              <Image
                src="/assets/images/Secutech.jpg"
                alt="Latest News"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <Badge className="mb-2 bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black">
                    Partnership
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2">
                    Golden Ace Ventures Announces Partnership with Secutech
                  </h3>
                  <p className="text-white/80 mb-4">
                    Strategic collaboration to develop and implement smart city
                    solutions across India.
                  </p>
                  <Button className="bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black">
                    Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
                Latest News
              </h2>
              <div className="space-y-6">
                {newsItems.slice(0, 3).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 border-b border-[#FFBF00]/20 pb-4"
                  >
                    <div className="relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge
                          variant="outline"
                          className="text-xs border-[#FFBF00]/30 text-[#FFBF00] hover:bg-[#FFBF00]/10"
                        >
                          {item.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="font-medium mb-1 line-clamp-2 hover:text-[#FFBF00] transition-colors">
                        {item.title}
                      </h3>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-sm text-[#FFBF00] hover:text-[#FFBF00]/80"
                      >
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="border-[#FFBF00]/30 text-[#FFBF00] hover:bg-[#FFBF00]/10 hover:text-[#FFBF00]"
                >
                  View All News
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="my-16"
        >
          <Tabs
            defaultValue="news"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <div className="flex justify-between items-center mb-8 flex-col md:flex-row gap-4">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
                Media Center
              </h2>
              <TabsList className="bg-[#FFBF00]/10">
                <TabsTrigger
                  value="news"
                  className="data-[state=active]:bg-[#FFBF00] data-[state=active]:text-black"
                >
                  News
                </TabsTrigger>
                <TabsTrigger
                  value="events"
                  className="data-[state=active]:bg-[#FFBF00] data-[state=active]:text-black"
                >
                  Events
                </TabsTrigger>
                <TabsTrigger
                  value="press"
                  className="data-[state=active]:bg-[#FFBF00] data-[state=active]:text-black"
                >
                  Press Releases
                </TabsTrigger>
                <TabsTrigger
                  value="resources"
                  className="data-[state=active]:bg-[#FFBF00] data-[state=active]:text-black"
                >
                  Resources
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="news">
              <motion.div
                key={`tab-${activeTab}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {newsItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <Card className="overflow-hidden border border-[#FFBF00]/20 hover:border-[#FFBF00]/50 transition-all duration-300 hover:shadow-lg h-full">
                      <div className="relative h-[200px] overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black">
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{item.date}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 hover:text-[#FFBF00] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {item.excerpt}
                        </p>
                        <Button
                          variant="link"
                          className="p-0 text-[#FFBF00] hover:text-[#FFBF00]/80"
                        >
                          Read Full Story{" "}
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            <TabsContent value="events">
              <motion.div
                key={`tab-${activeTab}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {upcomingEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                    >
                      <Card className="overflow-hidden border border-[#FFBF00]/20 hover:border-[#FFBF00]/50 transition-all duration-300 hover:shadow-lg h-full">
                        <CardContent className="p-6">
                          <Badge className="mb-3 bg-[#FFBF00]/20 text-[#FFBF00] hover:bg-[#FFBF00]/30 border-[#FFBF00]/30">
                            Upcoming Event
                          </Badge>
                          <h3 className="text-xl font-bold mb-2 hover:text-[#FFBF00] transition-colors">
                            {event.title}
                          </h3>
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-sm">
                              <Calendar className="h-4 w-4 mr-2 text-[#FFBF00]" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <MapPin className="h-4 w-4 mr-2 text-[#FFBF00]" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            {event.description}
                          </p>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black"
                            >
                              Add to Calendar
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-[#FFBF00]/30 text-[#FFBF00] hover:bg-[#FFBF00]/10"
                            >
                              More Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-8 p-6 bg-[#FFBF00]/5 rounded-lg border border-[#FFBF00]/20"
                >
                  <h3 className="text-xl font-bold mb-4 text-[#FFBF00]">
                    Past Events
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Renewable Energy Conference 2023",
                        date: "February 15-17, 2023",
                        location: "Mumbai, India",
                      },
                      {
                        title: "Infrastructure Development Forum",
                        date: "January 22-23, 2023",
                        location: "Delhi, India",
                      },
                      {
                        title: "Smart Technology Expo",
                        date: "December 10-12, 2022",
                        location: "Bangalore, India",
                      },
                    ].map((event, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="flex justify-between items-center border-b border-[#FFBF00]/20 pb-4"
                      >
                        <div>
                          <h4 className="font-medium hover:text-[#FFBF00] transition-colors">
                            {event.title}
                          </h4>
                          <div className="flex gap-4 text-sm text-muted-foreground">
                            <span>{event.date}</span>
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <Button
                          variant="link"
                          size="sm"
                          className="text-[#FFBF00] hover:text-[#FFBF00]/80"
                        >
                          View Highlights
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
            <TabsContent value="press">
              <motion.div
                key={`tab-${activeTab}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {pressReleases.map((release, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="overflow-hidden border border-[#FFBF00]/20 hover:border-[#FFBF00]/50 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge
                            variant="outline"
                            className="border-[#FFBF00]/30 text-[#FFBF00] hover:bg-[#FFBF00]/10"
                          >
                            Press Release
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{release.date}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 hover:text-[#FFBF00] transition-colors">
                          {release.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {release.excerpt}
                        </p>
                        <div className="flex gap-2">
                          <Button className="bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black">
                            Read Full Release{" "}
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            className="border-[#FFBF00]/30 text-[#FFBF00] hover:bg-[#FFBF00]/10"
                          >
                            Download PDF
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            <TabsContent value="resources">
              <motion.div
                key={`tab-${activeTab}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mediaResources.map((resource, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="overflow-hidden border border-[#FFBF00]/20 hover:border-[#FFBF00]/50 transition-all duration-300 hover:shadow-lg">
                        <CardContent className="p-6 flex gap-4">
                          <div className="h-16 w-16 bg-[#FFBF00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Download className="h-8 w-8 text-[#FFBF00]" />
                          </div>
                          <div>
                            <h3 className="font-bold mb-1 hover:text-[#FFBF00] transition-colors">
                              {resource.title}
                            </h3>
                            <div className="flex gap-2 text-sm text-muted-foreground mb-2">
                              <span>{resource.type}</span>
                              <span>•</span>
                              <span>{resource.size}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                              {resource.description}
                            </p>
                            <Button
                              variant="link"
                              className="p-0 h-auto text-sm text-[#FFBF00] hover:text-[#FFBF00]/80"
                            >
                              Download <Download className="ml-1 h-3 w-3" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-8 p-6 bg-[#FFBF00]/5 rounded-lg border border-[#FFBF00]/20"
                >
                  <h3 className="text-xl font-bold mb-4 text-[#FFBF00]">
                    Media Contact
                  </h3>
                  <p className="mb-4">
                    For media inquiries, please contact our communications team:
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>Email:</strong> media@goldenaceventures.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +91 XXXX XXXX XX
                    </p>
                  </div>
                  <Button className="mt-4 bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black">
                    Contact Media Relations
                  </Button>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="my-16 py-12 bg-gradient-to-r from-[#FFBF00]/10 to-[#FFBF00]/5 rounded-xl border border-[#FFBF00]/20"
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
              Media Kit
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Download our comprehensive media kit containing company
              information, logos, executive bios, and high-resolution images for
              press and publication use.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="group bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black"
              >
                Download Media Kit
                <motion.span
                  initial={{ y: 0 }}
                  whileHover={{ y: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Download className="ml-2 h-4 w-4" />
                </motion.span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#FFBF00]/30 text-[#FFBF00] hover:bg-[#FFBF00]/10"
              >
                View Brand Guidelines
              </Button>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="my-16"
        >
          <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
            In The News
          </h2>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title:
                  "Golden Ace Ventures Leading the Way in Renewable Energy",
                source: "Energy Today",
                date: "June 5, 2023",
                link: "#",
              },
              {
                title:
                  "Smart Infrastructure: An Interview with Aparajeet Mittal",
                source: "Infrastructure Insights",
                date: "May 12, 2023",
                link: "#",
              },
              {
                title: "The Future of Solar Manufacturing in India",
                source: "Renewable Energy World",
                date: "April 22, 2023",
                link: "#",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden border border-[#FFBF00]/20 hover:border-[#FFBF00]/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        variant="secondary"
                        className="bg-[#FFBF00]/10 hover:bg-[#FFBF00]/20 text-[#FFBF00]"
                      >
                        {item.source}
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        {item.date}
                      </div>
                    </div>
                    <h3 className="font-bold mb-4 hover:text-[#FFBF00] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-[#FFBF00]/30 text-[#FFBF00] hover:bg-[#FFBF00]/10"
                    >
                      Read Article <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </section>
    </main>
  );
}

function NewsTicker() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="my-8"
    >
      <div className="bg-[#FFBF00]/5 border-y border-[#FFBF00]/20 py-4 overflow-hidden relative">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 40,
            ease: "linear",
            repeatType: "loop",
          }}
          className="whitespace-nowrap inline-block"
        >
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-block mr-16">
              <span className="font-bold text-[#FFBF00]">LATEST NEWS:</span>{" "}
              Golden Ace Ventures Announces Partnership with Secutech for Smart
              City Projects •<span className="mx-4 text-[#FFBF00]">|</span>{" "}
              MahaGenco Bhusawal Thermal Plant POC Successfully Completed •
              <span className="mx-4 text-[#FFBF00]">|</span> Golden Ace Ventures
              to Participate in RE Invest 2024 •
              <span className="mx-4 text-[#FFBF00]">|</span> Aparajeet Mittal
              Speaks at Infrastructure Development Summit
            </span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default MediaPage;
