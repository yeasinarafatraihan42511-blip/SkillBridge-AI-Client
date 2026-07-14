"use client";

import { motion } from "framer-motion";
import {
    UserPlus,
    BadgeCheck,
    BriefcaseBusiness,
    ArrowDown,
} from "lucide-react";

const steps = [
    {
        icon: UserPlus,
        title: "Create Account",
        desc: "Sign up as a Developer or Recruiter in just a few seconds.",
    },
    {
        icon: BadgeCheck,
        title: "Complete Your Profile",
        desc: "Add your skills, portfolio, experience and verification.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Get Connected",
        desc: "Discover jobs or hire the perfect developer with AI.",
    },
];

export default function HowItWorks() {
    return (
        <section className="bg-white py-20 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5 }}
                    className="mx-auto mb-16 max-w-2xl text-center"
                >
                    <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300">
                        How It Works
                    </span>

                    <h2 className="mt-5 text-4xl font-bold">
                        Start Your Journey In
                        <span className="text-cyan-600"> 3 Simple Steps</span>
                    </h2>

                    <p className="mt-4 text-slate-500 dark:text-slate-400">
                        Whether you're hiring or looking for opportunities,
                        SkillBridge AI makes everything effortless.
                    </p>
                </motion.div>
                <div className="grid gap-10 lg:grid-cols-3">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div key={step.title} className="relative">

                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.15,
                                    }}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.03,
                                    }}
                                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-cyan-500 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
                                >
                                    {/* Background Glow */}

                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 opacity-0 transition duration-500 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 group-hover:opacity-100" />

                                    {/* Step Number */}

                                    <span className="absolute right-6 top-6 text-5xl font-black text-slate-100 dark:text-slate-800">
                                        0{index + 1}
                                    </span>

                                    {/* Icon */}

                                    <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                                        <Icon size={30} />
                                    </div>

                                    {/* Title */}

                                    <h3 className="relative text-2xl font-bold">
                                        {step.title}
                                    </h3>

                                    {/* Description */}

                                    <p className="relative mt-4 leading-7 text-slate-500 dark:text-slate-400">
                                        {step.desc}
                                    </p>

                                    {/* Bottom Line */}

                                    <div className="mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 group-hover:w-full" />
                                </motion.div>

                                {/* Arrow */}

                                {index < steps.length - 1 && (
                                    <motion.div
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 1.8,
                                        }}
                                        className="mt-6 flex justify-center lg:absolute lg:-right-8 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2"
                                    >
                                        <ArrowDown
                                            size={32}
                                            className="text-cyan-500 lg:hidden"
                                        />

                                        <ArrowDown
                                            size={32}
                                            className="hidden rotate-[-90deg] text-cyan-500 lg:block"
                                        />
                                    </motion.div>
                                )}

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}