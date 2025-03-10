"use client";

import PageTitleSection from "@/components/common/page-title-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { COMPANY_PROJECTS_EXTENDED } from "../../../lib/constants";

function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black";
      case "Ongoing":
      case "In Progress":
        return "bg-[#FFBF00]/30 hover:bg-[#FFBF00]/40 text-[#FFBF00]";
      default:
        return "border-[#FFBF00]/30 text-[#FFBF00] hover:bg-[#FFBF00]/10";
    }
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <PageTitleSection
        title="Key Projects & Case Studies"
        description="Showcasing our expertise and impact across diverse sectors"
      />

      <section className="max-w-7xl mx-auto">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="my-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
                Featured Project
              </h2>
              <Badge className="mb-4 bg-[#FFBF00]/20 text-[#FFBF00] hover:bg-[#FFBF00]/30 border-[#FFBF00]/30">
                Energy
              </Badge>
              <h3 className="text-2xl font-bold mb-2">
                MahaGenco Bhusawal Thermal Plant POC
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                An innovative proof of concept implementation at the MahaGenco
                Bhusawal Thermal Power Plant, focused on enhancing operational
                efficiency and reducing environmental impact through
                cutting-edge technology integration.
              </p>
              <Button className="bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black">
                View Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border border-[#FFBF00]/20">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="MahaGenco Bhusawal Thermal Plant"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <div className="w-12 h-12 bg-[#FFBF00]/20 rounded-full flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-[#FFBF00] rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Thermal Plant Optimization
                </h3>
                <p className="text-white/80 text-sm">
                  Enhancing efficiency and reducing environmental impact
                </p>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="my-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70"
          >
            Our Projects Portfolio
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {COMPANY_PROJECTS_EXTENDED.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden border border-[#FFBF00]/20 hover:border-[#FFBF00]/50 transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className={`object-cover transition-transform duration-500 ${
                        hoveredProject === index ? "scale-110" : "scale-100"
                      }`}
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge
                      variant="outline"
                      className="mb-2 border-[#FFBF00]/30 text-[#FFBF00] hover:bg-[#FFBF00]/10"
                    >
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2 hover:text-[#FFBF00] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs bg-[#FFBF00]/10 hover:bg-[#FFBF00]/20 text-[#FFBF00]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="link"
                      className="p-0 mt-4 text-[#FFBF00] hover:text-[#FFBF00]/80"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        <ProjectStats />
      </section>
    </main>
  );
}

function ProjectStats() {
  const stats = [
    { value: "50+", label: "Completed Projects" },
    { value: "12+", label: "Ongoing Projects" },
    { value: "8", label: "Countries" },
    { value: "₹500Cr+", label: "Project Value" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="my-24 py-16 bg-[#FFBF00]/5 rounded-2xl border border-[#FFBF00]/20"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Project Impact</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
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
    </motion.section>
  );
}

export default ProjectsPage;
