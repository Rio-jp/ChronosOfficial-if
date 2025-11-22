import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import KeyMetrics from "@/components/KeyMetrics";
import ScrollShowcase from "@/components/ScrollShowcase";
import UseCases from "@/components/UseCases";

export default function Home() {
    return (
        <main className="relative min-h-screen">
            <Navbar />
            <Hero />
            <KeyMetrics />
            <Features />
            <ScrollShowcase />
            <UseCases />
            <Footer />
        </main>
    );
}
