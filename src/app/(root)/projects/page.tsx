"use client";

import PageTitleSection from "@/components/common/page-title-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { Sparkles, Users, Target } from "lucide-react"; // Add these icons

// Add interface for Project type
interface Project {
  title: string;
  description: string;
  image: string;
  location: string;
  status: "Completed" | "Ongoing" | "Planning" | "Development";
  year: string;
  features?: string[];
  timeline?: string;
  impact?: string;
  category?: string;
}

// Update the PROJECTS_DATA type
interface CategoryData {
  category: string;
  title: string;
  description: string;
  projects: Project[];
}

const PROJECTS_DATA: CategoryData[] = [
  {
    category: "energy",
    title: "Vivid Projects",
    description: "From design to delivery, our team ensured that the LT & HT panels meet strict quality, safety, and performance standards, supporting seamless operations for the data centre. With precision engineering and robust build quality, our panels play a crucial role in ensuring uninterrupted power flow, enhanced efficiency, and long-term reliability. ",
    projects: [
      {
        title: "Mumbai Metro",
        description: "Vivid supplied high-performance LT panels to key Mumbai Metro stations, ensuring reliable power distribution for uninterrupted operations. Each panel was designed to handle high electrical loads, withstand harsh conditions, and meet stringent safety standards. Our team customized solutions with advanced protection features, efficient busbar systems, and optimized power management to support critical station functions like lighting, signaling, and ventilation. The panels were rigorously tested for durability and performance before installation. With a focus on reliability and efficiency, Vivid’s LT panels contribute to the metro's smooth daily operations, minimizing downtime and ensuring passenger safety. ",
        image: "/assets/images/metro.jpeg",
        location: "Gujarat, India",
        status: "Completed",
        year: "2023",
        features: [
          "Advanced solar tracking system",
          "Smart grid integration",
          "Remote monitoring capabilities",
          "Environmental impact assessment"
        ],
        timeline: "12 months",
        impact: "Powering 30,000 homes"
      },
      {
        title: "Phoenix Mall",
        description: "Vivid delivered top-tier LT panels to Phoenix Mall, ensuring seamless power distribution across its massive retail, entertainment, and hospitality spaces. Designed to handle heavy electrical demand, our panels keep escalators running, lights shining, and HVAC systems operating efficiently. Equipped with advanced safety features and energy-optimized busbar systems, they support uninterrupted operations even during peak hours. These panels provide the backbone for a hassle-free shopping experience. With Vivid’s engineering expertise, Phoenix Mall stays powered up, creating a vibrant and enjoyable atmosphere for shoppers, diners, and visitors every day.",
        image: "/assets/images/phoenix.jpg",
        location: "Maharashtra, India",
        status: "Ongoing",
        year: "2024"
      },
      {
        title: "Clean Max",
        description: "Vivid powered up Clean Max Technology with high-performance HT and LT panels, ensuring smooth and efficient energy distribution for their renewable power projects. Our HT panels handle high-voltage transmission with precision, while LT panels keep essential systems running flawlessly. Designed for maximum efficiency and safety, they optimize power flow, reduce energy losses, and enhance system reliability. From solar farms to industrial setups, these panels support Clean Max’s mission of sustainable energy. With Vivid’s expertise, their operations stay energized, pushing the boundaries of green power and driving a cleaner, brighter future.",
        image: "/assets/images/hero1.jpg",
        location: "Maharashtra, India",
        status: "Ongoing",
        year: "2024"
      },
    ]
  },
  {
    category: "secutech",
    title: "Secutech Projects",
    description: "Key infrastructure development initiatives",
    projects: [
      {
        title: "Smart Fire Safety Infrastructure at Park Hyatt Hotel, Goa",
        description: "The Park Hyatt Hotel in Goa, spread over 45 acres with 250 villas and suites, has undergone a smart retrofit to enhance fire safety and emergency evacuation, ensuring the highest level of guest safety as per Hyatt standards. Key Highlights: Smart Retrofitting: ● Complete upgrade of the fire detection and emergency evacuation system. ● 24×7 operational execution based on occupancy with minimal guest disturbance. ● Enhanced safety measures aligned with Hyatt’s global standards. Integrated Fire Safety Systems:● Over 3,000 fire detection points for real-time monitoring and quick response. ● 2,500+ evacuation and annunciation points for coordinated emergency response. ● 100% distributed and redundant architecture for uninterrupted system performance. ● Centralized Command & Control Centre for real-time incident management. ● Integrated EVAC and annunciation over fiber optic connectivity for seamless communication.",
        image: "/assets/images/g.png",
        location: "Madhya Pradesh, India",
        status: "Ongoing",
        year: "2024"
      },
      {
        title: "Smart Healthcare Infrastructure at Kokilaben Ambani Hospital",
        description: "The Kokilaben Ambani Hospital in Mumbai is a leading-edge smart hospital with 800+ beds, designed to deliver high-quality healthcare through integrated technology and automation. Key Highlights: Advanced Infrastructure: ● 800+ smart beds equipped with modern technology.  ● Unified ELV Systems for seamless building operations. Integrated Systems: ● 300 HD CCTV Cameras with analytics for real-time monitoring. ● 3,000+ fire detectors, devices, and speakers for enhanced safety and communication.  ● Biometric + RFID Access Control for secure and restricted entry. ● Layer 3 redundant fiber optic network for uninterrupted connectivity. ● Digital AV Solutions and Smart TVs at every bed for patient engagement. ● Visitor Management for patients, vendors, and OPD tracking. ● Building Automation covering HVAC, electrical, lighting, UPS, elevators, and fire safety. Smart Applications: ● Hospital Information Management for efficient patient care and record-keeping. ● Smart Energy Management for real-time monitoring and cost optimization. ● Unified Response Management for faster emergency handling and coordination.",
        image: "/assets/images/kokila.jpg",
        location: "Madhya Pradesh, India",
        status: "Ongoing",
        year: "2024"
      },
      {
        title: "Smart and Sustainable Infrastructure at ONGC HQ, Mumbai ",
        description: "The ONGC Headquarters in Mumbai stands as a benchmark in smart and sustainable infrastructure, combining advanced building management, security, and smart applications to create a highly efficient and secure environment. Key Highlights: Smart Building & Sustainability: ● Platinum LEED Certified for environmental efficiency. ● Energy harvesting and solar energy creation to reduce carbon footprint. System Integration: ● 25,000+ IBMS points managing 20 sub-systems, including HVAC, electrical, power, and utilities.● True Integrated Security Management System (ISMS) with 200+ access points using RFID and smart cards. ● 150+ HD IP CCTV cameras connected to a centralized Command Centre for real-time monitoring.● Over 3,000 fire detectors and 2,000 PA points for enhanced safety and emergency response.● Intelligent Parking Management System for seamless vehicle control and traffic flow.  Smart Applications: ● IP Telephony integrated with IBMS for streamlined communication. ● Visitor Management linked with ISMS for security and tracking. ● Energy Analytics and Predictive Maintenance for real-time operational efficiency and cost reduction.",
        image: "/assets/images/ongc.jpg",
        location: "Multiple States",
        status: "Planning",
        year: "2024"
      },
      {
        title: "Smart Infrastructure at Reliance ADAG Global HQ",
        description:"The Global HQ of Reliance ADAG Group has been transformed into a state-of-the-art smart facility, integrating IBMS, ISMS, ICT, and smart applications for enhanced security, efficiency, and control. Key Highlights: Security & Surveillance: ● 200+ HD IP Cameras and 220+ Access Control Points for real-time monitoring. ● Bollards and a centralized Command & Control Centre for enhanced security. ● Over 50+ customized smart security and BMS scenarios. Fire & Safety: ● 2,200+ fire detection points and 1,800+ PA system points for rapid response. ● Advanced server room protection with Novac, WLD, VESDA, and rodent detection. Smart Building Management:  ● 20,000+ IBMS points for real-time building performance.  ● Energy Analytics and Predictive Maintenance for efficient operations. ● Integrated Visitor Management, Virtual Receptionist, and Conference Room Booking. The integrated system ensures enhanced security, operational efficiency, and a seamless user experience, setting a benchmark for smart infrastructure.",
        image: "/assets/images/Reliance.png",
        location: "Multiple States",
        status: "Planning",
        year: "2024"
      },
    ]
  },
  {
    category: "technology",
    title: "Online Cleaning Technologies",
    description: "Innovation through technology integration",
    projects: [
      {
        title: "Shockwave Cleaning Technology at Koradi Power Station",
        description: "Client: Mahagenco – Koradi Power Station Project Scope: Demonstration of Online Cleaning Technologies’ patented Shockwave cleaning system Challenge:Boilers in power plants accumulate significant fouling over time, reducing efficiency and increasing downtime during maintenance. Traditional cleaning methods can be time-consuming and require shutdowns, impacting productivity. Mahagenco sought a more efficient cleaning solution that could be performed online without disrupting operations. Solution: Online Cleaning Technologies (OCT) demonstrated its patented Shockwave cleaning technology on a 600 MW boiler at Koradi Power Station. The process involved: ● Online inspection using cameras before and after cleaning ● Shockwave-based cleaning to remove fouling from boiler surfaces, burners, and waterwalls ● Demonstrating the effectiveness of the method by performing 10 controlled shots Results: ● Effective Cleaning: The Shockwave technology successfully removed fouling in key areas, including waterwalls and burner regions. ● Reduced Manual Effort: Previously, bottom ash hoppers were cleaned using jackhammers; OCT’s technology demonstrated an easier and more effective approach. ● Future Optimization: Recommendations were made for an offline cleaning before the next shutdown to enhance boiler efficiency further. Impact: OCT’s innovative cleaning solution showcased a faster, safer, and more efficient alternative to traditional boiler maintenance. By implementing Shockwave technology, Mahagenco can minimize downtime, improve operational efficiency, and enhance the longevity of its equipment.",
        image: "/assets/images/u.jpeg",
        location: "Pan India",
        status: "Ongoing",
        year: "2024"
      },
      // {
      //   title: "Smart Grid Solution",
      //   description: "AI-powered grid management system",
      //   image: "/assets/images/smart-grid.jpg",
      //   location: "Multiple States",
      //   status: "Development",
      //   year: "2024"
      // },
    ]
  }
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("energy");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
        title="Our Projects"
        description="Showcasing our key initiatives across energy, infrastructure, and technology"
      />

      <section className="max-w-7xl mx-auto">
        <Tabs
          defaultValue="energy"
          className="my-12"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#FFBF00]/10">
            {PROJECTS_DATA.map((category) => (
              <TabsTrigger
                key={category.category}
                value={category.category}
                className="text-sm md:text-base data-[state=active]:bg-[#FFBF00] data-[state=active]:text-black"
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {PROJECTS_DATA.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                key={activeTab}
              >
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
                  {category.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.projects.map((project, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="bg-card rounded-xl overflow-hidden border border-[#FFBF00]/20 hover:border-[#FFBF00]/50 transition-all duration-300 hover:shadow-lg"
                    >
                      {/* Project Image */}
                      <div className="relative h-[200px]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <Badge className="bg-[#FFBF00]/20 text-[#FFBF00]">
                            {project.status}
                          </Badge>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-[#FFBF00]">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-3 mb-4">
                          {project.description}
                        </p>
                        <button
                          onClick={() => setSelectedProject({ ...project, category: category.category })}
                          className="text-sm font-medium text-[#FFBF00] hover:text-[#FFBF00]/80 flex items-center gap-2 transition-colors"
                        >
                          Read More 
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0">
            <ScrollArea className="h-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {/* Project Image */}
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
                  <Image
                    src={selectedProject?.image || ''}
                    alt={selectedProject?.title || ''}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Project Title and Description */}
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
                    {selectedProject?.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {selectedProject?.description}
                  </p>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </section>
    </main>
  );
}
