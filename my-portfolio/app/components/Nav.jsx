"use client"

import React, { Component, useState } from 'react'
import Link from 'next/link'
import { ThemeSwitcher } from './ThemeSwitcher'
import HireButton from './HireButton'
import { Button } from '@nextui-org/react'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/react";


const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "About",
        "Skills",
        "Services",
        "Portfolio",
        "Contact",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred={true} >
            <NavbarContent>
                <NavbarBrand>
                    <a className='text-2xl'>Cenk.</a>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className='hidden sm:flex gap-4'>
                <NavbarItem className='hover:text-default-500'>
                    <Link href="/">Home</Link>
                </NavbarItem>
                <NavbarItem className='hover:text-default-500'>
                    <Link href="about">About me</Link>
                </NavbarItem>
                <NavbarItem className='hover:text-default-500'>
                    <Link href="skills">Skills</Link>
                </NavbarItem>
                <NavbarItem className='hover:text-default-500'>
                    <Link href="services">Services</Link>
                </NavbarItem>
                <NavbarItem className='hover:text-default-500'>
                    <Link href="portfolio">Portfolio</Link>
                </NavbarItem>
                <NavbarItem className='hover:text-default-500'>
                    <Link href="contact">Contact</Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify='end'>
                <ThemeSwitcher />
                <HireButton />
                <NavbarMenuToggle className='sm:hidden' aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarMenu className='items-center'>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 1 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href={item}
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )

}

export default Nav