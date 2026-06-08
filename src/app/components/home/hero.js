"use client";

import { motion } from "framer-motion";
import {
FaArrowRight,
FaFlask,
FaHeartbeat,
FaFileMedical,
FaCheckCircle,
} from "react-icons/fa";

export default function Hero() {
return ( <section className="relative overflow-hidden bg-[#F8FBFF]">
{/* Background Effects */} <div className="absolute inset-0 overflow-hidden">
<motion.div
animate={{
scale: [1, 1.15, 1],
rotate: [0, 15, 0],
}}
transition={{
duration: 15,
repeat: Infinity,
ease: "easeInOut",
}}
className="absolute -top-40 -left-40 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-cyan-200/30 blur-3xl"
/>

    <motion.div
      animate={{
        scale: [1.1, 1, 1.1],
        rotate: [0, -15, 0],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute top-20 right-0 h-80 w-80 sm:h-[30rem] sm:w-[30rem] rounded-full bg-blue-200/30 blur-3xl"
    />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
    <div className="grid min-h-[90vh] items-center gap-12 py-12 lg:min-h-screen lg:grid-cols-2 lg:gap-16 lg:py-20">
      
      {/* LEFT */}
      <div className="text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-3 py-2 text-xs sm:px-4 sm:text-sm shadow-sm"
        >
          <FaFlask className="text-cyan-600" />
          <span className="font-medium text-slate-700">
            NABL Standards • Accurate Diagnostics
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:mt-8 lg:text-7xl"
        >
          Advanced
          <span className="block bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
            Pathology Testing
          </span>
          For Reliable Health Insights
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0"
        >
          Pulxeoxy Labs provides accurate diagnostics, advanced testing
          technology, and rapid digital reports to help patients and
          healthcare professionals make informed decisions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
        >
          <button className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 px-7 py-4 font-semibold text-white transition hover:scale-105 sm:w-auto">
            Book a Test
            <FaArrowRight className="transition group-hover:translate-x-1" />
          </button>

          <button className="w-full rounded-2xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 transition hover:border-cyan-500 hover:text-cyan-600 sm:w-auto">
            View Packages
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 grid grid-cols-3 gap-3 text-center sm:gap-6 lg:text-left"
        >
          <div>
            <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
              10K+
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Tests Completed
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
              99.8%
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Accuracy Rate
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
              24H
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Digital Reports
            </p>
          </div>
        </motion.div>
      </div>

      {/* RIGHT */}
      <div className="relative flex items-center justify-center mt-8 lg:mt-0">

        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="
            relative flex items-center justify-center
            h-[260px] w-[260px]
            sm:h-[340px] sm:w-[340px]
            lg:h-[450px] lg:w-[450px]
            rounded-full border border-cyan-100
            bg-gradient-to-br from-white to-cyan-50
            shadow-2xl
          "
        >
          <div
            className="
              absolute rounded-full border border-cyan-100
              h-[210px] w-[210px]
              sm:h-[280px] sm:w-[280px]
              lg:h-[380px] lg:w-[380px]
            "
          />

          <div
            className="
              absolute rounded-full bg-gradient-to-br
              from-cyan-500 to-blue-700 opacity-10 blur-xl
              h-[150px] w-[150px]
              sm:h-[220px] sm:w-[220px]
              lg:h-[300px] lg:w-[300px]
            "
          />

          <FaHeartbeat className="text-[70px] sm:text-[100px] lg:text-[140px] text-cyan-600" />
        </motion.div>

        {/* Report Card */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="
            absolute left-0 top-0
            w-40 sm:w-52 lg:w-64
            rounded-2xl lg:rounded-3xl
            border border-white/60
            bg-white
            p-3 lg:p-5
            shadow-xl
            backdrop-blur
          "
        >
          <div className="flex items-center gap-2">
            <FaFileMedical className="text-cyan-600 text-sm" />
            <h4 className="font-bold text-xs sm:text-sm lg:text-base">
              Blood Report
            </h4>
          </div>

          <div className="mt-4 space-y-2">
            <div className="h-2 rounded-full bg-slate-100">
              <div className="h-2 w-[85%] rounded-full bg-cyan-500" />
            </div>

            <div className="h-2 rounded-full bg-slate-100">
              <div className="h-2 w-[70%] rounded-full bg-blue-500" />
            </div>

            <div className="h-2 rounded-full bg-slate-100">
              <div className="h-2 w-[90%] rounded-full bg-cyan-500" />
            </div>
          </div>
        </motion.div>

        {/* Accuracy Card */}
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="
            absolute right-0 bottom-0
            rounded-2xl lg:rounded-3xl
            bg-slate-900
            p-3 lg:p-5
            text-white
            shadow-xl
          "
        >
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400" />
            <span className="font-semibold text-xs sm:text-sm">
              Verified
            </span>
          </div>

          <h3 className="mt-2 text-2xl font-black sm:text-3xl lg:text-4xl">
            99.8%
          </h3>

          <p className="text-xs sm:text-sm text-slate-300">
            Accuracy
          </p>
        </motion.div>

      </div>
    </div>
  </div>
</section>


);
}
