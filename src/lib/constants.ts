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
    bio: "Meenakshi is a seasoned expert in technology and digital transformation, spearheading smart technology innovations that accelerate operational excellence. Her adept change management skills ensure our digital strategies align with market strategy and growth consulting best practices. ",
  },
  {
    name: "Anil Kumar Mittal",
    position: "Chairman",
    image: "/assets/images/ak.jpg", // Local image path from the public directory
    bio: "With over 40 years of expertise in engineering, manufacturing, and industrial operations, Anil provides robust strategic direction and financial intelligence that fuel our infrastructure development and industrial growth. His deep industry experience in operational excellence and cost optimization ensures our business is primed for global expansion in emerging markets. ",
  },
  {
    name: "Aparjeet Mittal",
    position: "Managing Partner & CEO",
    image: "/assets/images/son.jpg", // Local image path from the public directory
    bio: "A visionary leader in renewable energy, infrastructure, and venture capital, Avi drives transformative business consulting initiatives and delivers bespoke solutions for next-generation projects. His strategic focus on sports investments and industrial operations underpins our market-driven execution and sustainable business growth.",
  },
  {
    name: "Nisarg Doshi",
    position: "Cheif Business officer",
    image: "/assets/images/nisarg.jpeg", // Local image path from the public directory
    bio: "Nisarg is the cornerstone of our market strategy and growth consulting efforts, leveraging deep expertise in sales & marketing advisory to accelerate business growth and asset value maximization. His talent in forging strategic partnerships and innovative investment & financial structuring drives our sustainable transformation. ",
  },
];

export const COMPANIES = [
  { name: "Vivid", logo: "/assets/images/Vivid.png" },
  { name: "GAME Solar", logo: "/assets/images/Game.png" },
  { name: "Secutech", logo: "/assets/images/Secutech.png" },
  { name: "Gener8tor", logo: "/assets/images/GENER8TOR.png" },
  {
    name: "RE Plus",
    logo: "/assets/images/RE.png",
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
    image: "/assets/images/ren.jpg",
    color: "oklch(0.769 0.188 70.08)", // red
  },
  {
    id: 2,
    title: "Infrastructure & Manufacturing",
    description:
      "Design and manufacture of LT & HT electrical panels tailored for industrial and commercial applications. Comprehensive consultancy and project management for roads & highways development. Execution of smart city projects and large-scale urban development initiatives that catalyze industrial development and manufacturing growth.",
    image: "/assets/images/in.jpg",
    color: "oklch(0.769 0.188 70.08)", // green
  },
  {
    id: 3,
    title: "Smart Technology & Innovation ",
    description:
      "Implement industrial automation and advanced monitoring systems to enhance productivity and operational intelligence. Drive digital transformation with integrated smart technology for optimized performance.",
    image: "/assets/images/technology.jpg",
    color: "oklch(0.769 0.188 70.08)", // amber
  },
  {
    id: 4,
    title: "Business Consultancy & Advisory",
    description:
      "Customized solutions to accelerate business growth and expand market presence. Expert guidance in strategic capital formation, M&A, and funding strategies. High-impact strategies to maximize market outreach and brandpositioning.",
    image: "/assets/images/business.jpg",
    color: "oklch(0.769 0.188 70.08)", // purple
  },
  {
    id: 5,
    title: "Start-up Incubation, Acceleration & Investments",
    description:
      "Nurturing high-potential start-ups with tailored incubation, acceleration, and investment partnerships.Strategic investment and capital support for promising ventures in renewable energy, infrastructure, and technology.",
      image: "/assets/images/Start-up Incubation.jpg",
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

// Removed duplicate BlogPost interface declaration to resolve the error.

export const COMPANY_BLOGS: BlogPost[] = [
  {
    title: "What is IREDA?",
    excerpt:
      "The Indian Renewable Energy Development Agency (IREDA) is a public sector enterprise under the Ministry of New and Renewable Energy that provides specialized financial assistance for renewable energy projects.",
    image: "/assets/images/future.png",
    category: "Energy",
    date: "2024-01-20",
    author: "John Doe",
    readTime: "5 min",
    content: `The Indian Renewable Energy Development Agency (IREDA) is a public sector enterprise under the Ministry of New and Renewable Energy. As a non-banking financial institution (NBFC) and infrastructure finance company, IREDA plays a pivotal role in supporting businesses like Golden Ace Venture by offering specialized financial assistance for renewable energy projects.

## How IREDA Supports Renewable Energy Companies

IREDA provides financing solutions for:
- Renewable energy project funding – Solar, wind, and biomass projects.
- Energy efficiency financing – Supporting industrial sustainability efforts.
- Transmission projects financing – Strengthening renewable energy distribution.
- Green financing NBFC solutions – Tailored funding for sustainable initiatives.

Companies like Golden Ace Venture can access IREDA's project conceptualization services to develop viable clean energy ventures.

## IREDA's Financial Strength and Market Impact

As a Navratna status enterprise, IREDA has a strong financial backbone:
- IREDA revenue 2024, operating income 2024, and net income 2024 indicate steady growth.
- IREDA total assets 2024 and total equity 2024 highlight its financial resilience.
- IREDA IPO, NSE listing, and BSE listing boost investment opportunities.

## Why Companies Should Consider IREDA Financing

With competitive interest rates and a commitment to sustainability, IREDA ensures businesses can scale while contributing to a greener future. Monitoring IREDA stock performance, market capitalization, and return on equity (ROE) offers insights for investors and stakeholders.`,
  },
  {
    title: "Understanding Solar Photovoltaic Manufacturing",
    excerpt:
      "The solar photovoltaic manufacturing basics encompass multiple stages, from raw material processing to final PV module production.",
    image: "/assets/images/solenerg.jfif",
    category: "Energy",
    date: "2024-02-15",
    author: "Jane Smith",
    readTime: "7 min",
    content: `The solar photovoltaic manufacturing basics encompass multiple stages, from raw material processing to final PV module production. The solar manufacturing value chain includes silicon purification, wafer slicing, cell processing, and module assembly.

## Key Components of a Photovoltaic System

A solar power system comprises several photovoltaic systems components, such as:
- Crystalline silicon solar cells – The most common type, made from purified silicon.
- Thin-film solar technology – Uses semiconductor layers for lightweight solar panels.
- Solar cell interconnection – Connects cells electrically to form modules.

## The Solar PV Module Production Process

The PV module assembly process follows these key steps:
- Silicon wafer manufacturing – Wafers are created from purified polysilicon.
- Solar cell metallization – Metal contacts are added to capture current.
- Solar cell encapsulation – Protective layers are applied to enhance durability.
- Photovoltaic module lamination – Seals the module to prevent degradation.
- PV module testing standards – Ensures panels meet industry performance criteria.

## Optimizing Solar Panel Efficiency and Quality

Manufacturers focus on PV module efficiency optimization to enhance performance. This includes improving cell design, reducing energy losses, and enhancing solar module quality assurance. Solar panel durability testing ensures longevity under extreme weather conditions.

## The Environmental Impact of Solar Manufacturing

The solar manufacturing environmental impact includes energy-intensive processes but offers long-term sustainability benefits. Innovations and advancements in PV manufacturing techniques continue to make solar energy more efficient and accessible.`,
  },
  {
    title: "Key Components of a Photovoltaic System",
    excerpt:
      "A solar power system comprises several photovoltaic systems components, such as crystalline silicon solar cells, thin-film solar technology, and solar cell interconnection.",
    image: "/assets/images/iot-and-ai.jpg",
    category: "Technology",
    date: "2024-03-10",
    author: "David Lee",
    readTime: "6 min",
    content: `Understanding Solar Photovoltaic Manufacturing
The solar photovoltaic manufacturing basics encompass multiple stages, from raw material processing to final PV module production. The solar manufacturing value chain includes silicon purification, wafer slicing, cell processing, and module assembly.

## Key Components of a Photovoltaic System

A solar power system comprises several photovoltaic systems components, such as:
- Crystalline silicon solar cells – The most common type, made from purified silicon.
- Thin-film solar technology – Uses semiconductor layers for lightweight solar panels.
- Solar cell interconnection – Connects cells electrically to form modules.

## The Solar PV Module Production Process

The PV module assembly process follows these key steps:
- Silicon wafer manufacturing – Wafers are created from purified polysilicon.
- Solar cell metallization – Metal contacts are added to capture current.
- Solar cell encapsulation – Protective layers are applied to enhance durability.
- Photovoltaic module lamination – Seals the module to prevent degradation.
- PV module testing standards – Ensures panels meet industry performance criteria.

## Optimizing Solar Panel Efficiency and Quality

Manufacturers focus on PV module efficiency optimization to enhance performance. This includes improving cell design, reducing energy losses, and enhancing solar module quality assurance. Solar panel durability testing ensures longevity under extreme weather conditions.

## The Environmental Impact of Solar Manufacturing

The solar manufacturing environmental impact includes energy-intensive processes but offers long-term sustainability benefits. Innovations and advancements in PV manufacturing techniques continue to make solar energy more efficient and accessible.`,
  },
  {
    title: "Revolutionizing Corporate Infrastructure with Smart Technology",
    excerpt:
      "Reliance ADAG Global HQ stands as a testament to cutting-edge smart infrastructure, leveraging advanced security, energy analytics, and integrated building management systems.",
    image: "/assets/images/Reliance.png",
    category: "Infrastructure",
    date: "2024-04-05",
    author: "Emily White",
    readTime: "8 min",
    content: `Reliance ADAG Global HQ stands as a testament to cutting-edge smart infrastructure, leveraging advanced security, energy analytics, and integrated building management systems (IBMS). By implementing intelligent automation and security solutions, the headquarters has optimized efficiency, safety, and operational excellence.

## Key Features of the Smart Infrastructure

### 1. Advanced Security & Surveillance
- 200+ HD IP Cameras – Providing real-time monitoring and enhanced security coverage.
- 220+ Access Control Points – Restricting unauthorized entry and ensuring employee safety.
- Bollards & Centralized Command Control Center – Strengthening perimeter security with automated barriers and centralized monitoring.
- 50+ Smart Security & BMS Scenarios – Enabling proactive threat detection and quick response measures.

### 2. Intelligent Fire & Safety Systems
- 2,200+ Fire Detection Points – Ensuring a rapid response to potential fire hazards.
- 1,800+ PA System Points – Facilitating real-time communication during emergencies.
- Advanced Server Room Protection – Implementing Novac, WLD, VESDA, and rodent detection for data center safety.

### 3. Smart Building Management & Automation
- 20,000+ IBMS Points – Real-time monitoring of building performance for enhanced efficiency.
- Energy Analytics & Predictive Maintenance – Ensuring optimal energy usage and reduced operational costs.
- Visitor Management System – Streamlining visitor access with a virtual receptionist and conference room booking.
- Integrated HVAC, Lighting, and Power Management – Enhancing workplace comfort and energy efficiency.

## Impact of Smart Infrastructure on Corporate Efficiency

The implementation of smart technology at Reliance ADAG Global HQ has transformed its operational framework, delivering:
- ✔ Enhanced Security & Monitoring – Improved safety for employees and assets.
- ✔ Optimized Energy Management – Reduction in energy consumption and carbon footprint.
- ✔ Seamless Building Automation – Efficient and centralized control over all facilities.
- ✔ Superior Employee & Visitor Experience – Ensuring smooth, hassle-free interactions within the premises.

## Conclusion

Reliance ADAG Global HQ sets a new benchmark for smart corporate infrastructure, integrating technology-driven security, automation, and energy efficiency solutions. By leveraging advanced building management systems, the headquarters showcases the future of intelligent workspaces, where safety, sustainability, and operational excellence go hand in hand.

This transformation reinforces the growing need for smart infrastructure in modern enterprises, paving the way for future-ready workplaces that are secure, efficient, and adaptive.`,
  },
  {
    title: "Solar-Thermal Hybrid Power: The Future of Sustainable Energy",
    excerpt:
      "In the quest for sustainable energy, the combination of solar and thermal power presents a groundbreaking solution for efficiency, reliability, and reduced carbon emissions.",
    image: "/assets/images/ren.jpg",
    category: "Energy",
    date: "2024-05-01",
    author: "Robert Green",
    readTime: "5 min",
    content: `In the quest for sustainable energy, the combination of solar and thermal power presents a groundbreaking solution. Solar-thermal hybrid power plants integrate renewable solar energy with traditional thermal infrastructure, ensuring efficiency, reliability, and reduced carbon emissions.

## What is Solar-Thermal Hybrid Power?

A solar-thermal hybrid system combines photovoltaic (PV) panels or concentrated solar power (CSP) with a conventional thermal power plant. This hybrid approach enhances energy output while reducing reliance on fossil fuels.

## Key Benefits of Solar-Thermal Hybrid Systems

- Enhanced Efficiency: Solar power supplements thermal plants during peak hours, reducing fuel consumption.
- Lower Carbon Emissions: By integrating renewable sources, these plants significantly decrease greenhouse gas emissions.
- Improved Reliability: The hybrid model ensures uninterrupted power supply, even during solar fluctuations.
- Cost Savings: Reduced fossil fuel usage lowers operational costs and enhances long-term profitability.

## Golden Ace Ventures' Role in Solar-Thermal Hybrid Energy

Golden Ace Ventures is pioneering the development of solar-thermal hybrid power solutions, bridging the gap between conventional and renewable energy sources. Their expertise includes:

- Solar Integration with Existing Thermal Plants: Retrofitting thermal plants with solar PV or CSP for optimal energy utilization.
- Advanced Energy Storage Systems: Implementing battery energy storage solutions (BESS) for enhanced grid stability.
- Smart Energy Management: Using AI-driven analytics to optimize energy distribution and minimize losses.

## The Future of Hybrid Power

With increasing global energy demand, solar-thermal hybrid systems are set to play a pivotal role in the transition to clean energy. By investing in innovative hybrid solutions, Golden Ace Ventures is driving sustainable growth while ensuring energy security.

Adopting solar-thermal hybrid technology today is a step toward a cleaner, greener future.`,
  },
  {
    title: "Powering the Future with BESS",
    excerpt:
      "Battery Energy Storage Systems (BESS) are emerging as the backbone of modern energy infrastructure, enabling seamless integration of renewable energy sources.",
    image: "/assets/images/smart.jpg",
    category: "Infrastructure",
    date: "2024-05-26",
    author: "Linda Brown",
    readTime: "7 min",
    content: `As the world transitions towards renewable energy, the need for efficient energy storage has never been greater. Battery Energy Storage Systems (BESS) are emerging as the backbone of modern energy infrastructure, enabling seamless integration of solar and wind power while ensuring stability and reliability. Golden Ace Ventures is at the forefront of this transformation, leveraging advanced BESS solutions to optimize energy management.

## How BESS Works

BESS stores excess energy generated from renewable sources during peak production hours and releases it when demand is high. These systems prevent wastage, stabilize power supply, and enhance grid efficiency. With scalable storage capacities, BESS plays a crucial role in balancing energy fluctuations, reducing reliance on fossil fuels, and ensuring uninterrupted power availability.

## Key Benefits of BESS

- Grid Stability: Smoothens power fluctuations from renewable sources, ensuring a steady energy supply.
- Energy Optimization: Reduces dependency on traditional power plants by storing excess renewable energy.
- Cost Savings: Lowers electricity costs by utilizing stored energy during peak demand hours.
- Reduced Carbon Footprint: Decreases reliance on fossil fuels, supporting global sustainability goals.

## Golden Ace Ventures' Role in BESS Innovation

Golden Ace Ventures is driving the adoption of advanced BESS technologies, integrating them into renewable energy projects and infrastructure solutions. Our expertise in strategic consulting and energy optimization ensures that businesses and industries can harness the full potential of BESS, paving the way for a cleaner, more sustainable future.

With BESS leading the energy revolution, we are one step closer to a world powered entirely by renewable resources.`,
  },
]

export interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  content: string;
}

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
