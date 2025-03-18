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
    name: "Meenakshi Rao",
    position: "Executive Director",
    image: "/assets/images/meenakshi.jpg", // Local image path from the public directory
    bio: "Visionary leader with extensive experience in energy and infrastructure sectors.",
  },
  {
    name: "Aparajeet Mittal",
    position: "Managing Partner",
    image: "/assets/images/ak.jpg", // Local image path from the public directory
    bio: "Strategic thinker driving innovation and growth across the organization.",
  },
  {
    name: "Nisarg Doshi",
    position: "Chief Operations Officer",
    image: "/assets/images/son.jpg", // Local image path from the public directory
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
    color: "oklch(0.769 0.188 70.08)", // blue
  },
  {
    id: 2,
    title: "Thermal Power",
    description:
      "Efficient thermal energy conversion systems for reliable and consistent power output.",
    image: "/placeholder.svg?height=400&width=400",
    color: "oklch(0.769 0.188 70.08)", // red
  },
  {
    id: 3,
    title: "Smart Solutions",
    description:
      "Intelligent systems that optimize energy distribution and consumption patterns.",
    image: "/placeholder.svg?height=400&width=400",
    color: "oklch(0.769 0.188 70.08)", // green
  },
  {
    id: 4,
    title: "Grid Management",
    description:
      "Advanced infrastructure for efficient power transmission and distribution networks.",
    image: "/placeholder.svg?height=400&width=400",
    color: "oklch(0.769 0.188 70.08)", // amber
  },
  {
    id: 5,
    title: "Energy Storage",
    description:
      "Innovative technologies to store excess energy for use during peak demand periods.",
    image: "/placeholder.svg?height=400&width=400",
    color: "oklch(0.769 0.188 70.08)", // purple
  },
  {
    id: 6,
    title: "Energy Storage",
    description:
      "Innovative technologies to store excess energy for use during peak demand periods.",
    image: "/placeholder.svg?height=400&width=400",
    color: "oklch(0.769 0.188 70.08)", // purple
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
    image: "/assets/images/son.jpg",
  },
  {
    id: 2,
    title: "Solar Power Integration Project",
    description:
      "Implementation of large-scale solar power integration with existing thermal infrastructure. This project aims to reduce carbon emissions while maintaining reliable power output. The hybrid approach combines the benefits of renewable energy with the stability of traditional power generation methods.",
    image: "/assets/images/meenakshi.jpg",
  },
  {
    id: 3,
    title: "Smart Grid Implementation",
    description:
      "Modernizing the power distribution network with smart grid technologies to improve efficiency and reliability. This project includes advanced metering infrastructure, automated distribution systems, and real-time monitoring capabilities to optimize power delivery and reduce outages.",
    image: "/assets/images/ak.jpg",
  },
];

export const COMPANY_BLOGS = [
  {
    title: "The Future of Renewable Energy",
    excerpt:
      "Exploring the latest trends and innovations in renewable energy sources.",
    image: "/placeholder.svg",
    category: "Energy",
    date: "2024-01-20",
    author: "John Doe",
    readTime: "5 min",
  },
  {
    title: "Infrastructure Development in Urban Areas",
    excerpt:
      "Discussing the challenges and opportunities in building sustainable infrastructure in cities.",
    image: "/placeholder.svg",
    category: "Infrastructure",
    date: "2024-02-15",
    author: "Jane Smith",
    readTime: "7 min",
  },
  {
    title: "AI and IoT: Transforming Industries",
    excerpt:
      "How artificial intelligence and the Internet of Things are revolutionizing various sectors.",
    image: "/placeholder.svg",
    category: "Technology",
    date: "2024-03-10",
    author: "David Lee",
    readTime: "6 min",
  },
  {
    title: "Sustainable Business Practices",
    excerpt: "Adopting eco-friendly strategies for long-term business success.",
    image: "/placeholder.svg",
    category: "Business",
    date: "2024-04-05",
    author: "Emily White",
    readTime: "8 min",
  },
  {
    title: "Solar Energy Innovations",
    excerpt: "New technologies and advancements in solar power generation.",
    image: "/placeholder.svg",
    category: "Energy",
    date: "2024-05-01",
    author: "Robert Green",
    readTime: "5 min",
  },
  {
    title: "Smart City Development",
    excerpt:
      "Creating efficient and sustainable urban environments with technology.",
    image: "/placeholder.svg",
    category: "Infrastructure",
    date: "2024-05-26",
    author: "Linda Brown",
    readTime: "7 min",
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
          "Solar EPC Project Support Financing – REC & IREDA-approved funding solutions for solar EPC projects. EPC Projects – Full-cycle execution from feasibility to implementation. Solar PV Module Manufacturing and Supplies – Manufacturing, sourcing, and supplying high-efficiency solar PV modules.",
      },
      {
        title: "Thermal Energy Solutions",
        description:
          "Online Cleaning Technology Pvt. Ltd. – Innovative thermal plant optimization solutions to enhance operational efficiency and reduce emissions.",
      },
      {
        title: "Battery Energy Storage Systems (BESS)",
        description:
          "Battery Energy Storage Solutions – Advanced BESS solutions for energy efficiency, grid stability, and renewable energy integration.",
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
          "Construction and execution of large-scale road projects through consultancy, planning, and project management.",
      },
      {
        title: "Electrical & Industrial Solutions",
        description:
          "Manufacturing and Supply of LT & HT Electrical Panels – Custom-built solutions for industrial and commercial applications.",
      },
      {
        title: "Urban & Industrial Development",
        description:
          "Smart city projects, industrial parks, and large-scale infrastructure developments to support urban expansion and economic growth.",
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
          "Technology-driven solutions to enhance operational efficiency.",
      },
      {
        title: "Advanced Monitoring Systems",
        description:
          "Real-time performance tracking and optimization.",
      },
      {
        title: "Industrial Automation",
        description:
          "Leveraging AI and automation for enhanced productivity and process efficiency.",
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
          "Helping businesses scale, position, and expand into new markets.",
      },
      {
        title: "Investment & Financial Structuring",
        description:
          "Facilitating funding, M&A, and investor relations for startups and large enterprises.",
      },
      {
        title: "Sales & Marketing Advisory",
        description:
          "High-impact sales strategies and brand positioning to maximize business outreach.",
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
          "Supporting early-stage startups in energy, infrastructure, and technology.",
      },
      {
        title: "Investment Partnerships",
        description:
          "Providing capital and strategic growth assistance to promising businesses.",
      },
      {
        title: "Gener8tor India Category 2 AIF Fund",
        description:
          "General Partner investment in the fund, supporting startups and high-growth ventures.",
      },
    ],
  },
];

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



export interface Section {
  number: string;
  category: string;
  title: string;
  mockupImage: string;
  isVideo: boolean;
}

export const homePageScrollSections: Section[] = [
  {
    number: "01",
    category: "Renewable, Green & Thermal Energy",
    title: "Solar Projects,Thermal Energy Solutions: for thermal plant optimization.",
    mockupImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-UaJGpZa3q920qlt7LkWqnJKab__e8qAchg&s",
    isVideo: false,
  },
  {
    number: "02",
    category: "Infrastructure Development",
    title: "Roads & Highways, LT & HT Panels, Urban & Industrial Development",
    mockupImage: "https://business.cornell.edu/wp-content/uploads/sites/2/2022/06/India-infrastructure.featured.600x400-600x400.jpg",
    isVideo: false,
  },
  {
    number: "03",
    category: "Smart Tech & Innovation",
    title: "IoT & AI Integration, Advanced Monitoring Systems, Industrial Automation",
    mockupImage: "https://www.techwalls.com/wp-content/uploads/2018/10/smart-city-1.jpg",
    isVideo: false,
  },
];

export const creatorPageScrollSections: Section[] = [
  {
    number: "01",
    category: "JOIN",
    title: "Download Our App",
    mockupImage: "/images/mockups/creators/1.svg",
    isVideo: false,
  },
  {
    number: "02",
    category: "CREATE",
    title: "Enjoy Barter Deals",
    mockupImage: "/images/mockups/creators/2.webm",
    isVideo: true,
  },
  {
    number: "03",
    category: "THRIVE WITH US",
    title: "Enjoy The Experience",
    mockupImage: "/images/mockups/creators/3.svg",
    isVideo: false,
  },
];

export const brandPageScrollSections: Section[] = [
  {
    number: "01",
    category: "JOIN",
    title: "Download Our App",
    mockupImage: "/images/mockups/brands/1.svg",
    isVideo: false,
  },
  {
    number: "02",
    category: "PROMOTE",
    title: "Advertise better",
    mockupImage: "/images/mockups/brands/2.svg",
    isVideo: false,
  },
  {
    number: "03",
    category: "PARTNER",
    title: "Leverage Creators",
    mockupImage: "/images/mockups/brands/3.svg",
    isVideo: false,
  },
];
