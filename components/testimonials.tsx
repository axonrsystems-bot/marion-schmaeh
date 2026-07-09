"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "For the first time in months, I felt no pressure to become someone else before I could rest.",
    name: "Sarah M.",
    place: "Toronto",
  },
  {
    quote: "I left feeling quieter, clearer and somehow more like myself.",
    name: "Daniel R.",
    place: "Toronto",
  },
  {
    quote: "The experience stayed with me long after the day ended.",
    name: "Emma T.",
    place: "Mississauga",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-[color:var(--color-bg-secondary)]/50"
    >
      <div className="container-editorial max-w-2xl">
        <h2 className="font-display text-[30px] md:text-[38px] text-center mb-16">
          Words from those who came
        </h2>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials"
          className="relative min-h-[220px] flex flex-col items-center justify-center text-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              aria-live="polite"
            >
              <p className="font-display italic text-[22px] md:text-[26px] leading-snug text-[color:var(--color-ink)]">
                &ldquo;{testimonials[index].quote}&rdquo;
              </p>
              <p className="mt-6 text-[14px] text-[color:var(--color-ink-soft)]">
                {testimonials[index].name} · {testimonials[index].place}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center gap-6">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="p-2 rounded-full border border-[color:var(--color-ink)]/12 text-[color:var(--color-ink)] hover:bg-[color:var(--color-bg)] transition-colors duration-500"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
                    i === index
                      ? "bg-[color:var(--color-moss-dark)]"
                      : "bg-[color:var(--color-ink)]/15"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="p-2 rounded-full border border-[color:var(--color-ink)]/12 text-[color:var(--color-ink)] hover:bg-[color:var(--color-bg)] transition-colors duration-500"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
