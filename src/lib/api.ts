import { isSupabaseConfigured, getSupabaseAdmin } from './supabase';
import type { SiteSettings, HeroSection, Capability } from './types';
import * as seed from './data';

export async function getSiteSettings(): Promise<SiteSettings> {
  if (isSupabaseConfigured) {
    try {
      const { data } = await getSupabaseAdmin()
        .from('maxhp_site_settings')
        .select('*')
        .limit(1)
        .single();
      if (data) return data as SiteSettings;
    } catch { /* fallback */ }
  }
  return seed.siteSettings;
}

export async function getHero(): Promise<HeroSection> {
  if (isSupabaseConfigured) {
    try {
      const { data } = await getSupabaseAdmin()
        .from('maxhp_hero')
        .select('*')
        .limit(1)
        .single();
      if (data) return data as HeroSection;
    } catch { /* fallback */ }
  }
  return seed.heroSection;
}

export async function getCapabilities(): Promise<Capability[]> {
  if (isSupabaseConfigured) {
    try {
      const { data } = await getSupabaseAdmin()
        .from('maxhp_capabilities')
        .select('*')
        .order('sort_order', { ascending: true });
      if (data?.length) return data as Capability[];
    } catch { /* fallback */ }
  }
  return seed.capabilities;
}
