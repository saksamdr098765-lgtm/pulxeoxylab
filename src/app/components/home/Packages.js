"use client";

import { motion } from "framer-motion";
import { FaVial, FaHeartbeat, FaTint, FaMicroscope } from "react-icons/fa";

const packages = [
  {
    title: "Basic Health Checkup",
    desc: "Essential screening for overall health monitoring",
    icon: FaVial,
    tests: "35+ parameters",
  },
  {
    title: "Complete Blood Count (CBC)",
    desc: "Detailed blood composition analysis",
    icon: FaTint,
    tests: "15+ parameters",
  },
  {
    title: "Diabetes Screening",
    desc: "Glucose and long-term sugar control profile",
    icon: FaHeartbeat,
    tests: "Fasting + HbA1c",
  },
  {
    title: "Advanced Diagnostic Panel",
    desc: "Comprehensive metabolic and organ function tests",
    icon: FaMicroscope,
    tests: "60+ parameters",
  },
];

export default function Packages() {
  return (
    <section className="w-full bg-[#05070a] text-white py-24 relative overflow-hidden">

      {/* subtle medical grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs tracking-[0.35em] text-gray-500 uppercase">
            Diagnostic Packages
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold mt-4">
            Preventive care made{" "}
            <span className="text-cyan-400">simple</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl">
            Structured health packages designed for early detection,
            routine monitoring, and complete diagnostic clarity.
          </p>
        </motion.div>

        {/* list (NOT cards grid style) */}
        <div className="space-y-4">

          {packages.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between border border-white/10 rounded-xl px-5 py-4 hover:border-cyan-400/40 transition group"
              >

                {/* left */}
                <div className="flex items-center gap-4">
                  <Icon className="text-cyan-400 text-lg" />

                  <div>
                    <h3 className="font-medium group-hover:text-cyan-400 transition">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* right meta */}
                <div className="text-right">
                  <p className="text-sm text-white">{item.tests}</p>
                  <p className="text-xs text-gray-500">included</p>
                </div>

              </motion.div>
            );
          })}

        </div>

        {/* bottom CTA */}
        <div className="mt-12 flex justify-between items-center flex-wrap gap-4">
          <p className="text-gray-500 text-sm">
            All packages are customizable based on doctor recommendation
          </p>

          <button className="text-cyan-400 text-sm flex items-center gap-2 hover:gap-3 transition">
            View full test menu →
          </button>
        </div>

      </div>
    </section>
  );
}