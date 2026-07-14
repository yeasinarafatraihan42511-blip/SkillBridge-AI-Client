"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Is SkillBridge AI free for developers?",
        answer:
            "Yes. Developers can create an account, build their profile and explore opportunities completely free.",
    },
    {
        question: "Can companies hire remote developers?",
        answer:
            "Absolutely. Companies can connect with talented developers from anywhere in the world.",
    },
    {
        question: "Is my information secure?",
        answer:
            "Yes. We use secure authentication and best practices to protect your account and personal data.",
    },
    {
        question: "How does AI matching work?",
        answer:
            "Our AI analyzes skills, experience and job requirements to recommend the most suitable candidates.",
    },
];

export default function FAQ() {
    const [active, setActive] = useState<number | null>(0);

    return (
        <section className="bg-white py-20 dark:bg-slate-950">
            <div className="mx-auto max-w-4xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5 }}
                    className="mb-14 text-center"
                >
                    <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300">
                        Frequently Asked Questions
                    </span>

                    <h2 className="mt-5 text-4xl font-bold">
                        Got Questions?
                    </h2>

                    <p className="mt-4 text-slate-500 dark:text-slate-400">
                        Everything you need to know about SkillBridge AI.
                    </p>
                </motion.div>
                <div className="space-y-5">
                    {faqs.map((faq, index) => {
                        const isOpen = active === index;

                        return (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.08,
                                }}
                                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-cyan-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                            >
                                {/* Question */}

                                <button
                                    onClick={() =>
                                        setActive(isOpen ? null : index)
                                    }
                                    className="flex w-full items-center justify-between p-6 text-left"
                                >
                                    <h3 className="text-lg font-semibold">
                                        {faq.question}
                                    </h3>

                                    <motion.div
                                        animate={{
                                            rotate: isOpen ? 180 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="text-cyan-600" />
                                    </motion.div>
                                </button>

                                {/* Answer */}

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                            }}
                                        >
                                            <p className="border-t border-slate-200 px-6 py-5 leading-7 text-slate-500 dark:border-slate-800 dark:text-slate-400">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}