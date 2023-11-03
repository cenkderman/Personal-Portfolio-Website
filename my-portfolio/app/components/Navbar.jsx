"use client"

import React, { Component } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { ThemeSwitcher } from './ThemeSwitcher'
import HireButton from './HireButton'

const navLinks = [
    {
        title: "Home",
        path: "#home",

    }, {
        title: "About me",
        path: "#about",

    }, {
        title: "Skills",
        path: "#skills",

    }, {
        title: "Services",
        path: "#services",

    }, {
        title: "Portfolio",
        path: "#portfolio",

    }, {
        title: "Contact",
        path: "#contact",

    },

]

const Navbar = () => {
    return (
        <nav className='flex z-40 w-full h-auto items-center justify-center'>
            <header className='flex w-full h-16 px-4 justify-between items-center max-w-7xl'>
                <div>
                    <a className='text-2xl'>
                        Cenk.
                    </a>
                </div>

                <div className='hidden lg:flex gap-9 justify-start items-center'>
                    {navLinks.map((link, index) => (
                        <li key={index} className='list-none'>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))}
                </div>

                <div className='hidden lg:flex gap-6 justify-center items-center h-full'>
                    <ThemeSwitcher />
                    <HireButton />
                </div>
            </header>
        </nav>
    )
}

export default Navbar