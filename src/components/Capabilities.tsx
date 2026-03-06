'use client';

import { motion } from 'framer-motion';
import { easeSmooth } from '@/lib/motion';
import type { Capability } from '@/lib/types';

export default function Capabilities({ items }: { items: Capability[] }) {
  return (
    <section id="capabilities" className="bg-bg-light py-32 md:py-48">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: easeSmooth }}
          className="mb-20"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Capabilities
          </p>
          <h2 className="text-4xl font-extralight tracking-tight text-text-dark md:text-5xl">
            What we deliver.
          </h2>
        </motion.div>

        <div className="space-y-24">
          {items.map((cap, i) => (
            <motion.article
              key={cap.id}
              id={cap.title.toLowerCase().replace(/\s+/g, '-')}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: easeSmooth, delay: i * 0.1 }}
              className="grid gap-8 md:grid-cols-[120px_1fr]"
            >
              <div className="text-6xl font-extralight text-accent/40 md:text-7xl">
                {String(cap.sort_order).padStart(2, '0')}
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-light text-text-dark md:text-3xl">{cap.title}</h3>
                <p className="mb-4 text-base font-medium text-accent">{cap.subtitle}</p>
                <p className="max-w-2xl text-base font-light leading-relaxed text-text-muted">{cap.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
