"use client";

import { motion } from "framer-motion";
import { Building2, Users, WifiOff, Languages, FileSpreadsheet } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [
    <Building2 key="security" className="h-10 w-10 text-cyan-400" />,
    <Users key="team" className="h-10 w-10 text-purple-400" />,
    <WifiOff key="offline" className="h-10 w-10 text-emerald-400" />,
    <Languages key="lang" className="h-10 w-10 text-pink-400" />,
    <FileSpreadsheet key="excel" className="h-10 w-10 text-blue-400" />,
];

export default function UseCases() {
    const { t } = useLanguage();

    return (
        <section id="use-cases" className="relative z-10 bg-black py-24">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold text-white md:text-4xl font-outfit">{t.useCases.title}</h2>
                </motion.div>

                <div className="mx-auto max-w-4xl space-y-6">
                    {t.useCases.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10 md:flex md:items-center md:gap-8"
                        >
                            <div className="mb-4 flex-shrink-0 rounded-xl bg-black/50 p-4 border border-white/5 md:mb-0">
                                {icons[index]}
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
