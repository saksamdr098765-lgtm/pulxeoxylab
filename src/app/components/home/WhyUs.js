"use client";

import { motion } from "framer-motion";
import {
  FaFlask,
  FaClock,
  FaShieldAlt,
  FaMicroscope,
  FaUserMd,
} from "react-icons/fa";

const reasons = [
  {
    title: "Accurate reporting",
    desc: "Results verified through multi-stage quality checks",
    icon: FaMicroscope,
  },
  {
    title: "Fast turnaround",
    desc: "Most reports delivered within 24–48 hours",
    icon: FaClock,
  },
  {
    title: "Clinical validation",
    desc: "Reviewed by certified pathologists and lab technicians",
    icon: FaUserMd,
  },
  {
    title: "Secure handling",
    desc: "Strict sample tracking and privacy protection protocols",
    icon: FaShieldAlt,
  },
  {
    title: "Advanced equipment",
    desc: "Automated analyzers for precision-based diagnostics",
    icon: FaFlask,
  },
];

export default function WhyUs() {
  return (
    <section className="w-full bg-[#05070a] text-white py-24 relative overflow-hidden">

      {/* subtle clinical grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:75px_75px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs tracking-[0.35em] text-gray-500 uppercase">
            Trust & Quality
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold mt-4">
            Why patients & doctors <span className="text-cyan-400">trust us</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl">
            Built around accuracy, transparency, and clinical reliability —
            not assumptions or shortcuts.
          </p>
        </motion.div>

        {/* vertical system list (NOT cards/grid) */}
        <div className="space-y-4">

          {reasons.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 border border-white/10 rounded-xl px-5 py-4 hover:border-cyan-400/40 transition group"
              >
                <Icon className="text-cyan-400 text-lg mt-1" />

                <div>
                  <h3 className="font-medium group-hover:text-cyan-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* bottom trust line */}
        <div className="mt-10 text-xs text-gray-600">
          All processes follow standard laboratory quality control protocols
        </div>

      </div>
    </section>
  );
}