import { createSingletonRoute } from '@/lib/api-route-helpers';

export const { GET, PUT } = createSingletonRoute('maxhp_site_settings', 'Site settings');
