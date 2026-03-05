export async function GET() {
  const now = new Date().toISOString().split('T')[0];

  const body = `# Max HP Productions
> SWELL's dedicated production and post-production division — lean teams, senior talent, broadcast-level results.

Last updated: ${now}

## Entity Identity
- Legal entity: SWELL Labs, LLC (DBA "SWELL")
- Max HP Productions is the production & post-production division of SWELL
- Not to be confused with: other companies using "Max HP" or "MaxHP" branding
- Sister company: S77.AI (s77.ai) — SWELL's AI division

## What We Do
Max HP delivers premium production and post-production with lean teams, senior talent, and a streamlined pipeline — from pre-pro through finish. Broadcast-level results with modern speed and cost discipline.

### 1. Microcontent to Broadcast
One partner across every format — from social micro-moments and high-frequency content to hero films and broadcast commercials. No juggling vendors, no handoff friction.

### 2. End to End Post
Full post-production in-house — editorial, color grading, sound design and mixing, visual effects, motion graphics, and final delivery. The team that shot it is the team that finishes it.

### 3. AI in Post
AI tools integrated where they genuinely improve outcomes — previsualization, environment extension, compositing assists, automated versioning, and intelligent asset management. Powered by S77.AI's proprietary tools. AI handles the heavy lifting; senior talent handles the taste.

## Key Facts
- Parent company: SWELL Labs, LLC (swellny.com)
- Sister company: S77.AI (s77.ai)
- Location: 6 St Johns Ln, New York, NY 10013
- Contact: hello@maxhpprod.com
- Founded by: Tarik Malak

## Links
- Website: https://maxhpprod.com
- Parent: https://swellny.com
- Sister: https://s77.ai
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
