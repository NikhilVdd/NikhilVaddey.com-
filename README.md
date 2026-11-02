# Nikhil Vaddey — Portfolio

Personal portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS, Three.js, GSAP, and Motion.

## Local development

Use Node.js 22 and install the locked dependencies:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Import `NikhilVdd/NikhilVaddey.com-` in Vercel.
2. Keep the root directory set to the repository root.
3. Vercel will detect the Next.js framework and run `npm run build`.
4. No environment variables are required for the current portfolio.

The repository pins Node.js 22 through `package.json` and `.nvmrc`. `vercel.json` explicitly selects the Next.js framework preset.

## Existing Sites build

The original Cloudflare/Vinext workflow remains available when needed:

```bash
npm run sites:dev
npm run sites:build
npm run sites:start
```
