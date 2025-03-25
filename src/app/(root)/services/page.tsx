"use client";

import PageTitleSection from "@/components/common/page-title-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const SERVICES_DATA = [
  {
    id: "energy",
    title: "Renewable, Green & Thermal Energy",
    description:
      "Comprehensive solutions across the renewable and thermal energy spectrum.",
    image: "/assets/images/future.png", // Local image
    items: [
      {
        title: "Solar Energy Solutions",
        description:
          " Solar EPC Project Support Financing with REC & IREDA-approved funding. • End-to-end EPC projects from feasibility through to implementation. • Solar PV module manufacturing & supplies with an emphasis on high-efficiency and sustainable growth. ",
      },
      {
        title: "Thermal Energy Solutions",
        description:
          " Innovative thermal energy solutions and online cleaning technology to boost operational efficiency and reduce emissions.",
      },
      {
        title: "Battery Energy Storage Systems (BESS)",
        description:
          "Advanced BESS solutions for energy storage, grid stability, and integration of renewable sources.",
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure Development",
    description:
      "Building the foundations for sustainable growth and development.",
    image: "/assets/images/infrastr.jpg", // Local image
    items: [
      {
        title: "Roads & Highways",
        description:
          "Comprehensive consultancy and project management for roads & highways development. ",
      },
      {
        title: "Urban & Industrial Development",
        description:
          "Execution of smart city projects and large-scale urban development initiatives that catalyze industrial development and manufacturing growth. ",
      },
      {
        title: "Electrical & Industrial Solutions",
        description:
          "Design and manufacture of LT & HT electrical panels tailored for industrial and commercial applications. ",
      },
    ],
  },
  {
    id: "tech",
    title: "Smart Tech & Innovation",
    description:
      "Leveraging cutting-edge technology to drive efficiency and innovation.",
    image: "/assets/images/iot-and-ai.jpg", // Local image
    items: [
      {
        title: "IoT & AI Integration",
        description:
          "Implement industrial automation and advanced monitoring systems to enhance productivity and operational intelligence. ",
      },
      {
        title: "Smart Technology Solutions",
        description:
          "Drive digital transformation with integrated smart technology for optimized performance. ",
      },
    ],
  },
  {
    id: "advisory",
    title: "Business Consultancy & Advisory",
    description:
      "Strategic guidance to help businesses thrive in a competitive landscape.",
    image: "/assets/images/pp.jpeg", // Local image
    items: [
      {
        title: "Market Strategy & Growth Consulting",
        description:
          "Customized solutions to accelerate business growth and expand market presence. ",
      },
      {
        title: "Investment & Financial Structuring",
        description:
          "Expert guidance in strategic capital formation, M&A, and funding strategies. ",
      },
      {
        title: "Sales & Marketing Advisory",
        description:
          "High-impact strategies to maximize market outreach and brand positioning.",
      },
    ],
  },
  {
    id: "investments",
    title: "Start-up Incubation & Investments",
    description:
      "Nurturing innovation and supporting the next generation of industry leaders.",
    image: "/assets/images/startups.jpg", // Local image
    items: [
      {
        title: "Incubation & Mentorship",
        description:
          "Nurturing high-potential start-ups with tailored incubation, acceleration, and investment partnerships. ",
      },
      {
        title: "Gener8tor India Category 2 AIF Fund",
        description:
          "Strategic investment and capital support for promising ventures in renewable energy, infrastructure, and technology. ",
      },
    ],
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("energy");

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <PageTitleSection
        title="Our Services"
        description="Comprehensive solutions across energy, infrastructure, technology, and business advisory"
      />
      <section className="max-w-7xl mx-auto">
        <Tabs
          defaultValue="energy"
          className="my-12"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-[#FFBF00]/10">
            {SERVICES_DATA.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="text-sm md:text-base data-[state=active]:bg-[#FFBF00] data-[state=active]:text-black"
              >
                {service.title.split("&")[0].trim()}
              </TabsTrigger>
            ))}
          </TabsList>

          {SERVICES_DATA.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                key={activeTab}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {service.description}
                  </p>

                  <Accordion type="single" collapsible className="w-full">
                    {service.items.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border-[#FFBF00]/20"
                      >
                        <AccordionTrigger className="text-lg font-medium hover:text-[#FFBF00]">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {item.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border border-[#FFBF00]/20">
                  <Image
                    src={service.image} // Dynamically use the image from SERVICES_DATA
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                    <div className="w-12 h-12 bg-[#FFBF00]/20 rounded-full flex items-center justify-center mb-4">
                      <div className="w-8 h-8 bg-[#FFBF00] rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title.split("&")[0].trim()}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {service.description.split(".")[0]}
                    </p>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <ServiceFeatures />
      </section>
    </main>
  );
}

function ServiceFeatures() {
  const features = [
    {
      title: "Expertise",
      description:
        "Industry-leading specialists with decades of combined experience",
    },
    {
      title: "Innovation",
      description:
        "Cutting-edge solutions that leverage the latest technologies",
    },
    {
      title: "Sustainability",
      description:
        "Environmentally responsible practices across all our services",
    },
    {
      title: "Quality",
      description: "Unwavering commitment to excellence in every project",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="my-24"
    >
      <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
        Why Choose Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-card p-6 rounded-xl border border-[#FFBF00]/20 hover:border-[#FFBF00]/50 transition-colors shadow-sm hover:shadow-md"
          >
            <div className="w-12 h-12 bg-[#FFBF00]/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-[#FFBF00] text-xl font-bold">
                0{index + 1}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
