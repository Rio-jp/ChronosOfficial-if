"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function Terms() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
            <Navbar />

            {/* Background Gradient */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[100px]" />
                <div className="absolute bottom-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl px-6 py-32">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold md:text-5xl font-outfit bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        {t.terms.title}
                    </h1>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
                    <div className="space-y-12 text-gray-300 leading-relaxed">
                        {t.terms.sections.map((section, index) => (
                            <section key={index} className="border-b border-white/5 pb-12 last:border-0 last:pb-0">
                                <h2 className="mb-6 text-xl font-bold text-white md:text-2xl flex items-center gap-3">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-sm font-mono text-cyan-400">
                                        {index + 1}
                                    </span>
                                    {section.title.replace(/^(第\d+条|1\.|2\.|3\.|4\.)[（(]?.*?[）)]?\s*/, '') || section.title}
                                </h2>
                                <div className="prose prose-invert max-w-none">
                                    <p className="whitespace-pre-wrap text-base md:text-lg text-gray-400">
                                        {section.content.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
                                            part.match(/https?:\/\/[^\s]+/) ? (
                                                <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                                                    {part}
                                                </a>
                                            ) : (
                                                part
                                            )
                                        )}
                                    </p>
                                    {section.items && (
                                        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-400">
                                            {section.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </section>
                        ))}
                    </div>
                    <div className="mt-12 border-t border-white/10 pt-8 text-right text-sm text-gray-500">
                        {t.terms.lastUpdated}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
