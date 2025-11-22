"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="relative z-10 border-t border-white/10 bg-black py-12">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-white">Chronos</span>
                    </div>
                    <div className="flex gap-8 text-sm text-gray-400">
                        <a href="/privacy" className="hover:text-white">{t.footer.privacy}</a>
                        <a href="/terms" className="hover:text-white">{t.footer.terms}</a>
                        <a href="https://x.com/rio_engineer" target="_blank" rel="noopener noreferrer" className="hover:text-white">{t.footer.contact}</a>
                    </div>
                    <div className="text-sm text-gray-500">
                        © {new Date().getFullYear()} {t.footer.rights}
                    </div>
                </div>
            </div>
        </footer>
    );
}
