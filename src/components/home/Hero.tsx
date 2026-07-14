"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 lg:flex-row">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .6 }}
          className="max-w-2xl"
        >

          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-900 dark:text-cyan-200">
            🚀 AI Powered Hiring Platform
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-7xl">
            Hire <span className="text-cyan-600">Smarter</span>
            <br />
            Build Faster
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            SkillBridge AI connects talented developers with companies
            using AI-powered recommendations, smart hiring and
            lightning-fast recruitment.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/developers"
              className="flex items-center gap-2 rounded-xl bg-cyan-600 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-cyan-700"
            >
              Explore Developers
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="rounded-xl border border-cyan-600 px-7 py-4 font-semibold text-cyan-600 transition hover:bg-cyan-600 hover:text-white"
            >
              Learn More
            </Link>

          </div>

        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="grid gap-6"
        >

          <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900">
            <BriefcaseBusiness
              className="mb-4 text-cyan-600"
              size={40}
            />

            <h2 className="text-4xl font-bold">500+</h2>

            <p className="mt-2 text-slate-500">
              Active Job Opportunities
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900">
            <Users
              className="mb-4 text-cyan-600"
              size={40}
            />

            <h2 className="text-4xl font-bold">2,000+</h2>

            <p className="mt-2 text-slate-500">
              Verified Developers
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}