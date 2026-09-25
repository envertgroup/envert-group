export const siteMetadata = {
  companyName: "EnVERT Group",
  tagline: "Engineering for a changing world.",
  description: "A multidisciplinary group operating across clean energy, industrial energy audits, electric vehicles, corporate capability training, sustainability, and publishing.",
  headquarters: "Kolkata, West Bengal, India",
  logo: "/assets/logos/envert_group_logo.png",
  phone: "+91 9836511995",
  evPhone: "+91 7003942199",
  email: "admin@envertgroup.com",
  hrEmail: "hr@envertgroup.com",
  evEmail: "envertev@gmail.com",
  publishingEmail: "curiosity@penandinkpublishers.com",
  hiringAlert: "Actively hiring Solar PV Engineers, HR Officers, PR Managers, and Travel Magazine Sales Executives. Send CV to hr@envertgroup.com",
  operatingPillars: [
    { label: "Engineering", count: "04 Domains", desc: "Clean Energy, Electric Vehicles, High-Performance Buildings, Environmental Science" },
    { label: "Advisory & Audits", count: "03 Domains", desc: "BEE Certified Energy Audits, ICST Corporate Capability (30+ MNCs), EIPR Applied Research" },
    { label: "Knowledge & Media", count: "04 Domains", desc: "Pen & Ink Publishers, Glare Post, Sustainable Energy Review, Curiosity Kids" },
    { label: "Stewardship & Lifestyle", count: "03 Domains", desc: "EnVERT Foundation, Atmaja Sustainable Lifestyle, EnVERT Agro Food" },
  ],
};

export const businessesData = [
  {
    id: "energy",
    num: "01",
    name: "ENERGY",
    brandRef: "NRG India",
    urlSlug: "energy",
    logo: "/assets/scraped_images/energy/NRGINDIA-logo.png",
    symbolLogo: "/assets/scraped_images/energy/nrg_india_symbol.png",
    tagline: "Building systems around cleaner energy and statutory industrial energy audits.",
    summary: "Turnkey clean energy infrastructure and certified industrial energy audits through our specialized division NRG India (Nandi Resources Generation Technology Private Limited). From commercial solar PV and biomass to statutory BEE energy audits for heavy manufacturing plants, we deliver rigorous engineering and measurable efficiency.",
    capabilities: [
      "Solar PV Systems (Rooftop, Ground & Captive)",
      "BEE Certified Energy Audits & Energy Management",
      "Steel, Iron, Foundry & Power Plant Energy Audits",
      "Pharmaceutical & Vehicle Assembly Plant Audits",
      "NAAC Institutional & University Green Audits",
      "ECBC Compliance, HVAC Optimization & Energy Modeling",
      "Biomass & Combined Heat and Power (CHP)",
      "District Heating & Cooling & Microgrids",
      "Battery Storage, Thermal Storage & CSP Systems",
      "USGBC LEED & IGBC Green Building Certification Support"
    ],
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1600&auto=format&fit=crop",
    imageCaption: "Utility and industrial scale photovoltaic installation & electrical infrastructure.",
    domainLink: "http://www.nrgindia.com",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "publication",
    num: "02",
    name: "PUBLICATION & MEDIA",
    brandRef: "Pen & Ink / EnVERT Media",
    urlSlug: "publication",
    logo: "/assets/scraped_images/home/pen_and_ink_logo.png",
    secondaryLogos: [
      { name: "Curiosity Kids", logo: "/assets/scraped_images/home/curiosity_logo.png" },
      { name: "Sustainable Energy Review", logo: "/assets/scraped_images/home/sustainable_energy_review_logo.png" },
      { name: "Glare Post", logo: "/assets/scraped_images/home/glarepost_logo.png" }
    ],
    tagline: "Curated international magazines, trade journals, and global writing awards.",
    summary: "EnVERT Group's publishing and media division publishes widely acclaimed titles across global distribution channels including Amazon in paperback and Kindle. Home of Curiosity Kids, Sustainable Energy Review, The Touriosity, and Glare Post.",
    capabilities: [
      "Curiosity Kids Magazine (Global Amazon Paperback & Kindle Distribution)",
      "Sustainable Energy Review (Trade & Renewable Energy Journal)",
      "The Touriosity (International Sustainable Tourism & Heritage Magazine)",
      "Glare Post (Digital News & Contemporary Analysis)",
      "Curiosity Writing Awards (Annual International Competition)",
      "Anthology Publishing for Emerging Authors",
      "Space Selling & Advertisement Partnerships",
      "Editorial Proofreading, ISBN Registration & Distribution"
    ],
    publications: [
      { 
        name: "Curiosity Kids", 
        desc: "7+ years publishing magazine for uniquely curious and talented kids, distributed globally on Amazon.",
        logo: "/assets/scraped_images/home/curiosity_logo.png"
      },
      { 
        name: "Sustainable Energy Review", 
        desc: "B2B journal on renewable technology, energy efficiency, and statutory policy.",
        logo: "/assets/scraped_images/home/sustainable_energy_review_logo.png"
      },
      { 
        name: "Glare Post", 
        desc: "Digital perspectives and news platform covering policy, economy, sustainability, and culture.",
        logo: "/assets/scraped_images/home/glarepost_logo.png"
      },
      { 
        name: "The Touriosity", 
        desc: "International magazine covering heritage travels and conscious tourism."
      }
    ],
    image: "https://images.unsplash.com/photo-1507842229451-7f01be7fe732?q=80&w=1600&auto=format&fit=crop",
    imageCaption: "EnVERT publishing archives and global magazine distributions.",
    directEmail: "curiosity@penandinkpublishers.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "transport-electric",
    num: "03",
    name: "TRANSPORT (ELECTRIC)",
    brandRef: "EnVERT E-Vehicles Pvt. Ltd.",
    urlSlug: "transport-electric",
    logo: "/assets/logos/envert_group_logo.png",
    tagline: "Future of transportation is electric vehicle.",
    summary: "EnVERT E-Vehicles Private Limited leads the design, development, engineering, and deployment of battery-operated electric transport solutions in India. Supporting national e-mobility targets, our focus covers vehicle lightweighting, electric drive efficiency, battery storage, and charging infrastructure.",
    capabilities: [
      "Commercial EV Fleet Deployment & Customization",
      "Electric Cars, Three Wheelers & E-Cycles",
      "Customized Electric Vehicles & Special Purpose EVs",
      "Charging Infrastructure & DISCOM Grid Load Planning",
      "Battery Pack Technology & Thermal Management Integration",
      "Cost Reduction of Electric Drive Systems",
      "Vehicle Weight Reduction & Lightweighting Engineering",
      "Electric Vehicle Maintenance Protocols & Diagnostics"
    ],
    models: [
      { name: "EnVERT Mono-PN", type: "Personal & Urban Mobility Unit" },
      { name: "EnVERT Duex-PM", type: "Commercial Utility & Cargo Platform" },
      { name: "EnVERT Trois-PP", type: "Passenger & Three-Wheeler Fleet Series" }
    ],
    image: "https://images.unsplash.com/photo-1558441719-8b489c63b77a?q=80&w=1600&auto=format&fit=crop",
    imageCaption: "EnVERT E-Vehicles battery integration and electric chassis development.",
    directPhone: "+91 7003942199",
    directEmail: "envertev@gmail.com"
  },
  {
    id: "icst",
    num: "04",
    name: "ICST",
    brandRef: "ICST Global",
    urlSlug: "icst",
    logo: "/assets/scraped_images/home/ICST-logo.png",
    secondaryLogo: "/assets/logos/icst_logo.png",
    tagline: "Over 15 years of corporate capability and language excellence across 30+ MNCs.",
    summary: "Breaking communication barriers in an era of globalization. With over 15 years of experience training professionals in more than 20 Indian and foreign languages, ICST (Institute of Corporate Sustainability and Transition) has served over 30 Multinational Corporations with customized curricula that deliver verified ROI in organizational productivity.",
    capabilities: [
      "Corporate Language Training (20+ Indian & Foreign Languages)",
      "Voice & Accent Neutralization Training",
      "Executive Leadership Communication & Negotiations",
      "Curriculum Development & Bespoke Corporate Design",
      "Business English & Cross-Cultural Workplace Protocols",
      "Relocation & Expatriate Cultural Adaptation",
      "Human Resource Capability Audits",
      "Virtual and On-Premise Interactive Workshops"
    ],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop",
    imageCaption: "Executive communication seminars and multinational corporate capability development.",
    domainLink: "http://www.icstglobal.com",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "glarepost",
    num: "05",
    name: "GLARE POST",
    brandRef: "Glare Post Digital Media",
    urlSlug: "glarepost",
    logo: "/assets/scraped_images/home/glarepost_logo.png",
    tagline: "Digital news, contemporary perspectives, and sustainable policy discourse.",
    summary: "Glare Post is EnVERT Group's dedicated digital journalism and editorial news platform (glarepost.com). Featuring incisive reporting, environmental governance debates, energy market analysis, socio-economic insights, and investigative features.",
    capabilities: [
      "Digital News & Policy Journalism",
      "Renewable Energy & Sustainability Sector Analysis",
      "Long-Form Essays & Thought Leadership Op-Eds",
      "Corporate Environmental Accountability & ESG Reporting",
      "Global Climate Diplomacy & Industrial Transition Features",
      "Digital Multimedia Content & Author Columns"
    ],
    publications: [
      { name: "Policy Dispatch", desc: "Weekly debrief on environmental regulation and clean technology mandates." },
      { name: "Industrial Decarbonization", desc: "In-depth case evaluations across manufacturing and metallurgy." },
      { name: "Voices of Transition", desc: "Interviews with leading environmental scientists and business executives." }
    ],
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1600&auto=format&fit=crop",
    imageCaption: "Glare Post digital editorial desk and research coverage.",
    domainLink: "https://www.glarepost.com",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "pen-ink",
    num: "06",
    name: "PEN & INK",
    brandRef: "Pen & Ink Publishers",
    urlSlug: "pen-ink",
    logo: "/assets/scraped_images/home/pen_and_ink_logo.png",
    altLogo: "/assets/scraped_images/pen-ink/pen_and_ink_with_bg.png",
    tagline: "Home of the annual Curiosity Writing Awards and international anthologies.",
    summary: "Pen & Ink Publishers is an established publishing house under EnVERT Group. Host of the prestigious annual Curiosity Writing Awards for young writers across two age groups (9–13 and 14–17 years), publishing winning stories in Amazon paperbacks and Kindles.",
    capabilities: [
      "Curiosity Writing Awards (Annual International Competition)",
      "Global Anthology Publication with Worldwide Amazon Availability",
      "Youth Creative Writing & Literature Mentorship",
      "Editorial Proofreading, Curation & Formatting",
      "Genre Fiction (Fantasy, Sci-Fi, Historical, Non-fiction)",
      "Certificates of Appreciation & Inter-School Trophies"
    ],
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1600&auto=format&fit=crop",
    imageCaption: "Pen & Ink creative publishing and youth anthology editions.",
    directEmail: "curiosity@penandinkpublishers.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "fashion-lifestyle",
    num: "07",
    name: "FASHION & LIFESTYLE",
    brandRef: "Atmaja — Sustainable Lifestyle",
    urlSlug: "fashion-lifestyle",
    logo: "/assets/scraped_images/fashion-lifestyle/atmaja_logo.png",
    tagline: "Sustainable design, conscious living, and handcrafted lifestyle by Atmaja.",
    summary: "EnVERT Group's Fashion & Lifestyle vertical, branded as Atmaja, champions slow fashion, ethical artisanal textiles, handloom heritage, and conscious lifestyle essentials that respect both the creator and the planet.",
    capabilities: [
      "Sustainable Lifestyle Product Concepts & Handcrafted Accessories",
      "Atmaja Handloom & Conscious Apparel Lines",
      "Zero-Waste Textile Innovations & Natural Dyeing Practices",
      "Artisanal Cluster Partnerships & Rural Livelihood Support",
      "Circular Design & Biodegradable Packaging Solutions"
    ],
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
    imageCaption: "Atmaja sustainable design studio and handcrafted conscious living curation.",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "afield-gallery",
    num: "08",
    name: "AFIELD GALLERY",
    brandRef: "Afield Gallery",
    urlSlug: "afield-gallery",
    logo: "/assets/scraped_images/home/afield_logo.png",
    tagline: "Showcasing distinctive artists, contemporary art, and creative exhibitions.",
    summary: "Afield Gallery is EnVERT Group's dedicated art and visual culture initiative, presenting works from emerging and established artists, curated exhibitions, and cultural dialogues that explore nature, humanity, and contemporary form.",
    capabilities: [
      "Curated Contemporary Art Exhibitions",
      "Artist Representation & Feature Spotlights",
      "Fine Art Printmaking & Creative Displays",
      "Cultural Community Dialogue & Gallery Events",
      "Art Advisory & Corporate Collection Curation"
    ],
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1600&auto=format&fit=crop",
    imageCaption: "Afield Gallery visual art curation and artist collections.",
    domainLink: "https://www.afieldgallery.com",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "envert-foundation",
    num: "09",
    name: "ENVERT FOUNDATION",
    brandRef: "EnVERT Foundation",
    urlSlug: "envert-foundation",
    logo: "/assets/scraped_images/home/envert_foundation_logo.png",
    badgeLogo: "/assets/scraped_images/envert-foundation/envert-foundation_logo.png",
    tagline: "Social stewardship, community ecology, and applied environmental literacy.",
    summary: "The non-profit stewardship initiative of EnVERT Group dedicated to grassroots environmental literacy, community tree cultivation, student scholarships, youth creative writing recognition, and sustainable community empowerment.",
    capabilities: [
      "Community Afforestation & Tree Plantation Drives",
      "Grassroots Environmental & Climate Literacy Workshops",
      "Youth Creative Writing & STEM Innovation Scholarships",
      "Rural Clean Water & Sustainable Living Support",
      "Artisanal Heritage & Creative Community Empowerment",
      "School & University Outreach Partnerships"
    ],
    // Authentic photographs scraped from the EnVERT Foundation gallery
    galleryImages: [
      { src: "/assets/scraped_images/envert-foundation/envert-foundation_img_3_bfc19f69.png", caption: "Community ecological stewardship drive" },
      { src: "/assets/scraped_images/envert-foundation/envert-foundation_img_4_319aea5e.png", caption: "Tree plantation and seedling distribution" },
      { src: "/assets/scraped_images/envert-foundation/envert-foundation_img_5_b98d0bca.png", caption: "Educational student workshop on clean environment" },
      { src: "/assets/scraped_images/envert-foundation/envert-foundation_img_6_8ecb1026.png", caption: "EnVERT Foundation school sustainability day" },
      { src: "/assets/scraped_images/envert-foundation/envert-foundation_img_7_7c4deb9c.png", caption: "Youth environmental awareness ceremony" },
      { src: "/assets/scraped_images/envert-foundation/envert-foundation_img_8_8a67aa84.png", caption: "Community tree planting with local participants" },
      { src: "/assets/scraped_images/envert-foundation/envert-foundation_img_11_69a36472.png", caption: "Curiosity Writing Awards certificate distribution" },
      { src: "/assets/scraped_images/envert-foundation/envert-foundation_img_12_eb8e25f9.png", caption: "Young authors and environmental scholarship recipients" },
      { src: "/assets/scraped_images/envert-foundation/envert-foundation_img_19_a056de97.png", caption: "Grassroots tree sapling care in rural communities" },
      { src: "/assets/scraped_images/envert-foundation/envert-foundation_img_20_1420e445.png", caption: "Community clean water & awareness camp" },
      { src: "/assets/scraped_images/envert-foundation/envert-foundation_img_21_84a6104e.png", caption: "Environmental education outreach program" },
    ],
    image: "/assets/scraped_images/envert-foundation/envert-foundation_img_8_8a67aa84.png",
    imageCaption: "EnVERT Foundation community tree cultivation and grassroots environmental literacy.",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "envert-agro-food",
    num: "10",
    name: "ENVERT AGRO FOOD",
    brandRef: "EnVERT Agro Food",
    urlSlug: "envert-agro-food",
    logo: "/assets/scraped_images/home/envert_agro_food_logo.png",
    tagline: "Sustainable agricultural cultivation, organic processing, and supply chain stewardship.",
    summary: "EnVERT Agro Food applies sustainable engineering principles to modern agro-forestry, organic crop cultivation, solar-assisted food processing, and fair-value farmer cooperative ecosystems.",
    capabilities: [
      "Organic Crop Cultivation & Regenerative Soil Practices",
      "Solar-Powered Cold Storage & Agro Food Dehydration",
      "Direct Farm-to-Enterprise Supply Chain Logistics",
      "Bio-Fertilizer & Circular Agricultural Waste Utilization",
      "Quality Assurance & Traceable Organic Standards"
    ],
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop",
    imageCaption: "Sustainable agro-processing and solar cold chain integration under EnVERT.",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "eipr",
    num: "11",
    name: "EIPR",
    brandRef: "EnVERT Institute of Professional Researches",
    urlSlug: "eipr",
    logo: "/assets/scraped_images/home/eipr_logo.png",
    tagline: "Applied industrial research, technological feasibility, and institutional advisory.",
    summary: "EIPR (EnVERT Institute of Professional Researches) bridges academia and heavy industry, conducting techno-commercial feasibility studies, patent research, statutory green protocols, and industrial innovation benchmarking.",
    capabilities: [
      "Applied Industrial Energy Research & Technology Benchmarking",
      "Green Campus Feasibility & Environmental Auditing Studies",
      "Patent Landscaping & Clean-Tech Innovation Advisory",
      "Faculty & Professional Development Research Symposia",
      "Statutory Regulatory Impact & Policy Whitepapers"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    imageCaption: "EIPR research laboratories and techno-commercial feasibility studies.",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  },
  {
    id: "startup-idea-envert-wellness",
    num: "12",
    name: "STARTUP IDEA (ENVERT WELLNESS)",
    brandRef: "EnVERT Wellness",
    urlSlug: "startup-idea-envert-wellness",
    logo: "/assets/logos/envert_group_logo.png",
    tagline: "Workplace Wellness Programs and health innovations for modern enterprises.",
    summary: "Addressing growing market demand in the healthcare and wellness sector. Currently transitioning innovative health concepts into enterprise business, focusing on comprehensive Workplace Wellness Programs for corporate organizations.",
    capabilities: [
      "Workplace Physical Health (Desk Exercises, Yoga, Pilates, HIIT & Screenings)",
      "Ergonomic Evaluations & Workstation Posture Optimization",
      "Stress Reduction & Mental Health Counseling Support",
      "Healthy Living, Nutrition Coaching & Hydration Challenges",
      "Burnout Prevention, Work-Life Harmony & Digital Detox Seminars",
      "Gamified Corporate Wellness Challenges & Incentive Frameworks",
      "Personalized Wellness Coaching & Mobile Wellness Spa Services",
      "Biohacking, Longevity Consulting & Sleep Optimization"
    ],
    businessModels: [
      { model: "B2B Corporate Consulting", desc: "Providing organizations with turnkey, specialized corporate wellness solutions." },
      { model: "Subscription Model", desc: "Monthly recurring digital wellness content, mindfulness workshops, and health tracking." },
      { model: "On-Demand Services", desc: "Executive wellness retreats, ergonomics audits, and one-time corporate workshops." }
    ],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop",
    imageCaption: "EnVERT Wellness workplace mental health, ergonomics, and physical wellbeing.",
    directEmail: "admin@envertgroup.com",
    directPhone: "+91 9836511995"
  }
];

export const ecosystemData = {
  pillars: [
    {
      category: "ENGINEERING",
      description: "Physical infrastructure, clean energy generation, and electric transport manufacturing.",
      domains: ["Solar & Bio-energy", "BEE Certified Energy Audits", "Electric Vehicle R&D", "Green Buildings (LEED/IGBC)"],
      brands: [
        { 
          name: "NRG India", 
          url: "/businesses/energy", 
          externalUrl: "http://www.nrgindia.com",
          logo: "/assets/scraped_images/energy/NRGINDIA-logo.png",
          type: "Energy & Industrial Audits", 
          desc: "BEE certified audits for steel, power, pharma, foundry & NAAC green audits." 
        },
        { 
          name: "EnVERT E-Vehicles Pvt. Ltd.", 
          url: "/businesses/transport-electric", 
          logo: "/assets/logos/envert_group_logo.png",
          type: "Commercial EVs", 
          desc: "Design & deployment of electric cars, 3-wheelers, cycles & charging." 
        }
      ]
    },
    {
      category: "ADVISORY & TRAINING",
      description: "Human capital development, corporate language proficiency, and applied research.",
      domains: ["20+ Languages Training", "Voice & Accent", "Executive Communication", "EIPR Applied Research"],
      brands: [
        { 
          name: "ICST Global", 
          url: "/businesses/icst", 
          externalUrl: "http://www.icstglobal.com",
          logo: "/assets/scraped_images/home/ICST-logo.png",
          type: "Corporate Training Division", 
          desc: "15+ years experience training 30+ MNCs in 20+ languages." 
        },
        { 
          name: "EIPR", 
          url: "/businesses/eipr", 
          logo: "/assets/scraped_images/home/eipr_logo.png",
          type: "Research Institute", 
          desc: "EnVERT Institute of Professional Researches — applied industrial feasibility." 
        }
      ]
    },
    {
      category: "KNOWLEDGE & MEDIA",
      description: "Publishing houses, international magazines, literature awards, and digital news.",
      domains: ["Book Anthologies", "Curiosity Kids Magazine", "Sustainable Energy Review", "Glare Post"],
      brands: [
        { 
          name: "Glare Post", 
          url: "/businesses/glarepost", 
          externalUrl: "https://www.glarepost.com",
          logo: "/assets/scraped_images/home/glarepost_logo.png",
          type: "Digital News & Perspectives", 
          desc: "Independent journalism, policy commentary, and clean transition features." 
        },
        { 
          name: "Pen & Ink Publishers", 
          url: "/businesses/pen-ink", 
          logo: "/assets/scraped_images/home/pen_and_ink_logo.png",
          type: "Publishing House", 
          desc: "Annual Curiosity Writing Awards, Curiosity Kids Magazine, Amazon distribution." 
        },
        { 
          name: "Curiosity Kids", 
          url: "/businesses/publication", 
          logo: "/assets/scraped_images/home/curiosity_logo.png",
          type: "Kids Magazine", 
          desc: "7+ years international children's publication distributed globally." 
        },
        { 
          name: "Sustainable Energy Review", 
          url: "/businesses/publication", 
          logo: "/assets/scraped_images/home/sustainable_energy_review_logo.png",
          type: "Technical Trade Journal", 
          desc: "B2B journal on renewable technology, energy efficiency, and statutory policy." 
        }
      ]
    },
    {
      category: "STEWARDSHIP & LIFESTYLE",
      description: "Community ecology, ethical slow fashion, artisanal crafts, and sustainable agro food.",
      domains: ["Tree Plantation", "Artisan Livelihoods", "Organic Processing", "Cultural Gallery"],
      brands: [
        { 
          name: "EnVERT Foundation", 
          url: "/businesses/envert-foundation", 
          logo: "/assets/scraped_images/home/envert_foundation_logo.png",
          type: "Non-Profit Stewardship", 
          desc: "Grassroots ecology, afforestation drives, youth scholarships & literacy." 
        },
        { 
          name: "Atmaja", 
          url: "/businesses/fashion-lifestyle", 
          logo: "/assets/scraped_images/fashion-lifestyle/atmaja_logo.png",
          type: "Sustainable Fashion & Lifestyle", 
          desc: "Handloom textiles, zero-waste apparel, and conscious living curation." 
        },
        { 
          name: "Afield Gallery", 
          url: "/businesses/afield-gallery", 
          externalUrl: "https://www.afieldgallery.com",
          logo: "/assets/scraped_images/home/afield_logo.png",
          type: "Contemporary Art Gallery", 
          desc: "Visual art exhibitions, printmaking, and cultural dialogues." 
        },
        { 
          name: "EnVERT Agro Food", 
          url: "/businesses/envert-agro-food", 
          logo: "/assets/scraped_images/home/envert_agro_food_logo.png",
          type: "Agro Food & Processing", 
          desc: "Sustainable farming, organic food dehydration, and fair-value supply chains." 
        }
      ]
    }
  ]
};

export const careersData = [
  {
    id: "c1",
    title: "Engineer / Senior Engineer / Manager — Solar PV",
    department: "Energy Engineering",
    location: "Kolkata, India",
    type: "Full-time",
    experience: "4–7 years",
    qualification: "BE / B.Tech / M.Tech",
    description: "Design and develop commercial photovoltaic & lighting systems. Conduct facility lighting and electrical audits, utilize Excel/CAD energy models, generate CAD single-line diagrams, and manage engineering resource pipeline."
  },
  {
    id: "c2",
    title: "Engineer / Senior Engineer — Solar Thermal",
    department: "Energy Engineering",
    location: "Kolkata, India",
    type: "Full-time",
    experience: "4–7 years",
    qualification: "BE / B.Tech / M.Tech",
    description: "Lead design projects related to solar thermal equipment and cooling devices. Formulate process sheets, generate product concepts, and resolve design calculations."
  },
  {
    id: "c3",
    title: "Certified Energy Auditor & Energy Manager",
    department: "Energy Audits (Consortium)",
    location: "Kolkata / Regional Sites",
    type: "Project-to-Project / Part-time Consortium",
    experience: "2+ years post-certification",
    qualification: "BE / B.Tech with Bureau of Energy Efficiency (BEE) Certificate",
    description: "Conduct statutory energy audits for heavy industries (steel, power, foundry, pharmaceuticals) and NAAC college green audits on a consortium project-to-project basis."
  },
  {
    id: "c4",
    title: "Marketing Executive — Engineering Business",
    department: "Business Development",
    location: "Kolkata, India",
    type: "Full-time",
    experience: "3–5 years",
    qualification: "MBA",
    description: "Identify and establish new business in Renewable Energy, Energy Efficiency, and Engineering Supplies. Prepare tenders, quotations, client liaison, and manage sales targets."
  },
  {
    id: "c5",
    title: "Executive — Ad Sales for 'Sustainable Energy Review' Magazine",
    department: "Publishing & Media",
    location: "Kolkata, India",
    type: "Full-time",
    experience: "1–3 years",
    qualification: "MBA",
    description: "Advertisement space sales and client relationship maintenance for 'Sustainable Energy Review' trade publication. Requires understanding of renewable energy segment and publishing workflows."
  },
  {
    id: "c6",
    title: "Diploma Engineers — Solar & Lighting QC",
    department: "Manufacturing & Operations",
    location: "Kolkata, India",
    type: "Full-time",
    experience: "1–3 years",
    qualification: "Diploma in Electronics & Telecommunication",
    description: "Hands-on manufacturing of solar and lighting equipment, component testing, quality control (QC), and equipment handling."
  }
];

export const projectsData = [
  {
    id: "p1",
    title: "Captive Industrial Solar PV & Net-Metering Integration",
    industry: "ENERGY & AUDITS",
    location: "Kharagpur Industrial Corridor, West Bengal",
    year: "2024",
    client: "Heavy Engineering & Manufacturing Works",
    scope: "Turnkey design, solar string sizing, structural load simulation, bidirectional net-metering integration, and ongoing telemetry.",
    outcome: "42% reduction in peak grid power tariff; verified 180 MT annual CO2e abatement.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "p2",
    title: "EnVERT Commercial EV Fleet & Fast Charging Depot Blueprint",
    industry: "ELECTRIC VEHICLES",
    location: "Greater Kolkata Logistics Hub",
    year: "2023",
    client: "Urban Transit & Distribution Consortium",
    scope: "Route energy profiling, EnVERT Duex-PM platform deployment, substation load sizing, and dual-gun fast-charging depot design under FAME framework.",
    outcome: "Seamless electrification plan for 85 transit units with zero peak-grid tripping.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "p3",
    title: "Foundry & Iron Industrial Complex Comprehensive Energy Audit",
    industry: "ENERGY & AUDITS",
    location: "Asansol Industrial Zone, WB",
    year: "2024",
    client: "Ferrous Metallurgy Plant",
    scope: "BEE certified comprehensive energy audit: furnace heat recovery, induction motor efficiency, compressor leakage elimination, and electrical load balancing.",
    outcome: "Identified ₹48 Lakhs annual energy savings with an average payback period of 11 months.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "p4",
    title: "Multinational Corporate Language & Executive Communication Program",
    industry: "CORPORATE TRAINING",
    location: "Kolkata & Pan-India Corporate Hubs",
    year: "2023–2024",
    client: "Global Technology & Consulting MNC",
    scope: "Bespoke multilingual curriculum design covering business English, local language transition for expatriates, and voice/accent enhancement for 250+ personnel.",
    outcome: "94% proficiency benchmark achievement and documented cross-border delivery acceleration.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop"
  }
];

export const insightsData = [
  {
    id: "i1",
    category: "ENERGY & AUDITS",
    title: "Decentralized Solar & BEE Audits: De-Risking Indian Manufacturing Campuses",
    excerpt: "Why energy-intensive industries in eastern India are combining captive rooftop solar with statutory BEE audits to hedge against grid tariff inflation.",
    date: "September 2026",
    readTime: "6 min read",
    author: "NRG India / EnVERT Energy Division"
  },
  {
    id: "i2",
    category: "ELECTRIC VEHICLES",
    title: "Commercial EV Fleets in High-Ambient Regions: Depot Sizing & Battery Longevity",
    excerpt: "Examining practical challenges in grid interconnection, thermal conditioning, and chassis duty-cycles for commercial fleets under tropical conditions.",
    date: "August 2026",
    readTime: "8 min read",
    author: "EnVERT E-Vehicles Engineering"
  },
  {
    id: "i3",
    category: "PUBLISHING",
    title: "The Seven-Year Legacy of Curiosity Kids: Fostering Young Scientific Literature",
    excerpt: "How Pen & Ink Publishers connects young creative writers across India and overseas with international Amazon paperback and Kindle distribution.",
    date: "July 2026",
    readTime: "5 min read",
    author: "Pen & Ink Editorial Board"
  },
  {
    id: "i4",
    category: "GLARE POST",
    title: "Industrial Decarbonization vs. Global Competitiveness: The Indian Outlook",
    excerpt: "An investigative overview of compliance mandates, ESG investments, and structural hurdles facing heavy industries in Eastern India.",
    date: "September 2026",
    readTime: "7 min read",
    author: "Glare Post Editorial Desk"
  }
];
