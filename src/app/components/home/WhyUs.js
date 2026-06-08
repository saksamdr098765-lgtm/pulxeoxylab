"use client";

import { motion } from "framer-motion";
import {
FaAward,
FaClock,
FaMicroscope,
FaUserMd,
} from "react-icons/fa";

const features = [
{
icon: FaAward,
title: "Accurate Results",
description:
"Advanced diagnostic technology ensures highly accurate and reliable test reports.",
},
{
icon: FaClock,
title: "Quick Turnaround",
description:
"Get your reports faster with streamlined testing and digital delivery.",
},
{
icon: FaMicroscope,
title: "Modern Laboratory",
description:
"State-of-the-art equipment and quality-controlled testing processes.",
},
{
icon: FaUserMd,
title: "Expert Professionals",
description:
"Experienced pathologists and healthcare experts committed to quality care.",
},
];

export default function WhyChooseUs() {
return ( <section className="bg-white py-20"> <div className="mx-auto max-w-7xl px-6">
<motion.div
initial={{ opacity: 0, y: 25 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="mx-auto max-w-3xl text-center"
> <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
Why Choose Us </span>

      <h2 className="mt-5 text-4xl font-black text-slate-900 lg:text-5xl">
        Trusted Diagnostics, Exceptional Care
      </h2>

      <p className="mt-5 text-slate-600">
        We combine cutting-edge technology, expert professionals, and
        patient-focused services to deliver reliable healthcare solutions.
      </p>
    </motion.div>

    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-2xl text-white">
              <Icon />
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              {feature.title}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {feature.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>


);
}
