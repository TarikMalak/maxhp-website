import type { SiteSettings } from '@/lib/types';

export default function Footer({ settings }: { settings: SiteSettings }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-bg-dark py-8">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-3 px-6 md:flex-row md:justify-between md:px-12">
        <img src="/logo.png" alt="Max HP Productions" className="h-8 w-auto invert" />
        <p className="text-xs font-light text-text-muted">
          &copy; {year} {settings.legal_name}. All rights reserved.
          {' | '}
          {settings.partners.map((p, i) => (
            <span key={p.url}>
              {i > 0 && ' | '}
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-text-white">
                {p.label}
              </a>
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
