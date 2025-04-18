"use client"

import PageTitleSection from "@/components/common/page-title-section"
import CompanyTimeline from "@/components/pages/about/timeline"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { COMPANIES, TEAM_MEMBERS } from "@/lib/constants"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  // Split companies into two rows for better layout control


  return (
    <main ref={containerRef} className="container mx-auto px-4 py-12 max-w-7xl">
      <PageTitleSection
        title="ABOUT US"
        description="Pioneering solutions in renewable energy, infrastructure development, and smart technology"
      />
      <section className="max-w-7xl mx-auto">
        {/* Vision Section with Tabs */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="my-24"
        >
          <Tabs defaultValue="vision" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3 bg-[#FFBF00]/10">
                <TabsTrigger value="vision" className="data-[state=active]:bg-[#FFBF00] data-[state=active]:text-black">
                  Vision
                </TabsTrigger>
                <TabsTrigger
                  value="mission"
                  className="data-[state=active]:bg-[#FFBF00] data-[state=active]:text-black"
                >
                  Mission
                </TabsTrigger>
                <TabsTrigger value="values" className="data-[state=active]:bg-[#FFBF00] data-[state=active]:text-black">
                  Values
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="vision" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/60">
                    Our Vision
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    To be the strategic consulting firm fueling transformation in renewable energy, infrastructure,
                    smart technology, and high-growth sectors worldwide.
                  </p>
                </div>
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://sloanreview.mit.edu/wp-content/uploads/2024/08/2024FALL_Misra-1290x860-1.jpg" // Image address link
                    alt="Golden Ace Ventures Vision"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "https://via.placeholder.com/1000x800" // Fallback to a placeholder image link
                      target.onerror = null // Prevent infinite loop
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <Badge className="mb-3 bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black">Sustainable Future</Badge>
                    <h3 className="text-2xl font-bold text-white mb-2">Transforming Industries</h3>
                    <p className="text-white/80">Through innovation and strategic partnerships</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mission" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D5612AQHpyIe8J9pfEg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708436440651?e=2147483647&v=beta&t=eEnvex6y8Bb4PPEEZQ7s87wZt_Yr4lhp6qKHB7WzcvY"
                    alt="Golden Ace Ventures Mission"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src =
                        "https://media.licdn.com/dms/image/v2/D5612AQHpyIe8J9pfEg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708436440651?e=2147483647&v=beta&t=eEnvex6y8Bb4PPEEZQ7s87wZt_Yr4lhp6qKHB7WzcvY"
                      target.onerror = null
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <Badge className="mb-3 bg-[#FFBF00] hover:bg-[#FFBF00]/80 text-black">Global Impact</Badge>
                    <h3 className="text-2xl font-bold text-white mb-2">Driving Change</h3>
                    <p className="text-white/80">With purpose-driven initiatives</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/60">
                    Our Mission
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    Raising businesses with smart capital, strategic insights, and operational excellence to achieve
                    sustainable, profitable growth across industries.{" "}
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="values" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#FFBF00]/20">
                  <div className="w-12 h-12 bg-[#FFBF00]/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-[#FFBF00] text-xl font-bold">01</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">We drive creative thinking and cutting-edge solutions.</p>
                </div>

                <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#FFBF00]/20">
                  <div className="w-12 h-12 bg-[#FFBF00]/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-[#FFBF00] text-xl font-bold">02</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                  <p className="text-muted-foreground">
                    We champion responsible practices that secure long-term benefits
                  </p>
                </div>

                <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#FFBF00]/20">
                  <div className="w-12 h-12 bg-[#FFBF00]/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-[#FFBF00] text-xl font-bold">03</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Integrity</h3>
                  <p className="text-muted-foreground">
                    We commit to unwavering honesty, transparency, and ethical conduct in every decision and action.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.section>

        <Separator className="my-16 bg-[#FFBF00]/20" />

        {/* Leadership Team Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="my-24"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70"
          >
            LEADERSHIP TEAM
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Meet the visionaries driving innovation and excellence at Golden Ace Ventures LLP
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {TEAM_MEMBERS.map((leader, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden group cursor-pointer border-[#FFBF00]/20 hover:border-[#FFBF00]/50 transition-colors">
                  <div className="relative h-[350px] overflow-hidden">
                    <Image
                      src={leader.image || "/placeholder.svg?height=700&width=500"}
                      alt={leader.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=700&width=500"
                        target.onerror = null
                      }}
                    />
                    <div className="absolute inset-0 bg-[#FFBF00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                      <p className="text-black font-medium text-left">{leader.bio}</p>
                    </div>
                    {/*<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>*/}
                    {/*<div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white/90 text-sm">{leader.bio}</p>
                    </div>*/}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{leader.name}</h3>
                    <p className="text-[#FFBF00] font-medium">{leader.position}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <Separator className="my-16 bg-[#FFBF00]/20" />

        {/* Associated Companies Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="my-24"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70"
          >
            Associated Companies
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Our strategic partnerships and portfolio companies
          </motion.p>

          <div className="max-w-6xl mx-auto">
            {/* First row - 4 companies */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6"
            >
              {COMPANIES.map((company, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-card overflow-hidden rounded-xl p-6 flex flex-col items-center justify-center h-[200px] shadow-sm hover:shadow-md transition-all border border-[#FFBF00]/20 hover:border-[#FFBF00]/50"
                >
                  <div className={`relative ${company.name === "Gener8tor" ? "md:w-44 md:h-44 w-36 h-36" : "w-36 h-36"} mb-4`}>
                    <div className="absolute inset-0 bg-white rounded-lg p-4">
                      <Image
                        src={company.logo || "/placeholder.svg?height=200&width=200"}
                        alt={company.name}
                        fill
                        className="object-contain w-24 h-auto"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=200&width=200"
                          target.onerror = null
                        }}
                      />
                    </div>
                  </div>
                  <p className="font-medium text-center">{company.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <Separator className="my-16 bg-[#FFBF00]/20" />

        {/* Company Timeline Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="my-24"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF00] to-[#FFBF00]/70"
          >
            Our Journey
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Milestones that have shaped our growth and success
          </motion.p>

          <CompanyTimeline />
        </motion.section>
      </section>
    </main>
  )
}

export default AboutPage

