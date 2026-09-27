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

### File Responsibilities in `src/data/`:
- **`src/data/siteData.js`**:
  - `siteMetadata`: Core corporate info, contacts, hiring notices, and operating pillars.
  - `elevenMarketsData`: The 11 official markets from the Services Charter (Energy, Environment, Advisory Services, Buildings, Publication, Travel, Manufacturing, Management Consulting, Transport, Fashion & Lifestyle, Export Import).
  - `businessesData`: The 10 operating categories with their legal entities (NRG India, ICST Global, EnVERT E-Vehicles, Pen & Ink, etc.).
  - `projectsData`: Verifiable client projects, locations, and engineering deliverables.
  - `careersData`: Live open job positions, qualifications, and department tags.
  - `insightsData`: Published articles, periodicals, and whitepapers.
- **`src/data/image.js`**:
  - Central image registry for the entire application.
  - Exposes `images`, `logos`, `heroes`, and `projects`.
  - Supports both dot-property access (`images.energy_hero`) and namespace objects (`images.heroes.energy`).
  - Prepares the app for future CDN/S3 migrations by maintaining a single `resolve(path)` helper.

---

## 3. Image Sourcing & Asset Hygiene
- **Pre-validated URLs Only**: Whenever external stock image links (e.g. Unsplash) are added, ensure they return `HTTP 200 OK`. Broken or dead URLs (404s) must never be committed.
- **Import Pattern**:
  ```javascript
  // Correct
  import { images } from '../data/image.js';
  // or
  import { elevenMarketsData } from '../data/siteData.js';
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

## 6. Verification Checklist
Before concluding any task:
1. Run `npm run build` to confirm zero Vite compilation errors.
2. Confirm that images load with valid status codes.
3. Verify that the correct branding (**EnVERT**) is preserved across all files.
