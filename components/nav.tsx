"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#schedule", label: "Schedule" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#reserve", label: "Reserve" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="container-editorial pt-4 md:pt-6">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-700 ${
            scrolled
              ? "bg-[color:var(--color-bg)]/70 backdrop-blur-md shadow-[0_1px_0_0_rgba(43,42,37,0.06)]"
              : "bg-transparent"
          }`}
        >
          <a
            href="#top"
            className="font-display text-[17px] tracking-wide text-[color:var(--color-ink)]"
          >
            Marion Schmaeh
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)] transition-colors duration-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-2 text-[color:var(--color-ink)]"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden mt-2 rounded-2xl bg-[color:var(--color-bg)]/95 backdrop-blur-md px-6 py-5 flex flex-col gap-4 shadow-sm"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[15px] text-[color:var(--color-ink-soft)]"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
