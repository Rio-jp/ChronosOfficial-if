"use client";

import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";
import { Shield, Zap, Globe, Share2, FileSpreadsheet, Layout } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [
    <Layout key="layout" className="h-8 w-8 text-cyan-400" />,
    <Zap key="zap" className="h-8 w-8 text-yellow-400" />,
    <Shield key="shield" className="h-8 w-8 text-green-400" />,
    <FileSpreadsheet key="excel" className="h-8 w-8 text-emerald-400" />,
    <Share2 key="share" className="h-8 w-8 text-purple-400" />,
    <Globe key="globe" className="h-8 w-8 text-blue-400" />,
];

function FeatureCard({ feature, icon, index }: { feature: { title: string; desc: string }; icon: React.ReactNode; index: number }) {
    const spread = useMotionValue(0);
    const maskImage = useMotionTemplate`conic-gradient(from 0deg at 50% 50%, black 0deg, black ${spread}deg, transparent ${spread}deg, transparent calc(360deg - ${spread}deg), black calc(360deg - ${spread}deg))`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl p-[2px]"
            onHoverStart={() => animate(spread, 180, { duration: 0.5, ease: "easeInOut" })}
            onHoverEnd={() => animate(spread, 0, { duration: 0.5, ease: "easeInOut" })}
        >
            {/* Animated Border Gradient */}
            <motion.div
                className="absolute inset-0 bg-cyan-400"
                style={{ maskImage, WebkitMaskImage: maskImage }}
            />

            {/* Inner Content */}
            <div className="relative h-full w-full rounded-2xl bg-[#0A0A0A] p-8 transition-colors">
                <div className="mb-4 rounded-full bg-white/5 p-3 w-fit">{icon}</div>
                <h3 className="mb-2 font-outfit text-xl font-bold text-white">{feature.title}</h3>
                <p className="font-inter text-gray-400">{feature.desc}</p>
            </div>
        </motion.div>
    );
}

export default function Features() {
    const { t } = useLanguage();

    return (
        <section id="features" className="relative z-10 bg-black/80 py-24 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold text-white md:text-5xl">{t.features.title}</h2>
                    <p className="mt-4 text-xl text-gray-400">
                        {t.features.subtitle}
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {t.features.items.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} icon={icons[index]} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
