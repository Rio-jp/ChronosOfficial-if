"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TaskBar {
    id: number;
    width: string;
    top: string;
    color: string;
    duration: number;
    delay: number;
    opacity: number;
}

export default function GanttBackground() {
    const [bars, setBars] = useState<TaskBar[]>([]);

    useEffect(() => {
        // Generate random bars
        const newBars: TaskBar[] = Array.from({ length: 20 }).map((_, i) => {
            const colors = [
                "bg-cyan-500",
                "bg-purple-500",
                "bg-blue-500",
                "bg-emerald-500",
            ];
            return {
                id: i,
                width: `${Math.random() * 30 + 10}%`, // 10% to 40% width
                top: `${Math.random() * 100}%`,
                color: colors[Math.floor(Math.random() * colors.length)],
                duration: Math.random() * 20 + 10, // 10s to 30s
                delay: Math.random() * -30, // Start at random positions
                opacity: Math.random() * 0.3 + 0.1, // 0.1 to 0.4 opacity
            };
        });
        setBars(newBars);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden bg-black pointer-events-none">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex justify-between opacity-10">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="h-full w-px bg-white" />
                ))}
            </div>

            {/* Moving Bars */}
            {bars.map((bar) => (
                <motion.div
                    key={bar.id}
                    initial={{ x: "100vw" }}
                    animate={{ x: "-100vw" }}
                    transition={{
                        duration: bar.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: bar.delay,
                    }}
                    className={`absolute h-2 rounded-full ${bar.color} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
                    style={{
                        top: bar.top,
                        width: bar.width,
                        opacity: bar.opacity,
                    }}
                />
            ))}

            {/* Vignette / Fade Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
        </div>
    );
}
