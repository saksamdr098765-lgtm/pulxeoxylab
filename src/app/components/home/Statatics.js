"use client";

import { motion } from "framer-motion";
import {
FaUsers,
FaFlask,
FaAward,
FaFileMedical,
} from "react-icons/fa";

const stats = [
{
icon: FaUsers,
value: "25K+",
label: "Happy Patients",
},
{
icon: FaFlask,
value: "100+",
label: "Diagnostic Tests",
},
{
icon: FaFileMedical,
value: "50K+",
label: "Reports Delivered",
},
{
icon: FaAward,
value: "99%",
label: "Accuracy Rate",
},
];

export default function Statistics() {
return ( <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 py-20"> <div className="absolute inset-0 opacity-10"> <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white blur-3xl" /> <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white blur-3xl" /> </div>


  <div className="relative mx-auto max-w-7xl px-6">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h2 className="text-4xl font-black text-white lg:text-5xl">
        Trusted By Thousands
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-blue-100">
        Delivering reliable diagnostics with precision, speed, and care.
      </p>
    </motion.div>

    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-md"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl text-blue-600">
              <Icon />
            </div>

            <h3 className="mt-6 text-4xl font-black text-white">
              {stat.value}
            </h3>

            <p className="mt-2 text-blue-100">
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>


);
}
