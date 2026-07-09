"use client";

import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Do I need experience?",
    a: "No. This day is designed for people arriving with no previous meditation, breathwork or movement experience, as well as those who already have a practice.",
  },
  {
    q: "What should I bring?",
    a: "Comfortable clothing you can move in, and anything that helps you feel at ease. Mats, cushions and tea are provided.",
  },
  {
    q: "What if I have mobility limitations?",
    a: "All movement is optional and adaptable. Please let us know in advance so we can prepare the space accordingly.",
  },
  {
    q: "Is lunch included?",
    a: "Yes, a seasonal vegetarian lunch is included in your ticket. Please note any allergies when you reserve your place.",
  },
  {
    q: "Can I cancel?",
    a: "Full refunds are available up to 14 days before the retreat. After that, your place can be transferred to someone else.",
  },
  {
    q: "Is parking available?",
    a: "Paid lot parking is available directly behind the venue, and the space is a short walk from public transit.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="border-b border-[color:var(--color-ink)]/10 py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full flex items-center justify-between text-left gap-4"
      >
        <span className="text-[16px] text-[color:var(--color-ink)]">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[color:var(--color-moss-dark)] transition-transform duration-500 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-[15px] leading-relaxed text-[color:var(--color-ink-soft)]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial max-w-2xl">
        <h2 className="font-display text-[30px] md:text-[38px] text-center mb-14">
          Questions before you arrive
        </h2>
        <div>
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
