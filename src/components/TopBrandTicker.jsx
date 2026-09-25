import React from 'react';
import { Link } from 'react-router-dom';

export default function TopBrandTicker() {
  const brands = [
    {
      name: "EnVERT Group",
      category: "Corporate Group",
      logo: "/assets/logos/envert_group_logo.png",
      url: "/about",
      isPrimary: true
    },
    {
      name: "The Touriosity",
      category: "Travel & Heritage Magazine",
      logo: "/assets/scraped_images/home/touriosity_logo.png",
      url: "/businesses/publication"
    },
    {
      name: "NRG India",
      category: "Energy & BEE Audits",
      logo: "/assets/scraped_images/energy/NRGINDIA-logo.png",
      url: "/businesses/energy"
    },
    {
      name: "ICST Global",
      category: "Corporate Training",
      logo: "/assets/scraped_images/home/ICST-logo.png",
      url: "/businesses/icst"
    },
    {
      name: "Glare Post",
      category: "Digital Journalism",
      logo: "/assets/scraped_images/home/glarepost_logo.png",
      url: "/glarepost"
    },
    {
      name: "EnVERT E-Vehicles",
      category: "Commercial EVs",
      logo: "/assets/logos/envert_group_logo.png",
      url: "/businesses/transport-electric"
    },
    {
      name: "Pen & Ink Publishers",
      category: "Publishing House",
      logo: "/assets/scraped_images/home/pen_and_ink_logo.png",
      url: "/businesses/publication"
    },
    {
      name: "Curiosity Kids",
      category: "Children's Magazine",
      logo: "/assets/scraped_images/home/curiosity_logo.png",
      url: "/businesses/publication"
    },
    {
      name: "Sustainable Energy Review",
      category: "Technical Trade Journal",
      logo: "/assets/scraped_images/home/sustainable_energy_review_logo.png",
      url: "/businesses/publication"
    },
    {
      name: "EnVERT Foundation",
      category: "Social Ecology & Stewardship",
      logo: "/assets/scraped_images/home/envert_foundation_logo.png",
      url: "/businesses/envert-foundation"
    },
    {
      name: "Atmaja",
      category: "Sustainable Lifestyle & Fashion",
      logo: "/assets/scraped_images/fashion-lifestyle/atmaja_logo.png",
      url: "/businesses/fashion-lifestyle"
    },
    {
      name: "Afield Gallery",
      category: "Contemporary Art",
      logo: "/assets/scraped_images/home/afield_logo.png",
      url: "/businesses/afield-gallery"
    },
    {
      name: "EnVERT Agro Food",
      category: "Agro & Processing",
      logo: "/assets/scraped_images/home/envert_agro_food_logo.png",
      url: "/businesses/envert-agro-food"
    },
    {
      name: "EIPR",
      category: "Professional Researches",
      logo: "/assets/scraped_images/home/eipr_logo.png",
      url: "/businesses/eipr"
    },
    {
      name: "EnVERT Wellness",
      category: "Corporate Healthcare & Ergonomics",
      logo: "/assets/logos/envert_group_logo.png",
      url: "/businesses/startup-idea-envert-wellness"
    }
  ];

  // Duplicate the list to create an unbroken seamless infinite loop
  const tickerItems = [...brands, ...brands];

  return (
    <div className="bg-forest-deep text-paper/90 border-b border-paper/10 overflow-hidden select-none z-50 py-2 sm:py-2.5">
      <div className="relative w-full flex items-center">
        
        {/* Fixed Editorial Label at Start on Desktop */}
        <div className="hidden xl:flex items-center gap-2 pl-6 pr-4 shrink-0 bg-forest-deep z-10 border-r border-paper/15 text-[10.5px] font-mono tracking-widest uppercase text-earth-light">
          <span className="w-1.5 h-1.5 rounded-full bg-leaf animate-pulse"></span>
          <span>COMPANIES & INITIATIVES</span>
        </div>

        {/* Sliding Marquee Track */}
        <div className="overflow-hidden w-full">
          <div className="animate-marquee-slide flex items-center gap-6 sm:gap-10">
            {tickerItems.map((brand, idx) => (
              <Link
                key={`${brand.name}-${idx}`}
                to={brand.url}
                className="group flex items-center gap-2.5 px-3 py-1 hover:bg-forest/80 rounded-xs transition-colors shrink-0"
              >
                {/* Brand Logo Container */}
                {brand.logo && (
                  <div className="h-6 w-auto px-1.5 py-0.5 bg-white/95 rounded-xs flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-full max-w-[70px] sm:max-w-[85px] object-contain"
                      loading="eager"
                    />
                  </div>
                )}

                {/* Brand Name & Category Badge */}
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-xs sm:text-[13px] tracking-tight text-paper group-hover:text-earth-light transition-colors whitespace-nowrap">
                    {brand.name}
                  </span>
                  <span className="text-[9.5px] font-mono uppercase tracking-wider text-earth/80 bg-paper/10 px-1.5 py-0.5 rounded-xs whitespace-nowrap border border-paper/10">
                    {brand.category}
                  </span>
                </div>

                {/* Subtle Divider */}
                <span className="text-paper/20 ml-3">•</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
