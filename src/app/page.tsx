import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import ThreeBackground from "@/components/ThreeBackground";
import KeyMetrics from "@/components/KeyMetrics";
import ScrollShowcase from "@/components/ScrollShowcase";
import UseCases from "@/components/UseCases";

export default function Home() {
    return (
        <main className="relative min-h-screen">
            <Navbar />
            <ThreeBackground />
            <Hero />
            <KeyMetrics />
            <Features />
            <ScrollShowcase />
            <UseCases />
            <Footer />
        </main>
    );
}
