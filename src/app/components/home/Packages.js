"use client";

import { motion } from "framer-motion";
import { FaHeartbeat, FaFlask, FaUserMd } from "react-icons/fa";

const packages = [
  {
    title: "Basic Health Checkup",
    price: "₹799",
    icon: <FaHeartbeat />,
    tests: [
      "CBC",
      "Blood Sugar",
      "Urine Routine",
      "Lipid Profile",
    ],
  },
  {
    title: "Advanced Wellness",
    price: "₹1,499",
    icon: <FaFlask />,
    tests: [
      "CBC",
      "Liver Function Test",
      "Kidney Function Test",
      "Thyroid Profile",
      "Vitamin D",
    ],
  },
  {
    title: "Executive Package",
    price: "₹2,499",
    icon: <FaUserMd />,
    tests: [
      "Full Body Checkup",
      "Diabetes Profile",
      "Heart Risk Markers",
      "Thyroid Profile",
      "Vitamin B12 & D",
    ],
  },
];

export default function DiagnosticPackages() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Health Packages
          </span>

          <h2 className="mt-4 text-4xl font-black text-slate-900 lg:text-5xl">
            Comprehensive Diagnostic Packages
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Choose from our carefully designed health packages to monitor,
            prevent, and manage your health with confidence.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-2xl text-white">
                {pkg.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {pkg.title}
              </h3>

              <div className="mt-3 text-4xl font-black text-blue-600">
                {pkg.price}
              </div>

              <ul className="mt-6 space-y-3">
                {pkg.tests.map((test) => (
                  <li
                    key={test}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    {test}
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold text-white transition hover:opacity-90">
                Book Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}