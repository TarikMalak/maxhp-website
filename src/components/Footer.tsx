import { siteData } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-bg-dark py-8">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-3 px-6 md:flex-row md:justify-between md:px-12">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Max HP Productions"
          className="h-8 w-auto invert"
        />

        {/* Copyright + links */}
        <p className="text-xs font-light text-text-muted">
          &copy; {year} {siteData.legalName}. All rights reserved.
          {' | '}
          {siteData.partners.map((p, i) => (
            <span key={p.url}>
              {i > 0 && ' | '}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-text-white"
              >
                {p.label}
              </a>
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
