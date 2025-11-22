"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

import GanttBackground from "./GanttBackground";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center overflow-hidden">
            <GanttBackground />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 max-w-4xl"
            >
                <h1 className="mb-6 text-6xl font-bold tracking-tighter text-white md:text-8xl">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                        {t.hero.title}
                    </span>
                </h1>
                <p className="mb-8 text-xl text-gray-300 md:text-2xl whitespace-pre-wrap">
                    {t.hero.subtitle}
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-black transition hover:bg-gray-200">
                        {t.hero.download}
                    </button>
                    <Link
                        href="#features"
                        className="rounded-full border border-white/20 bg-white/5 px-8 py-3 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                    >
                        {t.hero.learnMore}
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
