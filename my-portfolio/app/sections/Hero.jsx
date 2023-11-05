"use client"
import React from 'react'
import { Image } from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,

    },
};

const imageVariant = {
    initial: {
        x: +500,
        opacity: 0,
    }, animate: {
        x: 0,
        opacity: 1,

    }
}

export function Hero() {
    return (
        <main className='flex flex-col gap-5 sm:my-32'>
            <section className='flex flex-col gap-7 sm:flex-row items-center sm:backdrop-blur-sm rounded-xl'>
                <motion.div className='flex flex-col items-center gap-7 sm:items-start' variants={textVariants} initial="initial" animate="animate" transition={{ ease: "easeOut", duration: 2 }}>
                    <motion.h1 className='text-4xl font-bold sm:text-6xl' variants={textVariants} transition={{ ease: "easeOut", duration: 2 }}>
                        Hello, I'm Cenk
                    </motion.h1>
                    <motion.h2 className='text-2xl font-normal sm:text-4xl' variants={textVariants} transition={{ ease: "easeOut", duration: 2 }}>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "Web Designer",
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                "Web Developer",
                                1000,
                                'UI/UX Designer',
                                1000,
                                "Graphic Designer",
                                1000
                            ]}
                            wrapper="span"
                            speed={5}
                            repeat={Infinity}
                        />
                    </motion.h2>
                    <motion.p className='text-base text-center font-medium text-default-400 sm:text-xl sm:text-start sm:max-w-2xl' variants={textVariants} transition={{ ease: "easeOut", duration: 3 }}>I'm a digital artisan on a mission to bring your online dreams to life. With a passion for innovation and a keen eye for detail, I've dedicated my career to crafting digital experiences that captivate, engage, and inspire.</motion.p>
                    <Button
                        color='secondary'
                        radius='full'
                        variant='solid'
                        className='px-8 hidden sm:flex'
                        variants={textVariants}
                        transition={{ ease: "easeOut", duration: 4 }}
                    >
                        Github
                    </Button>

                </motion.div>
                <motion.div variants={imageVariant} initial="initial" animate="animate" transition={{ ease: "easeOut", duration: 3 }}>
                    <Image
                        width={315}
                        alt='Cenk Hero Image'
                        src='/images/HeroImage.jpeg'
                        radius='full'

                    />
                </motion.div>
            </section>
            <section>

            </section>
        </main>
    )
};