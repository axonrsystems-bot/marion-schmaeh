"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const stops = [
  { time: "9:30", label: "Arrival and tea." },
  { time: "10:00", label: "Grounding practice and breath." },
  { time: "11:15", label: "Gentle movement session." },
  { time: "12:30", label: "Seasonal vegetarian lunch." },
  { time: "1:30", label: "Silent reflection and walking practice." },
  { time: "3:00", label: "Group inquiry and embodied awareness session." },
  { time: "4:15", label: "Closing integration practice." },
  { time: "5:00", label: "Departure." },
];

export default function Timeline() {
  return (
    <section id="schedule" className="py-24 md:py-32 bg-[color:var(--color-bg-secondary)]/50">
      <div className="container-editorial max-w-2xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-display text-[30px] md:text-[38px] text-center mb-16"
        >
          The day, unhurried
        </motion.h2>

        <motion.ol
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative border-l border-[color:var(--color-ink)]/12 pl-8 space-y-10"
        >
          {stops.map((stop) => (
            <motion.li key={stop.time} variants={fadeUp} className="relative">
              <span
                aria-hidden
                className="absolute -left-[calc(2rem+4px)] top-1.5 w-2 h-2 rounded-full bg-[color:var(--color-moss-dark)]"
              />
              <span className="font-display text-[18px] text-[color:var(--color-moss-dark)]">
                {stop.time}
              </span>
              <p className="mt-1 text-[16px] text-[color:var(--color-ink)]">
                {stop.label}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 text-center"
        >
          <a
            href="#reserve"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-moss-dark)] text-[color:var(--color-bg)] px-7 py-3.5 text-[15px] tracking-wide transition-transform duration-700 hover:scale-[1.02] hover:bg-[color:var(--color-moss)]"
          >
            Reserve Your Place
          </a>
        </motion.div>
      </div>
    </section>
  );
}
