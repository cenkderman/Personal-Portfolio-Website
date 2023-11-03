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
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarBrand>
                    <a className='text-2xl'>Cenk.</a>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className='hidden sm:flex gap-4'>
                <NavbarItem>
                    <Link href="#about">About me</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )

}

export default Nav