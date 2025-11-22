"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const images = [
    "/ChronosOfficial-if/screenshot-gantt.png",
    "/ChronosOfficial-if/screenshot-summary.png",
    "/ChronosOfficial-if/screenshot-task.png",
];

const colors = [
    "from-cyan-500/20 to-blue-500/20",
    "from-purple-500/20 to-pink-500/20",
    "from-emerald-500/20 to-teal-500/20",
];

export default function ScrollShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);
    const { t } = useLanguage();

    return (
        <section id="why" className="relative bg-black">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col lg:flex-row lg:gap-20">
                    {/* Left Column: Scrolling Text */}
                    <div className="w-full lg:w-[30%]">
                        {t.showcase.items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ amount: 0.5 }}
                                onViewportEnter={() => setActiveIndex(index)}
                                className="flex min-h-screen flex-col justify-center py-24"
                            >
                                <h2 className="mb-6 font-outfit text-2xl font-bold text-white md:text-4xl tracking-tight whitespace-nowrap">
                                    {item.title}
                                </h2>
                                <p className="font-inter text-base leading-relaxed text-gray-400 md:text-lg font-light">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column: Sticky Image */}
                    <div className="hidden w-full lg:block lg:w-[70%]">
                        <div className="sticky top-0 flex h-screen items-center justify-center">
                            <div className="relative aspect-[1920/1032] w-full border border-white/20 bg-gray-900/50 shadow-2xl backdrop-blur-sm">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.7, ease: "easeInOut" }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={images[activeIndex]}
                                            alt={t.showcase.items[activeIndex].title}
                                            fill
                                            className="object-cover"
                                        />
                                        {/* Gradient Overlay based on item color */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${colors[activeIndex]} opacity-20 mix-blend-overlay`} />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
