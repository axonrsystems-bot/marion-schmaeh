"use client";

import { motion } from "framer-motion";
import AtelierFrame from "./atelier-frame";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden"
    >
      {/* decorative breathing circles */}
      <div
        aria-hidden
        className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-40 animate-[breathe_9s_ease-in-out_infinite]"
        style={{ background: "var(--color-stone)" }}
      />
      <div
        aria-hidden
        className="absolute top-1/3 -right-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-30 animate-[breathe_11s_ease-in-out_infinite]"
        style={{ background: "var(--color-clay)" }}
      />

      <div className="container-editorial relative grid md:grid-cols-2 gap-14 md:gap-10 items-center">
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="text-[13px] tracking-[0.14em] uppercase text-[color:var(--color-moss-dark)] mb-6"
          >
            Toronto · Embodied Awareness · Retreat Experience
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-[42px] leading-[1.12] sm:text-[52px] md:text-[58px] font-normal text-[color:var(--color-ink)]"
          >
            Step out of urgency.
            <br />
            <span className="italic text-[color:var(--color-moss-dark)]">
              Return to yourself.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 text-[17px] leading-relaxed text-[color:var(--color-ink-soft)] max-w-md"
          >
            A one-day immersive retreat of breath, gentle movement, stillness
            and reflection for people seeking a different relationship with
            time, attention and themselves.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#reserve"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-moss-dark)] text-[color:var(--color-bg)] px-7 py-3.5 text-[15px] tracking-wide transition-transform duration-700 hover:scale-[1.02] hover:bg-[color:var(--color-moss)]"
            >
              Reserve Your Place
            </a>
            <a
              href="#schedule"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-ink)]/15 px-7 py-3.5 text-[15px] tracking-wide text-[color:var(--color-ink)] transition-colors duration-700 hover:bg-[color:var(--color-bg-secondary)]"
            >
              View The Schedule
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-[color:var(--color-ink-soft)]"
          >
            <span>18 places only</span>
            <span>Toronto loft venue</span>
            <span>Lunch included</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative rounded-[28px] aspect-[4/5] shadow-[0_30px_60px_-20px_rgba(43,42,37,0.25)] animate-[float_7s_ease-in-out_infinite]">
            <AtelierFrame
              variant="portrait"
              className="w-full h-full rounded-[28px]"
              label="Portrait of Marion Schmaeh in soft window light"
            />
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.08); opacity: 0.45; }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[float_7s_ease-in-out_infinite\\],
          .animate-\\[breathe_9s_ease-in-out_infinite\\],
          .animate-\\[breathe_11s_ease-in-out_infinite\\] {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
