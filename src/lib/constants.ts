import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

export const HERO_TEXT_TOP_LEFT = {
  title: "Innovative Solutions",
  subtitle: "Transforming ideas into digital reality",
};

export const HERO_TEXT_BOTTOM_RIGHT = {
  title: "Creative Excellence",
  subtitle: "Pushing boundaries with cutting-edge technology",
};

export const MENU_ITEMS = [
  { number: "01", title: "Home", href: "/" },
  { number: "02", title: "About Us", href: "/about" },
  { number: "03", title: "Services", href: "/services" },
  { number: "04", title: "Ventures", href: "/ventures" },
  { number: "05", title: "Projects", href: "/projects" },
  { number: "06", title: "Blogs", href: "/blogs" },
  { number: "07", title: "Media", href: "/medias" },
  { number: "08", title: "Resources", href: "/resources" },
  { number: "09", title: "Careers", href: "/careers" },
  { number: "10", title: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = [
  { icon: BsInstagram, href: "https://instagram.com/bartergram.ai", size: 30 },
  {
    icon: LiaLinkedin,
    href: "https://linkedin.com/company/bartergram",
    size: 40,
  },
  { icon: FaFacebookF, href: "https://facebook.com/bartergram", size: 25 },
];

export const TEAM_MEMBERS = [
  {
    name: "Anil Kumar Mittal",
    position: "Chairman",
    // Changed from actual file paths to placeholder SVGs to prevent 404 errors
    image: "/placeholder.svg?height=700&width=500",
    bio: "Visionary leader with extensive experience in energy and infrastructure sectors.",
  },
  {
    name: "Aparajeet Mittal",
    position: "Managing Partner",
    // Changed from actual file paths to placeholder SVGs to prevent 404 errors
    image: "/placeholder.svg?height=700&width=500",
    bio: "Strategic thinker driving innovation and growth across the organization.",
  },
  {
    name: "Nisarg Doshi",
    position: "Chief Operations Officer",
    // Changed from actual file paths to placeholder SVGs to prevent 404 errors
    image: "/placeholder.svg?height=700&width=500",
    bio: "Operations expert ensuring excellence in project execution and delivery.",
  },
];

export const COMPANIES = [
  { name: "Vivid", logo: "/placeholder.svg?height=200&width=200" },
  { name: "GAME Solar", logo: "/placeholder.svg?height=200&width=200" },
  { name: "Secutech", logo: "/placeholder.svg?height=200&width=200" },
  { name: "Gener8tor", logo: "/placeholder.svg?height=200&width=200" },
  {
    name: "OCT Online Cleaning Tech",
    logo: "/placeholder.svg?height=200&width=200",
  },
];

export const COMPANY_TIMELINE = [
  {
    year: "2015",
    title: "Foundation",
    description:
      "Golden Ace Ventures LLP was established with a vision to pioneer sustainable solutions.",
    category: "Milestone",
  },
  {
    year: "2017",
    title: "First Major Project",
    description:
      "Successfully completed our first large-scale infrastructure development project.",
    category: "Project",
  },
  {
    year: "2019",
    title: "Expansion into Renewable Energy",
    description:
      "Launched our renewable energy division, focusing on solar and thermal energy solutions.",
    category: "Expansion",
  },
  {
    year: "2021",
    title: "Smart Technology Integration",
    description:
      "Incorporated IoT and AI solutions into our service offerings, enhancing our technological capabilities.",
    category: "Innovation",
  },
  {
    year: "2023",
    title: "Investment Fund Launch",
    description:
      "Established Gener8tor India Category 2 AIF Fund to support promising startups in our focus sectors.",
    category: "Investment",
  },
];

export const COMPANY_SERVICES = [
  {
    id: 1,
    title: "Renewable Energy",
    description:
      "Harnessing natural resources for sustainable power generation with minimal environmental impact.",
    image: "/placeholder.svg?height=400&width=400",
    color: "#3b82f6", // blue
  },
  {
    id: 2,
    title: "Thermal Power",
    description:
      "Efficient thermal energy conversion systems for reliable and consistent power output.",
    image: "/placeholder.svg?height=400&width=400",
    color: "#ef4444", // red
  },
  {
    id: 3,
    title: "Smart Solutions",
    description:
      "Intelligent systems that optimize energy distribution and consumption patterns.",
    image: "/placeholder.svg?height=400&width=400",
    color: "#10b981", // green
  },
  {
    id: 4,
    title: "Grid Management",
    description:
      "Advanced infrastructure for efficient power transmission and distribution networks.",
    image: "/placeholder.svg?height=400&width=400",
    color: "#f59e0b", // amber
  },
  {
    id: 5,
    title: "Energy Storage",
    description:
      "Innovative technologies to store excess energy for use during peak demand periods.",
    image: "/placeholder.svg?height=400&width=400",
    color: "#8b5cf6", // purple
  },
];

export const COMPANY_PROJECTS = [
  {
    id: 1,
    title: "MahaGenco Bhusawal Thermal Plant POC",
    description: `The plant is a coal-fired thermal power station.
      It has undergone various stages of development, with older units being retired and newer, higher-capacity units being added.
      Currently operational units contribute to a significant portion of the plant's overall power generation.
      Information indicates that the plants current operating capacity is over 1210 MW.
      There is also information showing that MahaGenco has plans to, and or is building a new 660MW unit.`,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    title: "Solar Power Integration Project",
    description:
      "Implementation of large-scale solar power integration with existing thermal infrastructure. This project aims to reduce carbon emissions while maintaining reliable power output. The hybrid approach combines the benefits of renewable energy with the stability of traditional power generation methods.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    title: "Smart Grid Implementation",
    description:
      "Modernizing the power distribution network with smart grid technologies to improve efficiency and reliability. This project includes advanced metering infrastructure, automated distribution systems, and real-time monitoring capabilities to optimize power delivery and reduce outages.",
    image: "/placeholder.svg?height=400&width=400",
  },
];
