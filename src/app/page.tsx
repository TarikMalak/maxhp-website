import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Capabilities from '@/components/Capabilities';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { OrganizationJsonLd, WebSiteJsonLd, ServiceJsonLd } from '@/components/JsonLd';
import { getSiteSettings, getHero, getCapabilities } from '@/lib/api';

export default async function Home() {
  const [settings, hero, capabilities] = await Promise.all([
    getSiteSettings(),
    getHero(),
    getCapabilities(),
  ]);

  return (
    <>
      <OrganizationJsonLd settings={settings} capabilities={capabilities} />
      <WebSiteJsonLd settings={settings} />
      <ServiceJsonLd capabilities={capabilities} />
      <Nav />
      <main>
        <Hero data={hero} />
        <Capabilities items={capabilities} />
        <Contact settings={settings} />
      </main>
      <Footer settings={settings} />
    </>
  );
}
