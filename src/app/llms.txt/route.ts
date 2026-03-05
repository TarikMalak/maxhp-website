export async function GET() {
  const now = new Date().toISOString().split('T')[0];

  const body = `# Max HP Productions
> Premium production and post-production — lean teams, senior talent, broadcast-level results.

Last updated: ${now}

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
- Partner: https://s77.ai
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
