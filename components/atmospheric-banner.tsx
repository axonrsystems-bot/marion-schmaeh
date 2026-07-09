"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/third.jpg"
          alt="Hands holding a cup of tea in morning light"
          fill
          priority={false}
          sizes="100vw"
          className="
            object-cover
            scale-[1.02]
            transition-transform
            duration-[8000ms]
            ease-out
            hover:scale-[1.05]
          "
        />
      </div>

      {/* Cinematic overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(43,42,37,0.15) 0%,
              rgba(43,42,37,0.22) 45%,
              rgba(43,42,37,0.38) 100%
            )
          `,
        }}
      />

      {/* Warm vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 180px rgba(43,42,37,0.18)",
        }}
      />

      {/* Optional grain */}
      <div className="noise-overlay absolute inset-0 opacity-[0.04]" />

      {/* Quote */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="
            font-display italic
            text-center
            text-[24px]
            sm:text-[30px]
            md:text-[36px]
            leading-snug
            text-[color:var(--color-bg)]
            max-w-2xl
            drop-shadow-[0_2px_20px_rgba(0,0,0,0.25)]
          "
        >
          Nothing here asks anything of you.
          <br />
          You may simply arrive.
        </motion.p>
      </div>
    </motion.section>
  );
}