"use client";

import PageTitleSection from "@/components/common/page-title-section";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Award,
  Brain,
  Heart,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
// import { useState } from "react";

function CareersPage() {
  // const [activeTab, setActiveTab] = useState("all");

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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <PageTitleSection
        title="Careers at Golden Ace Ventures"
        description="Join our team and be part of shaping a sustainable future"
      />

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
                src="/assets/images/join us.jpg"
                alt="Careers at Golden Ace Ventures"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFBF00]/30 to-transparent opacity-60"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
                Why Join Our Team?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Golden Ace Ventures, we&quos;re building a team of passionate
                professionals dedicated to driving innovation and sustainability
                across energy, infrastructure, and technology sectors.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We offer a dynamic work environment, opportunities for
                professional growth, and the chance to contribute to projects
                that make a real difference in the world.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Target />, text: "Career Growth" },
                  { icon: <Brain />, text: "Continuous Learning" },
                  { icon: <Users />, text: "Collaborative Culture" },
                  { icon: <Zap />, text: "Impactful Work" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="h-10 w-10 rounded-full bg-[#FFBF00]/20 flex items-center justify-center mr-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="h-5 w-5 text-[#FFBF00]"
                      >
                        {item.icon}
                      </motion.div>
                    </div>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
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
          <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
            Our Company Values
          </h2>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Innovation",
                description:
                  "We embrace new ideas and technologies to drive progress and create value.",
                icon: <Zap className="h-8 w-8 text-[#FFBF00]" />,
              },
              {
                title: "Integrity",
                description:
                  "We conduct business with honesty, transparency, and ethical standards.",
                icon: <Award className="h-8 w-8 text-[#FFBF00]" />,
              },
              {
                title: "Sustainability",
                description:
                  "We are committed to environmental responsibility and sustainable development.",
                icon: <Heart className="h-8 w-8 text-[#FFBF00]" />,
              },
              {
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, delivering quality and value.",
                icon: <Target className="h-8 w-8 text-[#FFBF00]" />,
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden border border-[#FFBF00]/20 hover:border-[#FFBF00]/50 transition-all duration-300 hover:shadow-lg h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="mx-auto mb-4 h-16 w-16 rounded-full bg-[#FFBF00]/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2 text-[#FFBF00]">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="my-16"
        >
          <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
            Current Openings
          </h2>
          
          <Card className="overflow-hidden border border-[#FFBF00]/20 hover:border-[#FFBF00]/50 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-12 text-center">
              <p className="text-lg text-muted-foreground mb-4">
                There are no current openings available at this time.
              </p>
              <p className="text-muted-foreground">
                Please email us at careers@goldenace.com to submit your resume for future opportunities.
              </p>
            </CardContent>
          </Card>
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="my-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
                Employee Testimonials
              </h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card p-6 rounded-lg shadow-sm mb-6 relative border border-[#FFBF00]/20 hover:border-[#FFBF00]/40 transition-all"
              >
                <div className="absolute top-6 left-6 transform -translate-x-12 -translate-y-12 text-6xl text-[#FFBF00]/20">
                  &quot;
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  &quot;Working at Golden Ace Ventures has been an incredible
                  journey. The company&quos;s commitment to innovation and
                  sustainability aligns perfectly with my professional values,
                  and I&quos;ve had the opportunity to work on projects that are
                  making a real difference.&quot;
                </p>
                <div className="flex items-center">
                  {/* <div className="h-12 w-12 rounded-full bg-muted mr-3 overflow-hidden border-2 border-[#FFBF00]/30">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Employee"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div> */}
                  <div>
                    <p className="font-medium">Priya Sharma</p>
                    <p className="text-sm text-muted-foreground">
                      Solar Project Engineer, 3 years
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card p-6 rounded-lg shadow-sm relative border border-[#FFBF00]/20 hover:border-[#FFBF00]/40 transition-all"
              >
                <div className="absolute top-6 left-6 transform -translate-x-12 -translate-y-12 text-6xl text-[#FFBF00]/20">
                  &quot;
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  &quot;The collaborative culture and emphasis on continuous
                  learning at Golden Ace Ventures has helped me grow both
                  professionally and personally. I appreciate being part of a
                  team that values innovation and is committed to making a
                  positive impact.&quot;
                </p>
                <div className="flex items-center">
                  {/* <div className="h-12 w-12 rounded-full bg-muted mr-3 overflow-hidden border-2 border-[#FFBF00]/30">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Employee"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div> */}
                  <div>
                    <p className="font-medium">Rahul Patel</p>
                    <p className="text-sm text-muted-foreground">
                      Business Development Manager, 2 years
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl border border-[#FFBF00]/20">
              <Image
                src="/assets/images/team.jpeg"
                alt="Team at Golden Ace Ventures"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Our Team</h3>
                  <p className="text-white/80">
                    A diverse group of professionals united by a passion for
                    innovation and sustainability.
                  </p>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "40%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="h-1 bg-[#FFBF00] mt-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        {/* Join Our Team Section - Commented Out
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="my-16 py-12 bg-gradient-to-r from-[#FFBF00]/10 to-[#FFBF00]/5 rounded-xl border border-[#FFBF00]/20"
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70">
              Join Our Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don&apos;t see a position that matches your skills? We&quos;re
              always looking for talented individuals to join our team. Send us
              your resume and let us know how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="group bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black"
              >
                Submit Your Resume
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
                View All Openings
              </Button>
            </div>
          </div>
        </motion.section>
        */}
      </section>
    </main>
  );
}

export default CareersPage;
