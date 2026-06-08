"use client";

import { motion } from "framer-motion";
import {
  FaTint,
  FaHeartbeat,
  FaMicroscope,
  FaLungs,
  FaSyringe,
  FaBone,
} from "react-icons/fa";

const categories = [
  {
    title: "Hematology",
    desc: "Blood-related disorders & complete blood profiling",
    icon: FaTint,
  },
  {
    title: "Biochemistry",
    desc: "Metabolic, organ function & chemical analysis",
    icon: FaMicroscope,
  },
  {
    title: "Cardiac Profile",
    desc: "Heart health markers & risk assessment",
    icon: FaHeartbeat,
  },
  {
    title: "Immunology",
    desc: "Immune response & infection detection",
    icon: FaSyringe,
  },
  {
    title: "Respiratory Testing",
    desc: "Lung function & oxygen-related diagnostics",
    icon: FaLungs,
  },
  {
    title: "Bone & Mineral",
    desc: "Calcium, vitamin D & bone health evaluation",
    icon: FaBone,
  },
];

export default function DiagnosticCategories() {
  return (
    <section className="w-full bg-[#05070a] text-white py-24 relative overflow-hidden">

      {/* subtle clinical grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs tracking-[0.35em] text-gray-500 uppercase">
            Diagnostic Coverage
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold mt-4">
            Core <span className="text-cyan-400">diagnostic domains</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl">
            Structured testing areas covering preventive screening, disease detection,
            and organ-specific analysis.
          </p>
        </motion.div>

        {/* category stream (NOT grid cards) */}
        <div className="space-y-3">

          {categories.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between px-5 py-4 border border-white/10 rounded-xl hover:border-cyan-400/40 transition group"
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

                {/* right subtle tag */}
                <div className="text-xs text-gray-500">
                  active domain
                </div>

              </motion.div>
            );
          })}

        </div>

        {/* bottom system note */}
        <div className="mt-10 text-xs text-gray-600">
          Coverage may vary based on clinical requirements and physician recommendation
        </div>

      </div>
    </section>
  );
}