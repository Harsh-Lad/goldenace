"use client";

import PageTitleSection from "@/components/common/page-title-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  // ArrowRight,
  Award,
  Building,
  // Calendar,
  // Globe,
  Lightbulb,
  Shield,
  TrendingUp,
  // Users
} from "lucide-react";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";

// Company data
const COMPANIES = [
  {
    name: "Vivid Electromech Ltd.",
    logo: "/assets/images/vivid.png",
    category: "Infrastucture",
    description:
      "Leaders in LT & HT electrical panel manufacturing, delivering innovative, reliable power solutions. Advanced automation and smart technology that optimizes energy management, driving robust operations and empowering global industries with sustainable infrastructure.",
    founded: "2018",
    location: "Mumbai, Maharashtra",
    website: "https://vivid.example.com",
    employees: "50-100",
    investment: "Series A",
    highlights: [
      "Developed proprietary AI-driven energy optimization platform",
      "Serving over 200 commercial clients across India",
      "Reduced energy consumption by an average of 30% for clients",
    ],
  },
  {
    name: "G.A.M.E Solar",
    logo: "/assets/images/game.png",
    category: "Renewable Energy",
    description:
      "Leading provider of solar energy solutions for residential and commercial applications.",
    founded: "2016",
    location: "Mumbai, India",
    website: "https://gamesolar.example.com",
    employees: "100-250",
    investment: "Series B",
    highlights: [
      "Installed over 500 MW of solar capacity across India",
      "Pioneered innovative solar financing models for residential customers",
      "Developed proprietary solar panel mounting systems for varied terrains",
    ],
  },
  {
    name: "RE PLUS",
    logo: "/assets/images/RE.png",
    category: "Technology",
    description:
      "REPLUS specializes in advanced Battery Energy Storage Systems (BESS), delivering tailored solutions for diverse power and energy applications. With expertise in lithium-ion technology, advanced cell chemistry, in-house BMS & EMS design, and battery pack manufacturing, REPLUS ensures reliable and secure energy storage.",
    founded: "2017",
    location: "Pune - Maharashtra",
    website: "https://secutech.example.com",
    employees: "50-100",
    investment: "Series A",
    highlights: [
      "Deployed smart security systems in 15+ smart city projects",
      "Developed AI-powered surveillance technology with 99.7% accuracy",
      "Integrated systems with municipal emergency response networks",
    ],
  },
  {
    name: "Gener8tor",
    logo: "/assets/images/GENER8TOR.jpeg",
    category: "Investment",
    description:
      "A top startup accelerator fueling early-stage companies with intensive mentorship and strategic capital. Their programs on entrepreneurship drive disruptive innovation. Backed by an ever-connected network, they propel scalable, sustainable venture success globally. ",
    founded: "2019",
    location: "Washington, US",
    website: "https://gener8tor.example.com",
    employees: "25-50",
    investment: "Fund",
    highlights: [
      "Accelerated 30+ startups in energy and infrastructure sectors",
      "Raised ₹200 Cr Category 2 AIF Fund",
      "Portfolio companies have raised over ₹500 Cr in follow-on funding",
    ],
  },
  {
    name: "Online Cleaning Technologies ",
    logo: "/assets/images/oclogo.svg",
    category: "Technology",
    description:
      "Online Cleaning Technologies Pvt. Ltd. (OCT) delivers advanced, non-invasive cleaning for power plants, refineries, and petrochemical facilities. Using cutting-edge techniques, OCT optimizes performance, minimizes downtime, and extends equipment life—without shutdowns.",
    founded: "2015",
    location: "Navi Mumbai, Maharashtra",
    website: "https://oct.example.com",
    employees: "100-250",
    investment: "Series B",
    highlights: [
      "Patented online cleaning technology for thermal power plants",
      "Improved efficiency by up to 15% in over 50 power plants",
      "Reduced water consumption in cleaning processes by 70%",
    ],
  },
  {
    name: "Magic Paws Co.",
    logo: "/assets/images/magicpaws.png",
    category: "Investment",
    description:
      "A pet care brand offering premium products to boost the health and happiness of your furry friends. Their curated collection spans accessories, grooming, and nutritional solutions for modern pet care. With quality and sustainability at heart, they deliver transformative pet care solutions. ",
    founded: "2015",
    location: "Mumbai, India",
    website: "https://oct.example.com",
    employees: "100-250",
    investment: "Series B",
    highlights: [
      "Patented online cleaning technology for thermal power plants",
      "Improved efficiency by up to 15% in over 50 power plants",
      "Reduced water consumption in cleaning processes by 70%",
    ],
  },
  {
    name: "Secutech Automation (India) Pvt. Ltd.",
    logo: "/assets/images/Secutech.png",
    category: "Technology",
    description:
      "Secutech Automation (India) Pvt. Ltd. provides advanced automation and security solutions for seamless operations and enhanced safety. Specializing in industrial automation, surveillance, and access control, Secutech delivers customized, high-performance systems for diverse industries.",
    founded: "2015",
    location: "Mumbai, India",
    website: "https://oct.example.com",
    employees: "100-250",
    investment: "Series B",
    highlights: [
      "Patented online cleaning technology for thermal power plants",
      "Improved efficiency by up to 15% in over 50 power plants",
      "Reduced water consumption in cleaning processes by 70%",
    ],
  },
];

// Extended venture data - Commented Out
/* const VENTURE_CASE_STUDIES = [
  // ...case studies data
]; */

export default function VenturesPage() {
  const [activeTab, setActiveTab] = useState("all");

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Filter companies based on active tab
  const filteredCompanies =
    activeTab === "all"
      ? COMPANIES
      : COMPANIES.filter((company) =>
          company.category.toLowerCase().includes(activeTab.toLowerCase())
        );

  // Get categories for filter tabs
  const categories = Array.from(
    new Set(COMPANIES.map((company) => company.category))
  );

  // Get featured venture (for example, the first one)
  // const featuredVenture = COMPANIES[1]; // GAME Solar

  return (
    <div className="container mx-auto px-4 py-12">
      <PageTitleSection
        title="ASSOCIATED PARTNERS"
        description="Pioneering innovations across energy, infrastructure, and technology sectors"
      />

      <section className="max-w-7xl mx-auto">
        {/* Featured Venture Section */}
        {/* <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="my-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border border-[#FFBF00]/20">
              <Image
                src="https://rilstaticasset.akamaized.net/sites/default/files/2023-09/green-energy.jpg"
                alt={featuredVenture?.name ?? "Featured Venture"}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <Badge className="mb-2 bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black">
                    {featuredVenture?.category ?? "Unknown Category"}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2">
                    {featuredVenture?.name ?? "Unknown Venture"}
                  </h3>
                  <p className="text-white/80 mb-4">
                    {featuredVenture?.description ?? "Description not available"}
                  </p>
                  <Button className="bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
                Featured Venture
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {featuredVenture ? (
                  <>
                    {featuredVenture.name} is at the forefront of{" "}
                    {featuredVenture.category.toLowerCase()} innovation, providing
                    cutting-edge solutions that drive sustainability and efficiency.
                  </>
                ) : (
                  "Featured venture details are not available."
                )}
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-[#FFBF00] mt-0.5" />
                  <div>
                    <p className="font-medium">Founded</p>
                    <p className="text-muted-foreground">
                      {featuredVenture?.founded ?? (featuredVenture ? "N/A" : "Unknown")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Building className="h-5 w-5 text-[#FFBF00] mt-0.5" />
                  <div>
                    <p className="font-medium">Headquarters</p>
                    <p className="text-muted-foreground">
                      {featuredVenture?.location ?? "Location not available"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-[#FFBF00] mt-0.5" />
                  <div>
                    <p className="font-medium">Team Size</p>
                    <p className="text-muted-foreground">
                      {featuredVenture?.employees ?? "N/A"} employees
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-5 w-5 text-[#FFBF00] mt-0.5" />
                  <div>
                    <p className="font-medium">Investment Stage</p>
                    <p className="text-muted-foreground">
                      {featuredVenture?.investment ?? (featuredVenture ? "N/A" : "Investment stage not available")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="border-[#FFBF00]/30 text-[#FFBF00] hover:bg-[#FFBF00]/10 hover:text-[#FFBF00]"
                  asChild
                >
                  {featuredVenture && (
                    <Link href={featuredVenture.website} target="_blank">
                      <Globe className="mr-2 h-4 w-4" /> Visit Website
                    </Link>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </motion.section> */}
        {/* Ventures Portfolio Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="my-16"
        >
          <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
            Our Parnter Portfolio
          </h2>
          <Tabs
            defaultValue="all"
            className="w-fit mb-8"
            onValueChange={setActiveTab}
          >
            <TabsList className="flex flex-wrap h-full justify-center w-full max-w-4xl mx-auto mb-8 bg-[#FFBF00]/10 gap-2">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-[#FFBF00] data-[state=active]:text-black px-4 py-2 text-sm flex-1 md:flex-none"
              >
                All
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category.toLowerCase()}
                  className="data-[state=active]:bg-[#FFBF00] data-[state=active]:text-black px-4 py-2 text-sm flex-1 md:flex-none"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={activeTab}>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredCompanies.map((company, index) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="h-full"
                  >
                    <Card className="overflow-hidden border border-[#FFBF00]/20 hover:border-[#FFBF00]/50 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                      <div className="p-6 flex items-center justify-center bg-[#FFBF00]/5 border-b border-[#FFBF00]/20 h-[250px]">
                        <div className="relative w-100 h-48 bg-white">
                          <Image
                            src={company.logo || "/placeholder.svg"}
                            alt={company.name}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 192px, 192px"
                          />
                        </div>
                      </div>
                      <CardContent className="p-6 flex-grow">
                        <Badge className="mb-3 bg-[#FFBF00]/20 text-[#FFBF00] hover:bg-[#FFBF00]/30 border-[#FFBF00]/30">
                          {company.category}
                        </Badge>
                        <h3 className="text-xl font-bold mb-2 hover:text-[#FFBF00] transition-colors">
                          {company.name}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {company.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          {/* <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-[#FFBF00]" />
                            <span>Founded: {company.founded}</span>
                          </div> */}
                          <div className="flex items-center">
                            <Building className="h-4 w-4 mr-2 text-[#FFBF00]" />
                            <span>{company.location}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.section>
        {/* Expanded Venture Details */}
        {/* Case Studies Section - Commented Out
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="my-16"
        >
          <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
            Case Studies
          </h2>
          <div className="space-y-12">
            {VENTURE_CASE_STUDIES.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <Badge className="mb-3 bg-[#FFBF00]/20 text-[#FFBF00] hover:bg-[#FFBF00]/30 border-[#FFBF00]/30">
                    {study.company}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {study.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="h-6 w-6 rounded-full bg-[#FFBF00]/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <Zap className="h-3 w-3 text-[#FFBF00]" />
                          </div>
                          <span>{result}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <Button className="bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black">
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div
                  className={`relative h-[350px] rounded-xl overflow-hidden shadow-xl border border-[#FFBF00]/20 ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h4 className="text-lg font-bold">{study.company}</h4>
                      <p className="text-white/80 text-sm">{study.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        */}

        {/* Investment Approach Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="my-16"
        >
          <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
            Our Investment Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-[#FFBF00]/20 hover:border-[#FFBF00]/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 pt-8">
                <div className="h-12 w-12 rounded-full bg-[#FFBF00]/10 flex items-center justify-center mb-6">
                  <Lightbulb className="h-6 w-6 text-[#FFBF00]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Strategic Focus</h3>
                <p className="text-muted-foreground">
                  We invest in ventures that align with our strategic focus on
                  renewable energy, infrastructure development, and smart
                  technology solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-[#FFBF00]/20 hover:border-[#FFBF00]/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 pt-8">
                <div className="h-12 w-12 rounded-full bg-[#FFBF00]/10 flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-[#FFBF00]" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Value-Added Partnership
                </h3>
                <p className="text-muted-foreground">
                  Beyond capital, we provide strategic guidance, industry
                  connections, and operational expertise to help our portfolio
                  companies accelerate growth.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-[#FFBF00]/20 hover:border-[#FFBF00]/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 pt-8">
                <div className="h-12 w-12 rounded-full bg-[#FFBF00]/10 flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-[#FFBF00]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Sustainable Growth</h3>
                <p className="text-muted-foreground">
                  We prioritize ventures with sustainable business models that
                  deliver long-term value while making a positive impact on
                  society and the environment.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-[#FFBF00]/20">
                <AccordionTrigger className="text-lg font-medium hover:text-[#FFBF00]">
                  Investment Criteria
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#FFBF00]/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Award className="h-3 w-3 text-[#FFBF00]" />
                      </div>
                      <span>
                        Strong founding team with domain expertise and execution
                        capability
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#FFBF00]/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Award className="h-3 w-3 text-[#FFBF00]" />
                      </div>
                      <span>
                        Innovative solutions addressing significant market
                        opportunities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#FFBF00]/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Award className="h-3 w-3 text-[#FFBF00]" />
                      </div>
                      <span>
                        Scalable business model with clear path to profitability
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#FFBF00]/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Award className="h-3 w-3 text-[#FFBF00]" />
                      </div>
                      <span>
                        Alignment with our focus sectors: energy,
                        infrastructure, and technology
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-[#FFBF00]/20">
                <AccordionTrigger className="text-lg font-medium hover:text-[#FFBF00]">
                  Investment Stages
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#FFBF00]/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Award className="h-3 w-3 text-[#FFBF00]" />
                      </div>
                      <span>
                        Early-stage (Seed to Series A): ₹1-5 Cr investment range
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#FFBF00]/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Award className="h-3 w-3 text-[#FFBF00]" />
                      </div>
                      <span>
                        Growth-stage (Series B and beyond): ₹5-25 Cr investment
                        range
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#FFBF00]/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Award className="h-3 w-3 text-[#FFBF00]" />
                      </div>
                      <span>
                        Strategic acquisitions: Varies based on opportunity
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-[#FFBF00]/20">
                <AccordionTrigger className="text-lg font-medium hover:text-[#FFBF00]">
                  Value Addition
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#FFBF00]/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Award className="h-3 w-3 text-[#FFBF00]" />
                      </div>
                      <span>
                        Strategic guidance and mentorship from industry experts
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#FFBF00]/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Award className="h-3 w-3 text-[#FFBF00]" />
                      </div>
                      <span>
                        Access to our extensive network of industry partners and
                        potential clients
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#FFBF00]/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Award className="h-3 w-3 text-[#FFBF00]" />
                      </div>
                      <span>
                        Operational support in key areas like finance,
                        marketing, and talent acquisition
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#FFBF00]/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Award className="h-3 w-3 text-[#FFBF00]" />
                      </div>
                      <span>
                        Support for follow-on funding rounds and strategic
                        partnerships
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.section>
        {/* Portfolio Metrics Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="my-16 py-12 bg-gradient-to-r from-[#FFBF00]/10 to-[#FFBF00]/5 rounded-xl border border-[#FFBF00]/20"
        >
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
              Portfolio Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "₹500Cr+", label: "Total Investment" },
                { value: "15+", label: "Portfolio Companies" },
                { value: "3000+", label: "Jobs Created" },
                { value: "40%", label: "Average Annual Growth" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#FFBF00] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        {/* Call to Action Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="my-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border border-[#FFBF00]/20">
              <Image
                src="/assets/images/lokforin.jpg"
                alt="Partner With Golden Ace Ventures"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Partner With Us</h3>
                  <p className="text-white/80">
                    Join our ecosystem of innovative ventures shaping the future
                    of energy, infrastructure, and technology.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
                Looking for Investment?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                If you&apos;re building an innovative solution in energy,
                infrastructure, or technology sectors, we&apos;d love to hear
                from you. Golden Ace Ventures provides not just capital, but
                strategic partnership to help you scale your business.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of experienced professionals can help you navigate
                challenges, open doors to new opportunities, and accelerate your
                growth journey.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="group bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black"
                >
                  Submit Your Pitch
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                    className="ml-2"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#FFBF00]/30 text-[#FFBF00] hover:bg-[#FFBF00]/10"
                >
                  View Investment Criteria
                </Button>
              </div> */}
            </div>
          </div>
        </motion.section>
      </section>
    </div>
  );
}
