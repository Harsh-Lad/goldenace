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
  status: "Completed" | "Completed" | "Completed" | "Development";
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
        status: "Completed",
        year: "2024"
      },
      {
        title: "Clean Max",
        description: "Vivid powered up Clean Max Technology with high-performance HT and LT panels, ensuring smooth and efficient energy distribution for their renewable power projects. Our HT panels handle high-voltage transmission with precision, while LT panels keep essential systems running flawlessly. Designed for maximum efficiency and safety, they optimize power flow, reduce energy losses, and enhance system reliability. From solar farms to industrial setups, these panels support Clean Max’s mission of sustainable energy. With Vivid’s expertise, their operations stay energized, pushing the boundaries of green power and driving a cleaner, brighter future.",
        image: "/assets/images/hero1.jpg",
        location: "Maharashtra, India",
        status: "Completed",
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
        description: "The Park Hyatt Hotel in Goa, a 45-acre property with 250 villas and suites, has upgraded its fire safety and evacuation systems to meet Hyatt’s global standards. The retrofit includes 3,000+ fire detection points, 2,500+ evacuation alarms, and a centralized Command & Control Centre for real-time monitoring. The fully redundant, fiber-optic-enabled system ensures seamless emergency response with minimal guest disruption.",
        image: "/assets/images/g.png",
        location: "Madhya Pradesh, India",
        status: "Completed",
        year: "2024"
      },
      {
        title: "Smart Healthcare Infrastructure at Kokilaben Ambani Hospital",
        description: "Kokilaben Ambani Hospital in Mumbai is a cutting-edge 800-bed smart hospital integrating advanced technology for superior healthcare. It features 300+ HD CCTV cameras, 3,000+ fire safety devices, biometric access control, and a fully redundant fiber-optic network. The facility boasts complete building automation, smart patient systems, and unified platforms for energy management and emergency response, ensuring efficient, safe, and patient-centric care.",
        image: "/assets/images/kokila.jpg",
        location: "Madhya Pradesh, India",
        status: "Completed",
        year: "2024"
      },
      {
        title: "Smart and Sustainable Infrastructure at ONGC HQ, Mumbai ",
        description: "The ONGC Headquarters in Mumbai is a Platinum LEED-certified smart building, integrating 25,000+ IBMS points for automated HVAC, lighting, and utilities. Its True ISMS combines 200+ RFID access points, 150+ HD cameras, 3,000+ fire detectors, and smart parking for robust security. With solar power, energy analytics, and predictive maintenance, it delivers sustainable, efficient, and future-ready operations.",
        image: "/assets/images/ongc.jpg",
        location: "Multiple States",
        status: "Completed",
        year: "2024"
      },
      {
        title: "Smart Infrastructure at Reliance ADAG Global HQ",
        description:"Reliance ADAG Group's Global HQ is a cutting-edge smart facility, integrating IBMS, ISMS, and ICT for seamless security, efficiency, and automation. It features 200+ HD cameras, 220+ access points, and AI-driven security scenarios, backed by a centralized Command Centre. Fire safety is ensured via 2,200+ detection sensors and 1,800+ PA systems, with advanced server room protection. The 20,000+ IBMS points optimize building performance, while energy analytics and predictive maintenance boost sustainability. Smart solutions like automated visitor management, virtual receptionists, and conference booking enhance user experience, making it a benchmark for intelligent corporate infrastructure.",
        image: "/assets/images/Reliance.png",
        location: "Multiple States",
        status: "Completed",
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
        status: "Completed",
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
    <main className="container mx-auto px-4 py-12 ">
      <PageTitleSection
        title="OUR PROJECTS"
        description="Showcasing our key initiatives across energy, infrastructure, and technology"
      />

      <section className="max-w-7xl mx-auto">
        <Tabs
          defaultValue="energy"
          className="my-12 h-auto"
          onValueChange={setActiveTab}
        >
            <TabsList className="grid w-full h-full grid-cols-1 md:grid-cols-3 mb-8 bg-[#FFBF00]/10">
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
