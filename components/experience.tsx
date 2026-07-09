"use client";

import { Wind, PersonStanding, CircleDashed, NotebookPen } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const items = [
  {
    icon: Wind,
    title: "Breath",
    body: "Practices that help the nervous system settle and create more internal space.",
  },
  {
    icon: PersonStanding,
    title: "Movement",
    body: "Gentle embodied exploration prioritising awareness over performance.",
  },
  {
    icon: CircleDashed,
    title: "Stillness",
    body: "Moments where nothing needs fixing, improving or achieving.",
  },
  {
    icon: NotebookPen,
    title: "Reflection",
    body: "Integration practices that travel home with you.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container-editorial">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-display text-[30px] md:text-[38px] text-center mb-16"
        >
          What you will experience
        </motion.h2>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {items.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="rounded-2xl border border-[color:var(--color-ink)]/8 p-8 transition-all duration-700 hover:shadow-[0_20px_40px_-24px_rgba(43,42,37,0.25)] hover:-translate-y-1"
            >
              <Icon
                size={26}
                strokeWidth={1.4}
                className="text-[color:var(--color-moss-dark)] mb-6"
              />
              <h3 className="font-display text-[20px] mb-3">{title}</h3>
              <p className="text-[14px] leading-relaxed text-[color:var(--color-ink-soft)]">
                {body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
