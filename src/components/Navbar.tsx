"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
    const { t, language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === "ja" ? "en" : "ja");
    };

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/ChronosOfficial-if/icon.png" alt="Chronos Logo" width={32} height={32} className="rounded-lg" />
                    <span className="text-xl font-bold text-white">Chronos</span>
                </Link>
                <div className="hidden gap-8 md:flex">
                    <Link href="/#features" className="text-sm font-medium text-gray-300 transition hover:text-white">
                        {t.nav.features}
                    </Link>
                    <Link href="/#why" className="text-sm font-medium text-gray-300 transition hover:text-white">
                        {t.nav.screenshots}
                    </Link>
                    <Link href="/#use-cases" className="text-sm font-medium text-gray-300 transition hover:text-white">
                        {t.nav.useCases}
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="text-sm font-medium text-gray-300 transition hover:text-white"
                    >
                        {language === "ja" ? "English" : "日本語"}
                    </button>
                    <button className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
                        {t.nav.download}
                    </button>
                </div>
            </div>
        </nav>
    );
}
