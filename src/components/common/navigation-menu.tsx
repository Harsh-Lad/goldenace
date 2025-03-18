"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Logo from "../../../public/assets/images/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-black/40 backdrop-blur-3xl fixed w-full top-0 z-50 border-b-2 border-b-[#c3932f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-1">
              <div className="">
                <Image src={Logo} alt="" className="h-10 w-auto"/>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-400 hover:text-[#c3932f] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-[#c3932f] transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-400 hover:text-[#c3932f] transition-colors">
              Services
            </Link>
            <Link href="/ventures" className="text-gray-400 hover:text-[#c3932f] transition-colors">
              Ventures
            </Link>
            <Link href="/projects" className="text-gray-400 hover:text-[#c3932f] transition-colors">
              Projects
            </Link>
            <Link href="/blogs" className="text-gray-400 hover:text-[#c3932f] transition-colors">
              Blog
            </Link>
            <Link href="/media" className="text-gray-400 hover:text-[#c3932f] transition-colors">
              Media
            </Link>
            {/* <Link href="#" className="text-gray-400 hover:text-[#c3932f] transition-colors">
              Resources
            </Link> */}
            <Link href="/careers" className="text-gray-400 hover:text-[#c3932f] transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="text-white p-2 px-3 rounded-4xl bg-amber-400 hover:bg-amber-300 cursor-pointer font-bold font-xl">
                Contact Us
            </Link>
          </div>

          <div className="md:hidden">
            <button className="relative w-10 h-10 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="absolute w-6 transform left-1/2 -translate-x-1/2">
                <span
                  className={`absolute h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute h-0.5 bg-gray-800 transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "w-0 opacity-0" : "w-6 opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 pb-6">
            <Link href="#" className="text-gray-400 hover:text-[#c3932f] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-[#c3932f] transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-[#c3932f] transition-colors">
              Blog
            </Link>
            <Link href="/pages" className="text-gray-400 hover:text-[#c3932f] transition-colors">
              Pages
            </Link>
            <Button className="bg-[#c3932f] hover:bg-[#b38429] text-white rounded-full transition-all duration-300 transform hover:scale-105">
              Pitch your startup →
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
