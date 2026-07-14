"use client";

import { motion } from "framer-motion";
import {
    BrainCircuit,
    ShieldCheck,
    Users,
    BriefcaseBusiness,
    BarChart3,
    Globe,
} from "lucide-react";

const features = [
    {
        icon: BrainCircuit,
        title: "AI Smart Matching",
        desc: "Match developers with the best companies using AI.",
    },
    {
        icon: Users,
        title: "Verified Developers",
        desc: "Every profile is verified for better hiring quality.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Fast Hiring",
        desc: "Reduce recruitment time with smart filtering.",
    },
    {
        icon: BarChart3,
        title: "Analytics",
        desc: "Track hiring performance with real-time insights.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Platform",
        desc: "JWT authentication and protected routes.",
    },
    {
        icon: Globe,
        title: "Remote Friendly",
        desc: "Hire talent from anywhere in the world.",
    },
];

export default function Features() {
    return (
        <section
            id="features"
            className="bg-slate-50 py-20 dark:bg-[#0B1120]"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5 }}
                    className="mx-auto mb-14 max-w-2xl text-center"
                >
                    <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300">
                        Platform Features
                    </span>

                    <h2 className="mt-5 text-4xl font-bold">
                        Everything You Need To Hire Smarter
                    </h2>

                    <p className="mt-4 text-slate-500 dark:text-slate-400">
                        Modern tools for developers and recruiters powered by AI.
                    </p>
                </motion.div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.title}
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
                                className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/70"
                            >
                                {/* Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-cyan-500/10 group-hover:to-blue-500/10" />

                                {/* Icon */}

                                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg transition duration-300 group-hover:rotate-6">
                                    <Icon size={30} />
                                </div>

                                {/* Title */}

                                <h3 className="relative text-xl font-bold">
                                    {feature.title}
                                </h3>

                                {/* Description */}

                                <p className="relative mt-3 leading-7 text-slate-500 dark:text-slate-400">
                                    {feature.desc}
                                </p>

                                {/* Hover Line */}

                                <div className="relative mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 group-hover:w-full" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}