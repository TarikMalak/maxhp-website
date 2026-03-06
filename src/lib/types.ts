export interface SiteSettings {
  id: string;
  name: string;
  legal_name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  address: string;
  phone: string;
  partners: { name: string; dba?: string; url: string; label: string }[];
  google_site_name: string;
  site_name: string;
  seo_title: string;
  seo_description: string;
  seo_og_image_url: string;
  seo_keywords: string;
  llms_content: string;
  updated_at: string;
}

export interface HeroSection {
  id: string;
  headline_line_1: string;
  headline_line_2: string;
  subtitle: string;
  updated_at: string;
}

export interface Capability {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  sort_order: number;
  updated_at: string;
}
