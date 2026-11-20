# ShipYard — Objects for Everyday Living

A high-performance product-catalog storefront built with Next.js (App Router), TypeScript, and static site export.

- **Live URL**: [https://kavish-a-m.github.io/shipyard/](https://kavish-a-m.github.io/shipyard/)
- **Lighthouse Performance Score**: **98 / 100** (Mobile)

---

## ⚡ Lighthouse Audit Results (Mobile)

| Category | Score | Metric Highlights |
| :--- | :--- | :--- |
| **Performance** | **98** | **FCP**: 0.9s · **LCP**: 1.2s · **CLS**: 0.000 · **TBT**: 0ms |
| **Accessibility** | **100** | Full semantic markup, aria attributes & color contrast |
| **Best Practices** | **100** | Modern HTTP standards, secure links, next/image sizing |
| **SEO** | **100** | Per-page dynamic metadata, OpenGraph tags & valid robots/meta |

---

## 🚀 Key Performance Optimizations

1. **Zero Layout Shift Images (`next/image`)**
   - High-fidelity vector & raster product assets in `public/products/`.
   - Explicit `width` and `height` dimensions prevent Cumulative Layout Shift (`CLS: 0.000`).
   - `priority` flag added to above-the-fold hero images to optimize Largest Contentful Paint (`LCP: 1.2s`).

2. **Self-Hosted Web Fonts (`next/font/google`)**
   - Zero external render-blocking font requests to `fonts.googleapis.com`.
   - `DM Sans`, `DM Mono`, and `Playfair Display` loaded via `next/font` with `display: swap` and CSS custom properties.

3. **Code Splitting & Lazy-Loaded Heavy Components (`next/dynamic`)**
   - The interactive customer reviews panel (`Reviews.tsx`) is deferred below the fold using `next/dynamic`.
   - Pre-rendered with an instant skeleton loading fallback.

4. **Resilient Application States**
   - `app/loading.tsx`: Streaming loading skeleton for smoother visual transitions.
   - `app/error.tsx`: Client component error boundary with a graceful retry button (`reset()`).
   - `app/not-found.tsx`: Custom 404 page for missing or invalid product IDs.

5. **Static Site Generation & Deployment**
   - Pre-builds all dynamic `/products/[id]` routes using `generateStaticParams`.
   - Automated deployment pipeline to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`).

---

## 💻 Local Development

### Prerequisites
- Node.js 18.18+ or 20+
- npm or pnpm

### 1. Clone the repository
```bash
git clone https://github.com/kavish-a-m/shipyard.git
cd shipyard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build and Test Static Export Locally
```bash
npm run build
npx serve out
```
Open [http://localhost:3000/shipyard](http://localhost:3000/shipyard) to preview the production static build.
