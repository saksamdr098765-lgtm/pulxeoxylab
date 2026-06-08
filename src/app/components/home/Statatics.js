"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "10,000+",
    label: "Tests processed monthly",
  },
  {
    value: "24–48h",
    label: "Average report turnaround",
  },
  {
    value: "99.6%",
    label: "Result accuracy rate",
  },
  {
    value: "50+",
    label: "Diagnostic parameters covered",
  },
];

export default function Statatics() {
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
            Clinical Performance
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold mt-4">
            Measured in <span className="text-cyan-400">precision</span>, not promises
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl">
            Real operational metrics that reflect diagnostic reliability and lab efficiency.
          </p>
        </motion.div>

        {/* stats row (NOT cards/grid UI kit) */}
        <div className="space-y-4">

          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-between border border-white/10 rounded-xl px-5 py-5 hover:border-cyan-400/40 transition"
            >
              <p className="text-gray-300">{item.label}</p>
              <p className="text-cyan-400 font-semibold text-lg">
                {item.value}
              </p>
            </motion.div>
          ))}

        </div>

        {/* bottom note */}
        <div className="mt-10 text-xs text-gray-600">
          Metrics updated based on internal lab performance tracking
        </div>

      </div>
    </section>
  );
}