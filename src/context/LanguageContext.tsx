"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "ja" | "en";

type Translations = {
    nav: {
        features: string;
        screenshots: string;
        useCases: string;
        download: string;
    };
    hero: {
        title: string;
        subtitle: string;
        download: string;
        learnMore: string;
    };
    features: {
        title: string;
        subtitle: string;
        items: { title: string; desc: string }[];
    };
    showcase: {
        items: { title: string; desc: string }[];
    };
    useCases: {
        title: string;
        items: { title: string; desc: string }[];
    };
    metrics: {
        local: { value: string; label: string };
        cost: { value: string; label: string };
        offline: { value: string; label: string };
        projects: { value: string; label: string };
    };
    footer: {
        privacy: string;
        terms: string;
        contact: string;
        rights: string;
    };
    privacy: {
        title: string;
        lastUpdated: string;
        sections: { title: string; content: string; items?: string[] }[];
    };
    terms: {
        title: string;
        lastUpdated: string;
        sections: { title: string; content: string; items?: string[] }[];
    };
};

const translations: Record<Language, Translations> = {
    ja: {
        nav: {
            features: "機能",
            screenshots: "スクリーンショット",
            useCases: "活用事例",
            download: "ダウンロード",
        },
        hero: {
            title: "Chronos",
            subtitle: "完全ローカル。爆速動作。究極のセキュリティ。\n複数プロジェクト管理のための次世代ガントチャート。",
            download: "今すぐダウンロード",
            learnMore: "詳しく見る",
        },
        features: {
            title: "なぜChronosなのか？",
            subtitle: "スピード、セキュリティ、そしてコントロールを求めるプロフェッショナルのために。",
            items: [
                {
                    title: "複数プロジェクト一元管理",
                    desc: "複数のプロジェクトを単一のガントチャートで同時に管理。依存関係やボトルネックを一目で把握。",
                },
                {
                    title: "圧倒的なパフォーマンス",
                    desc: "スピードを追求した設計。クラウドベースのツールとは一線を画す、瞬時の操作感。",
                },
                {
                    title: "完全ローカル & セキュア",
                    desc: "データはあなたのデバイスから出ることはありません。インターネット接続も不要です。",
                },
                {
                    title: "Excelエクスポート",
                    desc: "プロジェクトデータをExcelにシームレスにエクスポート。報告や分析に活用できます。",
                },
                {
                    title: "プライベート共有",
                    desc: "外部クラウドのリスクなしに、プライベートネットワーク内でブラウザ経由の共有が可能。",
                },
                {
                    title: "多言語対応",
                    desc: "日本語、英語、中国語、韓国語、フランス語、ドイツ語をネイティブサポート。",
                },
            ],
        },
        showcase: {
            items: [
                {
                    title: "統合ガントチャート",
                    desc: "複数のプロジェクトを一つのタイムラインで可視化。ポートフォリオ全体の進捗を直感的に把握できます。",
                },
                {
                    title: "プロジェクトサマリー",
                    desc: "進捗率、CPI、リソース状況を俯瞰。リアルタイムな指標でデータドリブンな意思決定を。",
                },
                {
                    title: "詳細タスク管理",
                    desc: "タスクレベルまでドリルダウン。予実管理、生産性、詳細スケジュールを精密にコントロール。",
                },
            ],
        },
        useCases: {
            title: "こんな方におすすめ",
            items: [
                {
                    title: "01 セキュリティを重視する企業",
                    desc: "機密性の高いプロジェクトを管理する企業に最適。データが外部サーバーに送信されることがないため、情報漏洩のリスクを最小限に抑えられます。",
                },
                {
                    title: "02 複数プロジェクトを並行管理するチーム",
                    desc: "担当者別・案件別のガントチャート表示により、誰がどのプロジェクトにどれだけの時間を割いているかを一目で把握。リソース配分の最適化が可能です。",
                },
                {
                    title: "03 オフライン環境で作業する現場",
                    desc: "インターネット接続が不安定な環境や、セキュリティポリシーでクラウドサービスが使えない現場でも、問題なくプロジェクト管理が行えます。",
                },
                {
                    title: "04 多国籍チームでの協働",
                    desc: "日本語・英語・中国語・韓国語・フランス語・ドイツ語の6言語対応により、多様な言語を使うメンバーが混在するチームでも、それぞれの言語でスムーズにプロジェクト管理が行えます。",
                },
                {
                    title: "05 Excelベースの管理から移行したい組織",
                    desc: "Excel出力機能により、既存のExcelベースのワークフローを維持しながら、より効率的なガントチャート管理に移行できます。",
                },
            ],
        },
        metrics: {
            local: { value: "100%", label: "ローカルデータ管理" },
            cost: { value: "0円", label: "月額費用" },
            offline: { value: "オフライン", label: "インターネット不要" },
            projects: { value: "無制限", label: "プロジェクト数" },
        },
        footer: {
            privacy: "プライバシーポリシー",
            terms: "利用規約",
            contact: "お問い合わせ",
            rights: "Chronos. All rights reserved.",
        },
        privacy: {
            title: "プライバシーポリシー",
            lastUpdated: "最終更新日: 2025年11月1日",
            sections: [
                {
                    title: "1. はじめに",
                    content: "Chronos（以下「本アプリケーション」）は、ユーザーのプライバシーを最優先に考えて設計されています。本プライバシーポリシーでは、本アプリケーションにおける情報の取り扱いについて説明します。",
                },
                {
                    title: "2. データの保存場所",
                    content: "本アプリケーションは、完全にローカル環境で動作するデスクトップアプリケーションです。",
                    items: [
                        "すべてのプロジェクトデータは、ユーザーのコンピューター内にのみ保存されます",
                        "データが外部のサーバーやクラウドに送信されることは一切ありません",
                        "開発者を含む第三者がユーザーのデータにアクセスすることはできません",
                    ],
                },
                {
                    title: "3. 収集する情報",
                    content: "本アプリケーションは、以下の情報を収集しません。",
                    items: [
                        "個人を特定できる情報（氏名、メールアドレス、電話番号など）",
                        "使用状況データや分析データ",
                        "位置情報",
                        "その他いかなる個人情報",
                    ],
                },
                {
                    title: "4. ネットワーク機能について",
                    content: "本アプリケーションは、アプリケーション起動中のみ、同一ネットワーク内の端末からブラウザでアクセスできる機能を提供します。",
                    items: [
                        "この機能は完全にローカルネットワーク内でのみ動作します",
                        "インターネット経由での外部アクセスはできません",
                        "データがインターネット上に送信されることはありません",
                    ],
                },
                {
                    title: "5. Excelエクスポート機能",
                    content: "本アプリケーションは、プロジェクトデータをExcel形式でエクスポートする機能を提供します。",
                    items: [
                        "エクスポートされたファイルは、ユーザーが指定した場所にのみ保存されます",
                        "エクスポート処理は完全にローカルで行われます",
                    ],
                },
                {
                    title: "6. セキュリティ",
                    content: "本アプリケーションは、ユーザーのデータを保護するため、以下の措置を講じています。",
                    items: [
                        "データは全てユーザーのローカル環境に保存されます",
                        "外部への通信機能は実装されていません",
                        "定期的なセキュリティアップデートを提供します",
                    ],
                },
                {
                    title: "7. データの管理責任",
                    content: "本アプリケーションで作成・管理されるすべてのデータは、ユーザーの完全な管理下にあります。データのバックアップや保護は、ユーザーの責任において行ってください。",
                },
                {
                    title: "8. 第三者への提供",
                    content: "本アプリケーションは、いかなる情報も第三者に提供、共有、販売することはありません。データは完全にユーザーのローカル環境内に保持されます。",
                },
                {
                    title: "9. プライバシーポリシーの変更",
                    content: "本プライバシーポリシーは、必要に応じて更新されることがあります。重要な変更がある場合は、アプリケーションのアップデート情報としてお知らせします。",
                },
                {
                    title: "10. お問い合わせ",
                    content: "プライバシーポリシーに関するご質問やご不明な点がございましたら、以下までお問い合わせください。\nお問い合わせ先：https://x.com/rio_engineer",
                },
            ],
        },
        terms: {
            title: "利用規約",
            lastUpdated: "最終更新日: 2025年11月1日",
            sections: [
                {
                    title: "第1条（適用）",
                    content: "本利用規約（以下「本規約」）は、Chronos（以下「本アプリケーション」）の利用に関する条件を定めるものです。ユーザーは、本アプリケーションをダウンロード、インストール、または使用することにより、本規約に同意したものとみなされます。",
                },
                {
                    title: "第2条（定義）",
                    content: "本規約において使用する用語の定義は、以下の通りとします。",
                    items: [
                        "「本アプリケーション」とは、Chronosおよびその関連するすべてのソフトウェア、ドキュメント、サービスを指します",
                        "「ユーザー」とは、本アプリケーションを使用するすべての個人または法人を指します",
                        "「開発者」とは、本アプリケーションを開発・提供する者を指します",
                    ],
                },
                {
                    title: "第3条（ライセンスの付与）",
                    content: "開発者は、ユーザーに対し、本規約に従うことを条件として、本アプリケーションを使用する非独占的かつ譲渡不可能なライセンスを付与します。",
                },
                {
                    title: "第4条（禁止事項）",
                    content: "ユーザーは、本アプリケーションの利用にあたり、以下の行為を行ってはなりません。",
                    items: [
                        "本アプリケーションを逆コンパイル、逆アセンブル、リバースエンジニアリングすること",
                        "本アプリケーションの複製、改変、再配布を行うこと（法令で認められる範囲を除く）",
                        "本アプリケーションを違法な目的で使用すること",
                        "本アプリケーションのセキュリティを侵害する行為",
                        "第三者の権利（著作権、商標権、プライバシー権など）を侵害する行為",
                        "本アプリケーションの機能を妨げる行為",
                    ],
                },
                {
                    title: "第5条（知的財産権）",
                    content: "本アプリケーションおよびそれに関連するすべての知的財産権は、開発者または正当な権利者に帰属します。本規約は、本アプリケーションに関するいかなる知的財産権もユーザーに移転するものではありません。",
                },
                {
                    title: "第6条（無保証）",
                    content: "本アプリケーションは「現状有姿」で提供されます。開発者は、以下を含むがこれらに限定されない、いかなる保証も行いません。",
                    items: [
                        "本アプリケーションがユーザーの特定の目的に適合すること",
                        "本アプリケーションが期待される機能や性能を有すること",
                        "本アプリケーションの使用が中断されないこと、またはエラーがないこと",
                        "本アプリケーションの不具合が修正されること",
                    ],
                },
                {
                    title: "第7条（免責事項）",
                    content: "開発者は、本アプリケーションの使用または使用不能に起因するいかなる損害（データの損失、利益の損失、業務の中断などを含むがこれらに限定されない）についても、その原因を問わず一切の責任を負いません。",
                },
                {
                    title: "第8条（データの管理）",
                    content: "本アプリケーションで作成・管理されるデータは、すべてユーザーのローカル環境に保存されます。ユーザーは、自己の責任において適切にデータのバックアップおよび管理を行うものとします。開発者は、データの損失、破損、漏洩等について一切の責任を負いません。",
                },
                {
                    title: "第9条（アップデートと変更）",
                    content: "開発者は、事前の通知なく、本アプリケーションの機能を追加、変更、または削除する権利を留保します。また、本アプリケーションのサポートを予告なく終了する場合があります。",
                },
                {
                    title: "第10条（利用規約の変更）",
                    content: "開発者は、必要に応じて本規約を変更することができます。変更後の規約は、本アプリケーションのウェブサイトに掲載された時点で効力を生じるものとします。ユーザーは、定期的に本規約を確認する責任を負います。",
                },
                {
                    title: "第11条（分離可能性）",
                    content: "本規約のいずれかの条項が無効または執行不能と判断された場合でも、その他の条項は引き続き完全な効力を有するものとします。",
                },
                {
                    title: "第12条（準拠法および管轄裁判所）",
                    content: "本規約の解釈および適用は、日本法に準拠するものとします。本アプリケーションに関連する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
                },
                {
                    title: "第13条（お問い合わせ）",
                    content: "本規約に関するご質問やご不明な点がございましたら、以下までお問い合わせください。\nお問い合わせ先：https://x.com/rio_engineer",
                },
            ],
        },
    },
    en: {
        nav: {
            features: "Features",
            screenshots: "Screenshots",
            useCases: "Usage Examples",
            download: "Download",
        },
        hero: {
            title: "Chronos",
            subtitle: "Local-First. Instant Speed. Ultimate Security.\nThe next generation Gantt chart for multi-project management.",
            download: "Download Now",
            learnMore: "Learn More",
        },
        features: {
            title: "Why Chronos?",
            subtitle: "Designed for professionals who demand speed, security, and control.",
            items: [
                {
                    title: "Multi-Project Gantt",
                    desc: "Manage multiple projects simultaneously in a single, unified Gantt chart view.",
                },
                {
                    title: "Instant Performance",
                    desc: "Built for speed. Operations are instantaneous, unlike cloud-based alternatives.",
                },
                {
                    title: "100% Local & Secure",
                    desc: "Your data never leaves your device. No internet connection required.",
                },
                {
                    title: "Excel Export",
                    desc: "Seamlessly export your project data to Excel for reporting and analysis.",
                },
                {
                    title: "Private Sharing",
                    desc: "Share access within your private network via browser without external cloud risks.",
                },
                {
                    title: "Multi-Language",
                    desc: "Native support for Japanese, English, Chinese, Korean, French, and German.",
                },
            ],
        },
        showcase: {
            items: [
                {
                    title: "Unified Gantt Chart",
                    desc: "Visualize multiple projects in a single, cohesive timeline. Spot dependencies and bottlenecks instantly across your entire portfolio.",
                },
                {
                    title: "Project Summary",
                    desc: "Get a high-level overview of progress, CPI, and resource allocation. Make data-driven decisions with real-time metrics.",
                },
                {
                    title: "Deep Dive Details",
                    desc: "Drill down into specific tasks. Manage actuals, productivity, and detailed schedules with precision.",
                },
            ],
        },
        useCases: {
            title: "Recommended For",
            items: [
                {
                    title: "01 Security-Conscious Enterprises",
                    desc: "Ideal for companies managing highly confidential projects. Since data is never sent to external servers, the risk of information leakage is minimized.",
                },
                {
                    title: "02 Teams Managing Multiple Projects",
                    desc: "Gantt chart views by person and project allow you to see at a glance who is spending how much time on which project. Optimization of resource allocation is possible.",
                },
                {
                    title: "03 Fieldwork in Offline Environments",
                    desc: "Project management can be performed without problems even in environments with unstable internet connections or where cloud services cannot be used.",
                },
                {
                    title: "04 Collaboration in Multinational Teams",
                    desc: "With support for 6 languages, project management can be performed smoothly in each language even in teams with members using diverse languages.",
                },
                {
                    title: "05 Migrating from Excel-based Management",
                    desc: "With the Excel export function, you can migrate to more efficient Gantt chart management while maintaining existing Excel-based workflows.",
                },
            ],
        },
        metrics: {
            local: { value: "100%", label: "Local Data Management" },
            cost: { value: "$0", label: "Monthly Cost" },
            offline: { value: "Offline", label: "No Internet Required" },
            projects: { value: "Unlimited", label: "Projects" },
        },
        footer: {
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            contact: "Contact",
            rights: "Chronos. All rights reserved.",
        },
        privacy: {
            title: "Privacy Policy",
            lastUpdated: "Last Updated: November 1, 2025",
            sections: [
                {
                    title: "1. Introduction",
                    content: "Chronos (hereinafter referred to as \"this Application\") is designed with user privacy as the top priority. This Privacy Policy explains how information is handled in this Application.",
                },
                {
                    title: "2. Data Storage Location",
                    content: "This Application is a desktop application that operates entirely in a local environment.",
                    items: [
                        "All project data is stored only on the user's computer.",
                        "Data is never sent to external servers or the cloud.",
                        "Third parties, including the developer, cannot access user data.",
                    ],
                },
                {
                    title: "3. Information Collected",
                    content: "This Application does not collect the following information:",
                    items: [
                        "Personally identifiable information (name, email address, phone number, etc.)",
                        "Usage data or analytics data",
                        "Location information",
                        "Any other personal information",
                    ],
                },
                {
                    title: "4. Network Functions",
                    content: "This Application provides a feature to access via a browser from devices within the same network only while the application is running.",
                    items: [
                        "This feature operates entirely within the local network.",
                        "External access via the internet is not possible.",
                        "Data is never transmitted over the internet.",
                    ],
                },
                {
                    title: "5. Excel Export Function",
                    content: "This Application provides a feature to export project data in Excel format.",
                    items: [
                        "Exported files are saved only in the location specified by the user.",
                        "The export process is performed entirely locally.",
                    ],
                },
                {
                    title: "6. Security",
                    content: "This Application takes the following measures to protect user data:",
                    items: [
                        "All data is stored in the user's local environment.",
                        "No external communication functions are implemented.",
                        "Regular security updates are provided.",
                    ],
                },
                {
                    title: "7. Responsibility for Data Management",
                    content: "All data created and managed in this Application is under the complete control of the user. Please back up and protect your data at your own responsibility.",
                },
                {
                    title: "8. Provision to Third Parties",
                    content: "This Application does not provide, share, or sell any information to third parties. Data is kept entirely within the user's local environment.",
                },
                {
                    title: "9. Changes to Privacy Policy",
                    content: "This Privacy Policy may be updated as needed. If there are significant changes, we will notify you as application update information.",
                },
                {
                    title: "10. Contact",
                    content: "If you have any questions or concerns regarding this Privacy Policy, please contact us at:\nContact: https://x.com/rio_engineer",
                },
            ],
        },
        terms: {
            title: "Terms of Service",
            lastUpdated: "Last Updated: November 1, 2025",
            sections: [
                {
                    title: "Article 1 (Application)",
                    content: "These Terms of Service (hereinafter referred to as \"these Terms\") define the conditions regarding the use of Chronos (hereinafter referred to as \"this Application\"). By downloading, installing, or using this Application, the user is deemed to have agreed to these Terms.",
                },
                {
                    title: "Article 2 (Definitions)",
                    content: "The definitions of terms used in these Terms are as follows:",
                    items: [
                        "\"This Application\" refers to Chronos and all related software, documentation, and services.",
                        "\"User\" refers to all individuals or legal entities using this Application.",
                        "\"Developer\" refers to the person who develops and provides this Application.",
                    ],
                },
                {
                    title: "Article 3 (Grant of License)",
                    content: "The Developer grants the User a non-exclusive, non-transferable license to use this Application, subject to compliance with these Terms.",
                },
                {
                    title: "Article 4 (Prohibited Acts)",
                    content: "In using this Application, the User shall not engage in the following acts:",
                    items: [
                        "Decompiling, disassembling, or reverse engineering this Application.",
                        "Copying, modifying, or redistributing this Application (except as permitted by law).",
                        "Using this Application for illegal purposes.",
                        "Acts that infringe on the security of this Application.",
                        "Acts that infringe on the rights of third parties (copyrights, trademarks, privacy rights, etc.).",
                        "Acts that interfere with the functions of this Application.",
                    ],
                },
                {
                    title: "Article 5 (Intellectual Property Rights)",
                    content: "This Application and all related intellectual property rights belong to the Developer or the legitimate rights holders. These Terms do not transfer any intellectual property rights regarding this Application to the User.",
                },
                {
                    title: "Article 6 (No Warranty)",
                    content: "This Application is provided \"as is\". The Developer makes no warranties, including but not limited to:",
                    items: [
                        "That this Application fits the User's specific purpose.",
                        "That this Application has the expected functions or performance.",
                        "That the use of this Application will be uninterrupted or error-free.",
                        "That defects in this Application will be corrected.",
                    ],
                },
                {
                    title: "Article 7 (Disclaimer)",
                    content: "The Developer shall not be liable for any damages (including but not limited to loss of data, loss of profits, business interruption, etc.) arising from the use or inability to use this Application, regardless of the cause.",
                },
                {
                    title: "Article 8 (Data Management)",
                    content: "All data created and managed in this Application is stored in the User's local environment. The User shall appropriately back up and manage data at their own responsibility. The Developer assumes no responsibility for loss, damage, or leakage of data.",
                },
                {
                    title: "Article 9 (Updates and Changes)",
                    content: "The Developer reserves the right to add, change, or remove functions of this Application without prior notice. In addition, support for this Application may be terminated without notice.",
                },
                {
                    title: "Article 10 (Changes to Terms of Service)",
                    content: "The Developer may change these Terms as necessary. The changed Terms shall take effect when posted on the website of this Application. The User is responsible for regularly reviewing these Terms.",
                },
                {
                    title: "Article 11 (Severability)",
                    content: "Even if any provision of these Terms is determined to be invalid or unenforceable, the other provisions shall remain in full force and effect.",
                },
                {
                    title: "Article 12 (Governing Law and Jurisdiction)",
                    content: "The interpretation and application of these Terms shall be governed by Japanese law. The Tokyo District Court shall be the exclusive agreed court of first instance for all disputes related to this Application.",
                },
                {
                    title: "Article 13 (Contact)",
                    content: "If you have any questions or concerns regarding these Terms, please contact us at:\nContact: https://x.com/rio_engineer",
                },
            ],
        },
    },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("ja");

    React.useEffect(() => {
        const savedLanguage = localStorage.getItem("language") as Language;
        if (savedLanguage && (savedLanguage === "ja" || savedLanguage === "en")) {
            setLanguageState(savedLanguage);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
