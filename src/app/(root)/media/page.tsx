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

  const newsItems = [
    {
      title: "Business Today",
      // date: "June 15, 2023",
      // category: "Partnership",
      excerpt:
        "Avi Mittal: Powering Innovation, Transformating Industries, and Leading India's Green Revolution.",
      image: "/assets/images/tsb.png",
      pdfUrl: "/assets/pdfs/consumption.pdf"
    },
    {
      title: "Interview between Rahul Tarani and Avi Mittal",
      // date: "April 10, 2023",
      // category: "Event",
      excerpt:
        "Golden Ace Ventures LLP will be participating in RE Invest 2024, showcasing its renewable energy solutions and investment opportunities.",
      image: "/assets/images/mid.png",
      pdfUrl: "/assets/pdfs/Interview - Skyytop.pdf"
    },
    {
      title: "Outlook Business",
      // date: "March 5, 2023",
      category: "",
      excerpt:
        "Avi Mittal: Powering Innovation, Transforming Industries, and Leading India's Green Revolution",
      image: "/assets/images/news3.JPEG",
      pdfUrl: "/assets/pdfs/Trusted_Brands___Leaders_compressed-1-2.pdf"
    },
    {
      category: "",
      date: "Mar 10, 2025",
      title: "Fortune India Exchange",
      image: "/assets/images/fortune.png",
      pdfUrl: "/assets/pdfs/fortune.pdf",
    },
  ];

  // Suppress TypeScript errors for specific lines
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePdfOpen = (item: any) => {
    window.open(item.pdfUrl, '_blank');
  };

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
      title: "Game Brochure",
      type: "PDF",
      size: "2.5 MB",
      description:
        "Comprehensive overview of Golden Ace Ventures LLP, our services, and key projects.",
      pdfUrl: "/assets/pdfs/GAME_brochure.pdf"
    },
    {
      title: "ST-Secutech Corporate Profile 2021_compressed",
      type: "PDF",
      size: "5.8 MB",
      description:
        "Detailed presentation on Golden Ace Ventures' vision, mission, and strategic initiatives.",
      pdfUrl: "/assets/pdfs/ST-Secutech Corporate Profile 2021_compressed.pdf"
    },
    {
      title: "ONLINE CLEANING TECHNOLOGIES PVT LTD - PPT",
      type: "PDF",
      size: "3.2 MB",
      description:
        "Official brand guidelines including logo usage, color palette, and typography.",
      pdfUrl: "/assets/pdfs/ONLINE CLEANING TECHNOLOGIES PVT LTD - PPT.pdf"
    },
    {
      title: "VIVID PPT",
      type: "PDF",
      size: "1.1 MB",
      description:
        "Quick reference guide with key facts and figures about Golden Ace Ventures LLP.",
      pdfUrl: "/assets/pdfs/VIVID PPT.pdf Main.pdf"
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <PageTitleSection
        title="MEDIA & PRESS"
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
            {/* Content removed for brevity */}
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
                      <div className="relative h-[300px] overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-contain bg-blue object-center transition-transform duration-500 hover:scale-105"
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
                          {/* <span>{item.date}</span> */}
                        </div>
                        <h3 className="text-xl font-bold mb-2 hover:text-[#FFBF00] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {item.excerpt}
                        </p>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            className="border-[#FFBF00]/30 text-[#FFBF00] hover:bg-[#FFBF00]/10"
                            onClick={() => handlePdfOpen(item)}
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Read Full News
                          </Button>
                        </div>
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
                              {/* <span>{resource.size}</span> */}
                            </div>
                            {/* <p className="text-sm text-muted-foreground mb-3">
                              {resource.description}
                            </p> */}
                            <Button
                              variant="link"
                              className="p-0 h-auto text-sm text-[#FFBF00] hover:text-[#FFBF00]/80"
                              onClick={() => window.open(resource.pdfUrl, '_blank')}
                            >
                              Download <Download className="ml-1 h-3 w-3" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="my-16"
        >
          {/* Media Kit Section removed for brevity */}
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
