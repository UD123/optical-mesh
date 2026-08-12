# Optical Mesh Product Page Configuration Guide

This document explains how to customize the Optical Mesh product page: update the hero visual, edit section copy, change contact details, and manage styling.

---

## Table of Contents

- [Overview](#overview)
- [Changing the Hero Image](#changing-the-hero-image)
- [Updating Section Content](#updating-section-content)
  - [Mission](#mission)
  - [Customers](#customers)
  - [Technology](#technology)
  - [Product Benefits](#product-benefits)
  - [Contact](#contact)
- [Updating Contact Information](#updating-contact-information)
- [Styling & Branding](#styling--branding)
- [Deployment & Local Development](#deployment--local-development)

---

## Overview

This site is a single-page product page for **Optical Mesh** — a jam-resistant, multi-hop laser communication network for robot swarms.

The page is composed of these sections, in order:

1. **Hero** — full-width visual with headline and tagline
2. **Mission** — value proposition for contested RF environments
3. **Customers** — target use-cases and buyer personas
4. **Technology** — how the optical mesh works, with a diagram
5. **Product** — key benefits
6. **Contact** — inquiry form and email
7. **Footer** — navigation, social links, and copyright

Section order and composition are controlled in `src/pages/Index.tsx`.

---

## Changing the Hero Image

The hero background image is referenced in `src/components/Hero.tsx`:

```tsx
<img
  src={getAssetPath('/images/optical/mesh-network.jpg')}
  alt="Swarm of drones connected by green laser links forming a multi-hop optical mesh network over a battlefield"
  className="object-cover w-full h-full"
/>
```

To replace it:

1. Add your new image to `public/images/optical/` (for example `public/images/optical/new-hero.jpg`).
2. Update the `src` path in `src/components/Hero.tsx`.
3. Update the `alt` text to describe the new image.

The hero headline and subheadline are also in `src/components/Hero.tsx`.

---

## Updating Section Content

### Mission

Edit the mission copy in `src/components/MissionSection.tsx`.

### Customers

Edit the customer cards in `src/components/CustomersSection.tsx`:

```ts
const customers = [
  {
    title: 'Defense & Special Operations',
    description: 'Units operating in electronic-warfare environments...',
  },
  // ...
];
```

### Technology

Edit the technology explanation in `src/components/TechnologySection.tsx`. The diagram image is referenced inside that file — replace it by adding a new image to `public/images/optical/` and updating the path.

### Product Benefits

Edit the benefit cards in `src/components/ProductSection.tsx`:

```ts
const benefits = [
  {
    title: 'Enhanced Reliability',
    description: 'Reduced susceptibility to environmental interference and jamming.',
  },
  // ...
];
```

### Contact

Edit the contact copy and Formspree endpoint in `src/components/ContactSection.tsx`.

---

## Updating Contact Information

Update these files when contact details change:

- `src/components/ContactSection.tsx` — form intro text and Formspree action URL
- `src/components/Footer.tsx` — email, website, and social links
- `index.html` — page title and meta description for SEO

Current contact email: `uri.dubin@robotai.info`

---

## Styling & Branding

Site-wide styling is managed with Tailwind CSS and CSS variables.

- **Color tokens** — edit `src/index.css`
- **Font families** — edit `tailwind.config.ts` and `index.html` (Google Fonts)
- **Per-section layout/spacing** — edit the relevant component in `src/components/`

The project uses a sage-and-cream palette with Urbanist headings and Epilogue body text.

---

## Deployment & Local Development

**Local Development:**

```sh
npm install
npm run dev
# Visit http://localhost:8080
```

**Deploying:**

For static hosting such as GitHub Pages, push to the main branch; the included GitHub Actions workflow handles deployment.

**HashRouter:**

Because this project is hosted on GitHub Pages, it uses `HashRouter`. Internal links use hash fragments (for example `/#/mission`).

---
