"use client";

import { motion } from "framer-motion";
import {
  Users,
  BriefcaseBusiness,
  Building2,
  Trophy,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "2.5K+",
    title: "Developers",
  },
  {
    icon: Building2,
    value: "850+",
    title: "Companies",
  },
  {
    icon: BriefcaseBusiness,
    value: "1.2K+",
    title: "Jobs Posted",
  },
  {
    icon: Trophy,
    value: "98%",
    title: "Success Rate",
  },
];

export default function Statistics() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-[#0B1120]">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300">
            Platform Statistics
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Trusted By Thousands
          </h2>

          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Growing every day with talented developers and innovative companies.
          </p>
        </motion.div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-cyan-500 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
              >
                {/* Glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 opacity-0 transition duration-500 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 group-hover:opacity-100" />

                {/* Icon */}

                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                {/* Value */}

                <h3 className="relative text-4xl font-extrabold text-slate-900 dark:text-white">
                  {item.value}
                </h3>

                {/* Title */}

                <p className="relative mt-3 text-slate-500 dark:text-slate-400">
                  {item.title}
                </p>

                {/* Hover Line */}

                <div className="mx-auto mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}