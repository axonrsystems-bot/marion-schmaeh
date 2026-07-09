"use client";

import { Users, Salad, Building2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const items = [
  { icon: Users, label: "18 Participants Maximum" },
  { icon: Salad, label: "Vegetarian Lunch Included" },
  { icon: Building2, label: "Toronto Loft Venue" },
  { icon: Sparkles, label: "No Previous Experience Needed" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-[color:var(--color-ink)]/8 bg-[color:var(--color-bg-secondary)]/60">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-editorial py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4"
      >
        {items.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <Icon
              size={20}
              strokeWidth={1.5}
              className="shrink-0 text-[color:var(--color-moss-dark)]"
            />
            <span className="text-[13px] leading-snug text-[color:var(--color-ink-soft)]">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
