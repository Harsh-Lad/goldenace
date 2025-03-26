"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
// import { Button } from "@/components/ui/button"
import Image from "next/image"
import Logo from "../../../public/assets/images/logo.png"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/ventures", label: "Partners" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blog" },
    { href: "/media", label: "Media" },
    { href: "/careers", label: "Careers" },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-black/40 backdrop-blur-3xl fixed w-full top-0 z-50 border-b-2 border-b-[#c3932f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-1">
              <div className="">
                <Image src={Logo} alt="" className="h-8 w-auto"/>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isActive(link.href) ? "text-[#c3932f]" : "text-gray-400"
                } hover:text-[#c3932f] transition-colors relative group`}
              >
                {link.label}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-[#c3932f] transition-all duration-500 ease-in-out ${
                    isActive(link.href) ? "w-full" : "w-0"
                  } group-hover:w-full group-hover:scale-110`}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className={`text-white p-2 px-3 rounded-4xl ${
                isActive("/contact") ? "bg-amber-300" : "bg-amber-400"
              } hover:bg-amber-300 cursor-pointer font-bold font-xl transition-all duration-300 transform hover:scale-105`}
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              className="relative w-10 h-10 focus:outline-none" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="absolute w-6 transform left-1/2 -translate-x-1/2">
                <span
                  className={`absolute h-0.5 w-6 bg-[#c3932f] transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute h-0.5 bg-[#c3932f] transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "w-0 opacity-0" : "w-6 opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-[#c3932f] transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 pb-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`${
                  isActive(link.href) 
                    ? "text-[#c3932f] font-medium" 
                    : "text-gray-400"
                } hover:text-[#c3932f] transition-colors`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className={`${
                isActive("/contact") 
                  ? "bg-amber-300" 
                  : "bg-[#c3932f] hover:bg-[#b38429]"
              } text-white p-2 text-center rounded-full transition-all duration-300 transform hover:scale-105`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
