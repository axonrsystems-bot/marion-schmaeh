"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const items = [
  "Rest feels strangely difficult.",
  "Your mind rarely becomes quiet.",
  "You spend most days responding rather than noticing.",
  "You carry tension you cannot fully explain.",
  "You want to slow down without escaping your life.",
  "You are tired of treating yourself like a project to improve.",
];

export default function WhoThisIsFor() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-display text-[30px] md:text-[38px] text-center max-w-2xl mx-auto mb-16"
        >
          This day may be for you if&hellip;
        </motion.h2>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {items.map((text) => (
            <motion.div
              key={text}
              variants={fadeUp}
              className="group rounded-2xl bg-[color:var(--color-bg-secondary)] p-7 transition-all duration-700 hover:bg-[color:var(--color-stone)]/40 hover:-translate-y-1"
            >
              <p className="text-[16px] leading-relaxed text-[color:var(--color-ink)]">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
