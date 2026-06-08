"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="relative w-full py-28 bg-[#05070a] text-white overflow-hidden">

      {/* soft clinical glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.08),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.06),transparent_55%)]" />

      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold leading-tight"
        >
          Book your diagnostic test with{" "}
          <span className="text-cyan-400">confidence</span>
        </motion.h2>

        {/* subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Fast reporting, accurate results, and trusted clinical evaluation —
          delivered with care and precision.
        </motion.p>

        {/* actions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >

          {/* primary CTA */}
          <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-3 rounded-xl font-medium transition">
            Book a Test
            <FaArrowRight />
          </button>

          {/* secondary CTA */}
          <button className="flex items-center gap-2 border border-white/10 hover:border-white/30 px-6 py-3 rounded-xl text-gray-300 transition">
            <FaWhatsapp className="text-green-400" />
            WhatsApp Us
          </button>

          {/* tertiary */}
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm">
            <FaPhoneAlt />
            Call Now
          </button>

        </motion.div>

        {/* trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-xs text-gray-600"
        >
          Available for home sample collection • Reports shared digitally • Doctor consultation support
        </motion.p>

      </div>
    </section>
  );
}