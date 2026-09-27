# AI Agent Guidelines & Architecture Principles

This document defines the architectural rules, coding standards, and conventions for AI agents developing or modifying the **EnVERT Group** codebase.

---

## 1. Brand Identity & Naming Guidelines
- **Canonical Brand Name**: Always spell the brand name as **`EnVERT`** or **`EnVERT Group`**.
  - ❌ Never write `ENVERT` or `Envert`.
  - The trademark is registered as **EnVERT®**.
- **Corporate Positioning**:
  - *"A truly multidisciplinary engineering, advisory, design, consultancy and publishing group of companies working across the eleven markets."*
  - Headquartered in **Kolkata, West Bengal, India**.

---

## 2. Data Architecture & Static Content Rule
> [!IMPORTANT]
> **All static data, mock structures, metadata, and image links MUST reside under `src/data/`. Components MUST import data and images from `src/data/`, never inline mock datasets or hardcode asset paths directly.**
>
> **Exception**: Small, static contact strings (phone, email) may be inlined in `Footer.jsx` and `Navbar.jsx` as named `CONTACT` constants to keep `siteData.js` out of the critical-path JS bundle. Update both the constant and `siteData.js` when contacts change.

### File Responsibilities in `src/data/`:
- **`src/data/siteData.js`**:
  - `siteMetadata`: Core corporate info, contacts, hiring notices, and operating pillars.
  - `elevenMarketsData`: The 11 official markets from the Services Charter (Energy, Environment, Advisory Services, Buildings, Publication, Travel, Manufacturing, Management Consulting, Transport, Fashion & Lifestyle, Export Import).
  - `businessesData`: The 10 operating categories with their legal entities (NRG India, ICST Global, EnVERT E-Vehicles, Pen & Ink, etc.).
  - `projectsData`: Verifiable client projects, locations, and engineering deliverables.
  - `careersData`: Live open job positions, qualifications, and department tags.
  - `insightsData`: Published articles, periodicals, and whitepapers.
  - ⚠️ **This file is ~112 KiB. Never import it from components in the critical render path** (Navbar, Footer, Hero, App.jsx). It is deferred and loaded only by lazy-loaded page/section components.
- **`src/data/navData.js`** *(performance-critical)*:
  - Minimal navigation-only slice: only `id`, `num`, `name`, and `businessesUnderCategory[].{name, url}` fields.
  - Used exclusively by `Navbar.jsx` for the businesses dropdown.
  - **Must be kept in sync with `businessesData` in `siteData.js`** when categories are added/renamed/removed.
  - ❌ Never add full descriptions, images, market data, or project info here.
- **`src/data/image.js`**:
  - Central image registry for the entire application.
  - Exposes `images`, `logos`, `heroes`, and `projects`.
  - Supports both dot-property access (`images.energy_hero`) and namespace objects (`images.heroes.energy`).
  - Prepares the app for future CDN/S3 migrations by maintaining a single `resolve(path)` helper.
  - ✅ Safe to import from Hero and other above-the-fold components (no siteData dependency).

---

## 3. Image Sourcing, Asset Hygiene & Performance Standards
> [!IMPORTANT]
> **Performance First**: All local assets must use modern formats, strict lazy-loading, explicit dimensions, and non-blocking delivery to maintain 95+ PageSpeed scores.

### Asset Format & Sizing Rules:
- **WebP Only for Local Assets**: All static photographic and corporate branding assets under `public/assets/` MUST use the **`.webp`** modern image format.
  - ❌ Never commit uncompressed, multi-megabyte `.png` or raw `.bmp` files.
  - Brand logos must be pre-scaled to high-DPI display dimensions (`max-width: 400–500px`, `max-height: 200px`) using WebP compression (`quality: 80–85`), keeping logo file sizes under **5–30 KiB**.
- **Responsive CDN Parameters for External Imagery**: External stock image links (e.g., Unsplash) must always specify responsive size and compression parameters matching actual container displays:
  - Small thumbnails/cards: `w=600&q=75&auto=format&fit=crop`
  - Medium/Hero secondary tiles: `w=800&q=75&auto=format&fit=crop`
  - Full-width hero backgrounds: `w=1000&q=75&auto=format&fit=crop`
  - ❌ Never load uncapped or oversized `w=1600+` images for 400px containers.
- **Pre-validated URLs Only**: Whenever external stock image links are added, verify they return `HTTP 200 OK`. Broken or dead URLs (404s) must never be committed.

### Image Component & HTML Loading Standards:
- **Explicit Width & Height Attributes**: Every `<img>` tag and `<EditorialImage>` wrapper MUST declare explicit `width` and `height` attributes (e.g., `width="160" height="44"`) to enable browser aspect-ratio computation and eliminate Cumulative Layout Shift (CLS).
- **Lazy Loading Strategy**:
  - **Below-the-fold images**: MUST declare `loading="lazy"` and `decoding="async"`. This applies to `Ecosystem.jsx`, `Businesses.jsx`, `Projects.jsx`, `Footer.jsx`, and internal detail pages.
  - **Above-the-fold LCP image**: The primary Hero visual MUST declare `loading="eager"`, `fetchPriority="high"`, and `decoding="async"`.
  - **LCP Preloading in `index.html`**: The critical Hero visual must be preloaded in `<head>` via `<link rel="preload" as="image" href="..." fetchpriority="high" />` for immediate HTML parse discovery.
- **No Synchronous Mount Preloading**:
  - Never execute synchronous loops preloading multiple secondary images during component `useEffect` mount.
  - Secondary or carousel/tab images must be preloaded lazily via `requestIdleCallback` or upon user interaction (`hover`/`focus`).
- **Import Pattern**:
  ```javascript
  // Correct
  import { images } from '../data/image.js';
  // or (only in lazy-loaded page/section components)
  import { brandsData } from '../data/siteData.js';
  ```
- **Fallback Protection**: Photographic frames should use `<EditorialImage>` or include an `onError` fallback to prevent broken browser icon displays.

---

## 4. Homepage Section Sequence
The homepage structure is carefully arranged to ensure a logical user experience:
1. **Hero (`Hero.jsx`)**: Core headline, primary CTA to `#about`, secondary CTA to `#businesses`, and group metrics: `11 Markets • 14+ Operating Brands • HQ Kolkata, India`.
2. **About EnVERT (`Intro.jsx`)**: Detailed editorial statement, governance, fact matrix, and strategic pillars.
3. **Services Charter (`Businesses.jsx`)**: **"Working Across The Eleven Markets"** interactive showcase with verified imagery and the complete charter capabilities checklist.
4. **Group Ecosystem (`Ecosystem.jsx`)**: The 14 official operating brands and legal platform relationships.
5. **Selected Work (`Projects.jsx`)**: Verifiable engineering installations and energy audit track records.

---

## 5. Navigation & Routing Standards
- **Navbar Links Order**:
  1. `About` (`/about`)
  2. `Businesses` (`/businesses` with interactive dropdown)
  3. `Companies` (`/companies`)
  4. `Projects` (`/projects`)
  5. `Careers` (`/careers`)
  6. `Contact` (`/contact`)
- Internal navigation must always use React Router `<Link>` components to maintain smooth Single Page Application (SPA) client-side routing.
- Do not re-introduce previously removed sections (e.g., sliding ticker animation, unformatted dot on careers, or duplicate logos).

---

## 6. JS Bundle & Code-Splitting Architecture
> [!IMPORTANT]
> The critical-path JS bundle (what the browser downloads and executes before first paint) must stay **lean**. The current baseline is ~60 KiB uncompressed / ~14 KiB gzip for the main `index-*.js` chunk. Do not let it grow beyond **80 KiB uncompressed**.

### What MUST be eagerly loaded (critical path):
- `App.jsx` — router, layout shell, analytics init
- `Navbar.jsx` + `navData.js` (minimal nav slice only)
- `Footer.jsx` (static HTML, no heavy data)
- `Hero.jsx` + `image.js` (LCP element, must paint immediately)
- `SEO.jsx`, `ScrollToTop.jsx` — zero-weight utilities

### What MUST be lazy-loaded (`React.lazy + Suspense`):
- **All homepage sections below the fold**: `Intro`, `Businesses`, `Ecosystem`, `Projects`
  - Each gets its own `<Suspense fallback={<SectionSkeleton />}>` wrapper in `HomePage.jsx`
  - `SectionSkeleton` must match approximate section height to prevent CLS
- **All sub-pages**: `AboutPage`, `BusinessesIndex`, `BusinessDetail`, `CompaniesPage`, `ProjectsPage`, `CareersPage`, `ContactPage`
- **All modals**: `InquiryModal` — lazy-loaded inside a conditional render (`{open && <Suspense>...`)

### Third-party / analytics:
- **`@vercel/analytics`** MUST be initialised lazily via `requestIdleCallback` (timeout: 3500ms) or `setTimeout(2000)` fallback.
- ❌ Never add synchronous top-level `import` of analytics in `main.jsx` or `App.jsx`.

### Manual chunk grouping (`vite.config.js`):
The current `manualChunks` strategy separates:
- `vendor-react` → React 19 core + react-dom only
- `vendor-router` → react-router-dom
- `vendor-icons` → lucide-react
- `vendor-other` → all other node_modules
- `siteData-*` → auto-split by Vite (deferred, loaded only by lazy page components)

❌ Do not merge `lucide-react` or `react-router-dom` back into `vendor-react` — they are used by deferred chunks and must not bloat the eager bundle.

### Critical-path import rules:
| Component | May import `siteData.js`? | May import `image.js`? | May import `navData.js`? |
|---|---|---|---|
| `Navbar.jsx` | ❌ No | ❌ No | ✅ Yes |
| `Footer.jsx` | ❌ No | ❌ No | ❌ No |
| `Hero.jsx` | ❌ No | ✅ Yes | ❌ No |
| `App.jsx` | ❌ No | ❌ No | ❌ No |
| `HomePage.jsx` | ❌ No | ❌ No | ❌ No |
| Lazy sections/pages | ✅ Yes | ✅ Yes | ❌ N/A |

---

## 7. Verification Checklist
Before concluding any task:
1. Run `npm run build` to confirm zero Vite compilation errors.
2. Confirm that images load with valid status codes and use `.webp` format.
3. Verify that all `<img>` tags have explicit `width`, `height`, and appropriate `loading="lazy"` / `decoding="async"` attributes.
4. Verify that the correct branding (**EnVERT**) is preserved across all files.
5. **Bundle gate**: After any component or data import change, check that `dist/assets/index-*.js` remains under **80 KiB** uncompressed. Run:
   ```bash
   ls -lh dist/assets/index-*.js
   ```
6. **Critical-path purity check**: Confirm `siteData.js` is NOT in the main `index-*.js` chunk:
   ```bash
   node -e "const c=require('fs').readFileSync(require('fs').readdirSync('dist/assets').find(f=>f.startsWith('index-')&&f.endsWith('.js')).replace(/^/,'dist/assets/'),'utf8'); console.log('siteData in critical chunk:', c.includes('projectsData')||c.includes('careersData')||c.includes('insightsData') ? 'YES ❌' : 'NO ✅');"
   ```
7. If you add a new category to `businessesData` in `siteData.js`, **also update `navData.js`** with the matching minimal entry.

