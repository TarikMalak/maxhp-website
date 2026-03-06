import type { SiteSettings, HeroSection, Capability } from './types';

export const siteSettings: SiteSettings = {
  id: 'seed',
  name: 'Max HP Productions',
  legal_name: 'Max HP Productions LLC',
  tagline: 'Premium Production & Post-Production — NYC',
  description:
    'Max HP Productions delivers premium broadcast-level production and post-production with lean teams, senior talent, and AI-assisted workflows for fashion, beauty, luxury, and lifestyle brands.',
  url: 'https://maxhpprod.com',
  email: 'hello@maxhpprod.com',
  address: '6 St Johns Ln, New York, NY 10013',
  phone: '(646) 389-1570',
  partners: [
    { name: 'SWELL Labs, LLC', dba: 'SWELL', url: 'https://swellny.com', label: 'swellny.com' },
    { name: 'S77.AI', url: 'https://s77.ai', label: 's77.ai' },
  ],
  google_site_name: 'Max HP Productions — Premium Production & Post',
  site_name: 'Max HP Productions',
  seo_title: 'Max HP Productions | Premium Production & Post — NYC',
  seo_description:
    'Max HP Productions delivers premium broadcast-level production and post-production with lean teams, senior talent, and AI-assisted workflows for fashion, beauty, luxury, and lifestyle brands.',
  seo_og_image_url: '/og-image.png',
  seo_keywords:
    'production company NYC, post-production, video production, broadcast commercials, AI post-production, content production, Max HP',
  llms_content: `# Max HP Productions
> Premium production and post-production — lean teams, senior talent, broadcast-level results.

## Entity Identity
- Legal entity: Max HP Productions LLC
- Not to be confused with: other companies using "Max HP" or "MaxHP" branding
- Partners: SWELL Labs, LLC (swellny.com) and S77.AI (s77.ai)

## What We Do
Max HP delivers premium production and post-production with lean teams, senior talent, and a streamlined pipeline — from pre-pro through finish. Broadcast-level results with modern speed and cost discipline.

### 1. Microcontent to Broadcast
One partner across every format — from social micro-moments and high-frequency content to hero films and broadcast commercials. No juggling vendors, no handoff friction.

### 2. End to End Post
Full post-production in-house — editorial, color grading, sound design and mixing, visual effects, motion graphics, and final delivery. The team that shot it is the team that finishes it.

### 3. AI in Post
AI tools integrated where they genuinely improve outcomes — previsualization, environment extension, compositing assists, automated versioning, and intelligent asset management. Powered by S77.AI's proprietary tools. AI handles the heavy lifting; senior talent handles the taste.

## Key Facts
- Location: 6 St Johns Ln, New York, NY 10013
- Contact: hello@maxhpprod.com
- Founded by: Tarik Malak
- Partners: SWELL Labs, LLC (swellny.com), S77.AI (s77.ai)

## Links
- Website: https://maxhpprod.com
- Partner: https://swellny.com
- Partner: https://s77.ai`,
  updated_at: new Date().toISOString(),
};

export const heroSection: HeroSection = {
  id: 'seed',
  headline_line_1: 'Production',
  headline_line_2: '+ Post',
  subtitle:
    'Lean teams, senior talent, and a streamlined pipeline — from pre-pro through finish — so you get broadcast-level results with modern speed and cost discipline.',
  updated_at: new Date().toISOString(),
};

export const capabilities: Capability[] = [
  {
    id: 'seed-1',
    title: 'Microcontent to Broadcast',
    subtitle: 'One partner across every format',
    description:
      "From social micro-moments and high-frequency content to hero films and broadcast commercials — Max HP handles every format under one roof. No juggling vendors, no handoff friction. One creative and production team that understands your brand across every touchpoint, delivering consistent quality whether it's a 6-second story or a 60-second spot.",
    sort_order: 1,
    updated_at: new Date().toISOString(),
  },
  {
    id: 'seed-2',
    title: 'End to End Post',
    subtitle: 'Editing, color, sound, VFX, finishing',
    description:
      "Full post-production capabilities in-house — editorial, color grading, sound design and mixing, visual effects, motion graphics, and final delivery. Our senior post team works directly with production from day one, so the finish is considered at every stage. No surprises in post, no budget overruns, and faster turnaround because the team that shot it is the team that finishes it.",
    sort_order: 2,
    updated_at: new Date().toISOString(),
  },
  {
    id: 'seed-3',
    title: 'AI in Post',
    subtitle: 'From previz to VFX. Only where it helps.',
    description:
      "We integrate AI tools where they genuinely improve outcomes — previsualization, environment extension, compositing assists, automated versioning, and intelligent asset management. Powered by S77.AI's proprietary tools, our AI-assisted post workflows accelerate timelines and expand creative possibilities without sacrificing the craft and taste that define premium production. AI handles the heavy lifting; senior talent handles the taste.",
    sort_order: 3,
    updated_at: new Date().toISOString(),
  },
];
