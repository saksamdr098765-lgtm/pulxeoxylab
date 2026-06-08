"use client";

import { motion } from "framer-motion";
import {
FaHeartbeat,
FaTint,
FaMicroscope,
FaXRay,
FaBrain,
FaVial,
} from "react-icons/fa";

const categories = [
{
title: "Blood Tests",
icon: FaTint,
description: "CBC, Sugar, Lipid Profile, Liver & Kidney Tests",
},
{
title: "Cardiac Care",
icon: FaHeartbeat,
description: "Heart health screening and risk assessment",
},
{
title: "Pathology",
icon: FaMicroscope,
description: "Advanced laboratory testing and diagnostics",
},
{
title: "Radiology",
icon: FaXRay,
description: "X-Ray, Ultrasound and imaging services",
},
{
title: "Neurology",
icon: FaBrain,
description: "Brain and nervous system diagnostics",
},
{
title: "Special Tests",
icon: FaVial,
description: "Hormone, Vitamin and Allergy profiles",
},
];

export default function DiagnosticCategories() {
return ( <section className="bg-[#F8FBFF] py-20"> <div className="mx-auto max-w-7xl px-6">
<motion.div
initial={{ opacity: 0, y: 25 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="text-center"
> <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
Our Services </span>


      <h2 className="mt-5 text-4xl font-black text-slate-900 lg:text-5xl">
        Diagnostic Categories
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-slate-600">
        Comprehensive diagnostic services designed to deliver accurate
        results with modern technology and expert care.
      </p>
    </motion.div>

    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category, index) => {
        const Icon = category.icon;

        return (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-2xl text-white">
              <Icon />
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              {category.title}
            </h3>

            <p className="mt-3 text-slate-600">
              {category.description}
            </p>

            <button className="mt-6 font-semibold text-blue-600 transition group-hover:translate-x-1">
              Learn More →
            </button>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

);
}
