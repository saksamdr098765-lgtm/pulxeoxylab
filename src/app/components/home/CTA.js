"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";

export default function CTA() {
return ( <section className="relative overflow-hidden py-20"> <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500" />

  <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
  <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

  <div className="relative mx-auto max-w-6xl px-6">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-[32px] border border-white/20 bg-white/10 p-10 text-center backdrop-blur-md md:p-16"
    >
      <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
        Book Your Test Today
      </span>

      <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
        Your Health Deserves
        <br />
        Accurate Diagnostics
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
        Schedule your diagnostic tests with confidence. Fast reporting,
        advanced technology, and expert healthcare professionals at your
        service.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <button className="flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105">
          <FaArrowRight />
          Book Appointment
        </button>

        <button className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
          <FaPhoneAlt />
          Call Now
        </button>
      </div>
    </motion.div>
  </div>
</section>


);
}
