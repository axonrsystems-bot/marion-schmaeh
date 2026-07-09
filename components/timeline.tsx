"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

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
    <section
      id="schedule"
      className="py-24 md:py-32 bg-[color:var(--color-bg-secondary)]/50 overflow-hidden"
    >
      <div className="container-editorial">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-display text-[30px] md:text-[38px] text-center mb-24"
        >
          The day, unhurried
        </motion.h2>

        <div className="relative hidden lg:block h-[420px]">
          {/* Wave */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1400 420"
            preserveAspectRatio="none"
          >
            <motion.path
              d="
                M 50 210
                C 150 110, 250 110, 350 210
                S 550 310, 650 210
                S 850 110, 950 210
                S 1150 310, 1250 210
                S 1350 110, 1450 210
              "
              fill="none"
              stroke="var(--color-moss-dark)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.35"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={viewportOnce}
              transition={{
                duration: 2.4,
                ease: "easeInOut",
              }}
            />
          </svg>

          {stops.map((stop, index) => {
            const top = index % 2 === 0;
            const left = `${index * 13 + 4}%`;

            return (
              <motion.div
                key={stop.time}
                initial={{
                  opacity: 0,
                  y: top ? 30 : -30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={viewportOnce}
                transition={{
                  delay: 0.4 + index * 0.2,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute"
                style={{
                  left,
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Above wave */}
                {top && (
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center w-[170px]">
                    <div className="font-display text-[22px] text-[color:var(--color-moss-dark)]">
                      {stop.time}
                    </div>

                    <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-ink)]">
                      {stop.label}
                    </p>
                  </div>
                )}

                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewportOnce}
                  transition={{
                    delay: 0.6 + index * 0.2,
                    duration: 0.5,
                  }}
                  className="
                    w-5 h-5 rounded-full
                    bg-[color:var(--color-moss-dark)]
                    border-4 border-[color:var(--color-bg)]
                    shadow-lg
                  "
                />

                {/* Below wave */}
                {!top && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center w-[170px]">
                    <div className="font-display text-[22px] text-[color:var(--color-moss-dark)]">
                      {stop.time}
                    </div>

                    <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-ink)]">
                      {stop.label}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile fallback */}
        <div className="lg:hidden max-w-xl mx-auto space-y-8">
          {stops.map((stop, index) => (
            <motion.div
              key={stop.time}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{
                delay: index * 0.08,
                duration: 0.8,
              }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[color:var(--color-moss-dark)] mt-2" />
                {index !== stops.length - 1 && (
                  <div className="w-px flex-1 bg-[color:var(--color-ink)]/10 mt-2" />
                )}
              </div>

              <div>
                <div className="font-display text-[20px] text-[color:var(--color-moss-dark)]">
                  {stop.time}
                </div>

                <p className="text-[15px] text-[color:var(--color-ink)] mt-1">
                  {stop.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-24 text-center"
        >
          <a
            href="#reserve"
            className="
              inline-flex items-center justify-center
              rounded-full
              bg-[color:var(--color-moss-dark)]
              text-[color:var(--color-bg)]
              px-7 py-3.5
              text-[15px]
              tracking-wide
              transition-transform duration-700
              hover:scale-[1.02]
              hover:bg-[color:var(--color-moss)]
            "
          >
            Reserve Your Place
          </a>
        </motion.div>
      </div>
    </section>
  );
}