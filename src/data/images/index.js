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
  envert: resolve('/assets/logos/envert_group_logo.png'),
  envert_group: resolve('/assets/logos/envert_group_logo.png'),
  envertGroup: resolve('/assets/logos/envert_group_logo.png'),
  
  nrgindia: resolve('/assets/scraped_images/energy/NRGINDIA-logo.png'),
  nrg_india: resolve('/assets/scraped_images/energy/NRGINDIA-logo.png'),
  nrgIndia: resolve('/assets/scraped_images/energy/NRGINDIA-logo.png'),
  nrg_india_symbol: resolve('/assets/scraped_images/energy/nrg_india_symbol.png'),
  
  icst: resolve('/assets/scraped_images/home/ICST-logo.png'),
  icst_secondary: resolve('/assets/logos/icst_logo.png'),
  
  pen_and_ink: resolve('/assets/scraped_images/home/pen_and_ink_logo.png'),
  penAndInk: resolve('/assets/scraped_images/home/pen_and_ink_logo.png'),
  
  touriosity: resolve('/assets/scraped_images/home/touriosity_logo.png'),
  the_touriosity: resolve('/assets/scraped_images/home/touriosity_logo.png'),
  
  curiosity: resolve('/assets/scraped_images/home/curiosity_logo.png'),
  curiosity_kids: resolve('/assets/scraped_images/home/curiosity_logo.png'),
  
  sustainable_energy_review: resolve('/assets/scraped_images/home/sustainable_energy_review_logo.png'),
  sustainableEnergyReview: resolve('/assets/scraped_images/home/sustainable_energy_review_logo.png'),
  
  glarepost: resolve('/assets/scraped_images/home/glarepost_logo.png'),
  glare_post: resolve('/assets/scraped_images/home/glarepost_logo.png'),
  
  atmaja: resolve('/assets/scraped_images/fashion-lifestyle/atmaja_logo.png'),
  fashion_lifestyle: resolve('/assets/scraped_images/fashion-lifestyle/atmaja_logo.png'),
  
  afield: resolve('/assets/scraped_images/home/afield_logo.png'),
  afield_gallery: resolve('/assets/scraped_images/home/afield_logo.png'),
  
  envert_foundation: resolve('/assets/scraped_images/home/envert_foundation_logo.png'),
  foundation: resolve('/assets/scraped_images/home/envert_foundation_logo.png'),
  foundation_badge: resolve('/assets/scraped_images/envert-foundation/envert-foundation_logo.png'),
  
  envert_agro_food: resolve('/assets/scraped_images/home/envert_agro_food_logo.png'),
  agro_food: resolve('/assets/scraped_images/home/envert_agro_food_logo.png'),
  
  eipr: resolve('/assets/scraped_images/home/eipr_logo.png'),
  research: resolve('/assets/scraped_images/home/eipr_logo.png'),
  
  wellness: resolve('/assets/logos/envert_group_logo.png'),
  envert_wellness: resolve('/assets/logos/envert_group_logo.png')
};

export const heroes = {
  main: resolve('https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1400&auto=format&fit=crop'),
  energy: resolve('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1600&auto=format&fit=crop'),
  transport: resolve('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1600&auto=format&fit=crop'),
  training: resolve('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop'),
  icst: resolve('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop'),
  publication: resolve('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1600&auto=format&fit=crop'),
  fashion: resolve('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop'),
  art: resolve('https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1600&auto=format&fit=crop'),
  afield: resolve('https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1600&auto=format&fit=crop'),
  foundation: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_8_8a67aa84.png'),
  agro: resolve('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop'),
  research: resolve('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop'),
  eipr: resolve('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop'),
  wellness: resolve('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop')
};

export const projects = {
  solar_pv: resolve('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop'),
  ev_fleet: resolve('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200&auto=format&fit=crop'),
  foundry_audit: resolve('https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop'),
  training_program: resolve('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop')
};

export const foundationGallery = {
  doc3: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_3_bfc19f69.png'),
  doc4: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_4_319aea5e.png'),
  doc5: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_5_b98d0bca.png'),
  doc6: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_6_8ecb1026.png'),
  doc7: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_7_7c4deb9c.png'),
  doc8: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_8_8a67aa84.png'),
  doc11: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_11_69a36472.png'),
  doc12: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_12_eb8e25f9.png'),
  doc19: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_19_a056de97.png'),
  doc20: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_20_1420e445.png'),
  doc21: resolve('/assets/scraped_images/envert-foundation/envert-foundation_img_21_84a6104e.png')
};

// 2. Flat Registry containing all key naming conventions
const baseRegistry = {
  // Nested sub-namespaces
  logos,
  heroes,
  hero: heroes,
  projects,
  gallery: foundationGallery,

  // Direct dot-accessible properties (snake_case and camelCase)
  hero_main: heroes.main,
  heroMain: heroes.main,
  
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

  // Art & Culture
  afield_logo: logos.afield,
  afieldLogo: logos.afield,
  afield_hero: heroes.afield,
  afieldHero: heroes.afield,

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
