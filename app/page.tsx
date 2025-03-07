"use client"
import type { NextPage } from "next"
import ScrollAnimation from "../components/scroll-animation"
import { useState, useEffect } from "react"
import loadingGif from "@/public/logobreathe.gif"
import Image from "next/image"
import wLogo from "@/public/wLogo.png"
import { RxHamburgerMenu } from "react-icons/rx"
import Link from "next/link"
import { LiaLinkedin } from "react-icons/lia"
import { FaFacebookF } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DialogTitle } from "@radix-ui/react-dialog"
import { ShowReel } from "@/components/show-reel"

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2500) // Start fading out after 2.5 seconds
    const timer2 = setTimeout(() => setLoading(false), 3000) // Simulate loading time
    return () => {
      clearTimeout(timer)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div className="">
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "black",
            transition: "opacity 0.5s ease-in-out",
            opacity: fadeOut ? 0 : 1,
          }}
        >
          <Image src={loadingGif || "/placeholder.svg"} alt="loading gif" className="w-1/2 h-auto" />
        </div>
      ) : (
        <>
          {/* Hero Text - Top Left */}
          <div className="absolute top-50 left-36 z-10 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              <span className="text-[#FFC000]">Innovative</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl max-w-md">Transforming ideas into digital reality</p>
          </div>

          {/* Hero Text - Bottom Right */}
          <div className="absolute bottom-50 right-10 z-10 text-right text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-2">
              Creative <span className="text-[#FFC000]">Excellence</span>
            </h2>
            <p className="text-lg md:text-xl max-w-md ml-auto">Pushing boundaries with cutting-edge technology</p>
          </div>

          <ScrollAnimation />
          <div className="absolute top-[100vh] left-[2%] w-[96%]  px-[2%] h-full backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)] rounded-[10px] border border-[rgba(255,255,255,0.3)] z-1">
            <ShowReel />
          </div>
          <Image
            src={wLogo || "/placeholder.svg"}
            alt={"hello world"}
            className="absolute top-10 left-10 w-20 h-auto"
          />
          <div
            onClick={() => setIsSheetOpen(true)}
            className="bg-[#FFC000] text-white hover:text-[#FFC000] hover:bg-white rounded-xl p-4 z-10 fixed bottom-10 right-10 w-fit"
          >
            <RxHamburgerMenu className="w-7 h-auto z-10" />
          </div>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button className="hidden"></button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black-900 p-4">
              <DialogTitle className="text-left text-3xl px-4 font-bold">Menu</DialogTitle>
              <div className="p-4">
                <Link href={"/"} className="block py-4 font-semibold text-xl ">
                  Home
                </Link>
                <Link href={"/"} className="block py-4 font-semibold text-xl ">
                  About us
                </Link>
                <Link href={"/"} className="block py-4 font-semibold text-xl ">
                  Services
                </Link>
                <Link href={"/"} className="block py-4 font-semibold text-xl ">
                  Ventures
                </Link>
                <Link href={"/"} className="block py-4 font-semibold text-xl ">
                  Projects
                </Link>
                <Link href={"/"} className="block py-4 font-semibold text-xl ">
                  Blogs
                </Link>
                <Link href={"/"} className="block py-4 font-semibold text-xl ">
                  Media
                </Link>
                <Link href={"/"} className="block py-4 font-semibold text-xl ">
                  Resources
                </Link>
                <Link href={"/"} className="block py-4 font-semibold text-xl ">
                  Careers
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          <div className="flex items-center gap-2 absolute bottom-10 left-10 z-10 text-white">
            <Link href={"/"}>
              <LiaLinkedin size={35} />
            </Link>
            <Link href={"/"}>
              <FaFacebookF size={25} />
            </Link>
            <Link href={"/"} className="ml-2">
              <BsInstagram size={25} />
            </Link>
          </div>

          <div style={{ height: "450vh", padding: "20px" }}></div>
        </>
      )}
    </div>
  )
}

export default Home

