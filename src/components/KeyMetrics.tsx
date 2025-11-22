"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function KeyMetrics() {
    const { t } = useLanguage();

    const metrics = [
        t.metrics.local,
        t.metrics.cost,
        t.metrics.offline,
        t.metrics.projects,
    ];

    return (
        <section className="relative z-10 bg-black py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <h3 className="mb-2 font-outfit text-4xl font-bold text-cyan-400 md:text-5xl">
                                {metric.value}
                            </h3>
                            <p className="font-inter text-sm font-medium text-gray-400 md:text-base">
                                {metric.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
