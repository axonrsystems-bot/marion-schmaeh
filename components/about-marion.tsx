"use client";

import { motion } from "framer-motion";
import AtelierFrame from "./atelier-frame";
import { fadeUp, revealImage, staggerContainer, viewportOnce } from "@/lib/motion";

const credentials = [
  "10+ years experience",
  "300+ participants guided",
  "Retreat facilitator",
  "Toronto based",
];

export default function AboutMarion() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[color:var(--color-bg-secondary)]/50">
      <div className="container-editorial grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          variants={revealImage}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative aspect-[4/5] rounded-[24px] overflow-hidden order-2 md:order-1"
        >
          <AtelierFrame
            variant="ritual"
            className="w-full h-full"
            label="Marion Schmaeh, natural expression, soft light"
          />
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="order-1 md:order-2"
        >
          <motion.h2 variants={fadeUp} className="font-display text-[32px] md:text-[40px] mb-6">
            Meet Marion
          </motion.h2>

          <motion.p variants={fadeUp} className="text-[16px] leading-relaxed text-[color:var(--color-ink-soft)] mb-4">
            For more than a decade, Marion has explored the intersection of
            contemplative practice, embodiment and nervous system awareness.
          </motion.p>

          <motion.p variants={fadeUp} className="text-[16px] leading-relaxed text-[color:var(--color-ink-soft)] mb-4">
            Her work draws from meditation traditions, somatic practices and
            contemporary understandings of how safety and attention shape our
            experience of ourselves.
          </motion.p>

          <motion.p variants={fadeUp} className="text-[16px] leading-relaxed text-[color:var(--color-ink-soft)] mb-8">
            Rather than teaching people how to become someone new, she creates
            spaces where they can rediscover what is already present beneath
            urgency and habit.
          </motion.p>

          <motion.dl variants={fadeUp} className="grid grid-cols-2 gap-x-6 gap-y-5">
            {credentials.map((c) => (
              <div key={c} className="flex items-start gap-2">
                <span aria-hidden className="mt-2 w-1 h-1 rounded-full bg-[color:var(--color-moss-dark)] shrink-0" />
                <dd className="text-[14px] text-[color:var(--color-ink)]">{c}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
