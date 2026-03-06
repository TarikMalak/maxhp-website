'use client';

import { useState } from 'react';
import AdminShell from '@/components/admin/AdminShell';
import AdminLoading from '@/components/admin/AdminLoading';
import SaveButton from '@/components/admin/SaveButton';
import CollapsibleSection from '@/components/admin/CollapsibleSection';
import { adminFetch } from '@/lib/admin-fetch';
import { useAdminData } from '@/hooks/useAdminData';
import { inputClass } from '@/lib/admin-styles';
import { heroSection, capabilities as seedCapabilities } from '@/lib/data';
import type { Capability } from '@/lib/types';

export default function AdminContentPage() {
  const [line1, setLine1] = useState(heroSection.headline_line_1);
  const [line2, setLine2] = useState(heroSection.headline_line_2);
  const [subtitle, setSubtitle] = useState(heroSection.subtitle);
  const [capList, setCapList] = useState<Capability[]>(seedCapabilities);

  const { loading: heroLoading } = useAdminData<{ headline_line_1: string; headline_line_2: string; subtitle: string }>(
    '/api/admin/hero',
    (data) => {
      setLine1(data.headline_line_1);
      setLine2(data.headline_line_2);
      setSubtitle(data.subtitle);
    },
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { loading: capLoading } = useAdminData<any>(
    '/api/admin/capabilities',
    (data) => {
      if (data.capabilities) setCapList(data.capabilities);
    },
  );

  const loading = heroLoading || capLoading;

  const updateCap = (index: number, field: keyof Capability, value: string) => {
    setCapList((prev) => prev.map((c, i) => (i === index ? { ...c, [field]: value } : c)));
  };

  const handleSaveHero = async () => {
    const res = await adminFetch('/api/admin/hero', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ headline_line_1: line1, headline_line_2: line2, subtitle }),
    });
    if (!res.ok) throw new Error('Save failed');
  };

  const handleSaveCaps = async () => {
    const res = await adminFetch('/api/admin/capabilities', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ capabilities: capList }),
    });
    if (!res.ok) throw new Error('Save failed');
  };

  if (loading) return <AdminLoading />;

  return (
    <AdminShell>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-light text-white">Content Editor</h2>
          <p className="text-sm text-white/40 mt-1">Edit all text content on the Max HP website</p>
        </div>

        <CollapsibleSection title="Hero Section" subtitle="Headline and subtitle" defaultOpen>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs tracking-[0.2em] text-white/40 uppercase mb-2">Headline Line 1</label>
                <input type="text" value={line1} onChange={(e) => setLine1(e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] text-white/40 uppercase mb-2">Headline Line 2</label>
                <input type="text" value={line2} onChange={(e) => setLine2(e.target.value)} className={inputClass} />
              </div>
            </div>
            <div>
              <label className="block text-xs tracking-[0.2em] text-white/40 uppercase mb-2">Subtitle</label>
              <textarea value={subtitle} onChange={(e) => setSubtitle(e.target.value)} rows={3} className={`${inputClass} resize-none`} />
            </div>
            <SaveButton onClick={handleSaveHero} label="Save Hero" />
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Capabilities" subtitle="The three core capability areas" defaultOpen>
          <div className="space-y-6">
            {capList.map((cap, i) => (
              <div key={cap.id} className="border border-white/5 rounded-lg p-4 space-y-3">
                <p className="text-xs text-white/30 uppercase tracking-wider">Capability {i + 1}</p>
                <div>
                  <label className="block text-xs tracking-[0.2em] text-white/40 uppercase mb-1">Title</label>
                  <input type="text" value={cap.title} onChange={(e) => updateCap(i, 'title', e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] text-white/40 uppercase mb-1">Subtitle</label>
                  <input type="text" value={cap.subtitle} onChange={(e) => updateCap(i, 'subtitle', e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] text-white/40 uppercase mb-1">Description</label>
                  <textarea value={cap.description} onChange={(e) => updateCap(i, 'description', e.target.value)} rows={4} className={`${inputClass} resize-none`} />
                </div>
              </div>
            ))}
            <SaveButton onClick={handleSaveCaps} label="Save Capabilities" />
          </div>
        </CollapsibleSection>
      </div>
    </AdminShell>
  );
}
