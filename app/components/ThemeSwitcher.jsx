"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch, VisuallyHidden, useSwitch } from "@nextui-org/react";
import { SunIcon, MoonIcon, } from '@heroicons/react/24/solid'

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    const onChange = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    const {
        Component,
        slots,
        isSelected,
        getBaseProps,
        getInputProps,
        getWrapperProps
    } = useSwitch({ onChange });

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div>
            <Component {...getBaseProps()}>
                <VisuallyHidden>
                    <input {...getInputProps()} />
                </VisuallyHidden>
                <div
                    {...getWrapperProps()}
                    className={slots.wrapper({
                        class: [
                            "w-auto h-auto",
                            "bg-transparent",
                            "rounded-lg",
                            "flex items-center justify-center",
                            "group-data-[selected=true]:bg-transparent",
                            "!text-default-500",
                            "pt-px",
                            "px-0",
                            "mx-0",
                        ],
                    })}
                >
                    {isSelected ? <MoonIcon className="h-4 w-4" /> : <SunIcon className="h-4 w-4" />}
                </div>
            </Component>
        </div>
    )
};