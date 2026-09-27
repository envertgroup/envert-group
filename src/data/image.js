/**
 * Central Image & Media Registry for EnVERT Group
 * 
 * Provides centralized management of all corporate assets and hosted imagery.
 * When images are hosted to an external CDN/S3/Cloudinary in the future,
 * simply change CDN_BASE_URL or the path definitions here.
 * 
 * Access styles supported:
 * 
 * 1. Dot-property access (camelCase or snake_case):
 *    images.hero_main          images.heroMain
 *    images.nrgindia_logo      images.nrgIndiaLogo
 *    images.energy_hero        images.energyHero
 *    images.touriosity_logo    images.touriosityLogo
 * 
 * 2. Nested domain/category objects:
 *    images.hero.main
 *    images.logos.nrgindia
 *    images.logos.touriosity
 *    images.logos.icst
 *    images.heroes.energy
 *    images.heroes.transport
 * 
 * 3. Hyphenated bracket access:
 *    images['nrgindia-logo']
 *    images['hero-main']
 *    images['touriosity-logo']
 */

export const CDN_BASE_URL = '';

const resolve = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  return CDN_BASE_URL ? `${CDN_BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}` : path;
};

// 1. Grouped categorical image maps
export const logos = {
  envert: resolve('/assets/logos/envert_group_logo.webp'),
  envert_group: resolve('/assets/logos/envert_group_logo.webp'),
  envertGroup: resolve('/assets/logos/envert_group_logo.webp'),
  
  nrgindia: resolve('/assets/scraped_images/energy/NRGINDIA-logo.webp'),
  nrg_india: resolve('/assets/scraped_images/energy/NRGINDIA-logo.webp'),
  nrgIndia: resolve('/assets/scraped_images/energy/NRGINDIA-logo.webp'),
  nrg_india_symbol: resolve('/assets/scraped_images/energy/nrg_india_symbol.webp'),
  
  icst: resolve('/assets/scraped_images/home/ICST-logo.webp'),
  icst_secondary: resolve('/assets/logos/icst_logo.webp'),
  
  pen_and_ink: resolve('/assets/scraped_images/home/pen_and_ink_logo.webp'),
  penAndInk: resolve('/assets/scraped_images/home/pen_and_ink_logo.webp'),
  
  touriosity: resolve('/assets/scraped_images/home/touriosity_logo.webp'),
  the_touriosity: resolve('/assets/scraped_images/home/touriosity_logo.webp'),
  
  curiosity: resolve('/assets/scraped_images/home/curiosity_logo.webp'),
  curiosity_kids: resolve('/assets/scraped_images/home/curiosity_logo.webp'),
  
  sustainable_energy_review: resolve('/assets/scraped_images/home/sustainable_energy_review_logo.webp'),
  sustainableEnergyReview: resolve('/assets/scraped_images/home/sustainable_energy_review_logo.webp'),
  
  glarepost: resolve('/assets/scraped_images/home/glarepost_logo.webp'),
  glare_post: resolve('/assets/scraped_images/home/glarepost_logo.webp'),
  
  glarepost_films: resolve('/assets/scraped_images/home/glarepost_films_logo.webp'),
  glarepostFilms: resolve('/assets/scraped_images/home/glarepost_films_logo.webp'),
  
  atmaja: resolve('/assets/scraped_images/fashion-lifestyle/atmaja_logo.webp'),
  fashion_lifestyle: resolve('/assets/scraped_images/fashion-lifestyle/atmaja_logo.webp'),
  
  afield_advisory: resolve('/assets/scraped_images/home/afield_logo.webp'),
  afield: resolve('/assets/scraped_images/home/afield_logo.webp'),
  repoxisy: resolve('/assets/repoxisy_logo.webp'),
  wagsol: resolve('/assets/wagsol_logo.webp'),
  afield_gallery: resolve('/assets/indian_arts_and_dolls_gallery.webp'),
  indian_art_and_dolls_gallery: resolve('/assets/indian_arts_and_dolls_gallery.webp'),
  indian_arts_and_dolls: resolve('/assets/indian_arts_and_dolls_gallery.webp'),
  
  envert_foundation: resolve('/assets/scraped_images/home/envert_foundation_logo.webp'),
  foundation: resolve('/assets/scraped_images/home/envert_foundation_logo.webp'),
  foundation_badge: resolve('/assets/scraped_images/envert-foundation/envert-foundation_logo.webp'),
  
  envert_agro_food: resolve('/assets/scraped_images/home/envert_agro_food_logo.webp'),
  agro_food: resolve('/assets/scraped_images/home/envert_agro_food_logo.webp'),
  
  eipr: resolve('/assets/scraped_images/home/eipr_logo.webp'),
  research: resolve('/assets/scraped_images/home/eipr_logo.webp'),
  
  wellness: resolve('/assets/logos/envert_group_logo.webp'),
  envert_wellness: resolve('/assets/logos/envert_group_logo.webp'),
  eisree: resolve('/assets/eisree_logo.webp'),
  india_corporate_trainers: resolve('/assets/india_corporate_trainers_logo.webp')
};

export const heroes = {
  main: resolve('https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=72&w=800&auto=format&fit=crop'),
  energy: resolve('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=70&w=700&auto=format&fit=crop'),
  environment: resolve('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=72&w=800&auto=format&fit=crop'),
  advisory: resolve('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=72&w=800&auto=format&fit=crop'),
  buildings: resolve('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=72&w=800&auto=format&fit=crop'),
  publication: resolve('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=72&w=800&auto=format&fit=crop'),
  travel: resolve('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=72&w=800&auto=format&fit=crop'),
  manufacturing: resolve('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=72&w=800&auto=format&fit=crop'),
  management: resolve('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=72&w=800&auto=format&fit=crop'),
  transport: resolve('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=72&w=800&auto=format&fit=crop'),
  fashion: resolve('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=72&w=800&auto=format&fit=crop'),
  export_import: resolve('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=72&w=800&auto=format&fit=crop'),
  // Dedicated unique stock images for 11 Markets Services Charter (different from hero images)
  market_publication: resolve('https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=72&w=800&auto=format&fit=crop'),
  market_transport: resolve('https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=72&w=800&auto=format&fit=crop'),
  market_fashion: resolve('https://images.unsplash.com/photo-1445205170230-053b83016050?q=72&w=800&auto=format&fit=crop'),
  training: resolve('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=72&w=800&auto=format&fit=crop'),
  icst: resolve('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=72&w=800&auto=format&fit=crop'),
  art: resolve('https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=72&w=800&auto=format&fit=crop'),
  indian_art_and_dolls: resolve('https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=72&w=800&auto=format&fit=crop'),
  indian_arts_dolls_stock: resolve('https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=72&w=800&auto=format&fit=crop'),
  foundation: resolve('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=72&w=800&auto=format&fit=crop'),
  agro: resolve('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=72&w=800&auto=format&fit=crop'),
  research: resolve('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=72&w=800&auto=format&fit=crop'),
  eipr: resolve('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=72&w=800&auto=format&fit=crop'),
  repoxisy: resolve('https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=72&w=800&auto=format&fit=crop'),
  wagsol: resolve('https://images.unsplash.com/photo-1548337138-e87d889cc369?q=72&w=800&auto=format&fit=crop'),
  wellness: resolve('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=72&w=800&auto=format&fit=crop'),
  eisree: resolve('https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=72&w=800&auto=format&fit=crop'),
  corporate_trainers: resolve('https://images.unsplash.com/photo-1552664730-d307ca884978?q=72&w=800&auto=format&fit=crop')
};

export const heroCollage = {
  energy: resolve('https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=68&w=700&auto=format&fit=crop'),
  travel: resolve('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=68&w=400&auto=format&fit=crop'),
  architecture: resolve('https://images.unsplash.com/photo-1486325212027-8081e485255e?q=68&w=400&auto=format&fit=crop'),
  mobility: resolve('https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?q=68&w=400&auto=format&fit=crop'),
  publishing: resolve('https://images.unsplash.com/photo-1512820790803-83ca734da794?q=68&w=600&auto=format&fit=crop')
};

export const projects = {
  solar_pv: resolve('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=75&w=800&auto=format&fit=crop'),
  ev_fleet: resolve('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=75&w=800&auto=format&fit=crop'),
  foundry_audit: resolve('https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=75&w=800&auto=format&fit=crop'),
  training_program: resolve('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=75&w=800&auto=format&fit=crop'),
  bvcm_solar: resolve('https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=75&w=800&auto=format&fit=crop'),
  wagsol_ccu: resolve('https://images.unsplash.com/photo-1518770660439-4636190af475?q=75&w=800&auto=format&fit=crop'),
  railway_solar: resolve('https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=75&w=800&auto=format&fit=crop'),
  solar_dc: resolve('https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=75&w=800&auto=format&fit=crop'),
  bess_storage: resolve('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=75&w=800&auto=format&fit=crop'),
  repoxisy_epoxy: resolve('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=75&w=800&auto=format&fit=crop'),
  fleet_graphics: resolve('https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=75&w=800&auto=format&fit=crop'),
  solar_om: resolve('https://images.unsplash.com/photo-1548337138-e87d889cc369?q=75&w=800&auto=format&fit=crop'),
  green_audit: resolve('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=75&w=800&auto=format&fit=crop'),
  carbon_advisory: resolve('https://images.unsplash.com/photo-1448375240586-882707db888b?q=75&w=800&auto=format&fit=crop'),
  hydrogen_fuel: resolve('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=75&w=800&auto=format&fit=crop'),
  bioenergy: resolve('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=75&w=800&auto=format&fit=crop'),
  wind_hybrid: resolve('https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=75&w=800&auto=format&fit=crop'),
  corporate_ppa: resolve('https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=75&w=800&auto=format&fit=crop')
};

export const foundationGallery = {
  doc3: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_3_bfc19f69.webp'),
  doc4: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_4_319aea5e.webp'),
  doc5: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_5_b98d0bca.webp'),
  doc6: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_6_8ecb1026.webp'),
  doc7: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_7_7c4deb9c.webp'),
  doc8: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_8_8a67aa84.webp'),
  doc11: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_11_69a36472.webp'),
  doc12: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_12_eb8e25f9.webp'),
  doc19: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_19_a056de97.webp'),
  doc20: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_20_1420e445.webp'),
  doc21: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_21_84a6104e.webp')
};

// 2. Flat Registry containing all key naming conventions
const baseRegistry = {
  // Nested sub-namespaces
  logos,
  heroes,
  hero: heroes,
  projects,
  gallery: foundationGallery,
  heroCollage,
  hero_collage: heroCollage,

  // Direct dot-accessible properties (snake_case and camelCase)
  hero_main: heroes.main,
  heroMain: heroes.main,
  
  // 11 Markets Services Charter Heroes (Distinct, non-reused photography)
  market_energy: heroes.energy,
  market_environment: heroes.environment,
  market_advisory: heroes.advisory,
  market_buildings: heroes.buildings,
  market_publication: heroes.market_publication,
  market_travel: heroes.travel,
  market_manufacturing: heroes.manufacturing,
  market_management: heroes.management,
  market_transport: heroes.market_transport,
  market_fashion: heroes.market_fashion,
  market_export_import: heroes.export_import,

  // Energy
  nrgindia_logo: logos.nrgindia,
  nrgIndiaLogo: logos.nrgindia,
  nrg_india_logo: logos.nrgindia,
  nrg_india_symbol: logos.nrg_india_symbol,
  nrgIndiaSymbol: logos.nrg_india_symbol,
  energy_hero: heroes.energy,
  energyHero: heroes.energy,
  energy_image: heroes.energy,

  // Transport
  envert_group_logo: logos.envert,
  envertGroupLogo: logos.envert,
  envert_logo: logos.envert,
  transport_hero: heroes.transport,
  transportHero: heroes.transport,
  transport_image: heroes.transport,

  // Corporate Training
  icst_logo: logos.icst,
  icstLogo: logos.icst,
  icst_secondary_logo: logos.icst_secondary,
  training_hero: heroes.training,
  trainingHero: heroes.training,
  icst_hero: heroes.icst,

  // Publication & Media
  pen_and_ink_logo: logos.pen_and_ink,
  penAndInkLogo: logos.pen_and_ink,
  touriosity_logo: logos.touriosity,
  touriosityLogo: logos.touriosity,
  curiosity_logo: logos.curiosity,
  curiosityLogo: logos.curiosity,
  sustainable_energy_review_logo: logos.sustainable_energy_review,
  glarepost_logo: logos.glarepost,
  glarePostLogo: logos.glarepost,
  publication_hero: heroes.publication,
  publicationHero: heroes.publication,

  // Fashion & Lifestyle
  atmaja_logo: logos.atmaja,
  atmajaLogo: logos.atmaja,
  fashion_hero: heroes.fashion,
  fashionHero: heroes.fashion,

  // Art & Culture - Afield Gallery (Uses Gallery Artwork Logo + Stock Hero)
  afield_gallery_logo: logos.afield_gallery,
  afieldGalleryLogo: logos.afield_gallery,
  afield_gallery_hero: heroes.art,
  indian_art_and_dolls_gallery_logo: logos.afield_gallery,
  indian_arts_and_dolls_logo: logos.afield_gallery,
  indian_art_and_dolls_gallery_hero: heroes.indian_arts_dolls_stock,
  indian_arts_and_dolls_hero: heroes.indian_arts_dolls_stock,
  art_hero: heroes.art,

  // Afield Advisory (The ONLY Afield Entity in EnVERT Group)
  afield_advisory_logo: logos.afield_advisory,
  afieldAdvisoryLogo: logos.afield_advisory,
  afield_logo: logos.afield_advisory,
  afieldLogo: logos.afield_advisory,
  touriosity_travelmag_logo: logos.touriosity,
  touriosityTravelmagLogo: logos.touriosity,

  // Stewardship
  envert_foundation_logo: logos.envert_foundation,
  envertFoundationLogo: logos.envert_foundation,
  envert_foundation_badge: logos.foundation_badge,
  foundation_hero: heroes.foundation,
  foundationHero: heroes.foundation,

  // Agro & Food
  envert_agro_food_logo: logos.envert_agro_food,
  envertAgroFoodLogo: logos.envert_agro_food,
  agro_hero: heroes.agro,
  agroHero: heroes.agro,

  // Research & Advisory
  eipr_logo: logos.eipr,
  eiprLogo: logos.eipr,
  research_hero: heroes.research,
  researchHero: heroes.research,

  // REPOXISY - Specialty Chemicals & Epoxy Solutions
  repoxisy_logo: logos.repoxisy,
  repoxisyLogo: logos.repoxisy,
  repoxisy_hero: heroes.repoxisy,
  repoxisyHero: heroes.repoxisy,

  // WAGSOL - Solar, Railway Systems & Green Sanitation
  wagsol_logo: logos.wagsol,
  wagsolLogo: logos.wagsol,
  wagsol_hero: heroes.wagsol,
  wagsolHero: heroes.wagsol,

  // EISREE - Solar Research & Energy Efficiency
  eisree_logo: logos.eisree,
  eisreeLogo: logos.eisree,
  eisree_hero: heroes.eisree,
  eisreeHero: heroes.eisree,

  // India Corporate Trainers - Corporate Training, Education, Legal & Relocation
  india_corporate_trainers_logo: logos.india_corporate_trainers,
  indiaCorporateTrainersLogo: logos.india_corporate_trainers,
  india_corporate_trainers_hero: heroes.corporate_trainers,
  corporate_trainers_hero: heroes.corporate_trainers,
  corporateTrainersHero: heroes.corporate_trainers,

  // Wellness
  wellness_logo: logos.wellness,
  wellness_hero: heroes.wellness,
  wellnessHero: heroes.wellness,

  // Projects
  project_solar_pv: projects.solar_pv,
  project_ev_fleet: projects.ev_fleet,
  project_foundry_audit: projects.foundry_audit,
  project_training: projects.training_program,

  // Foundation gallery documentation
  foundation_doc_3: foundationGallery.doc3,
  foundation_doc_4: foundationGallery.doc4,
  foundation_doc_5: foundationGallery.doc5,
  foundation_doc_6: foundationGallery.doc6,
  foundation_doc_7: foundationGallery.doc7,
  foundation_doc_8: foundationGallery.doc8,
  foundation_doc_11: foundationGallery.doc11,
  foundation_doc_12: foundationGallery.doc12,
  foundation_doc_19: foundationGallery.doc19,
  foundation_doc_20: foundationGallery.doc20,
  foundation_doc_21: foundationGallery.doc21,

  // Hyphenated string index aliases
  'hero-main': heroes.main,
  'nrgindia-logo': logos.nrgindia,
  'nrg-india-logo': logos.nrgindia,
  'nrgindia-symbol': logos.nrg_india_symbol,
  'nrg-india-symbol': logos.nrg_india_symbol,
  'icst-logo': logos.icst,
  'icst-secondary-logo': logos.icst_secondary,
  'pen-and-ink-logo': logos.pen_and_ink,
  'pen-ink-logo': logos.pen_and_ink,
  'touriosity-logo': logos.touriosity,
  'curiosity-logo': logos.curiosity,
  'sustainable-energy-review-logo': logos.sustainable_energy_review,
  'glarepost-logo': logos.glarepost,
  'atmaja-logo': logos.atmaja,
  'afield-logo': logos.afield,
  'afield-gallery-logo': logos.afield_gallery,
  'afield-gallery-hero': heroes.art,
  'envert-foundation-logo': logos.envert_foundation,
  'envert-foundation-badge': logos.foundation_badge,
  'envert-agro-food-logo': logos.envert_agro_food,
  'eipr-logo': logos.eipr,
  'wellness-logo': logos.wellness,
  'energy-hero': heroes.energy,
  'transport-hero': heroes.transport,
  'training-hero': heroes.training,
  'publication-hero': heroes.publication,
  'fashion-hero': heroes.fashion,
  'afield-hero': heroes.afield,
  'foundation-hero': heroes.foundation,
  'agro-hero': heroes.agro,
  'research-hero': heroes.research,
  'repoxisy-logo': logos.repoxisy,
  'repoxisy-hero': heroes.repoxisy,
  'wagsol-logo': logos.wagsol,
  'wagsol-hero': heroes.wagsol,
  'eisree-logo': logos.eisree,
  'eisree-hero': heroes.eisree,
  'india-corporate-trainers-logo': logos.india_corporate_trainers,
  'india-corporate-trainers-hero': heroes.corporate_trainers,
  'corporate-trainers-hero': heroes.corporate_trainers,
  'wellness-hero': heroes.wellness,
  'project-solar-pv': projects.solar_pv,
  'project-ev-fleet': projects.ev_fleet,
  'project-foundry-audit': projects.foundry_audit,
  'project-training': projects.training_program,
  'foundation-doc-3': foundationGallery.doc3,
  'foundation-doc-4': foundationGallery.doc4,
  'foundation-doc-5': foundationGallery.doc5,
  'foundation-doc-6': foundationGallery.doc6,
  'foundation-doc-7': foundationGallery.doc7,
  'foundation-doc-8': foundationGallery.doc8,
  'foundation-doc-11': foundationGallery.doc11,
  'foundation-doc-12': foundationGallery.doc12,
  'foundation-doc-19': foundationGallery.doc19,
  'foundation-doc-20': foundationGallery.doc20,
  'foundation-doc-21': foundationGallery.doc21,
};

/**
 * Proxy on images allowing flexible property resolution:
 * e.g. images.hero_main, images.heroMain, images.nrgindia_logo, images.nrgIndiaLogo,
 * or nested images.hero.main, images.logos.nrgindia
 */
export const images = new Proxy(baseRegistry, {
  get(target, prop) {
    if (typeof prop !== 'string') return target[prop];
    if (prop in target) return target[prop];

    // Normalize: try snake_case, camelCase, kebab-case
    const asSnake = prop.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    if (asSnake in target) return target[asSnake];

    const asKebab = prop.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/_/g, '-').toLowerCase();
    if (asKebab in target) return target[asKebab];

    const asLower = prop.replace(/[-_]/g, '').toLowerCase();
    for (const key of Object.keys(target)) {
      if (key.replace(/[-_]/g, '').toLowerCase() === asLower) {
        return target[key];
      }
    }

    return target[prop];
  }
});

export const image = images;
export default images;
