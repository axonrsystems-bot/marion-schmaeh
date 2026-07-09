"use client";

import { motion } from "framer-motion";
import AtelierFrame from "./atelier-frame";
import { revealImage, fadeIn, viewportOnce } from "@/lib/motion";

export default function AtmosphericBanner() {
  return (
    <motion.section
      variants={revealImage}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative h-[45vh] md:h-[70vh] w-full overflow-hidden"
    >
      <AtelierFrame
        variant="tea"
        className="absolute inset-0 w-full h-full"
        label="Hands holding a cup of tea in morning light"
      />
      <div className="absolute inset-0 bg-[color:var(--color-ink)]/20" />
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-display italic text-center text-[24px] sm:text-[30px] md:text-[36px] leading-snug text-[color:var(--color-bg)] max-w-2xl"
        >
          Nothing here asks anything of you.
          <br />
          You may simply arrive.
        </motion.p>
      </div>
    </motion.section>
  );
}
