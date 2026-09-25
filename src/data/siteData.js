import { images } from './images/index.js';
export { images } from './images/index.js';

export const siteMetadata = {
  companyName: "EnVERT Group",
  tagline: "Engineering for a changing world.",
  description: "A multidisciplinary corporate group operating across clean energy, industrial BEE audits, electric vehicles, corporate capability training, digital journalism, sustainability, and publishing.",
  headquarters: "Kolkata, West Bengal, India",
  logo: images.envert_group_logo,
  phone: "+91 9836511995",
  evPhone: "+91 7003942199",
  email: "admin@envertgroup.com",
  hrEmail: "hr@envertgroup.com",
  evEmail: "envertev@gmail.com",
  publishingEmail: "curiosity@penandinkpublishers.com",
  touriosityEmail: "thetouriosity@gmail.com",
  hiringAlert: "Actively hiring Solar PV Engineers, HR Officers, PR Managers, and Travel Magazine Sales Executives. Send CV to hr@envertgroup.com",
  operatingPillars: [
    { label: "Engineering", count: "02 Categories", desc: "Energy (NRG India), Transport (EnVERT E-Vehicles)" },
    { label: "Advisory & Capability", count: "02 Categories", desc: "Corporate Training (ICST Global), Research & Advisory (EIPR)" },
    { label: "Media & Culture", count: "03 Categories", desc: "Publication & Media (The Touriosity, Pen & Ink, Glare Post), Art & Culture (Afield Gallery)" },
    { label: "Stewardship & Living", count: "03 Categories", desc: "Social Stewardship (EnVERT Foundation), Fashion & Lifestyle (Atmaja), Agro & Food (EnVERT Agro Food)" },
  ],
};

// Clean high-level categories (Energy, Transport, Corporate Training, Publication & Media, etc.)
// with all operating businesses placed under their respective category
export const businessesData = [
  {
    id: "energy",
    num: "01",
    name: "Energy",
    category: "Energy",
    companyName: "NRG India",
    companyLegalName: "Nandi Resources Generation Technology Private Limited",
    brandRef: "NRG India",
    urlSlug: "energy",
    aliases: ["energy", "nrg-india"],
    logo: images.nrgindia_logo,
    symbolLogo: images.nrgindia_symbol,
    tagline: "Clean energy infrastructure and statutory industrial BEE audits.",
    summary: "Operating through NRG India (Nandi Resources Generation Technology Private Limited), EnVERT delivers turnkey clean power infrastructure and statutory industrial energy audits. We specialize in commercial solar PV, biomass CHP, and mandatory BEE audits for steel, iron, foundry, pharmaceutical, and manufacturing plants, as well as institutional NAAC green audits.",
    businessesUnderCategory: [
      {
        name: "NRG India",
        legalName: "Nandi Resources Generation Technology Private Limited",
        role: "Energy Audits & Clean Power Engineering",
        logo: images.nrgindia_logo,
        url: "http://www.nrgindia.com",
        desc: "Certified BEE audits for steel, foundry, pharma, and power plants; commercial solar PV and green audits."
      }
    ],
    capabilities: [
      "Solar PV Systems (Rooftop, Ground & Captive Grid-Interactive)",
      "Statutory Bureau of Energy Efficiency (BEE) Certified Audits",
      "Comprehensive Energy Audits for Steel, Iron & Foundries",
      "Thermal Power Plant & Captive Generation Energy Optimization",
      "Pharmaceutical Clean-Room & Vehicle Assembly Plant Audits",
      "NAAC University & Higher Education Campus Green Audits",
      "Energy Conservation Building Code (ECBC) & HVAC Optimization",
      "Biomass & Combined Heat and Power (CHP) Topologies",
      "District Heating, Cooling & Microgrid Architecture",
      "USGBC LEED & IGBC Green Building Certification Engineering"
    ],
    image: images.energy_hero,
    imageCaption: "Utility and industrial scale photovoltaic installation & electrical infrastructure.",
    domainLink: "http://www.nrgindia.com",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "transport-electric",
    num: "02",
    name: "Transport",
    category: "Transport",
    companyName: "EnVERT E-Vehicles Pvt. Ltd.",
    companyLegalName: "EnVERT E-Vehicles Private Limited",
    brandRef: "EnVERT E-Vehicles",
    urlSlug: "transport-electric",
    aliases: ["transport-electric", "transport", "mobility", "ev"],
    logo: images.envert_group_logo,
    tagline: "Commercial electric mobility and battery transport under FAME India.",
    summary: "EnVERT E-Vehicles Private Limited leads the design, structural lightweighting, powertrain integration, and deployment of battery-operated electric transport solutions in India. Aligned with national e-mobility directives, the enterprise delivers commercial fleet platforms, battery longevity management, and charging depot infrastructures.",
    businessesUnderCategory: [
      {
        name: "EnVERT E-Vehicles Pvt. Ltd.",
        legalName: "EnVERT E-Vehicles Private Limited",
        role: "Commercial EV Design & Manufacturing",
        logo: images.envert_group_logo,
        url: "https://www.envertgroup.com/transport-electric",
        desc: "Design, manufacturing, and marketing of electric commercial platforms, 3-wheelers, and charging depots."
      }
    ],
    capabilities: [
      "Commercial Electric Vehicle Fleet Deployment & Customization",
      "Electric Passenger Cars, Three-Wheelers & High-Efficiency E-Cycles",
      "Customized Electric Utility Vehicles & Special Purpose EVs",
      "Fast-Charging Depot Topologies & DISCOM Interconnection",
      "Battery Pack Integration & Tropical Thermal Management",
      "Electric Powertrain Sizing & Duty-Cycle Cost Optimization",
      "Vehicle Weight Reduction & Advanced Structural Lightweighting",
      "Predictive Maintenance Protocols & On-Board Diagnostics"
    ],
    models: [
      { name: "EnVERT Mono-PN", type: "Personal & Urban Mobility Unit" },
      { name: "EnVERT Duex-PM", type: "Commercial Utility & Cargo Platform" },
      { name: "EnVERT Trois-PP", type: "Passenger & Three-Wheeler Fleet Series" }
    ],
    image: images.transport_hero,
    imageCaption: "EnVERT E-Vehicles battery integration and electric chassis development.",
    directPhone: "+91 7003942199",
    directEmail: "envertev@gmail.com"
  },
  {
    id: "icst",
    num: "03",
    name: "Corporate Training",
    category: "Corporate Training",
    companyName: "ICST Global",
    companyLegalName: "Institute of Corporate Sustainability & Transition (ICST Global)",
    brandRef: "ICST Global",
    urlSlug: "icst",
    aliases: ["icst", "corporate-training", "training"],
    logo: images.icst_logo,
    secondaryLogo: images.icst_secondary_logo,
    tagline: "Corporate language capabilities across 20+ languages for 30+ MNCs.",
    summary: "ICST Global (Institute of Corporate Sustainability and Transition) breaks communication barriers in an era of globalized business. With over 15 years of experience training professionals across 20+ Indian and foreign languages, ICST has served more than 30 Multinational Corporations with customized curricula that produce measurable ROI in corporate productivity.",
    businessesUnderCategory: [
      {
        name: "ICST Global",
        legalName: "Institute of Corporate Sustainability and Transition",
        role: "Corporate Training & Language Engineering",
        logo: images.icst_logo,
        url: "http://www.icstglobal.com",
        desc: "Over 15 years training 30+ MNCs in 20+ languages alongside voice & accent and executive communication."
      }
    ],
    capabilities: [
      "Corporate Language Competencies (20+ Indian & International Languages)",
      "Voice & Accent Neutralization for Global Client-Facing Teams",
      "Executive Leadership Communication & Multi-Tier Negotiation",
      "Custom Curriculum Development Tailored to Industry Domains",
      "Cross-Cultural Workplace Protocols & Expatriate Integration",
      "Virtual and On-Premise Immersive Workshop Delivery",
      "Organizational Human Resource Capability Audits",
      "Measurable Productivity Benchmarks & Competency Assessments"
    ],
    image: images.training_hero,
    imageCaption: "Executive communication seminars and multinational corporate capability development.",
    domainLink: "http://www.icstglobal.com",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "publication",
    num: "04",
    name: "Publication & Media",
    category: "Publication & Media",
    companyName: "Pen & Ink / The Touriosity / Glare Post",
    brandRef: "EnVERT Media Group",
    urlSlug: "publication",
    aliases: ["publication", "publishing", "pen-ink", "touriosity", "glarepost"],
    logo: images.pen_and_ink_logo,
    tagline: "International magazines, digital journalism, literature awards, and trade journals.",
    summary: "EnVERT Group's Publication & Media vertical unifies our established publishing houses, globally distributed magazines, and digital news channels: The Touriosity (international heritage & eco-tourism magazine), Pen & Ink Publishers, Curiosity Kids magazine (7+ years on Amazon Paperback & Kindle), Sustainable Energy Review trade journal, and Glare Post digital journalism.",
    // Multiple businesses under this category
    businessesUnderCategory: [
      {
        name: "The Touriosity",
        role: "Global Travel, Heritage & Eco-Tourism Magazine",
        logo: images.touriosity_logo,
        url: "http://www.thetouriosity.com",
        desc: "One of our premier international publications exploring world heritage, conscious eco-tourism, cultural landscapes, and sustainable travel narratives."
      },
      {
        name: "Pen & Ink Publishers",
        role: "Book Publishing & Literary Awards",
        logo: images.pen_and_ink_logo,
        url: "https://www.envertgroup.com/pen-ink",
        desc: "Publishing house hosting the annual Curiosity Writing Awards and producing global anthologies on Amazon in paperback and Kindle."
      },
      {
        name: "Curiosity Kids",
        role: "Children's Science & Literature Magazine",
        logo: images.curiosity_logo,
        url: "https://www.amazon.com",
        desc: "Established 7+ years magazine cultivating youthful scientific curiosity, creative writing, and worldwide Amazon availability."
      },
      {
        name: "Sustainable Energy Review",
        role: "Technical Clean Energy Trade Journal",
        logo: images.sustainable_energy_review_logo,
        desc: "B2B journal dedicated to renewable technology, statutory BEE energy audit policy, and industrial efficiency standards."
      },
      {
        name: "Glare Post",
        role: "Digital Journalism & Policy Perspectives",
        logo: images.glarepost_logo,
        url: "https://www.glarepost.com",
        desc: "Independent online commentary and investigative reporting covering environmental policy, clean transition, and corporate ESG governance."
      }
    ],
    capabilities: [
      "The Touriosity Global Heritage & Eco-Tourism Magazine Publishing",
      "Curiosity Writing Awards (Annual International Competition)",
      "Curiosity Kids Magazine (Global Amazon Paperback & Kindle Distribution)",
      "Sustainable Energy Review (Trade Publication on Clean Tech & Policy)",
      "Glare Post (Digital Investigative Journalism & Policy Debates)",
      "Anthology Curation & Worldwide Publication for Emerging Authors",
      "Trade Advertising, Space Selling & Corporate Media Partnerships",
      "Editorial Proofreading, Curation, Formatting & Global Distribution"
    ],
    publications: [
      { 
        name: "The Touriosity", 
        desc: "Flagship international travel and heritage publication celebrating sustainable culture and conscious tourism.",
        logo: images.touriosity_logo,
        url: "http://www.thetouriosity.com"
      },
      { 
        name: "Curiosity Kids", 
        desc: "7+ years international magazine cultivating young scientific inquiry, published globally on Amazon.",
        logo: images.curiosity_logo
      },
      { 
        name: "Sustainable Energy Review", 
        desc: "B2B journal dedicated to clean power, industrial efficiency, and statutory policy standards.",
        logo: images.sustainable_energy_review_logo
      },
      { 
        name: "Glare Post", 
        desc: "Digital perspectives and news platform covering policy, economy, sustainability, and culture.",
        logo: images.glarepost_logo,
        url: "https://www.glarepost.com"
      }
    ],
    image: images.publication_hero,
    imageCaption: "EnVERT publishing archives, The Touriosity, and global magazine distributions.",
    directEmail: "curiosity@penandinkpublishers.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "fashion-lifestyle",
    num: "05",
    name: "Fashion & Lifestyle",
    category: "Fashion & Lifestyle",
    companyName: "Atmaja",
    companyLegalName: "Atmaja — Sustainable Lifestyle & Fashion",
    brandRef: "Atmaja",
    urlSlug: "fashion-lifestyle",
    aliases: ["fashion-lifestyle", "fashion", "atmaja"],
    logo: images.atmaja_logo,
    tagline: "Slow fashion, handloom textiles, and handcrafted sustainable living by Atmaja.",
    summary: "Atmaja is EnVERT Group's ethical fashion and conscious lifestyle brand. Championing artisanal handloom heritage, organic natural dyes, zero-waste cutting patterns, and circular lifestyle essentials that foster sustainable rural livelihoods while offering refined modern design.",
    businessesUnderCategory: [
      {
        name: "Atmaja",
        role: "Sustainable Fashion & Handcrafted Living",
        logo: images.atmaja_logo,
        desc: "Handcrafted ethical apparel, traditional handloom weaving, organic textiles, and zero-waste conscious living essentials."
      }
    ],
    capabilities: [
      "Atmaja Handcrafted Apparel & Organic Textile Collections",
      "Traditional Handloom Heritage & Artisanal Cluster Partnerships",
      "Zero-Waste Garment Construction & Natural Botanical Dyeing",
      "Circular Sustainable Lifestyle Accessories & Home Essentials",
      "Biodegradable Sourcing & Fair-Value Artisan Empowerment"
    ],
    image: images.fashion_hero,
    imageCaption: "Atmaja sustainable design studio and handcrafted conscious living curation.",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "afield-gallery",
    num: "06",
    name: "Art & Culture",
    category: "Art & Culture",
    companyName: "Afield Gallery",
    companyLegalName: "Afield Gallery",
    brandRef: "Afield Gallery",
    urlSlug: "afield-gallery",
    aliases: ["afield-gallery", "art-gallery", "art"],
    logo: images.afield_logo,
    tagline: "Contemporary visual art, curated exhibitions, and fine printmaking.",
    summary: "Afield Gallery (afieldgallery.com) is EnVERT Group's visual art initiative, presenting works from emerging and established artists. Through curated exhibitions, limited-edition printmaking, and cultural dialogues, Afield explores the nexus of nature, humanity, and contemporary artistic form.",
    businessesUnderCategory: [
      {
        name: "Afield Gallery",
        role: "Contemporary Visual Art & Exhibitions",
        logo: images.afield_logo,
        url: "https://www.afieldgallery.com",
        desc: "Curated contemporary exhibitions, artist representation, fine art printmaking, and art advisory collections."
      }
    ],
    capabilities: [
      "Curated Contemporary Art Exhibitions & Gallery Showcases",
      "Artist Representation & Regional Talent Spotlights",
      "Fine Art Printmaking & Archival Reproduction",
      "Community Art Dialogues & Cultural Public Gatherings",
      "Corporate Art Advisory & Sustainable Collection Curation"
    ],
    image: images.afield_hero,
    imageCaption: "Afield Gallery visual art curation and artist collections.",
    domainLink: "https://www.afieldgallery.com",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "envert-foundation",
    num: "07",
    name: "Social Stewardship",
    category: "Social Stewardship",
    companyName: "EnVERT Foundation",
    companyLegalName: "EnVERT Foundation",
    brandRef: "EnVERT Foundation",
    urlSlug: "envert-foundation",
    aliases: ["envert-foundation", "foundation", "stewardship"],
    logo: images.envert_foundation_logo,
    badgeLogo: images.envert_foundation_badge,
    tagline: "Environmental literacy, community tree cultivation, and youth scholarships.",
    summary: "EnVERT Foundation is the non-profit stewardship initiative of EnVERT Group. Dedicated to grassroots environmental literacy, community tree plantation drives, youth creative writing recognition, student STEM scholarships, and rural ecological empowerment.",
    businessesUnderCategory: [
      {
        name: "EnVERT Foundation",
        role: "Non-Profit Stewardship & Ecology",
        logo: images.envert_foundation_logo,
        desc: "Community afforestation drives, youth STEM scholarships, student environmental literacy, and clean water advocacy."
      }
    ],
    capabilities: [
      "Community Afforestation Drives & Native Tree Plantation",
      "Grassroots Environmental & Climate Literacy Workshops",
      "Youth Creative Writing & STEM Innovation Scholarships",
      "Rural Clean Water Advocacy & Sustainable Living Support",
      "School & University Ecological Outreach Programs",
      "Artisanal Livelihood & Community Green Spaces"
    ],
    galleryImages: [
      { src: images.foundation_doc_3, caption: "Community ecological stewardship drive" },
      { src: images.foundation_doc_4, caption: "Tree plantation and seedling distribution" },
      { src: images.foundation_doc_5, caption: "Educational student workshop on clean environment" },
      { src: images.foundation_doc_6, caption: "EnVERT Foundation school sustainability day" },
      { src: images.foundation_doc_7, caption: "Youth environmental awareness ceremony" },
      { src: images.foundation_hero, caption: "Community tree planting with local participants" },
      { src: images.foundation_doc_11, caption: "Curiosity Writing Awards certificate distribution" },
      { src: images.foundation_doc_12, caption: "Young authors and environmental scholarship recipients" },
      { src: images.foundation_doc_19, caption: "Grassroots tree sapling care in rural communities" },
      { src: images.foundation_doc_20, caption: "Community clean water & awareness camp" },
      { src: images.foundation_doc_21, caption: "Environmental education outreach program" }
    ],
    image: images.foundation_hero,
    imageCaption: "EnVERT Foundation community tree cultivation and grassroots environmental literacy.",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "envert-agro-food",
    num: "08",
    name: "Agro & Food",
    category: "Agro & Food",
    companyName: "EnVERT Agro Food",
    companyLegalName: "EnVERT Agro Food",
    brandRef: "EnVERT Agro Food",
    urlSlug: "envert-agro-food",
    aliases: ["envert-agro-food", "agro-food", "agro"],
    logo: images.envert_agro_food_logo,
    tagline: "Organic cultivation, solar-assisted agro processing, and fair-value supply chains.",
    summary: "EnVERT Agro Food applies sustainable engineering principles to organic agriculture, agro-forestry, solar-assisted cold preservation and dehydration, and direct farmer-to-enterprise value chains.",
    businessesUnderCategory: [
      {
        name: "EnVERT Agro Food",
        role: "Sustainable Agro & Processing",
        logo: images.envert_agro_food_logo,
        desc: "Organic crop cultivation, solar-powered cold storage, bio-fertilizers, and sustainable agro supply chains."
      }
    ],
    capabilities: [
      "Organic Crop Cultivation & Regenerative Soil Stewardship",
      "Solar-Powered Cold Storage & Clean Food Dehydration",
      "Direct Farm-to-Enterprise Supply Chain Logistics",
      "Bio-Fertilizer Formulation & Circular Agricultural Waste Utilization",
      "Quality Assurance & Traceable Chemical-Free Food Standards"
    ],
    image: images.agro_hero,
    imageCaption: "Sustainable agro-processing and solar cold chain integration under EnVERT.",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "eipr",
    num: "09",
    name: "Research & Advisory",
    category: "Research & Advisory",
    companyName: "EIPR",
    companyLegalName: "EnVERT Institute of Professional Researches (EIPR)",
    brandRef: "EIPR",
    urlSlug: "eipr",
    aliases: ["eipr", "research"],
    logo: images.eipr_logo,
    tagline: "Techno-commercial feasibility studies, patent landscaping, and clean-tech benchmarking.",
    summary: "EIPR (EnVERT Institute of Professional Researches) bridges heavy industrial engineering and academic science. Conducting applied techno-commercial feasibility evaluations, energy modeling, patent landscapes, and institutional regulatory whitepapers.",
    businessesUnderCategory: [
      {
        name: "EIPR",
        role: "Applied Research & Feasibility",
        logo: images.eipr_logo,
        desc: "Industrial energy modeling, green campus frameworks, patent landscaping, and regulatory policy studies."
      }
    ],
    capabilities: [
      "Applied Industrial Energy Modeling & Clean-Tech Benchmarking",
      "Green Campus Feasibility & Environmental Auditing Frameworks",
      "Patent Landscaping & Clean Technology Innovation Studies",
      "Faculty & Executive Development Research Symposia",
      "Statutory Regulatory Impact & Decarbonization Policy Reports"
    ],
    image: images.research_hero,
    imageCaption: "EIPR research laboratories and techno-commercial feasibility studies.",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "startup-idea-envert-wellness",
    num: "10",
    name: "Healthcare & Wellness",
    category: "Healthcare & Wellness",
    companyName: "EnVERT Wellness",
    companyLegalName: "EnVERT Wellness",
    brandRef: "EnVERT Wellness",
    urlSlug: "startup-idea-envert-wellness",
    aliases: ["startup-idea-envert-wellness", "wellness"],
    logo: images.envert_group_logo,
    tagline: "Comprehensive corporate wellness frameworks and workplace ergonomics.",
    summary: "Addressing rising enterprise demand for employee physical and mental wellbeing. EnVERT Wellness transitions clinical health concepts into corporate environments, specializing in workplace ergonomics, digital detox, and preventive healthcare programs.",
    businessesUnderCategory: [
      {
        name: "EnVERT Wellness",
        role: "Corporate Wellness & Ergonomics",
        logo: images.envert_group_logo,
        desc: "Comprehensive workplace health frameworks, workstation ergonomics, executive stress reduction, and habit tracking."
      }
    ],
    capabilities: [
      "Workplace Physical Health (Desk Ergonomics, Posture & Screenings)",
      "Ergonomic Evaluations & Workstation Optimization",
      "Executive Stress Reduction & Mental Health Workshops",
      "Gamified Corporate Wellness Challenges & Habit Tracking",
      "Longevity Consulting, Sleep Architecture & Work-Life Balance"
    ],
    image: images.wellness_hero,
    imageCaption: "EnVERT Wellness workplace mental health, ergonomics, and physical wellbeing.",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  }
];

export const ecosystemData = {
  pillars: [
    {
      category: "ENGINEERING",
      description: "Physical infrastructure, clean power generation, and commercial electric vehicles.",
      domains: ["Energy (NRG India)", "Transport (EnVERT E-Vehicles)"],
      brands: [
        { 
          name: "NRG India", 
          sector: "Energy",
          url: "/businesses/energy", 
          externalUrl: "http://www.nrgindia.com",
          logo: images.nrgindia_logo,
          desc: "BEE certified audits for steel, power, pharma, foundry & NAAC green audits." 
        },
        { 
          name: "EnVERT E-Vehicles Pvt. Ltd.", 
          sector: "Transport",
          url: "/businesses/transport-electric", 
          logo: images.envert_group_logo,
          desc: "Design & deployment of electric cars, 3-wheelers, cycles & charging depots." 
        }
      ]
    },
    {
      category: "ADVISORY & CAPABILITY",
      description: "Human capital development, corporate language proficiency, and applied research.",
      domains: ["Corporate Training (ICST Global)", "Research & Advisory (EIPR)"],
      brands: [
        { 
          name: "ICST Global", 
          sector: "Corporate Training",
          url: "/businesses/icst", 
          externalUrl: "http://www.icstglobal.com",
          logo: images.icst_logo,
          desc: "15+ years experience training 30+ MNCs in 20+ languages with measured ROI." 
        },
        { 
          name: "EIPR", 
          sector: "Research & Advisory",
          url: "/businesses/eipr", 
          logo: images.eipr_logo,
          desc: "EnVERT Institute of Professional Researches — feasibility and patent studies." 
        }
      ]
    },
    {
      category: "MEDIA, PUBLISHING & CULTURE",
      description: "International travel magazines, publishing houses, digital news, and contemporary art.",
      domains: ["The Touriosity", "Pen & Ink Publishers", "Glare Post", "Afield Gallery"],
      brands: [
        { 
          name: "The Touriosity", 
          sector: "Publication & Media",
          url: "/businesses/publication", 
          externalUrl: "http://www.thetouriosity.com",
          logo: images.touriosity_logo,
          desc: "Flagship international travel and heritage magazine exploring conscious eco-tourism." 
        },
        { 
          name: "Pen & Ink Publishers", 
          sector: "Publication & Media",
          url: "/businesses/publication", 
          logo: images.pen_and_ink_logo,
          desc: "Annual Curiosity Writing Awards, Curiosity Kids Magazine, Amazon distribution." 
        },
        { 
          name: "Glare Post", 
          sector: "Publication & Media",
          url: "/glarepost", 
          externalUrl: "https://www.glarepost.com",
          logo: images.glarepost_logo,
          desc: "Independent digital news, policy commentary, and clean transition features." 
        },
        { 
          name: "Afield Gallery", 
          sector: "Art & Culture",
          url: "/businesses/afield-gallery", 
          externalUrl: "https://www.afieldgallery.com",
          logo: images.afield_logo,
          desc: "Visual art exhibitions, printmaking, and cultural dialogues." 
        }
      ]
    },
    {
      category: "STEWARDSHIP & LIVING",
      description: "Community ecology, ethical slow fashion, and sustainable agro food.",
      domains: ["Social Stewardship (EnVERT Foundation)", "Fashion & Lifestyle (Atmaja)", "Agro & Food (EnVERT Agro Food)"],
      brands: [
        { 
          name: "EnVERT Foundation", 
          sector: "Social Stewardship",
          url: "/businesses/envert-foundation", 
          logo: images.envert_foundation_logo,
          desc: "Grassroots ecology, tree plantation drives, student scholarships & literacy." 
        },
        { 
          name: "Atmaja", 
          sector: "Fashion & Lifestyle",
          url: "/businesses/fashion-lifestyle", 
          logo: images.atmaja_logo,
          desc: "Handloom textiles, zero-waste apparel, and conscious living curation." 
        },
        { 
          name: "EnVERT Agro Food", 
          sector: "Agro & Food",
          url: "/businesses/envert-agro-food", 
          logo: images.envert_agro_food_logo,
          desc: "Regenerative farming, solar food dehydration, and farmer cooperatives." 
        }
      ]
    }
  ]
};

export { careersData } from './careersData.js';


export const projectsData = [
  {
    id: "p1",
    title: "Captive Industrial Solar PV & Net-Metering Integration",
    industry: "ENERGY (NRG INDIA)",
    location: "Kharagpur Industrial Corridor, West Bengal",
    year: "2024",
    client: "Heavy Engineering & Manufacturing Works",
    scope: "Turnkey design, solar string sizing, structural load simulation, bidirectional net-metering integration, and ongoing telemetry.",
    outcome: "42% reduction in peak grid power tariff; verified 180 MT annual CO2e abatement.",
    image: images.project_solar_pv
  },
  {
    id: "p2",
    title: "EnVERT Commercial EV Fleet & Fast Charging Depot Blueprint",
    industry: "TRANSPORT (ENVERT E-VEHICLES)",
    location: "Greater Kolkata Logistics Hub",
    year: "2023",
    client: "Urban Transit & Distribution Consortium",
    scope: "Route energy profiling, EnVERT Duex-PM platform deployment, substation load sizing, and dual-gun fast-charging depot design under FAME framework.",
    outcome: "Seamless electrification plan for 85 transit units with zero peak-grid tripping.",
    image: images.project_ev_fleet
  },
  {
    id: "p3",
    title: "Foundry & Iron Industrial Complex Comprehensive Energy Audit",
    industry: "ENERGY (NRG INDIA)",
    location: "Asansol Industrial Zone, WB",
    year: "2024",
    client: "Ferrous Metallurgy Plant",
    scope: "BEE certified comprehensive energy audit: furnace heat recovery, induction motor efficiency, compressor leakage elimination, and electrical load balancing.",
    outcome: "Identified ₹48 Lakhs annual energy savings with an average payback period of 11 months.",
    image: images.project_foundry_audit
  },
  {
    id: "p4",
    title: "Multinational Corporate Language & Executive Communication Program",
    industry: "CORPORATE TRAINING (ICST GLOBAL)",
    location: "Kolkata & Pan-India Corporate Campuses",
    year: "2023–2024",
    client: "Global Technology & Consulting MNC",
    scope: "Bespoke multilingual curriculum design covering business English, local language transition for expatriates, and voice/accent enhancement for 250+ personnel.",
    outcome: "94% proficiency benchmark achievement and documented cross-border delivery acceleration.",
    image: images.project_training
  }
];

export const insightsData = [
  {
    id: "i1",
    category: "ENERGY",
    title: "Decentralized Solar & BEE Audits: De-Risking Indian Manufacturing Campuses",
    excerpt: "Why energy-intensive industries in eastern India are combining captive rooftop solar with statutory BEE audits to hedge against grid tariff inflation.",
    date: "September 2026",
    readTime: "6 min read",
    author: "NRG India / EnVERT Energy Division"
  },
  {
    id: "i2",
    category: "TRANSPORT",
    title: "Commercial EV Fleets in High-Ambient Regions: Depot Sizing & Battery Longevity",
    excerpt: "Examining practical challenges in grid interconnection, thermal conditioning, and chassis duty-cycles for commercial fleets under tropical conditions.",
    date: "August 2026",
    readTime: "8 min read",
    author: "EnVERT E-Vehicles Engineering"
  },
  {
    id: "i3",
    category: "PUBLICATION & MEDIA",
    title: "The Touriosity & Curiosity Kids: Fostering Global Heritage & Young Literature",
    excerpt: "How EnVERT Media unifies conscious travel journalism through The Touriosity and youth creative storytelling across Amazon global distribution.",
    date: "July 2026",
    readTime: "5 min read",
    author: "EnVERT Media Editorial Board"
  },
  {
    id: "i4",
    category: "PUBLICATION & MEDIA",
    title: "Industrial Decarbonization vs. Global Competitiveness: The Indian Outlook",
    excerpt: "An investigative overview of compliance mandates, ESG investments, and structural hurdles facing heavy industries in Eastern India.",
    date: "September 2026",
    readTime: "7 min read",
    author: "Glare Post Editorial Desk"
  }
];
