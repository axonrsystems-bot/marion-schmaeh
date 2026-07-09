"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function FinalCTA() {
  return (
    <section
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 100% at 50% 0%, #EFEAE0 0%, #C9C2B4 55%, #45503C 100%)",
      }}
    >
      <div className="container-editorial relative text-center">
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-[30px] sm:text-[40px] md:text-[48px] leading-[1.15] text-[color:var(--color-ink)] max-w-2xl mx-auto"
          >
            The world will still be waiting tomorrow.
            <br />
            <span className="italic">
              For one day, you are invited to move differently.
            </span>
          </motion.h2>

          <motion.div variants={fadeUp} className="mt-10">
            <a
              href="#reserve"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-moss-dark)] text-[color:var(--color-bg)] px-8 py-4 text-[15px] tracking-wide transition-transform duration-700 hover:scale-[1.02] hover:bg-[color:var(--color-ink)]"
            >
              Reserve Your Place
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-[13px] text-[color:var(--color-ink-soft)]"
          >
            18 places available · Early bird pricing ends September 15
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
