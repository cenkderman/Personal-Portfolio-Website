"use client"
import React from "react";
import { motion } from "framer-motion"
import { WebCard } from "../components/WebCard";
import { DevCard } from "../components/DevCard";
import { DesCard } from "../components/DesCard";




export function Services() {

    return (
        <main className="flex flex-col items-center max-w-7xl backdrop-blur-sm rounded-lg mx-auto py-20 gap-10">
            <section className="text-center">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-warning">Services</h1>
                <h2 className="text-lg">What i ofer</h2>
            </section>
            <section className="flex flex-col gap-10 sm:flex-row">
                <WebCard />
                <DevCard />
                <DesCard />
            </section>

        </main>
    )
}