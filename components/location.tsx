"use client";

import { motion } from "framer-motion";
import { MapPin, Car, TrainFront, Accessibility } from "lucide-react";
import AtelierFrame from "./atelier-frame";
import { fadeUp, revealImage, staggerContainer, viewportOnce } from "@/lib/motion";

export default function Location() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial">
        <motion.div
          variants={revealImage}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative h-[38vh] md:h-[46vh] rounded-[24px] overflow-hidden mb-14"
        >
          <AtelierFrame
            variant="loft"
            className="w-full h-full"
            label="Light-filled loft interior in downtown Toronto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-2xl bg-[color:var(--color-bg-secondary)] p-8 flex flex-col items-start justify-center gap-4 min-h-[220px]"
          >
            <MapPin size={22} strokeWidth={1.5} className="text-[color:var(--color-moss-dark)]" />
            <p className="text-[15px] text-[color:var(--color-ink)]">
              300 King Street East, Toronto, Ontario, Canada
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=300+King+Street+East+Toronto+Ontario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] underline underline-offset-4 text-[color:var(--color-moss-dark)]"
            >
              Open in Google Maps
            </a>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2 variants={fadeUp} className="font-display text-[28px] md:text-[34px] mb-2">
              SPACE on King
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[15px] text-[color:var(--color-ink-soft)] mb-6">
              300 King Street East, Toronto, Ontario
            </motion.p>
            <motion.p variants={fadeUp} className="text-[16px] leading-relaxed text-[color:var(--color-ink-soft)] mb-8">
              A light-filled loft space in downtown Toronto chosen for its
              warmth, quietness and natural light.
            </motion.p>

            <motion.ul variants={staggerContainer(0.08)} className="space-y-4">
              <motion.li variants={fadeUp} className="flex items-start gap-3 text-[14px] text-[color:var(--color-ink)]">
                <Car size={18} strokeWidth={1.5} className="text-[color:var(--color-moss-dark)] mt-0.5 shrink-0" />
                Paid lot parking is available directly behind the building.
              </motion.li>
              <motion.li variants={fadeUp} className="flex items-start gap-3 text-[14px] text-[color:var(--color-ink)]">
                <TrainFront size={18} strokeWidth={1.5} className="text-[color:var(--color-moss-dark)] mt-0.5 shrink-0" />
                A five minute walk from King Street East streetcar stops.
              </motion.li>
              <motion.li variants={fadeUp} className="flex items-start gap-3 text-[14px] text-[color:var(--color-ink)]">
                <Accessibility size={18} strokeWidth={1.5} className="text-[color:var(--color-moss-dark)] mt-0.5 shrink-0" />
                Step-free entrance and accessible washrooms on site.
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
