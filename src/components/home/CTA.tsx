"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-[#0B1120]">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4 }}
          className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:border-cyan-500 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900 lg:p-16"
        >
          {/* Background Glow */}

          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl transition group-hover:bg-cyan-500/20" />

          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl transition group-hover:bg-blue-600/20" />

          <div className="relative z-10 flex flex-col items-center text-center">

            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300">
              🚀 Join SkillBridge AI
            </span>

            <h2 className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Ready To Build Your Career With
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                {" "}
                SkillBridge AI?
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500 dark:text-slate-400">
              Discover exciting opportunities, connect with verified
              developers and companies, and experience smarter hiring
              powered by AI.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/register"
                className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40"
              >
                Get Started

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/developers"
                className="rounded-full border border-slate-300 px-8 py-3 font-semibold text-slate-700 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Explore Developers
              </Link>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}