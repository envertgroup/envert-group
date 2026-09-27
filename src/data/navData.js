/**
 * navData.js — Minimal nav-only slice of businessesData for Navbar dropdown.
 * Contains only the fields required for navigation (id, num, name, sub-business links).
 * This keeps the full siteData.js (~112 KiB) out of the critical initial JS bundle.
 *
 * IMPORTANT: Keep in sync with businessesData in siteData.js when categories change.
 */

export const navBusinessesData = [
  {
    id: "energy",
    num: "01",
    name: "Clean Energy & Industrial Efficiency",
    businessesUnderCategory: [
      { name: "NRG India", url: "/businesses/energy" },
      { name: "WAGSOL™", url: "/businesses/wagsol" },
      { name: "EISREE", url: "/businesses/eisree" },
    ],
  },
  {
    id: "transport-electric",
    num: "02",
    name: "Transport & Electric Mobility",
    businessesUnderCategory: [
      { name: "EnVERT E-Vehicles Pvt. Ltd.", url: "/businesses/transport-electric" },
    ],
  },
  {
    id: "repoxisy",
    num: "03",
    name: "Specialty Chemicals & Advanced Materials",
    businessesUnderCategory: [
      { name: "REPOXISY™", url: "/businesses/repoxisy" },
    ],
  },
  {
    id: "icst",
    num: "04",
    name: "Sustainable Tourism, Conferences & Platform",
    businessesUnderCategory: [
      { name: "ICST Global", url: "/businesses/icst" },
    ],
  },
  {
    id: "india-corporate-trainers",
    num: "05",
    name: "Corporate Training, Capability & Relocation",
    businessesUnderCategory: [
      { name: "India Corporate Trainers", url: "/businesses/india-corporate-trainers" },
    ],
  },
  {
    id: "afield-advisory",
    num: "06",
    name: "Strategic Advisory & Public Relations",
    businessesUnderCategory: [
      { name: "Afield Advisory", url: "/businesses/afield-advisory" },
    ],
  },
  {
    id: "eipr",
    num: "07",
    name: "Policy Research & Decarbonization Studies",
    businessesUnderCategory: [
      { name: "EIPR", url: "/businesses/eipr" },
    ],
  },
  {
    id: "publication",
    num: "08",
    name: "Publication, Media & Film Production",
    businessesUnderCategory: [
      { name: "Touriosity Travelmag", url: "/businesses/publication" },
      { name: "Pen & Ink Publishers", url: "/businesses/publication" },
      { name: "Curiosity Kids", url: "/businesses/publication" },
      { name: "Sustainable Energy Review", url: "/businesses/publication" },
      { name: "Glare Post", url: "/glarepost" },
      { name: "Glarepost Films", url: "/businesses/glarepost-films" },
    ],
  },
  {
    id: "afield-gallery",
    num: "09",
    name: "Visual Arts & Contemporary Culture",
    businessesUnderCategory: [
      { name: "Afield Gallery", url: "/businesses/afield-gallery" },
    ],
  },
  {
    id: "fashion-lifestyle",
    num: "10",
    name: "Fashion & Sustainable Lifestyle",
    businessesUnderCategory: [
      { name: "Atmaja", url: "/businesses/fashion-lifestyle" },
    ],
  },
  {
    id: "envert-foundation",
    num: "11",
    name: "Social Stewardship & Community Ecology",
    businessesUnderCategory: [
      { name: "EnVERT Foundation", url: "/businesses/envert-foundation" },
    ],
  },
  {
    id: "startup-idea-envert-wellness",
    num: "12",
    name: "Healthcare & Corporate Wellness",
    businessesUnderCategory: [
      { name: "EnVERT Wellness", url: "/businesses/startup-idea-envert-wellness" },
    ],
  },
];
