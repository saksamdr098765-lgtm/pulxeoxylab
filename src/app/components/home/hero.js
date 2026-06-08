"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#05070a] text-white overflow-hidden">

      {/* Soft medical ambient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.08),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.06),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/grid.svg')]" />
      </div>

      {/* VERY subtle moving light (not UI, just atmosphere) */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px] top-[-150px] left-[-150px]"
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* Brand line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs tracking-[0.35em] text-gray-500 uppercase"
        >
          PulseOxylabs Diagnostics
        </motion.p>

        {/* MAIN MESSAGE (no UI structure around it) */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-8 text-4xl md:text-6xl font-semibold leading-tight"
        >
          Precision in every test.
          <br />
          <span className="text-cyan-400">Clarity in every report.</span>
        </motion.h1>

        {/* supporting line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-400 text-lg leading-relaxed"
        >
          A modern pathology and diagnostic lab focused on accuracy, speed, and trust.
          We translate biological data into decisions that matter.
        </motion.p>

        {/* ONLY action (no button cluster) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-10"
        >
          <button className="group inline-flex items-center gap-3 text-cyan-400 text-sm tracking-wide">
            Book a test
            <FaArrowRight className="group-hover:translate-x-1 transition" />
          </button>
        </motion.div>

        {/* subtle footer note (trust, not UI stats) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-xs text-gray-600"
        >
          Blood tests • Pathology • Biochemistry • Preventive screening
        </motion.p>

      </div>
    </section>
  );
}