import { Facebook, Instagram, Linkedin } from "lucide-react";

export const HERO_TEXT_TOP_LEFT = {
  title: "Innovative Solutions",
  subtitle: "Transforming ideas into digital reality",
};

export const HERO_TEXT_BOTTOM_RIGHT = {
  title: "Creative Excellence",
  subtitle: "Pushing boundaries with cutting-edge technology",
};

export const MENU_ITEMS = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Ventures", href: "/ventures" },
  { title: "Projects", href: "/projects" },
  { title: "Blogs", href: "/blogs" },
  { title: "Media", href: "/media" },
  { title: "Resources", href: "/resources" },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = [
  { icon: Facebook, href: "https://facebook.com/bartergram" },
  { icon: Instagram, href: "https://instagram.com/bartergram.ai" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/bartergram",
  },
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

export const COMPANY_BLOGS = [
  {
    title: "The Future of Renewable Energy in India",
    excerpt:
      "Exploring the growth potential and challenges for renewable energy adoption in India's evolving energy landscape.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Energy",
    date: "May 15, 2023",
    author: "Anil Kumar Mittal",
    readTime: "8 min read",
  },
  {
    title: "Smart Infrastructure: Building for Tomorrow",
    excerpt:
      "How IoT and AI are transforming infrastructure development and creating more efficient, sustainable urban environments.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Infrastructure",
    date: "April 22, 2023",
    author: "Aparajeet Mittal",
    readTime: "6 min read",
  },
  {
    title: "Solar Manufacturing: India's Opportunity",
    excerpt:
      "Analyzing the potential for India to become a global leader in solar PV manufacturing and the challenges ahead.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Energy",
    date: "March 10, 2023",
    author: "Nisarg Doshi",
    readTime: "10 min read",
  },
  {
    title: "AI in Energy Management: A Game Changer",
    excerpt:
      "How artificial intelligence is revolutionizing energy management and creating new opportunities for efficiency and sustainability.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Technology",
    date: "February 28, 2023",
    author: "Rahul Patel",
    readTime: "7 min read",
  },
  {
    title: "Financing Renewable Energy Projects",
    excerpt:
      "A comprehensive guide to the financial structures and funding options available for renewable energy projects in India.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Business",
    date: "January 15, 2023",
    author: "Priya Sharma",
    readTime: "9 min read",
  },
  {
    title: "The Rise of Smart Cities in India",
    excerpt:
      "Exploring the development of smart cities in India and the technologies driving urban transformation.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Infrastructure",
    date: "December 5, 2022",
    author: "Aparajeet Mittal",
    readTime: "8 min read",
  },
  {
    title: "Sustainable Building Materials: The Future of Construction",
    excerpt:
      "Innovative eco-friendly materials that are revolutionizing the construction industry in India.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Infrastructure",
    date: "November 18, 2022",
    author: "Nisarg Doshi",
    readTime: "7 min read",
  },
  {
    title: "Energy Storage Solutions for Renewable Integration",
    excerpt:
      "Exploring the latest technologies in energy storage that are enabling greater renewable energy adoption.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Energy",
    date: "October 30, 2022",
    author: "Anil Kumar Mittal",
    readTime: "9 min read",
  },
  {
    title: "Digital Twins in Infrastructure Management",
    excerpt:
      "How virtual replicas are transforming the way we design, build and maintain infrastructure projects.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Technology",
    date: "October 12, 2022",
    author: "Rahul Patel",
    readTime: "6 min read",
  },
];
export type BlogPost = (typeof COMPANY_BLOGS)[number];

export const SERVICES_DATA = [
  {
    id: "energy",
    title: "Renewable, Green & Thermal Energy",
    icon: "solar",
    description:
      "Comprehensive solutions across the renewable and thermal energy spectrum.",
    items: [
      {
        title: "Solar Projects",
        description:
          "Full-cycle solutions from development, EPC, and financing. Expertise in large-scale solar tenders.",
      },
      {
        title: "Thermal Energy Solutions",
        description:
          "Enhancing thermal plant efficiency through innovative technologies and operational improvements.",
      },
      {
        title: "Project Support Finance",
        description:
          "REC & IREDA-approved financial solutions for solar EPC projects, enabling sustainable development.",
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure Development",
    icon: "building",
    description:
      "Building the foundations for sustainable growth and development.",
    items: [
      {
        title: "Roads & Highways",
        description:
          "Execution of large-scale infrastructure projects with a focus on quality and sustainability.",
      },
      {
        title: "LT & HT Panels",
        description:
          "Electrical solutions for industrial and commercial sectors, ensuring reliability and efficiency.",
      },
      {
        title: "Urban & Industrial Development",
        description:
          "Smart city projects, industrial parks, and comprehensive infrastructure development solutions.",
      },
    ],
  },
  {
    id: "tech",
    title: "Smart Tech & Innovation",
    icon: "chip",
    description:
      "Leveraging cutting-edge technology to drive efficiency and innovation.",
    items: [
      {
        title: "IoT & AI Integration",
        description:
          "Enhancing efficiency in energy and infrastructure through smart, connected solutions.",
      },
      {
        title: "Advanced Monitoring Systems",
        description:
          "Real-time performance tracking and analytics for optimized operations.",
      },
      {
        title: "Industrial Automation",
        description:
          "AI-driven operational efficiency improvements for manufacturing and industrial processes.",
      },
    ],
  },
  {
    id: "advisory",
    title: "Business Consultancy & Advisory",
    icon: "briefcase",
    description:
      "Strategic guidance to help businesses thrive in a competitive landscape.",
    items: [
      {
        title: "Market Strategy & Growth Consulting",
        description:
          "Helping businesses scale through targeted market strategies and growth initiatives.",
      },
      {
        title: "Investment & Financial Structuring",
        description:
          "Mergers, acquisitions, and funding solutions tailored to business objectives.",
      },
      {
        title: "Sales & Marketing Advisory",
        description:
          "High-impact branding & sales strategies to drive business growth and market presence.",
      },
    ],
  },
  {
    id: "investments",
    title: "Start-up Incubation & Investments",
    icon: "trending-up",
    description:
      "Nurturing innovation and supporting the next generation of industry leaders.",
    items: [
      {
        title: "Incubation & Mentorship",
        description:
          "Early-stage support for startups in energy, infrastructure, and technology sectors.",
      },
      {
        title: "Investment Partnerships",
        description:
          "Providing capital and strategic growth assistance to promising ventures.",
      },
      {
        title: "Gener8tor India Category 2 AIF Fund",
        description:
          "General Partner investments in high-potential startups and growth-stage companies.",
      },
    ],
  },
];
export type ServiceData = (typeof SERVICES_DATA)[number];
export type ServiceItem = ServiceData["items"][number];

export const COMPANY_PROJECTS_EXTENDED = [
  {
    title: "MahaGenco Bhusawal Thermal Plant POC",
    category: "Energy",
    status: "Ongoing",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Proof of concept implementation for efficiency improvements at the MahaGenco Bhusawal Thermal Power Plant.",
    tags: ["Thermal Energy", "Efficiency", "POC"],
  },
  {
    title: "Highway Development Project",
    category: "Infrastructure",
    status: "Completed",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Large-scale highway development project improving connectivity and transportation infrastructure.",
    tags: ["Roads", "Infrastructure", "Development"],
  },
  {
    title: "Solar PV Manufacturing Scale-up",
    category: "Energy",
    status: "In Progress",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Scaling up Solar PV Manufacturing capacity to 1300 MW, enhancing renewable energy production capabilities.",
    tags: ["Solar", "Manufacturing", "Scale-up"],
  },
  {
    title: "Smart City Infrastructure",
    category: "Infrastructure",
    status: "Planning",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Comprehensive smart city infrastructure development with IoT integration and sustainable design principles.",
    tags: ["Smart City", "IoT", "Sustainability"],
  },
  {
    title: "Industrial Automation System",
    category: "Technology",
    status: "Completed",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "AI-driven industrial automation system implementation for manufacturing process optimization.",
    tags: ["Automation", "AI", "Manufacturing"],
  },
  {
    title: "Renewable Energy Financing",
    category: "Advisory",
    status: "Ongoing",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Structured financing solutions for large-scale renewable energy projects, enabling sustainable development.",
    tags: ["Finance", "Renewable", "Advisory"],
  },
];
