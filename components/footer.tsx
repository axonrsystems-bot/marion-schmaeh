import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-14 border-t border-[color:var(--color-ink)]/8">
      <div className="container-editorial flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-[17px] text-[color:var(--color-ink)]">
            Marion Schmaeh
          </p>
          <p className="text-[13px] text-[color:var(--color-ink-soft)] mt-1">
            Embodied Awareness · Toronto, Canada
          </p>
        </div>

        <nav className="flex items-center gap-6 text-[13px] text-[color:var(--color-ink-soft)]">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[color:var(--color-ink)] transition-colors duration-500"
          >
            <Instagram size={16} strokeWidth={1.5} /> Instagram
          </a>
          <a
            href="mailto:hello@marionschmaeh.com"
            className="inline-flex items-center gap-2 hover:text-[color:var(--color-ink)] transition-colors duration-500"
          >
            <Mail size={16} strokeWidth={1.5} /> Email
          </a>
          <a
            href="#reserve"
            className="hover:text-[color:var(--color-ink)] transition-colors duration-500"
          >
            Newsletter
          </a>
        </nav>
      </div>
    </footer>
  );
}
