# Marion Schmaeh — Autumn Day of Presence

A cinematic, editorial landing page for a one-day embodied awareness retreat
in Toronto. Built with Next.js 15 (App Router), React 19, TypeScript,
Tailwind CSS v4, and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's included

- Full page from the brief: hero, trust strip, "who this is for," atmospheric
  banner, about, experience cards, schedule timeline, location, testimonials
  carousel, FAQ accordion, reserve form, final CTA, footer.
- Framer Motion fade-up / stagger / image-reveal animations, all in the
  0.8–1.6s range with the `[0.22,1,0.36,1]` ease from the brief, and all
  disabled automatically for `prefers-reduced-motion`.
- Lenis smooth scrolling (skipped for reduced-motion users).
- SEO: metadata, Open Graph/Twitter cards, JSON-LD `Event` schema,
  `sitemap.xml`, `robots.txt`.
- Accessible by default: semantic headings, labelled form fields, visible
  focus rings, `aria-live` testimonial region, keyboard-operable accordion
  and carousel.

## Replacing the placeholder imagery

Real photography wasn't available in this build, so every photo is a soft
gradient placeholder (`components/atelier-frame.tsx`) in the brief's palette
— it holds the right shape/aspect ratio so nothing shifts when you swap it.

To drop in real photos:

1. Add your images to `public/images/` (e.g. `hero-portrait.jpg`,
   `tea-hands.jpg`, `loft-interior.jpg`, `about-marion.jpg`).
2. In the relevant component, replace `<AtelierFrame variant="..." .../>`
   with:
   ```tsx
   import Image from "next/image";
   <Image
     src="/images/hero-portrait.jpg"
     alt="Marion Schmaeh in soft window light"
     fill
     className="object-cover"
     priority // only on the hero image
   />
   ```
   (the parent wrapper already has `relative` + a fixed aspect ratio, so
   `fill` will just work).

Shot list, per the brief: Marion portrait · hands with tea in morning light ·
Toronto loft interior · group sitting in circle · natural wood details · tea
ritual imagery · autumn Toronto atmosphere.

## Connecting checkout (Stripe or Systeme.io)

The reserve form is in `components/reserve.tsx`. It currently shows a
confirmation state on submit. To send people to real checkout, replace the
`// TODO` in `handleSubmit` with a redirect:

```tsx
window.location.href = "https://checkout.stripe.com/pay/..."; // or your Systeme.io order URL
```

If you want to capture name/email/notes before checkout (e.g. into a
spreadsheet or CRM), POST the form data to your own API route or a service
like Formspree first, then redirect.

## Before you launch

- Swap in real images (see above) and update `alt` text.
- Update `siteUrl` in `app/layout.tsx` if the domain isn't
  `marionschmaeh.com`.
- Wire the reserve form to real checkout (see above).
- Double check the JSON-LD event dates/price in `app/layout.tsx` match your
  final offer.
- Run `npm run build` once more after your changes — it should complete with
  zero errors/warnings.

## Deploy: push to GitHub, deploy on Vercel

From inside this project folder:

```bash
git init
git add -A
git commit -m "Initial commit: Autumn Day of Presence landing page"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Then either:

- **Vercel dashboard**: go to vercel.com → Add New Project → import the
  GitHub repo → it auto-detects Next.js → Deploy. No config needed.
- **Vercel CLI**:
  ```bash
  npm i -g vercel
  vercel login
  vercel        # first deploy, follow prompts
  vercel --prod # subsequent production deploys
  ```

No environment variables are required for the current build. If you later
add a Stripe secret key or an email-capture API route, add those as
Environment Variables in the Vercel project settings before deploying.
