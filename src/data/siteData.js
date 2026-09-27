import { images } from './image.js';
export { images } from './image.js';

export const siteMetadata = {
  companyName: "EnVERT Group",
  tagline: "Engineering Solutions for a Changing World.",
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
    { label: "Engineering & Materials", count: "04 Categories", desc: "Energy (NRG India), Transport (EnVERT E-Vehicles), Specialty Chemicals & Epoxy (REPOXISY), Solar & Rail Systems (WAGSOL)" },
    { label: "Tourism & Advisory", count: "04 Categories", desc: "Sustainable Tourism Conferences & Industry Platform (ICST Global), Corporate Training & Relocation (India Corporate Trainers), Policy Research (EIPR), Strategic Advisory (Afield Advisory)" },
    { label: "Media & Culture", count: "03 Categories", desc: "Publication & Media (Touriosity Travelmag, Pen & Ink, Glare Post), Visual Arts (Afield Gallery)" },
    { label: "Stewardship & Living", count: "03 Categories", desc: "Social Stewardship (EnVERT Foundation), Fashion & Lifestyle (Atmaja), Solar Research & Efficiency (EISREE)" },
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
        url: "https://www.envertelectric.com/",
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
    name: "ICST Global",
    category: "Sustainable Tourism, Conferences & Industry Platform",
    companyName: "ICST Global",
    companyLegalName: "ICST Global (International Conference on Sustainable Transition)",
    brandRef: "ICST Global",
    urlSlug: "icst",
    aliases: ["icst", "corporate-training", "training", "language-engineering", "sustainable-transition", "sustainable-tourism", "icst-global"],
    logo: images.icst_logo,
    secondaryLogo: images.icst_secondary_logo,
    tagline: "International conferences, exhibitions, and knowledge platform for sustainable tourism, destination development, and tourism innovation.",
    summary: "ICST Global (International Conference on Sustainable Transition) functions as a premier international tourism knowledge, conference, networking, and industry-platform organisation. It organises international conferences and exhibitions focused on sustainable tourism, innovation, and policy, bringing together tourism professionals, academics, government officials, tourism ministries, national tourism organisations (NTOs), destination developers, hoteliers, airlines, tour operators, and technology companies. ICST promotes sustainable destination development, ecotourism, rural tourism, cultural tourism, and community-based tourism, while facilitating policy dialogue and industry collaboration across the global tourism ecosystem.",
    businessesUnderCategory: [
      {
        name: "ICST Global Conferences",
        legalName: "International Conference on Sustainable Transition",
        role: "International Sustainable Tourism Conferences & Exhibitions",
        logo: images.icst_logo,
        url: "http://www.icstglobal.com",
        desc: "Organises international conferences and exhibitions focused on sustainable tourism practices, destination development, tourism innovation, and policy. Brings together tourism ministries, NTOs, travel agents, tour operators, airlines, airports, hotels, resorts, cruise companies, educational institutions, and technology companies under one platform."
      },
      {
        name: "Sustainable Tourism Knowledge Platform",
        legalName: "ICST Global — Knowledge & Publishing",
        role: "Industry News, Articles & Tourism Intelligence",
        logo: images.icst_logo,
        url: "http://www.icstglobal.com",
        desc: "Publishes tourism-related industry news, destination articles, tourism initiative coverage, hospitality insights, and exhibition updates. Highlights emerging tourism trends, start-ups, new tourism experiences, sustainable benchmarking tools, and best-practice frameworks for the global tourism industry."
      },
      {
        name: "Destination & Community Tourism",
        legalName: "ICST Global — Destination Development",
        role: "Ecotourism, Rural & Cultural Tourism Development",
        logo: images.icst_secondary_logo,
        url: "http://www.icstglobal.com",
        desc: "Supports sustainable destination development across ecotourism, rural tourism, cultural tourism, heritage tourism, and community-based tourism. Promotes responsible, community-sensitive tourism including cultural sensitivity training and community museum and heritage initiatives."
      }
    ],
    capabilities: [
      "Organising International Sustainable Tourism Conferences",
      "Sustainable Destination Development (Ecotourism, Rural & Cultural Tourism)",
      "Tourism Innovation & Technology Integration",
      "Tourism Policy, Strategy & Government Engagement",
      "Environmental Sustainability & Renewable Energy in Tourism",
      "Exhibition & Participation Platform for Tourism Stakeholders",
      "Industry Networking & Partnership Facilitation",
      "Publishing Tourism Industry News, Articles & Intelligence",
      "Culinary, Medical, Adventure & Specialised Tourism Segments",
      "Sustainable Tourism Benchmarking, Tools & Best Practices",
      "Community-Sensitive & Responsible Tourism Promotion",
      "Collaboration with NTOs, Tourism Ministries & Trade Bodies"
    ],
    image: images.training_hero,
    imageCaption: "ICST Global — International conferences and exhibitions on sustainable tourism, destination development, and tourism innovation.",
    domainLink: "http://www.icstglobal.com",
    directEmail: "icst@thetouriosity.com",
    alternateEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "publication",
    num: "04",
    name: "Publication & Media",
    category: "Publication & Media",
    companyName: "Pen & Ink / Touriosity Travelmag / Glare Post",
    brandRef: "EnVERT Media Group",
    urlSlug: "publication",
    aliases: ["publication", "publishing", "pen-ink", "touriosity", "touriosity-travelmag", "glarepost"],
    logo: images.pen_and_ink_logo,
    tagline: "International magazines, digital journalism, literature awards, and trade journals.",
    summary: "EnVERT Group's Publication & Media vertical unifies our established publishing houses, globally distributed magazines, and digital news channels: Touriosity Travelmag (international heritage & eco-tourism magazine), Pen & Ink Publishers, Curiosity Kids magazine (7+ years on Amazon Paperback & Kindle), Sustainable Energy Review trade magazine, and Glare Post digital journalism.",
    // Multiple businesses under this category
    businessesUnderCategory: [
      {
        name: "Touriosity Travelmag",
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
        role: "Clean Energy & Technology Trade Magazine",
        logo: images.sustainable_energy_review_logo,
        desc: "B2B trade magazine dedicated to renewable technology, statutory BEE energy audit policy, and industrial efficiency standards."
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
      "Touriosity Travelmag Global Heritage & Eco-Tourism Magazine Publishing",
      "Curiosity Writing Awards (Annual International Competition)",
      "Curiosity Kids Magazine (Global Amazon Paperback & Kindle Distribution)",
      "Sustainable Energy Review (Clean Energy & Technology Trade Magazine)",
      "Glare Post (Digital Investigative Journalism & Policy Debates)",
      "Anthology Curation & Worldwide Publication for Emerging Authors",
      "Trade Advertising, Space Selling & Corporate Media Partnerships",
      "Editorial Proofreading, Curation, Formatting & Global Distribution"
    ],
    publications: [
      {
        name: "Touriosity Travelmag",
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
        desc: "Clean Energy & Technology Trade Magazine dedicated to clean power, industrial efficiency, and statutory policy standards.",
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
    imageCaption: "EnVERT publishing archives, Touriosity Travelmag, and global magazine distributions.",
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
    name: "Afield Gallery",
    category: "Visual Arts & Contemporary Culture",
    companyName: "Afield Gallery",
    companyLegalName: "Afield Gallery",
    brandRef: "Afield Gallery",
    urlSlug: "afield-gallery",
    aliases: ["afield-gallery", "indian-art-and-dolls-gallery", "arts-and-dolls-gallery", "art-gallery", "gallery", "art", "visual-arts"],
    logo: images.afield_gallery_logo,
    tagline: "Curatorial initiative showcasing contemporary visual artists, Indian arts and dolls, printmakers, and cultural dialogues.",
    summary: "Afield Gallery is EnVERT Group's visual arts and cultural initiative. A curatorial platform showcasing contemporary visual artists, traditional handcrafted Indian arts and dolls, fine printmakers, and cultural dialogues exploring ecological harmony and modern expression.",
    businessesUnderCategory: [
      {
        name: "Afield Gallery",
        role: "Visual Arts & Contemporary Culture",
        logo: images.afield_gallery_logo,
        url: "/businesses/afield-gallery",
        desc: "Curated contemporary visual artists, Indian arts and dolls, printmakers, and cultural dialogues exploring ecological harmony and modern expression."
      }
    ],
    capabilities: [
      "Curatorial Contemporary Art Exhibitions & Gallery Showcases",
      "Traditional Indian Handcrafted Arts & Dolls Gallery",
      "Artist Representation & Regional Talent Spotlights",
      "Fine Art Printmaking & Archival Reproduction",
      "Community Cultural Dialogues & Sustainable Form Gatherings",
      "Corporate Art Advisory & Heritage Collection Curation"
    ],
    image: images.afield_gallery_hero,
    imageCaption: "Afield Gallery visual arts curation and contemporary cultural exhibitions.",
    domainLink: "/businesses/afield-gallery",
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
    id: "afield-advisory",
    num: "08",
    name: "Advisory Services",
    category: "Advisory Services",
    companyName: "Afield Advisory",
    companyLegalName: "Afield Advisory (Advisory Department of EnVERT Group)",
    brandRef: "Afield Advisory",
    urlSlug: "afield-advisory",
    aliases: ["afield-advisory", "advisory", "advisory-services"],
    logo: images.afield_logo,
    tagline: "Destination representation, tourism board advisory, brand consultancy, and strategic PR.",
    summary: "Afield Advisory is the dedicated advisory department of EnVERT Group. We deliver strategic destination profiling, tourism board representation, brand architecture, PR communications, media interactions, and cross-border promotional partnerships.",
    businessesUnderCategory: [
      {
        name: "Afield Advisory",
        legalName: "Afield Advisory",
        role: "Strategic Advisory Department",
        logo: images.afield_logo,
        url: "https://www.envertgroup.com/afield-advisory",
        desc: "Destination representation, brand consultancy, PR & communications, media interactions, and CSR advisory."
      }
    ],
    capabilities: [
      "Destination Representation & Global Tourism Boards",
      "Strategic Brand Consultancy & Corporate Architecture",
      "Public Relations Management & Media Interactions",
      "Marketing & Cross-Border Promotional Alliances",
      "Creative Designing & Global Campaign Management",
      "Event Management & International Exhibitions",
      "Corporate Social Responsibility (CSR) Advisory"
    ],
    image: images.market_advisory,
    imageCaption: "Afield Advisory strategic destination representation, brand consultancy, and media relations.",
    domainLink: "https://www.envertgroup.com/afield-advisory",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "eipr",
    num: "09",
    name: "Policy Research",
    category: "Policy Research",
    companyName: "EIPR",
    companyLegalName: "EnVERT Institute of Policy Research (EIPR)",
    brandRef: "EIPR",
    urlSlug: "eipr",
    aliases: ["eipr", "policy-research", "research"],
    logo: images.eipr_logo,
    tagline: "Applied industrial policy research, techno-commercial evaluations, and clean energy benchmarking.",
    summary: "EIPR (EnVERT Institute of Policy Research) bridges industrial transition, clean-tech economics, and regulatory policy research. Conducting applied techno-commercial evaluations, clean energy modeling, patent landscapes, and institutional decarbonization whitepapers.",
    businessesUnderCategory: [
      {
        name: "EIPR",
        legalName: "EnVERT Institute of Policy Research",
        role: "Policy Research & Techno-Economic Advisory",
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
    imageCaption: "EIPR policy research laboratories and techno-commercial feasibility studies.",
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
  },
  {
    id: "repoxisy",
    num: "11",
    name: "Specialty Chemicals & Epoxy Solutions",
    category: "Specialty Chemicals & Epoxy Solutions",
    companyName: "REPOXISY",
    companyLegalName: "REPOXISY™ (A Division of Nandi Resources Generation Technology Pvt. Ltd.)",
    brandRef: "REPOXISY",
    urlSlug: "repoxisy",
    aliases: ["repoxisy", "epoxy", "specialty-chemicals", "specialty-chemicals-and-epoxy-solutions", "advanced-epoxy-and-construction-chemicals", "epoxy-flooring", "construction-chemicals", "nandi-resources-repoxisy"],
    logo: images.repoxisy_logo,
    tagline: "Industrial & railway epoxy flooring systems, protective coatings, adhesives, and single-window turnkey application.",
    summary: "REPOXISY™ is the specialized specialty chemicals & epoxy solutions brand of Nandi Resources Generation Technology Pvt. Ltd. (NRG India). Specializing in high-performance industrial and railway epoxy flooring systems, protective resin coatings, waterproofing chemical sealants, and structural adhesives, REPOXISY delivers complete single-window turnkey execution from substrate assessment to final quality inspection.",
    businessesUnderCategory: [
      {
        name: "REPOXISY™",
        legalName: "REPOXISY (Nandi Resources Generation Technology Pvt. Ltd.)",
        role: "Specialty Chemicals & Epoxy Solutions",
        logo: images.repoxisy_logo,
        url: "/businesses/repoxisy",
        desc: "Industrial and railway epoxy flooring systems, protective coatings, structural adhesives & resins, waterproofing chemicals, and single-window turnkey application."
      }
    ],
    capabilities: [
      "Industrial & Railway Epoxy Flooring Systems",
      "Protective & Anti-Corrosion Industrial Epoxy Coatings",
      "Epoxy Grout & Coloured / Glitter Epoxy Grout Formulations",
      "Epoxy Resins, Structural Adhesives & Reactive Resin Products",
      "Waterproofing Chemical Compositions & Building Sealants",
      "Synthetic-Resin Paints, Primers, Sealers & Protective Topcoats",
      "Chemical Sealants for Industrial Walls, Roofs, Floors & Tiles",
      "High-Performance Flooring & Construction Chemical Materials",
      "Single-Window Turnkey Epoxy Flooring Execution & Quality Control"
    ],
    singleWindowProcess: [
      "Site Inspection",
      "Substrate Assessment",
      "Surface Preparation",
      "Crack / Defect Treatment",
      "Primer Application",
      "Epoxy Application",
      "Thickness Control",
      "Curing",
      "Final Quality Inspection",
      "Technical Consultation & Material Selection"
    ],
    productsMatrix: [
      { area: "Epoxy flooring", products: "Industrial and railway epoxy flooring systems" },
      { area: "Epoxy coatings", products: "Protective and industrial epoxy coatings" },
      { area: "Epoxy grout", products: "Epoxy grout and coloured/glitter epoxy grout" },
      { area: "Adhesives & resins", products: "Epoxy resins, industrial adhesives and related resin products" },
      { area: "Waterproofing", products: "Waterproofing chemical compositions and sealants" },
      { area: "Paints & coatings", products: "Epoxy resin coatings, synthetic-resin paints, primers, sealers and related products" },
      { area: "Construction chemicals", products: "Chemical sealants for walls, roofs, floors and tiles" },
      { area: "Flooring/construction materials", products: "Products associated with tiles, flooring and related building applications" }
    ],
    image: images.repoxisy_hero,
    imageCaption: "REPOXISY™ industrial epoxy flooring installations and specialty chemical coatings.",
    domainLink: "/businesses/repoxisy",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "wagsol",
    num: "12",
    name: "Solar, Railway Systems & Green Sanitation",
    category: "Solar, Railway Systems & Green Sanitation",
    companyName: "WAGSOL",
    companyLegalName: "WAGSOL™ (A Division of Nandi Resources Generation Technology Pvt. Ltd.)",
    brandRef: "WAGSOL",
    urlSlug: "wagsol",
    aliases: ["wagsol", "solar-lighting", "railway-lighting", "bio-toilets", "railway-sanitation", "bldc-fans", "nandi-resources-wagsol"],
    logo: images.wagsol_logo,
    tagline: "Turnkey solar lighting, railway wagon solar solutions (BVCM/BVZI), BLDC ventilation, and biological railway sanitation.",
    summary: "WAGSOL™ is the specialized solar power, railway equipment, and biological sanitation brand of Nandi Resources Generation Technology Pvt. Ltd. (NRG India). WAGSOL engineers turnkey solar street and high-mast lighting, specialized solar systems for railway wagon applications (BVCM/BVZI), industrial solar power plants with AMC maintenance, railway coach and platform lighting, energy-efficient BLDC fans, and certified eco-friendly railway bio-toilets alongside waterless sanitary installations.",
    businessesUnderCategory: [
      {
        name: "WAGSOL™",
        legalName: "WAGSOL (Nandi Resources Generation Technology Pvt. Ltd.)",
        role: "Solar Engineering, Railway Systems & Green Sanitation",
        logo: images.wagsol_logo,
        url: "/businesses/wagsol",
        desc: "Turnkey solar lighting, railway wagon solar systems (BVCM/BVZI), LED & high-mast illumination, BLDC fans, railway bio-toilets, and waterless sanitary engineering."
      }
    ],
    capabilities: [
      "Solar Street & High-Mast Lighting Systems",
      "Specialized Solar Solutions for Railway Wagon Applications (BVCM / BVZI)",
      "Solar Power Equipment, PV Modules & Charge Controller Units (CCUs)",
      "Solar-Powered Rechargeable Batteries & Industrial Energy Storage",
      "GPS/GPRS Remote Solar Telemetry, Cloud Monitoring & Energy Metering",
      "MW-Scale On-Grid & Off-Grid Solar Power Plant AMC Maintenance",
      "Railway Coach, Carriage & Platform LED Lighting Installations",
      "Industrial & Emergency Safety Illumination Systems",
      "Energy-Efficient BLDC Ceiling, Exhaust & Air-Circulating Fans",
      "Railway Bio-Toilets & Bio-Digestive Waste Treatment Systems",
      "Waterless Urinals & Water-Saving Public Sanitary Installations",
      "Heating, Cooling & Ventilation Apparatus for Transit & Institutional Facilities"
    ],
    productsMatrix: [
      { area: "Solar lighting", products: "Solar street lights, solar-powered lamps and solar LED lighting installations" },
      { area: "High-mast lighting", products: "Solar high-mast lighting systems, high-mast luminaires and tall-mast apparatus" },
      { area: "Home lighting", products: "Solar home lighting systems and decentralized domestic solar kits" },
      { area: "Solar charge controllers", products: "Controllers and Charge Control Units (CCUs) for solar battery systems" },
      { area: "Solar power equipment", products: "Solar panels, photovoltaic equipment, solar cells/wafers and related balance-of-system equipment" },
      { area: "Solar batteries", products: "Solar-powered rechargeable batteries and heavy-duty industrial solar batteries" },
      { area: "Solar chargers", products: "Solar-powered battery chargers and high-efficiency solar charge adapters" },
      { area: "Solar monitoring / control", products: "Energy metering, voltage/current measurement, data logging, GPS/GPRS remote monitoring and cloud/server data storage" },
      { area: "Solar railway projects", products: "Solar solutions for BVCM/BVZI railway wagon applications and DC/off-grid transit systems" },
      { area: "Solar plant maintenance", products: "Comprehensive Annual Maintenance Contracts (AMC) for MW-scale on-grid and off-grid solar power plants" },
      { area: "LED lighting", products: "LED lamps, LED bulbs, LED luminaires, LED light fittings and architectural installations" },
      { area: "Street & outdoor lighting", products: "LED street lights, roadway lights, pathway lights, area floodlights and perimeter illumination" },
      { area: "Railway lighting", products: "Railway coach lighting, carriage lamps, compartment lighting and railway platform lighting" },
      { area: "Industrial lighting", products: "Industrial lamps, heavy-duty luminaires, warehouse lighting and high-bay work-area lighting" },
      { area: "Emergency & safety lighting", products: "Emergency lighting apparatus, pathway safety lighting and illuminated exit signs" },
      { area: "Fans & ventilation", products: "Electric fans, ceiling fans, exhaust fans, industrial ventilation fans and air-circulating blowers" },
      { area: "BLDC fans", products: "Brushless DC (BLDC) electric fans, energy-efficient BLDC ceiling fans and low-power ventilation units" },
      { area: "Railway bio-toilets", products: "Railway bio-toilets, bio-digestive tank systems and biological waste-treatment toilet installations" },
      { area: "Sanitary equipment", products: "Sanitary installations, sanitary apparatus, toilet fixtures and commercial washroom systems" },
      { area: "Waterless urinals", products: "Waterless urinals, sanitary urinals and zero-water urinal installations" },
      { area: "Water-saving sanitary products", products: "Water-saving sanitary apparatus, flow-regulated fixtures and conservation installations" },
      { area: "Public & institutional sanitation", products: "Sanitary installations for railway stations, passenger coaches, commercial buildings and public civic facilities" },
      { area: "Heating / cooling / ventilation", products: "Apparatus and installations for climate conditioning, cooling and ventilation across transit facilities" }
    ],
    image: images.wagsol_hero,
    imageCaption: "WAGSOL™ solar installations, railway systems, and green biological sanitation engineering.",
    domainLink: "/businesses/wagsol",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "eisree",
    num: "13",
    name: "Solar Research & Energy Efficiency",
    category: "Solar Research & Energy Efficiency",
    companyName: "EISREE",
    companyLegalName: "EnVERT Institute of Solar Research & Energy Efficiency (EISREE)",
    brandRef: "EISREE",
    urlSlug: "eisree",
    aliases: ["eisree", "solar-research", "energy-efficiency", "green-campus"],
    logo: images.eisree_logo,
    tagline: "Advancing clean energy transition through solar research, energy efficiency, and community empowerment.",
    summary: "The EnVERT Institute of Solar Research & Energy Efficiency (EISREE) is dedicated to advancing sustainable energy solutions through cutting-edge research, innovation, and community engagement. Our mission is to accelerate the transition toward clean energy by focusing on solar technologies and energy efficiency practices that reduce carbon footprints and empower communities.",
    vision: "To be a global leader in renewable energy research and innovation, driving sustainable development and climate resilience.",
    businessesUnderCategory: [
      {
        name: "EISREE",
        legalName: "EnVERT Institute of Solar Research & Energy Efficiency",
        role: "Clean Energy Research & Capability Institute",
        logo: images.eisree_logo,
        url: "/businesses/eisree",
        desc: "Advancing solar technology research, Green Campus programs, energy efficiency advocacy, and community skill development."
      }
    ],
    capabilities: [
      "Solar Research: Advanced photovoltaic technologies and solar thermal systems",
      "Energy Efficiency: Smart energy management, green building practices, and efficient appliances",
      "Policy & Advocacy: Evidence-based clean energy recommendations for organizations and government bodies",
      "Community Outreach: Renewable energy awareness campaigns, grassroots initiatives, and training",
      "Innovation Hub: Startup incubation and academic-industry collaborative research in clean energy"
    ],
    coreAreas: [
      { title: "Solar Research", desc: "Developing advanced photovoltaic technologies and solar thermal systems." },
      { title: "Energy Efficiency", desc: "Promoting smart energy management, green building practices, and efficient appliances." },
      { title: "Policy & Advocacy", desc: "Supporting governments and organizations with evidence-based recommendations." },
      { title: "Community Outreach", desc: "Training programs, awareness campaigns, and grassroots initiatives to spread renewable adoption." },
      { title: "Innovation Hub", desc: "Incubating startups and fostering collaborations in clean energy technologies." }
    ],
    initiatives: [
      { title: "Solar for All", desc: "Expanding access to affordable solar solutions in rural and urban communities." },
      { title: "Green Campus Program", desc: "Partnering with educational institutions to implement energy-efficient infrastructure." },
      { title: "Research Collaborations", desc: "Working with universities, industry leaders, and international organizations." },
      { title: "Skill Development", desc: "Offering workshops and certifications in renewable energy technologies." }
    ],
    impactMetrics: [
      { label: "Carbon Abatement", desc: "Reduced carbon emissions through solar adoption projects." },
      { label: "Community Empowerment", desc: "Empowered local communities with sustainable energy solutions." },
      { label: "Published Research", desc: "Published research contributing to global renewable energy knowledge." },
      { label: "Green Jobs", desc: "Created employment opportunities in the green energy sector." }
    ],
    image: images.eisree_hero,
    imageCaption: "EnVERT Institute of Solar Research & Energy Efficiency (EISREE) research programs and clean energy training.",
    domainLink: "/businesses/envert-foundation",
    directEmail: "eisree.kolkata@gmail.com",
    alternateEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "india-corporate-trainers",
    num: "14",
    name: "Corporate Training & Professional Consultancy",
    category: "Corporate Training, Education, Legal & Relocation",
    companyName: "India Corporate Trainers",
    companyLegalName: "India Corporate Trainers",
    brandRef: "India Corporate Trainers",
    urlSlug: "india-corporate-trainers",
    aliases: ["india-corporate-trainers", "corporate-trainers", "ict", "corporate-training-services"],
    logo: images.india_corporate_trainers_logo,
    tagline: "Multinational corporate training, educational consultancy, corporate legal compliance, and turnkey corporate relocation.",
    summary: "India Corporate Trainers delivers end-to-end corporate workforce capability, language training, higher-education consultancy, corporate legal documentation, and turnkey corporate relocation across India. Operating across 10 major metropolitan cities with 200+ completed enterprise assignments, the firm provides structured training to employees of global Fortune 500 corporations including Microsoft, IBM, Coca-Cola, PepsiCo, Johnson & Johnson, Citibank, ING, Cisco, GE Commercial Finance, Thermo Fisher Scientific, Goldman Sachs, and Jaguar Land Rover.",
    businessesUnderCategory: [
      {
        name: "India Corporate Trainers",
        legalName: "India Corporate Trainers",
        role: "Corporate Training, Education, Legal & Relocation Services",
        logo: images.india_corporate_trainers_logo,
        url: "/businesses/india-corporate-trainers",
        desc: "Enterprise employee training, institutional education consultancy, corporate legal compliance, and national/international corporate relocation services."
      }
    ],
    capabilities: [
      "Corporate & Language Training for Major Multinational Corporations",
      "200+ Enterprise Assignments Executed Across 10 Major Cities in India",
      "Education Consultancy, Student Counselling & Career Guidance",
      "Curriculum Research & Development for Schools, Colleges & Institutions",
      "Student Exchange Programmes & Master's Thesis Academic Mentoring",
      "Company & Corporate Entity Registrations and Regulatory Filing",
      "Drafting Legal Documents, Contracts, Agreements & Statutory Maintenance",
      "Consultancy on Indian Corporate & Labour Laws via Professional Associates",
      "Turnkey Domestic & International Corporate Relocation Planning",
      "Property Transfers, Packing, Movement of Goods & Customs Clearance Support"
    ],
    serviceAreas: [
      {
        num: "01",
        title: "Corporate Training",
        subtitle: "Enterprise Workforce & Language Training",
        desc: "Language training and professional corporate skill development delivered to employees of major multinational corporations. Over 200+ assignments executed by a nationwide team operating across 10 major Indian cities.",
        points: [
          "Language training and corporate training for enterprise employees",
          "Training delivered to employees of major multinational corporations",
          "200+ completed assignments across 10 major cities in India",
          "Blue-chip track record with Microsoft, IBM, Coca-Cola, PepsiCo, Johnson & Johnson, Citibank, ING, Cisco, GE, Thermo Fisher, Goldman Sachs and Jaguar Land Rover"
        ]
      },
      {
        num: "02",
        title: "Education Consultancy",
        subtitle: "Academic Advisory & Institutional R&D",
        desc: "Comprehensive educational advisory for students, schools, colleges, and higher-education institutions. Engages with higher-education councils and supports post-graduate academic research.",
        points: [
          "Student counselling and personalized career guidance",
          "Training and consultancy for schools, colleges and institutions",
          "Curriculum research and development",
          "Student exchange programmes and cross-cultural initiatives",
          "Academic tutoring and mentoring",
          "Association with higher-education councils and mentoring Master's theses"
        ]
      },
      {
        num: "03",
        title: "Legal Consultancy",
        subtitle: "Corporate Registrations & Statutory Law",
        desc: "End-to-end legal support covering business incorporations, statutory maintenance, and labor law compliance backed by seasoned professional legal associates.",
        points: [
          "Company and corporate registrations",
          "Drafting legal documents, commercial agreements and contracts",
          "Maintenance of statutory records and registers",
          "Consultancy relating to corporate and labour laws",
          "Comprehensive legal support through professional associates"
        ]
      },
      {
        num: "04",
        title: "Corporate Relocation Services",
        subtitle: "Domestic & International Mobility",
        desc: "Seamless turnkey relocation services for individuals, expatriate families, and multinational corporate teams transitioning across cities or borders.",
        points: [
          "Assistance with relocation of individuals, families and corporate teams",
          "Relocation planning, scheduling and documentation",
          "Property transfers and real estate coordination",
          "Packing and movement of goods nationally and internationally",
          "Support involving customs clearance, transit insurance, passports and visas"
        ]
      },
      {
        num: "05",
        title: "Language & Capability Engineering",
        subtitle: "Executive Communication & Global Fluency",
        desc: "Specialized language curricula, voice and accent neutralization, and cross-cultural communication frameworks preparing enterprise workforces for global multinational client engagements.",
        points: [
          "Voice & accent neutralization for international client interaction",
          "Cross-cultural fluency and global business communication",
          "Executive leadership communication coaching",
          "Multi-tier corporate language curricula benchmarked to international standards"
        ]
      }
    ],
    clientRoster: [
      "Microsoft", "IBM", "Coca-Cola", "PepsiCo", "Johnson & Johnson",
      "Citibank", "ING", "Cisco", "GE Commercial Finance",
      "Thermo Fisher Scientific", "Goldman Sachs", "Jaguar Land Rover"
    ],
    stats: [
      { label: "Enterprise Assignments", value: "200+" },
      { label: "Major Indian Cities", value: "10" },
      { label: "Global MNC Clients", value: "12+" },
      { label: "Principal Service Disciplines", value: "05" }
    ],
    image: images.corporate_trainers_hero,
    imageCaption: "India Corporate Trainers executive capability training and professional consultancy.",
    domainLink: "/businesses/india-corporate-trainers",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "glarepost-films",
    num: "15",
    name: "Glarepost Films",
    category: "Film & Content Production",
    companyName: "Glarepost Films",
    companyLegalName: "Glarepost Films (EnVERT Media Group)",
    brandRef: "Glarepost Films",
    urlSlug: "glarepost-films",
    aliases: ["glarepost-films", "films", "production-house", "documentary", "corporate-films"],
    logo: images.glarepost_films,
    tagline: "A multi-format film and content production company across documentary, fiction, OTT, corporate, travel, and social-impact cinema.",
    summary: "Glarepost Films is the film and content production arm of EnVERT Group, operating as a serious multi-format production company. It undertakes documentary and factual filmmaking, feature and short fiction films, OTT and web series development, advertising and corporate communication films, travel and heritage cinema, and social-impact productions — supported by full end-to-end production and post-production services.",
    businessesUnderCategory: [
      {
        name: "Documentary & Factual",
        legalName: "Glarepost Films — Documentary Division",
        role: "Social, Cultural, Environmental & Corporate Documentaries",
        logo: images.glarepost_films,
        desc: "Social, cultural, environmental, corporate, and human-interest documentaries. Factual filmmaking that informs, inspires, and drives public discourse."
      },
      {
        name: "Film & Fiction",
        legalName: "Glarepost Films — Fiction Division",
        role: "Feature Films, Short Films & Independent Cinema",
        logo: images.glarepost_films,
        desc: "Full-length feature films, independent cinema, short fiction films, and experimental purpose-driven short-form cinema across genres."
      },
      {
        name: "OTT & Digital Content",
        legalName: "Glarepost Films — Digital Division",
        role: "Web Series, Original Content & OTT Entertainment",
        logo: images.glarepost_films,
        desc: "Original web series, digital entertainment content, and OTT-ready productions developed for streaming platforms and digital-first audiences."
      },
      {
        name: "Advertising & Corporate Films",
        legalName: "Glarepost Films — Brand Division",
        role: "TVCs, Corporate Profiles, CSR & Brand Storytelling",
        logo: images.glarepost_films,
        desc: "Television commercials (TVCs), digital commercials, product films, corporate profiles, institutional films, CSR films, and branded storytelling for enterprises."
      },
      {
        name: "Culture, Travel & Social Impact",
        legalName: "Glarepost Films — Culture Division",
        role: "Destination Films, Heritage & Social Impact Cinema",
        logo: images.glarepost_films,
        desc: "Destination stories, tourism films, heritage documentation, cultural films, music videos, and social-impact productions focused on development, sustainability, and communities."
      },
      {
        name: "Production & Post-Production Services",
        legalName: "Glarepost Films — Production Services",
        role: "End-to-End Production, Editing, VFX & Sound Design",
        logo: images.glarepost_films,
        desc: "Full end-to-end production support including location management, crew, casting, logistics, editing, colour grading, sound design, VFX, and motion graphics."
      }
    ],
    capabilities: [
      "Documentary & Factual Filmmaking (Social, Environmental, Corporate)",
      "Feature Films, Short Films & Independent Cinema",
      "OTT & Web Series Original Content Development",
      "Advertising Films — TVCs, Digital Commercials & Brand Storytelling",
      "Corporate Profiles, Institutional & CSR Films",
      "Travel, Destination & Heritage Films",
      "Music Videos, Artist & Entertainment Productions",
      "Social Impact Films & Development Communication",
      "Original IP & Script Development",
      "End-to-End Production Services (Location, Crew, Casting)",
      "Post-Production — Editing, Colour Grading, Sound Design & VFX",
      "Motion Graphics & Visual Effects"
    ],
    image: images.heroes?.media || images.market_publication,
    imageCaption: "Glarepost Films — Multi-format film and content production company.",
    domainLink: "https://www.glarepost.com",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  }
];

export const ecosystemData = {
  pillars: [
    {
      category: "ENGINEERING & MATERIALS",
      description: "Physical infrastructure, clean power generation, commercial electric vehicles, specialty chemicals, and solar railway sanitation.",
      domains: ["Energy (NRG India)", "Transport (EnVERT E-Vehicles)", "Specialty Chemicals & Epoxy Solutions (REPOXISY)", "Solar & Railway Sanitation (WAGSOL)"],
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
        },
        {
          name: "REPOXISY",
          sector: "Specialty Chemicals & Epoxy Solutions",
          url: "/businesses/repoxisy",
          logo: images.repoxisy_logo,
          desc: "Industrial & railway epoxy flooring, protective coatings, and specialty chemicals under Nandi Resources."
        },
        {
          name: "WAGSOL",
          sector: "Solar, Railway & Sanitation",
          url: "/businesses/wagsol",
          logo: images.wagsol_logo,
          desc: "Solar street & high-mast lighting, wagon applications (BVCM/BVZI), BLDC fans, and railway bio-toilets under Nandi Resources."
        }
      ]
    },
    {
      category: "TOURISM & ADVISORY",
      description: "International sustainable tourism conferences, corporate training, policy research, and strategic advisory across global and domestic markets.",
      domains: ["Sustainable Tourism Conferences & Platform (ICST Global)", "Corporate Training & Relocation (India Corporate Trainers)", "Policy Research (EIPR)", "Advisory Department (Afield Advisory)"],
      brands: [
        {
          name: "ICST Global",
          sector: "Sustainable Tourism Conferences & Industry Platform",
          url: "/businesses/icst",
          externalUrl: "http://www.icstglobal.com",
          logo: images.icst_logo,
          desc: "International conferences, exhibitions and knowledge platform for sustainable tourism, destination development, ecotourism, tourism policy, and industry networking."
        },
        {
          name: "India Corporate Trainers",
          sector: "Corporate Training & Relocation",
          url: "/businesses/india-corporate-trainers",
          logo: images.india_corporate_trainers_logo,
          desc: "Corporate training, education consultancy, corporate legal advisory, and turnkey corporate relocation across 10 major Indian cities."
        },
        {
          name: "EIPR",
          sector: "Policy Research",
          url: "/businesses/eipr",
          logo: images.eipr_logo,
          desc: "EnVERT Institute of Policy Research — techno-economic policy and feasibility studies."
        },
        {
          name: "Afield Advisory",
          sector: "Advisory Department",
          url: "/businesses/afield-advisory",
          logo: images.afield_logo,
          desc: "Strategic destination representation, brand consultancy, PR, and communications."
        }
      ]
    },
    {
      category: "MEDIA, PUBLISHING & CULTURE",
      description: "International travel magazines, publishing houses, digital news, and contemporary art.",
      domains: ["Touriosity Travelmag", "Pen & Ink Publishers", "Glare Post", "Afield Gallery"],
      brands: [
        {
          name: "Touriosity Travelmag",
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
          sector: "Visual Arts & Contemporary Culture",
          url: "/businesses/afield-gallery",
          logo: images.afield_gallery_logo,
          desc: "Visual arts, contemporary culture, and curated Indian arts & dolls gallery."
        }
      ]
    },
    {
      category: "STEWARDSHIP & LIVING",
      description: "Community ecology, ethical slow fashion, and renewable energy research.",
      domains: ["Social Stewardship (EnVERT Foundation)", "Fashion & Lifestyle (Atmaja)", "Solar Research & Efficiency (EISREE)"],
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
          name: "EISREE",
          sector: "Solar Research & Energy Efficiency",
          url: "/businesses/eisree",
          logo: images.eisree_logo,
          desc: "Solar technologies, energy efficiency practices, Green Campus initiatives, and clean energy training."
        }
      ]
    }
  ]
};

export { careersData } from './careersData.js';


export const projectsData = [
  {
    id: "bvcm-bvzi-solar-solutions",
    title: "BVCM / BVZI Integrated Solar & DC Power Management Systems",
    vertical: "New & Emerging Vertical: Solar Technology",
    category: "Solar & DC Systems",
    industry: "SOLAR TECHNOLOGY (NANDI RESOURCES)",
    division: "Nandi Resources Generation Technology Pvt. Ltd.",
    client: "Specialised DC & Off-Grid Infrastructure",
    location: "Pan-India / Off-Grid & Remote Sites",
    year: "2025–2026",
    scope: "Development and integration of an advanced proprietary solar power package combining solar PV, high-longevity battery storage, intelligent charge control, circuit protection, telemetry monitoring, and dedicated DC power management.",
    outcome: "Engineered specifically for specialized off-grid and remote industrial DC applications requiring uninterrupted power reliability without DC-AC inversion losses.",
    url: "https://www.nrgindia.com/bvcm-solar",
    image: images.projects.bvcm_solar
  },
  {
    id: "wagsol-ccu-telemetry-controls",
    title: "WAGSOL Smart Solar Charge Controllers & Cloud CCU Systems",
    vertical: "New & Emerging Vertical: Smart Solar Controls",
    category: "Solar Controls & IoT",
    industry: "SMART CONTROLS (WAGSOL / NANDI RESOURCES)",
    division: "WAGSOL Solar Division",
    client: "Municipal, Highway & Distributed Infrastructure",
    location: "Eastern & Western Regional Installations",
    year: "2024–2026",
    scope: "Development and deployment of proprietary solar charge controllers and Central Control Units (CCU) featuring high-precision energy metering, voltage/current monitoring, internal data logging, GPS/GPRS remote telemetry, and cloud server analytics.",
    outcome: "Delivered 24/7 autonomous remote asset telemetry, predictive fault dispatch, and cloud dashboard tracking across hundreds of field-installed systems.",
    url: "https://www.nrgindia.com/general-8",
    image: images.projects.wagsol_ccu
  },
  {
    id: "railway-industrial-solar-applications",
    title: "BVCM/BVZI Specialised Railway & Industrial Solar Systems",
    vertical: "New & Emerging Vertical: Railway DC Applications",
    category: "Railway & Industrial Solar",
    industry: "RAILWAY SYSTEMS (NANDI RESOURCES)",
    division: "Nandi Resources Generation Technology Pvt. Ltd.",
    client: "Indian Railways & Heavy Industrial Complexes",
    location: "Railway Divisions & Industrial Zones",
    year: "2024–2025",
    scope: "Tailored positioning and ruggedization of BVCM/BVZI solar-storage platforms for Indian Railways rolling stock, station facilities, institutions, remote switches, and specialised DC lighting setups.",
    outcome: "Withstood high vibrational shock, mechanical stress, and ambient thermal extremes while supplying autonomous green power for rail and industrial applications.",
    url: "https://www.nrgindia.com/bvcm-solar",
    image: images.projects.railway_solar
  },
  {
    id: "solar-dc-flexible-panel-systems",
    title: "Solar DC Systems with Contoured Flexible Panels & Smart Controllers",
    vertical: "New & Emerging Vertical: Solar DC",
    category: "Solar & DC Systems",
    industry: "SOLAR DC (NANDI RESOURCES)",
    division: "Nandi Resources Generation Technology Pvt. Ltd.",
    client: "Commercial Fleets, Transport Depots & Specialty Roofs",
    location: "Kolkata & Regional Logistics Hubs",
    year: "2025–2026",
    scope: "Engineering dedicated solar architectures designed specifically around DC loads, batteries, and charge controllers—utilizing ultra-lightweight flexible solar panels engineered for curved and low-load structures.",
    outcome: "Eliminated DC-AC inversion losses, delivering direct DC-to-DC charging efficiency exceeding 94% on specialized aerodynamic and curved surfaces.",
    url: "https://www.nrgindia.com/",
    image: images.projects.solar_dc
  },
  {
    id: "solar-energy-storage-lithium-bess",
    title: "Battery-Based Renewable Energy Storage & Lithium BESS Solutions",
    vertical: "New & Emerging Vertical: Energy Storage",
    category: "Energy Storage",
    industry: "ENERGY STORAGE (NANDI RESOURCES)",
    division: "Nandi Resources Generation Technology Pvt. Ltd.",
    client: "Continuous Process Plants & Commercial Campuses",
    location: "West Bengal & Jharkhand Industrial Belts",
    year: "2024–2026",
    scope: "Turnkey engineering and integration of battery-based renewable energy systems and stationary energy storage solutions (BESS), including high-longevity Lithium Iron Phosphate (LiFePO4) storage arrays with active thermal BMS.",
    outcome: "Facilitated solar peak-shaving, reduced diesel generator dependence by up to 60%, and maintained uninterrupted backup during DISCOM grid outages.",
    url: "https://www.nrgindia.com/servicesnrgindia",
    image: images.projects.bess_storage
  },
  {
    id: "repoxisy-industrial-epoxy-flooring",
    title: "REPOXISY Polyamine Epoxy Flooring & Heavy Protective Surfaces",
    vertical: "New & Emerging Vertical: Industrial Products",
    category: "Specialty Chemicals",
    industry: "SPECIALTY CHEMICALS (REPOXISY)",
    division: "REPOXISY / Nandi Resources",
    client: "Industrial Manufacturing, Warehouses & Railway Facilities",
    location: "Pan-India Industrial Parks & Railway Workshops",
    year: "2024–2026",
    scope: "Turnkey surface preparation, multi-layer polyamine epoxy application, high-build anti-corrosive chemical coatings, anti-static ESD flooring, and heavy-load monolithic floor resurfacing.",
    outcome: "High compressive strength, zero dust generation, resistance to harsh industrial chemicals/oils, and full adherence to railway workshop specifications.",
    url: "https://www.nrgindia.com/general-8",
    image: images.projects.repoxisy_epoxy
  },
  {
    id: "fleet-graphics-vinyl-solutions",
    title: "Commercial Fleet Graphics & Industrial Grade Vinyl Applications",
    vertical: "New & Emerging Vertical: Fleet Graphics",
    category: "Fleet Graphics",
    industry: "GRAPHICS & BRANDING (NANDI RESOURCES)",
    division: "Nandi Resources Generation Technology Pvt. Ltd.",
    client: "Commercial Transport Operators, Corporate Fleets & Transit Coaches",
    location: "Kolkata Logistics Corridor & National Routes",
    year: "2024–2026",
    scope: "High-durability exterior vinyl graphics, UV-stable protective laminates, reflective safety chevron markings, and precision graphic installations across commercial vans, trucks, and rail wagons.",
    outcome: "Standardized corporate visual identity and weather-resistant surface protection rated for 5+ years of intense highway UV and weathering.",
    url: "https://www.nrgindia.com/",
    image: images.projects.fleet_graphics
  },
  {
    id: "mw-scale-solar-om-amc",
    title: "MW-Scale On-Grid & Off-Grid Solar Power Plant O&M / AMC",
    vertical: "New & Emerging Vertical: Solar O&M",
    category: "Solar O&M",
    industry: "SOLAR EPC & O&M (NANDI RESOURCES)",
    division: "Nandi Resources Generation Technology Pvt. Ltd.",
    client: "Independent Power Producers (IPPs) & Industrial Captive Solar Plants",
    location: "Eastern India Solar Parks & Rooftop Clusters",
    year: "2023–2026",
    scope: "Preventative and corrective Annual Maintenance Contracts (AMC) for MW-scale solar assets: IV-curve tracing, thermal drone thermography, HT switchgear servicing, inverter maintenance, SCADA monitoring, and robotic/semi-automated panel cleaning.",
    outcome: "Maintained verified 99.4% plant uptime and prevented up to 8% generation loss typically caused by soiling and string degradation.",
    url: "https://www.nrgindia.com/general-8",
    image: images.projects.solar_om
  },
  {
    id: "casting-industry-energy-audit",
    title: "Statutory BEE Industrial Energy Audits & Casting Industry Optimization",
    vertical: "New & Emerging Vertical: Energy Auditing",
    category: "Energy & Green Audits",
    industry: "BEE ENERGY AUDITING (NRG INDIA)",
    division: "NRG India / Nandi Resources",
    client: "Ferrous & Non-Ferrous Foundries, Steel Mills & Heavy Plants",
    location: "Asansol, Durgapur & Howrah Foundry Clusters",
    year: "2024–2025",
    scope: "Comprehensive statutory Bureau of Energy Efficiency (BEE) certified audits: induction furnace thermal profiling, flue-gas heat recovery, compressed air leakage mapping, VFD retrofit analysis, and power factor correction.",
    outcome: "Identified actionable specific energy consumption (SEC) reduction yielding ₹48+ Lakhs in annualized electricity and fuel savings with an average 10-month payback.",
    url: "https://www.nrgindia.com/",
    image: images.projects.foundry_audit
  },
  {
    id: "green-environmental-audit-institutional",
    title: "Green & Environmental Audits: Carbon Sinks, Water & Biodiversity",
    vertical: "New & Emerging Vertical: Green Audits",
    category: "Energy & Green Audits",
    industry: "ENVIRONMENTAL AUDITING (NANDI RESOURCES)",
    division: "Nandi Resources Generation Technology Pvt. Ltd.",
    client: "Higher Education Campuses, NAAC Accredited Colleges & Industrial Zones",
    location: "Kolkata, Howrah & Pan-Bengal Campuses",
    year: "2024–2026",
    scope: "Rigorous assessment of on-site carbon sinks, flora and fauna biodiversity mapping, campus water balance, rainwater harvesting potential, grey-water recycling, and renewable integration opportunities.",
    outcome: "Helped partner institutions secure top-grade NAAC Green Audit accreditation and formulated 5-year campus ecological sustainability roadmaps.",
    url: "https://www.nrgindia.com/green-audit?utm_source=chatgpt.com",
    image: images.projects.green_audit
  },
  {
    id: "carbon-advisory-ghg-mitigation",
    title: "Corporate Carbon Advisory, GHG Mitigation & Carbon Portfolio Structuring",
    vertical: "New & Emerging Vertical: Carbon Advisory",
    category: "Carbon & Advisory",
    industry: "CARBON ADVISORY (NANDI RESOURCES)",
    division: "Nandi Resources Generation Technology Pvt. Ltd.",
    client: "Export-Oriented Manufacturing & Corporate Enterprises",
    location: "Kolkata HQ / National Portfolios",
    year: "2025–2026",
    scope: "Corporate Scope 1, 2, and 3 emissions baseline calculation, GHG mitigation project validation, carbon offset credit origination, and European CBAM readiness advisory for exporters.",
    outcome: "Structured verifiable decarbonization pathways aligning industrial clients with statutory ESG compliance and international carbon trade standards.",
    url: "https://www.nrgindia.com/servicesnrgindia",
    image: images.projects.carbon_advisory
  },
  {
    id: "renewable-hydrogen-green-fuels",
    title: "Renewable Hydrogen & Green Alternative Fuel Transition Feasibility",
    vertical: "New & Emerging Vertical: Green Hydrogen",
    category: "Advanced Renewables",
    industry: "HYDROGEN & GREEN FUELS (NANDI RESOURCES)",
    division: "Nandi Resources Generation Technology Pvt. Ltd.",
    client: "Chemical, Metallurgy & Energy Transition Consortiums",
    location: "Eastern India Industrial Corridors",
    year: "2025–2026",
    scope: "Engineering feasibility studies on renewable hydrogen production via dedicated solar-wind electrolyzers, hydrogen blending in industrial heating, and synthetic bio-fuel alternatives.",
    outcome: "Formulated techno-economic blueprints for pilot electrolyzer coupling, outlining realistic green hydrogen levelized cost of energy (LCOE) targets.",
    url: "https://www.nrgindia.com/servicesnrgindia",
    image: images.projects.hydrogen_fuel
  },
  {
    id: "bioenergy-biomass-research-innovation",
    title: "Biomass-to-Bioenergy Technology Research & Rural Agri-Energy Systems",
    vertical: "New & Emerging Vertical: Bioenergy",
    category: "Advanced Renewables",
    industry: "BIOENERGY INNOVATION (NANDI RESOURCES)",
    division: "Nandi Resources Generation Technology Pvt. Ltd.",
    client: "Agri-Processing Hubs & Rural Decentralized Grids",
    location: "Bengal & Eastern Agricultural Corridors",
    year: "2024–2026",
    scope: "Applied research across the biomass-to-bioenergy value chain: crop residue briquetting, gasification kinetics, combined heat and power (CHP) generation, and rural agricultural waste valorization.",
    outcome: "Demonstrated workable biomass fuel pelletization models preventing agricultural field burning while producing clean process heat for rural agro-processing.",
    url: "https://www.nrgindia.com/servicesnrgindia",
    image: images.projects.bioenergy
  },
  {
    id: "wind-solar-hybrid-microgrid-solutions",
    title: "Wind-Solar Hybrid Renewable Solutions & Multi-Resource Storage",
    vertical: "New & Emerging Vertical: Hybrid Renewables",
    category: "Advanced Renewables",
    industry: "HYBRID RENEWABLES (NANDI RESOURCES)",
    division: "Nandi Resources Generation Technology Pvt. Ltd.",
    client: "Industrial Parks & Coastal / Semi-Arid Microgrids",
    location: "Eastern & Coastal Geographies",
    year: "2024–2026",
    scope: "Broadened renewable offering integrating small-to-medium wind generation alongside commercial solar arrays and BESS storage for complementary diurnal and seasonal power generation.",
    outcome: "Maximized plant capacity utilization factor (CUF) from 18% (solar-only) to over 38% through hybrid wind-solar diurnal complementarity.",
    url: "https://www.nrgindia.com/servicesnrgindia",
    image: images.projects.wind_hybrid
  },
  {
    id: "corporate-renewable-ppa-open-access",
    title: "Corporate Renewable Power Purchase Agreements (PPA) & Open Access",
    vertical: "New & Emerging Vertical: Corporate PPA",
    category: "Power Contracting",
    industry: "POWER CONTRACTING (NANDI RESOURCES)",
    division: "Nandi Resources Generation Technology Pvt. Ltd.",
    client: "Commercial & Industrial (C&I) Power Consumers",
    location: "Pan-India C&I Clients",
    year: "2024–2026",
    scope: "End-to-end structuring of off-site Group Captive and Third-Party Open Access Solar & Hybrid PPAs: regulatory tariff modeling, DISCOM open access approvals, Wheeling & Banking agreement liaison, and long-term 15-25 year power contracts.",
    outcome: "Delivered guaranteed 35% grid tariff savings without upfront Capex expenditure for high-demand commercial clients.",
    url: "https://www.nrgindia.com/servicesnrgindia",
    image: images.projects.corporate_ppa
  },
  {
    id: "envert-ev-fleet-depot-blueprint",
    title: "EnVERT Commercial EV Fleet Deployment & Charging Depot Blueprint",
    vertical: "E-Mobility Vertical: EnVERT E-Vehicles",
    category: "Clean Mobility",
    industry: "TRANSPORT (ENVERT E-VEHICLES)",
    division: "EnVERT E-Vehicles Private Limited",
    client: "Urban Transit & Commercial Logistics Consortiums",
    location: "Greater Kolkata Logistics Hub",
    year: "2024–2026",
    scope: "Route energy profiling, EnVERT Duex-PM platform deployment, HT substation transformer sizing, and dual-gun DC fast-charging depot design under national FAME e-mobility directives.",
    outcome: "Seamless electrification blueprint for commercial transit vehicles with optimized charging duty-cycles and zero peak-grid tripping.",
    url: "https://www.envertgroup.com/transport-electric",
    image: images.projects.ev_fleet
  },
  {
    id: "corporate-training-relocation-programs",
    title: "Multilingual Corporate Training & Relocation Programs Across 10 Cities",
    vertical: "Corporate Capability Vertical: India Corporate Trainers",
    category: "Capability & Training",
    industry: "CORPORATE TRAINING (ICST / ICT)",
    division: "India Corporate Trainers / ICST",
    client: "Multinational Technology, Energy & Consulting Enterprises",
    location: "Kolkata, Mumbai, Bengaluru, Delhi & 6 Major Indian Hubs",
    year: "2024–2026",
    scope: "Bespoke corporate capability architecture: business communications, executive relocation assistance, cross-cultural onboarding, and corporate compliance training delivered across 10 major Indian commercial centres.",
    outcome: "95%+ corporate satisfaction score and documented cross-regional executive transition acceleration across 500+ participants.",
    url: "http://www.icstglobal.com",
    image: images.projects.training_program
  }
];

// Official 11 Markets Services Charter Data (Imported images from ./image.js)
export const elevenMarketsData = [
  {
    id: "energy",
    num: "01",
    name: "Energy",
    tagline: "Biogas, biomass, clean power, and industrial efficiency engineering.",
    summary: "Comprehensive clean power infrastructure, biomass combined heat & power (CHP) installations, distributed rooftop solar arrays, and certified statutory industrial energy conservation.",
    image: images.market_energy,
    imageCaption: "Utility-scale photovoltaic installations, renewable power grids, and industrial energy conversion.",
    route: "/businesses/energy",
    services: [
      "Biogas",
      "Biomass",
      "Combined heat and power",
      "District cooling",
      "District heating",
      "Energy and climate",
      "Energy efficiency",
      "Engineering Supplies",
      "Energy strategy and planning",
      "Geothermal energy",
      "Hydro, tidal and wave power",
      "Wind energy",
      "Power",
      "Power transmission",
      "Solar energy",
      "Waste-to-energy"
    ]
  },
  {
    id: "environment",
    num: "02",
    name: "Environment",
    tagline: "Environmental due diligence, impact assessments, and ecological rehabilitation.",
    summary: "Ecological monitoring, air and wastewater compliance, nature rehabilitation, and industrial environmental stewardship matching rigorous statutory mandates.",
    image: images.market_environment,
    imageCaption: "Environmental remediation, natural water resource conservation, and ecosystem rehabilitation.",
    route: "/businesses/energy",
    services: [
      "Indoor Air quality",
      "Climate change",
      "Environmental Due Diligence",
      "Environmental impact assessment",
      "Environmental management",
      "Health & occupational safety",
      "Industrial environment",
      "Landscape architecture",
      "Nature and rehabilitation",
      "Waste",
      "Waste water",
      "Water resources management",
      "Water supply"
    ]
  },
  {
    id: "advisory-services",
    num: "03",
    name: "Advisory Services",
    tagline: "Destination representation, brand consultancy, PR, and corporate communications.",
    summary: "Strategic institutional representation, global destination profiling, public relations management, media interaction, and cross-border promotional partnerships.",
    image: images.market_advisory,
    imageCaption: "Strategic corporate communications, institutional representation, and media partnerships.",
    route: "/businesses/afield-advisory",
    services: [
      "Destination Representation",
      "Tourism Board Representation",
      "Private Tourism Company Representation",
      "Brand Consultancy",
      "PR & Communications",
      "Media Interaction",
      "Marketing & Communication Management",
      "Joint Promotions",
      "Creative Designing",
      "Event Management",
      "Exhibitions",
      "Corporate Social Responsibility"
    ]
  },
  {
    id: "buildings",
    num: "04",
    name: "Buildings",
    tagline: "High-performance MEP engineering, acoustics, building physics, and sustainability.",
    summary: "Integrated architectural physics, building services engineering (MEP), lighting design, facilities management, and sustainable green building rating certifications.",
    image: images.market_buildings,
    imageCaption: "Modern high-performance architectural engineering, building physics, and sustainable facades.",
    route: "/businesses/energy",
    services: [
      "Acoustics",
      "Architecture",
      "Building Physics",
      "Building Services",
      "Facilities Management",
      "Landscape Architecture",
      "Lighting design",
      "Mechanical & Electrical Engineering",
      "Project Management",
      "Survey",
      "Sustainability Services",
      "Technical due diligence"
    ]
  },
  {
    id: "publication",
    num: "05",
    name: "Publication",
    tagline: "Periodicals, literature anthologies, and peer-reviewed journals.",
    summary: "Independent editorial curation, international magazines, scientific and literary periodicals, youth anthologies, and worldwide distribution across print and digital media.",
    image: images.market_publication,
    imageCaption: "Editorial archival publishing, international periodicals, and curated literary publications.",
    route: "/businesses/publication",
    services: [
      "Tourism",
      "Renewable energy",
      "Life style",
      "Kids",
      "Parenting",
      "Cuisine",
      "Art & Painting"
    ]
  },
  {
    id: "travel",
    num: "06",
    name: "Travel",
    tagline: "Sustainable tourism, educational tours, and destination consultancy.",
    summary: "Conscious itineraries, educational expeditions, sustainable eco-tourism programs, and dedicated travel networks promoting regional heritage.",
    image: images.market_travel,
    imageCaption: "Conscious global travel consultancy, cultural heritage expeditions, and sustainable eco-tourism.",
    route: "/businesses/publication",
    services: [
      "Travel consultancy",
      "Tour Packages",
      "Educational tours",
      "Women Travel Network",
      "Sustainable Tourism"
    ]
  },
  {
    id: "manufacturing",
    num: "07",
    name: "Manufacturing",
    tagline: "Solar lighting systems, DC converters, LED fixtures, and electrical hardware.",
    summary: "Precision industrial manufacturing of clean-technology electrical components, solar street lighting assemblies, DC-to-DC converters, and specialized luminaires.",
    image: images.market_manufacturing,
    imageCaption: "High-precision electrical manufacturing, power electronics, and solar lighting fabrication.",
    route: "/businesses/energy",
    services: [
      "Solar Street Light",
      "Solar Home Light",
      "DC to DC Converter",
      "Head Light (Twin Beam)",
      "LED based tail light",
      "Flasher light",
      "Tumbler switches",
      "Electronic Ballast"
    ]
  },
  {
    id: "management-consulting",
    num: "08",
    name: "Management Consulting",
    tagline: "Business architecture, economic analyses, strategy, and organizational development.",
    summary: "Corporate restructuring, macroeconomic feasibility analysis, legal advisory, organizational transformation, and executive competence training.",
    image: images.market_management,
    imageCaption: "Executive strategy consulting, corporate business architecture, and economic feasibility.",
    route: "/businesses/eipr",
    services: [
      "Business architecture",
      "Economic analyses",
      "Management & strategy",
      "Legal consulting",
      "Organisational change",
      "Project and programme management",
      "Strategy & business development",
      "Studies & Evaluation",
      "Training & competence development"
    ]
  },
  {
    id: "transport",
    num: "09",
    name: "Transport",
    tagline: "Commercial electric mobility, battery integration, and urban transport infrastructure.",
    summary: "Deployment of zero-emission commercial electric platforms, battery management topologies, high-efficiency transport planning, and depot infrastructure.",
    image: images.market_transport,
    imageCaption: "Commercial electric mobility systems, battery powertrains, and urban transit planning.",
    route: "/businesses/transport-electric",
    services: [
      "Transport system",
      "Ground engineering",
      "Landscape architecture",
      "Master planning and urban development",
      "Ports & marine structures",
      "Project & construction management",
      "Transport planning, traffic engineering & traffic safety",
      "Electric Vehicle"
    ]
  },
  {
    id: "fashion-lifestyle",
    num: "10",
    name: "Fashion & Lifestyle",
    tagline: "Handloom textiles, women's ethnic wear, and bespoke artisanal accessories.",
    summary: "Ethical handloom apparel, sustainable organic textiles, botanical dyeing, and handcrafted lifestyle accessories created with artisan communities.",
    image: images.market_fashion,
    imageCaption: "Artisanal handloom textiles, natural botanical fabrics, and bespoke ethical lifestyle apparel.",
    route: "/businesses/fashion-lifestyle",
    services: [
      "Women's ethnic wear",
      "Young girls' ethnic wear",
      "Fashion accessories",
      "Handbags",
      "Artificial jewelry",
      "Customised jewelry made to order",
      "Customised designer apparels"
    ]
  },
  {
    id: "export-import",
    num: "11",
    name: "Export Import",
    tagline: "Cross-border trade of apparel, artisanal handicrafts, jewellery, and tools.",
    summary: "Global freight facilitation, cross-border trading operations, and supply chain logistics distributing high-value handicrafts, fashion, and technical equipment.",
    image: images.market_export_import,
    imageCaption: "Cross-border trade, intermodal freight logistics, and global supply chain fulfillment.",
    route: "/businesses/fashion-lifestyle",
    services: [
      "Apparel & Fashion",
      "Handicrafts & Gifts",
      "Jewelry",
      "Tools & Equipments"
    ]
  }
];
