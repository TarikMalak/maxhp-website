export async function GET() {
  const body = `User-agent: *
Allow: /
Disallow: /admin

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: Bytespider
Allow: /

Sitemap: https://maxhpprod.com/sitemap.xml
LLMs: https://maxhpprod.com/llms.txt
LLMs-Full: https://maxhpprod.com/llms-full.txt
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
