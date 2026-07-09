"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function Reserve() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: replace with a redirect to your Stripe Checkout Session
    // or Systeme.io order form URL, e.g.:
    // window.location.href = "https://checkout.stripe.com/pay/...";
    setStatus("submitted");
  }

  return (
    <section id="reserve" className="py-24 md:py-32 bg-[color:var(--color-bg-secondary)]/50">
      <div className="container-editorial grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2 variants={fadeUp} className="font-display text-[30px] md:text-[38px] mb-6">
            Autumn Day of Presence
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[15px] text-[color:var(--color-ink-soft)] mb-8">
            Saturday, October 18, 2026 · 9:30 AM &ndash; 5:00 PM
            <br />
            SPACE on King, Toronto
          </motion.p>

          <motion.div variants={fadeUp} className="rounded-2xl bg-[color:var(--color-bg)] p-7 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-[color:var(--color-ink-soft)]">Early Bird</span>
              <span className="font-display text-[22px] text-[color:var(--color-ink)]">$145 CAD</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-[color:var(--color-ink-soft)]">Regular</span>
              <span className="font-display text-[22px] text-[color:var(--color-ink)]">$195 CAD</span>
            </div>
            <p className="text-[13px] text-[color:var(--color-ink-soft)] pt-2 border-t border-[color:var(--color-ink)]/8">
              18 places available · early bird pricing ends September 15
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {status === "submitted" ? (
            <div className="rounded-2xl bg-[color:var(--color-bg)] p-8 text-center">
              <p className="font-display italic text-[20px] mb-2">
                Thank you.
              </p>
              <p className="text-[15px] text-[color:var(--color-ink-soft)]">
                We&apos;ve received your details and will follow up shortly to
                confirm payment and your place.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl bg-[color:var(--color-bg)] p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-[13px] text-[color:var(--color-ink-soft)] mb-2">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-[color:var(--color-ink)]/15 bg-transparent px-4 py-3 text-[15px] text-[color:var(--color-ink)] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--color-moss-dark)]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[13px] text-[color:var(--color-ink-soft)] mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-[color:var(--color-ink)]/15 bg-transparent px-4 py-3 text-[15px] text-[color:var(--color-ink)] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--color-moss-dark)]"
                />
              </div>
              <div>
                <label htmlFor="notes" className="block text-[13px] text-[color:var(--color-ink-soft)] mb-2">
                  Dietary notes or accessibility needs (optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className="w-full rounded-lg border border-[color:var(--color-ink)]/15 bg-transparent px-4 py-3 text-[15px] text-[color:var(--color-ink)] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--color-moss-dark)]"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[color:var(--color-moss-dark)] text-[color:var(--color-bg)] px-7 py-3.5 text-[15px] tracking-wide transition-transform duration-700 hover:scale-[1.01] hover:bg-[color:var(--color-moss)]"
              >
                Continue to Reserve Your Place
              </button>
              <p className="text-[12px] text-center text-[color:var(--color-ink-soft)]">
                You will be redirected to a secure checkout to complete payment.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
