import { NextResponse } from 'next/server';
import { getSiteSettings, getHero, getCapabilities } from '@/lib/api';

export const revalidate = 3600;

export async function GET() {
  const [settings, hero, capabilities] = await Promise.all([
    getSiteSettings(),
    getHero(),
    getCapabilities(),
  ]);

  const today = new Date().toISOString().slice(0, 10);
  const sections: string[] = [];

  sections.push(`# ${settings.name} — Full Content Reference
> ${settings.tagline}
> Last updated: ${today}
> Summary version: https://maxhpprod.com/llms.txt

${settings.description}`);

  sections.push(`## Entity Identity
- Legal entity: ${settings.legal_name}
- Not to be confused with: other companies using "Max HP" or "MaxHP" branding
- Partners: ${settings.partners.map(p => `${p.name} (${p.url})`).join(' and ')}`);

  sections.push(`## Tagline
${hero.headline_line_1} ${hero.headline_line_2}

${hero.subtitle}`);

  sections.push(`## Capabilities`);
  for (const c of capabilities) {
    sections.push(`### ${c.sort_order}. ${c.title}
**${c.subtitle}**

${c.description}`);
  }

  sections.push(`## Key Facts
- **Legal entity**: ${settings.legal_name}
- **Location**: ${settings.address}
- **Contact**: ${settings.email}
- **Phone**: ${settings.phone}
- **Founded by**: Tarik Malak
- **Specialty**: Fashion, beauty, luxury, and lifestyle brands
- **Partners**: ${settings.partners.map(p => `${p.name} (${p.url})`).join(', ')}`);

  sections.push(`## Links
- Website: ${settings.url}
${settings.partners.map(p => `- Partner: ${p.url}`).join('\n')}
- Summary (llms.txt): https://maxhpprod.com/llms.txt`);

  const content = sections.join('\n\n');

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
