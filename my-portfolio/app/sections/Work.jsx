"use client"
import React from "react"
import { TrophyIcon, ClipboardDocumentCheckIcon, FaceSmileIcon } from '@heroicons/react/24/outline'
import { animate, motion } from "framer-motion"

const textVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 3
        }
    },
};


export function Work() {
    return (
        <motion.main variants={textVariants} initial="initial" whileInView={"animate"} className="flex flex-col items-center backdrop-blur-sm w-full rounded-lg mx-auto py-20 gap-5">
            <motion.section className="flex flex-col gap-3">
                <motion.h1 className="text-3xl font-extrabold sm:text-4xl md:text-8xl text-center text-success">Lets work together</motion.h1>
                <motion.h2 className="text-lg text-center font-semibold">Your online success story starts here let's create beautiful websites together</motion.h2>
            </motion.section>
            <section className="flex flex-col sm:flex-row gap-2">
                <motion.div className="flex flex-col gap-1 justify-center items-center py-5 px-7 bg-secondary-400 rounded-xl text-white hover:bg-secondary-500 w-48">
                    <TrophyIcon className="h-5 w-5 text-warning" />
                    <h2 className="text-xl">1+ Years</h2>
                    <p className="text-sm">Experiance</p>
                </motion.div>

                <motion.div className="flex flex-col gap-1 justify-center items-center py-5 px-7 bg-secondary-400 rounded-xl text-white hover:bg-secondary-500 w-48">
                    <ClipboardDocumentCheckIcon className="h-5 w-5 text-warning" />
                    <h2 className="text-xl">5 Projects</h2>
                    <p className="text-sm">Completed</p>
                </motion.div>

                <motion.div className="flex flex-col gap-1 justify-center items-center py-5 px-7 bg-secondary-400 rounded-xl text-white hover:bg-secondary-500 w-48">
                    <FaceSmileIcon className="h-5 w-5 text-warning" />
                    <h2 className="text-xl">5 Customers</h2>
                    <p className="text-sm">satisfied</p>
                </motion.div>
            </section>
        </motion.main>
    )
}