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
    name: "Anil Kumar Mittal",
    position: "Chairman",
    image: "/assets/images/ak.jpg", // Local image path from the public directory
    bio: "Strategic thinker driving innovation and growth across the organization.",
  },
  {
    name: "Aparjeet Mittal",
    position: "Managing Partner & CEO",
    image: "/assets/images/son.jpg", // Local image path from the public directory
    bio: "Operations expert ensuring excellence in project execution and delivery.",
  },
  {
    name: "Nisarg Doshi",
    position: "Cheif Business officer",
    image: "/assets/images/nisarg.jpeg", // Local image path from the public directory
    bio: "Marketing expert with a proven track record in brand building and digital strategy.",
  },
];

export const COMPANIES = [
  { name: "Vivid", logo: "/assets/images/vivid.png" },
  { name: "GAME Solar", logo: "/assets/images/game.png" },
  { name: "Secutech", logo: "/assets/images/Secutech.jpg" },
  { name: "Gener8tor", logo: "/assets/images/gener.jpg" },
  {
    name: "RE Plus",
    logo: "/assets/images/RE.jpg",
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
    title: "Renewable, Green & Thermal Energy",
    description:
      "Solar EPC Project Support Financing with REC & IREDA-approved funding. • End-to-end EPC projects from feasibility through to implementation. • Solar PV module manufacturing & supplies with an emphasis on high-efficiency and sustainable growth.Innovative thermal energy solutions and online cleaning technology to boost operational efficiency and reduce emissions. Advanced BESS solutions for energy storage, grid stability, and integration of renewable sources.",
    image: "/assets/images/solenerg.jfif",
    color: "oklch(0.769 0.188 70.08)", // red
  },
  {
    id: 2,
    title: "Infrastructure & Manufacturing",
    description:
      "Design and manufacture of LT & HT electrical panels tailored for industrial and commercial applications. Comprehensive consultancy and project management for roads & highways development. Execution of smart city projects and large-scale urban development initiatives that catalyze industrial development and manufacturing growth.",
    image: "/assets/images/infrastr.jpg",
    color: "oklch(0.769 0.188 70.08)", // green
  },
  {
    id: 3,
    title: "Smart Technology & Innovation ",
    description:
      "Implement industrial automation and advanced monitoring systems to enhance productivity and operational intelligence. Drive digital transformation with integrated smart technology for optimized performance.",
    image: "/assets/images/smart.jpg",
    color: "oklch(0.769 0.188 70.08)", // amber
  },
  {
    id: 4,
    title: "Business Consultancy & Advisory",
    description:
      "Customized solutions to accelerate business growth and expand market presence. Expert guidance in strategic capital formation, M&A, and funding strategies. High-impact strategies to maximize market outreach and brandpositioning.",
    image: "/assets/images/phoenix.jpg",
    color: "oklch(0.769 0.188 70.08)", // purple
  },
  {
    id: 5,
    title: "Start-up Incubation, Acceleration & Investments",
    description:
      "Nurturing high-potential start-ups with tailored incubation, acceleration, and investment partnerships.Strategic investment and capital support for promising ventures in renewable energy, infrastructure, and technology.",
      image: "/assets/images/smart.jpg",
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
    image: "https://media.biltrax.com/wp-content/uploads/2022/07/Cofrentes_nuclear_power_plant_cooling_towers_retouched.jpg",
  },
  {
    id: 2,
    title: "Solar Power Integration Project",
    description:
      "Implementation of large-scale solar power integration with existing thermal infrastructure. This project aims to reduce carbon emissions while maintaining reliable power output. The hybrid approach combines the benefits of renewable energy with the stability of traditional power generation methods.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Electrical_and_Mechanical_Services_Department_Headquarters_Photovoltaics.jpg",
  },
  {
    id: 3,
    title: "Smart Grid Implementation",
    description:
      "Modernizing the power distribution network with smart grid technologies to improve efficiency and reliability. This project includes advanced metering infrastructure, automated distribution systems, and real-time monitoring capabilities to optimize power delivery and reduce outages.",
    image: "https://assets.bizclikmedia.net/1800/df939f5d2a2a1c5ebe57d77599d1298f:58ce784c0141c9e48c376e59e38ae392/gettyimages-1029186020-jpg.webp",
  },
];

export const COMPANY_BLOGS = [
  {
    title: "The Future of Renewable Energy",
    excerpt:
      "Exploring the latest trends and innovations in renewable energy sources.",
    image: "/assets/images/future.png",
    category: "Energy",
    date: "2024-01-20",
    author: "John Doe",
    readTime: "5 min",
  },
  {
    title: "Infrastructure Development in Urban Areas",
    excerpt:
      "Discussing the challenges and opportunities in building sustainable infrastructure in cities.",
      image: "/assets/images/infra.jpg",
      category: "Infrastructure",
    date: "2024-02-15",
    author: "Jane Smith",
    readTime: "7 min",
  },
  {
    title: "AI and IoT: Transforming Industries",
    excerpt:
      "How artificial intelligence and the Internet of Things are revolutionizing various sectors.",
    image: "/assets/images/iot-and-ai.jpg",
    category: "Technology",
    date: "2024-03-10",
    author: "David Lee",
    readTime: "6 min",
  },
  {
    title: "Sustainable Business Practices",
    excerpt: "Adopting eco-friendly strategies for long-term business success.",
    image: "/assets/images/susbus.png",
    category: "Business",
    date: "2024-04-05",
    author: "Emily White",
    readTime: "8 min",
  },
  {
    title: "Solar Energy Innovations",
    excerpt: "New technologies and advancements in solar power generation.",
    image: "/assets/images/solenerg.jfif",
    category: "Energy",
    date: "2024-05-01",
    author: "Robert Green",
    readTime: "5 min",
  },
  {
    title: "Smart City Development",
    excerpt:
      "Creating efficient and sustainable urban environments with technology.",
      image: "/assets/images/smart.jpg",
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
    title: "Vivid Projects",
    category: "Energy",
    status: "Ongoing",
    image: "/assets/images/images.jfif",
    description:
      "From design to delivery, our team ensured that the LT & HT panels meet strict quality, safety, and performance standards, supporting seamless operations for the data centre. With precision engineering and robust build quality, our panels play a crucial role in ensuring uninterrupted power flow, enhanced efficiency, and long-term reliability. ",
    tags: ["Thermal Energy", "Efficiency", "POC"],
  },
  {
    title: "Mumbai Metro",
    category: "Infrastructure",
    status: "Completed",
    image: "/assets/images/metro.jpeg",
    description:
      "Vivid supplied high-performance LT panels to key Mumbai Metro stations, ensuring reliable power distribution for uninterrupted operations. Each panel was designed to handle high electrical loads, withstand harsh conditions, and meet stringent safety standards",
    tags: ["Roads", "Infrastructure", "Development"],
  },
  {
    title: "Phoenix Mall",
    category: "Energy",
    status: "In Progress",
    image: "/assets/images/phoenix.jpg",
    description:
      "Vivid delivered top-tier LT panels to Phoenix Mall, ensuring seamless power distribution across its massive retail, entertainment, and hospitality spaces. Designed to handle heavy electrical demand, our panels keep escalators running, lights shining, and HVAC systems operating efficiently.",
    tags: ["Solar", "Manufacturing", "Scale-up"],
  },
  {
    title: "Clean Max",
    category: "Infrastructure",
    status: "Planning",
    image: "/assets/images/hero1.jpg",
    description:
      "Vivid powered up Clean Max Technology with high-performance HT and LT panels, ensuring smooth and efficient energy distribution for their renewable power projects. Our HT panels handle high-voltage transmission with precision, while LT panels keep essential systems running flawlessly.",
    tags: ["Smart City", "IoT", "Sustainability"],
  },
  {
    title: "Smart Fire Safety Infrastructure at Park Hyatt Hotel, Goa",
    category: "Technology",
    status: "Completed",
    image: "/assets/images/g.png",
    description:
      "The Park Hyatt Hotel in Goa, spread over 45 acres with 250 villas and suites, has undergone a smart retrofit to enhance fire safety and emergency evacuation, ensuring the highest level of guest safety as per Hyatt standards.",
    tags: ["Automation", "AI", "Manufacturing"],
  },
  {
    title: "Smart Healthcare Infrastructure at Kokilaben Ambani Hospital, Mumbai",
    category: "Advisory",
    status: "Ongoing",
    image: "/assets/images/d.png",
    description:
      "The Kokilaben Ambani Hospital in Mumbai is a leading-edge smart hospital with 800+ beds, designed to deliver high-quality healthcare through integrated technology and automation. ",
    tags: ["Finance", "Renewable", "Advisory"],
  },
  {
    title: "Smart and Sustainable Infrastructure at ONGC HQ, Mumbai",
    category: "Energy",
    status: "Ongoing",
    image: "/assets/images/ongc.jpg",
    description:
      "The ONGC Headquarters in Mumbai stands as a benchmark in smart and sustainable infrastructure, combining advanced building management, security, and smart applications to create a highly efficient and secure environment. ",
    tags: ["Green Energy", "Solar", "Wind"],
  },
  {
    title: "Smart Infrastructure at Reliance ADAG Global HQ",
    category: "Infrastructure",
    status: "Completed",
    image: "/assets/images/Reliance.png",
    description:
      "The Global HQ of Reliance ADAG Group has been transformed into a state-of-the-art smart facility, integrating IBMS, ISMS, ICT, and smart applications for enhanced security, efficiency, and control. ",
    tags: ["Smart City", "IoT", "Infrastructure"],
  },
  {
    title: "Shockwave Cleaning Technology at Koradi Power Station",
    category: "Energy",
    status: "In Progress",
    image: "/assets/images/engie.jpg",
    description:
      "Boilers in power plants accumulate significant fouling over time, reducing efficiency and increasing downtime during maintenance. Traditional cleaning methods can be time-consuming and require shutdowns, impacting productivity. Mahagenco sought a more efficient cleaning solution that could be performed online without disrupting operations. ",
    tags: ["Hydroelectric", "Renewable Energy", "Sustainability"],
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
