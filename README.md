# AO Studio: Portfolio Site

The portfolio and client-intake site for **AO Studio** (Ayodele Owolabi Studio), my web design and development studio. I build custom, fully coded websites for artists, creatives and small businesses.

> "Websites built to match your level."

## What it does

- **Work page** that lists client projects by category, stack, year and live URL. All of it comes from one typed data file (`data/projects.ts`).
- **About page** that tells the studio's story and links to a call to action.
- **Services page** that lays out the studio's offerings.
- **Contact form** that posts to a server-side API route (`app/api/contact/route.ts`), which emails the inquiry through Nodemailer.
- Responsive layout, plus a viewport setup that handles iPhone safe areas (`viewportFit: cover`).

## Tech stack

| Layer | Tools |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript |
| Styling | CSS Modules, Tailwind CSS 4 |
| Email | Nodemailer |
| Fonts | Geist (via `next/font`) |

## Project structure

```
app/            routes: /, /work, /services, /about, /contact
app/api/contact/route.ts   server-side email handler
components/     Nav, About, Work
data/           projects.ts (portfolio entries, edit here to add work)
public/         images and static assets
```

## Running locally

```bash
npm install
# add your email credentials to .env.local (git-ignored)
npm run dev                  # http://localhost:3000
```

## Featured client work

| Project | Category | Stack |
|---|---|---|
| [Sahel](https://sahelofficial.com) | Band & performance | React, Vite, Netlify |
| [Atlantic Aerial](https://atlanticaerial.com) | Drone videography | Next.js, Tailwind |
| [blkatlantic.com](https://blkatlantic.com) | Creative brand | React, Vite, Tailwind |
| [iothesinger](https://iothesinger.com) | Artist website | Next.js, TypeScript |
| [Ayodele Owolabi](https://www.ayodeleowolabi.com) | Artist website | React, Vite |

---
Designed and developed by **Ayodele Owolabi**, [AO Studio](https://github.com/ayodeleowolabi).
