import Hero from '@/components/Hero';
import Capabilities from '@/components/Capabilities';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { OrganizationJsonLd, WebSiteJsonLd, ServiceJsonLd } from '@/components/JsonLd';

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <ServiceJsonLd />
      <main>
        <Hero />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
