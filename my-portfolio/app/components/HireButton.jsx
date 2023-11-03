import React from "react";
import { Button } from "@nextui-org/react";
import { HeartIcon } from "./HeartIcon";

export default function HireButton() {
    return (
        <Button
            radius="sm"
            variant="bordered"
            startContent={<HeartIcon />}>

            Hire Me
        </Button>
    );
}
