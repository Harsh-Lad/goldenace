"use client";

import PageTitleSection from "@/components/common/page-title-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Building,
  Calendar,
  ChevronDown,
  ChevronUp,
  Globe,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Company data
const COMPANIES = [
  {
    name: "Vivid",
    logo: "/placeholder.svg?height=200&width=200",
    category: "Technology",
    description:
      "Innovative solutions for smart energy management and monitoring systems.",
    founded: "2018",
    location: "Bangalore, India",
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
    name: "GAME Solar",
    logo: "/placeholder.svg?height=200&width=200",
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
    name: "Secutech",
    logo: "/placeholder.svg?height=200&width=200",
    category: "Infrastructure",
    description:
      "Security and surveillance technology for smart infrastructure and urban development.",
    founded: "2017",
    location: "Delhi, India",
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
    logo: "/placeholder.svg?height=200&width=200",
    category: "Investment",
    description:
      "Startup accelerator and venture fund focused on energy and infrastructure innovations.",
    founded: "2019",
    location: "Mumbai, India",
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
    name: "OCT Online Cleaning Tech",
    logo: "/placeholder.svg?height=200&width=200",
    category: "Energy",
    description:
      "Innovative cleaning technologies for thermal power plants and industrial facilities.",
    founded: "2015",
    location: "Ahmedabad, India",
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

// Extended venture data for future use
const VENTURE_CASE_STUDIES = [
  {
    company: "GAME Solar",
    title: "Revolutionizing Solar Financing for Residential Customers",
    description:
      "How GAME Solar developed an innovative financing model that made solar energy accessible to middle-class homeowners across India.",
    image: "/placeholder.svg?height=600&width=800",
    results: [
      "50,000+ residential installations completed",
      "Average customer payback period reduced to 3.5 years",
      "Created 1,000+ jobs in installation and maintenance",
    ],
  },
  {
    company: "Secutech",
    title: "Smart Security for Pune Smart City Project",
    description:
      "Secutech's implementation of integrated security and surveillance systems for the Pune Smart City initiative.",
    image: "/placeholder.svg?height=600&width=800",
    results: [
      "5,000+ AI-powered cameras deployed across the city",
      "Crime rates reduced by 30% in monitored areas",
      "Emergency response times improved by 45%",
    ],
  },
  {
    company: "OCT Online Cleaning Tech",
    title: "Efficiency Improvements at MahaGenco Thermal Plant",
    description:
      "Implementation of OCT's proprietary cleaning technology at MahaGenco's Bhusawal Thermal Power Plant.",
    image: "/placeholder.svg?height=600&width=800",
    results: [
      "Plant efficiency improved by 12.5%",
      "Annual water savings of 1.2 million liters",
      "Maintenance downtime reduced by 40%",
    ],
  },
];

export default function VenturesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedVenture, setExpandedVenture] = useState<string | null>(null);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  //   const staggerContainer = {
  //     hidden: { opacity: 0 },
  //     visible: {
  //       opacity: 1,
  //       transition: {
  //         staggerChildren: 0.15,
  //         delayChildren: 0.3,
  //       },
  //     },
  //   }

  //   const scaleIn = {
  //     hidden: { opacity: 0, scale: 0.9 },
  //     visible: {
  //       opacity: 1,
  //       scale: 1,
  //       transition: {
  //         type: "spring",
  //         stiffness: 300,
  //         damping: 20,
  //       },
  //     },
  //   }

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

  // Toggle expanded venture
  const toggleVentureExpansion = (name: string) => {
    if (expandedVenture === name) {
      setExpandedVenture(null);
    } else {
      setExpandedVenture(name);
    }
  };

  // Get featured venture (for example, the first one)
  const featuredVenture = COMPANIES[1]; // GAME Solar

  return (
    <div className="container mx-auto px-4 py-12">
      <PageTitleSection
        title="Our Ventures & Investments"
        description="Pioneering innovations across energy, infrastructure, and technology sectors"
      />

      {/* Featured Venture Section */}
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
              src="/placeholder.svg?height=800&width=600&text=GAME+Solar"
              alt={featuredVenture.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <Badge className="mb-2 bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black">
                  {featuredVenture.category}
                </Badge>
                <h3 className="text-2xl font-bold mb-2">
                  {featuredVenture.name}
                </h3>
                <p className="text-white/80 mb-4">
                  {featuredVenture.description}
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
              {featuredVenture.name} is at the forefront of{" "}
              {featuredVenture.category.toLowerCase()} innovation, providing
              cutting-edge solutions that drive sustainability and efficiency.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-2">
                <Calendar className="h-5 w-5 text-[#FFBF00] mt-0.5" />
                <div>
                  <p className="font-medium">Founded</p>
                  <p className="text-muted-foreground">
                    {featuredVenture.founded}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Building className="h-5 w-5 text-[#FFBF00] mt-0.5" />
                <div>
                  <p className="font-medium">Headquarters</p>
                  <p className="text-muted-foreground">
                    {featuredVenture.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Users className="h-5 w-5 text-[#FFBF00] mt-0.5" />
                <div>
                  <p className="font-medium">Team Size</p>
                  <p className="text-muted-foreground">
                    {featuredVenture.employees} employees
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <TrendingUp className="h-5 w-5 text-[#FFBF00] mt-0.5" />
                <div>
                  <p className="font-medium">Investment Stage</p>
                  <p className="text-muted-foreground">
                    {featuredVenture.investment}
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
                <Link href={featuredVenture.website} target="_blank">
                  <Globe className="mr-2 h-4 w-4" /> Visit Website
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Ventures Portfolio Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="my-16"
      >
        <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
          Our Ventures Portfolio
        </h2>

        <Tabs
          defaultValue="all"
          className="w-full mb-8"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 md:grid-cols-6 mb-8 bg-[#FFBF00]/10">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-[#FFBF00] data-[state=active]:text-black"
            >
              All
            </TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category.toLowerCase()}
                className="data-[state=active]:bg-[#FFBF00] data-[state=active]:text-black"
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
                    <div className="p-6 flex items-center justify-center bg-[#FFBF00]/5 border-b border-[#FFBF00]/20 h-[180px]">
                      <div className="relative w-32 h-32">
                        <Image
                          src={company.logo || "/placeholder.svg"}
                          alt={company.name}
                          fill
                          className="object-contain"
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

                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-[#FFBF00]" />
                          <span>Founded: {company.founded}</span>
                        </div>
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2 text-[#FFBF00]" />
                          <span>{company.location}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button
                        variant="outline"
                        className="w-full border-[#FFBF00]/30 text-[#FFBF00] hover:bg-[#FFBF00]/10"
                        onClick={() => toggleVentureExpansion(company.name)}
                      >
                        {expandedVenture === company.name ? (
                          <>
                            Less Details <ChevronUp className="ml-2 h-4 w-4" />
                          </>
                        ) : (
                          <>
                            More Details{" "}
                            <ChevronDown className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.section>

      {/* Expanded Venture Details */}
      {expandedVenture && (
        <motion.section
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
          className="my-8"
        >
          {COMPANIES.filter((company) => company.name === expandedVenture).map(
            (company) => (
              <Card
                key={company.name}
                className="border border-[#FFBF00]/30 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="md:w-1/3">
                      <div className="bg-[#FFBF00]/5 p-6 rounded-xl border border-[#FFBF00]/20 flex items-center justify-center h-[200px]">
                        <div className="relative w-40 h-40">
                          <Image
                            src={company.logo || "/placeholder.svg"}
                            alt={company.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <div className="mt-6 space-y-4">
                        <h3 className="text-xl font-bold text-[#FFBF00]">
                          {company.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {company.description}
                        </p>

                        <div className="pt-4 space-y-3">
                          <div className="flex items-center">
                            <Globe className="h-4 w-4 mr-2 text-[#FFBF00]" />
                            <Link
                              href={company.website}
                              target="_blank"
                              className="text-[#FFBF00] hover:underline"
                            >
                              {company.website.replace("https://", "")}
                            </Link>
                          </div>

                          <div className="flex items-center">
                            <Building className="h-4 w-4 mr-2 text-[#FFBF00]" />
                            <span>{company.location}</span>
                          </div>

                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-[#FFBF00]" />
                            <span>Founded in {company.founded}</span>
                          </div>

                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-[#FFBF00]" />
                            <span>{company.employees} employees</span>
                          </div>

                          <div className="flex items-center">
                            <TrendingUp className="h-4 w-4 mr-2 text-[#FFBF00]" />
                            <span>{company.investment}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
                        About {company.name}
                      </h3>

                      <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-3">
                          Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {company.highlights.map((highlight, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              className="flex items-start"
                            >
                              <div className="h-6 w-6 rounded-full bg-[#FFBF00]/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                <Award className="h-3 w-3 text-[#FFBF00]" />
                              </div>
                              <span>{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-3">
                          Our Investment
                        </h4>
                        <p className="text-muted-foreground mb-4">
                          Golden Ace Ventures has been a strategic partner for{" "}
                          {company.name} since{" "}
                          {Number.parseInt(company.founded) + 1}, providing not
                          just capital but also industry expertise, networking
                          opportunities, and operational support.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                          <div className="bg-[#FFBF00]/5 p-4 rounded-lg border border-[#FFBF00]/20 text-center">
                            <div className="text-2xl font-bold text-[#FFBF00] mb-1">
                              {company.category === "Investment"
                                ? "₹200 Cr"
                                : "₹25 Cr"}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Investment
                            </div>
                          </div>

                          <div className="bg-[#FFBF00]/5 p-4 rounded-lg border border-[#FFBF00]/20 text-center">
                            <div className="text-2xl font-bold text-[#FFBF00] mb-1">
                              {company.investment === "Series A"
                                ? "15%"
                                : company.investment === "Series B"
                                ? "12%"
                                : "20%"}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Equity Stake
                            </div>
                          </div>

                          <div className="bg-[#FFBF00]/5 p-4 rounded-lg border border-[#FFBF00]/20 text-center">
                            <div className="text-2xl font-bold text-[#FFBF00] mb-1">
                              {Number.parseInt(company.founded) + 1}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Partnership Since
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Button className="bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black">
                          View Case Study{" "}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </motion.section>
      )}

      {/* Case Studies Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="my-16"
      >
        <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
          Success Stories
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
                      Alignment with our focus sectors: energy, infrastructure,
                      and technology
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
                      Operational support in key areas like finance, marketing,
                      and talent acquisition
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
              src="/placeholder.svg?height=800&width=600&text=Partner+With+Us"
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
              infrastructure, or technology sectors, we&apos;d love to hear from
              you. Golden Ace Ventures provides not just capital, but strategic
              partnership to help you scale your business.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of experienced professionals can help you navigate
              challenges, open doors to new opportunities, and accelerate your
              growth journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
