import React from "react";
import { Button } from "@nextui-org/react";
import { RocketLaunchIcon } from '@heroicons/react/24/outline'


export default function HireButton() {
    return (
        <Button
            color="secondary"
            radius="sm"
            variant="ghost"
            className="hidden sm:flex"
            startContent={<RocketLaunchIcon className="h-5 w-5" />}
        >

            Hire Me
        </Button>
    );
}
