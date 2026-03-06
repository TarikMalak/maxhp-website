'use client';

import { motion } from 'framer-motion';
import { easeSmooth } from '@/lib/motion';
import type { HeroSection } from '@/lib/types';

export default function Hero({ data }: { data: HeroSection }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-bg-dark">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: easeSmooth }}
          className="mb-12"
        >
          <img
            src="/logo.png"
            alt="Max HP Productions"
            className="mx-auto w-[min(60vw,350px)] invert"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeSmooth, delay: 0.3 }}
          className="mb-4 text-2xl font-extralight tracking-tight text-text-white md:text-3xl"
        >
          {data.headline_line_1}
          <br />
          <span className="text-accent">{data.headline_line_2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeSmooth, delay: 0.5 }}
          className="mx-auto max-w-xl text-sm font-light leading-relaxed text-text-muted md:text-base"
        >
          {data.subtitle}
        </motion.p>
      </div>
    </section>
  );
}
