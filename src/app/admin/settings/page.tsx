'use client';

import { useState } from 'react';
import AdminShell from '@/components/admin/AdminShell';
import AdminLoading from '@/components/admin/AdminLoading';
import SaveButton from '@/components/admin/SaveButton';
import { adminFetch } from '@/lib/admin-fetch';
import { useAdminData } from '@/hooks/useAdminData';
import { inputClass } from '@/lib/admin-styles';
import { siteSettings } from '@/lib/data';

export default function AdminSettingsPage() {
  const [name, setName] = useState(siteSettings.name);
  const [legalName, setLegalName] = useState(siteSettings.legal_name);
  const [tagline, setTagline] = useState(siteSettings.tagline);
  const [description, setDescription] = useState(siteSettings.description);
  const [email, setEmail] = useState(siteSettings.email);
  const [address, setAddress] = useState(siteSettings.address);
  const [phone, setPhone] = useState(siteSettings.phone);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { loading, error } = useAdminData<any>('/api/admin/settings', (data) => {
    setName(data.name);
    if (data.legal_name) setLegalName(data.legal_name);
    setTagline(data.tagline);
    setDescription(data.description);
    setEmail(data.email);
    setAddress(data.address);
    setPhone(data.phone);
  });

  const handleSave = async () => {
    const res = await adminFetch('/api/admin/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, legal_name: legalName, tagline, description, email, address, phone }),
    });
    if (!res.ok) throw new Error('Save failed');
  };

  if (loading) return <AdminLoading />;

  return (
    <AdminShell>
      {error && (
        <div className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm rounded-md px-4 py-3 mb-6">
          Could not load from database. Showing defaults.
        </div>
      )}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-light text-white">Site Settings</h2>
          <p className="text-sm text-white/40 mt-1">Company info and contact details</p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs tracking-[0.2em] text-white/40 uppercase mb-2">Site Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="block text-xs tracking-[0.2em] text-white/40 uppercase mb-2">Legal Name</label>
              <input type="text" value={legalName} onChange={(e) => setLegalName(e.target.value)} className={inputClass} />
            </div>
          </div>
          <div>
            <label className="block text-xs tracking-[0.2em] text-white/40 uppercase mb-2">Tagline</label>
            <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} className={inputClass} />
          </div>
          <div>
            <label className="block text-xs tracking-[0.2em] text-white/40 uppercase mb-2">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className={`${inputClass} resize-none`} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs tracking-[0.2em] text-white/40 uppercase mb-2">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="block text-xs tracking-[0.2em] text-white/40 uppercase mb-2">Address</label>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="block text-xs tracking-[0.2em] text-white/40 uppercase mb-2">Phone</label>
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
            </div>
          </div>
          <SaveButton onClick={handleSave} label="Save Settings" />
        </div>
      </div>
    </AdminShell>
  );
}
