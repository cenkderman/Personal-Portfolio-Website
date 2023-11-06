"use client"
import React from "react";
import { motion } from "framer-motion"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import { PaintBrushIcon, CodeBracketIcon, UsersIcon } from '@heroicons/react/24/outline';


export function Services() {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <main className="flex flex-col items-center max-w-7xl backdrop-blur-sm rounded-lg mx-auto py-20 gap-5">
            <section className="">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-warning">Services</h1>
                <h2 className="text-lg">What i ofer</h2>
            </section>
            <section>
                <div>
                    <Card className="max-w-sm">
                        <CardHeader className="flex gap-2">
                            <PaintBrushIcon className="h-5 w-5" />
                            <h1 className="">Web Design</h1>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>From eye-catching visuals to seamless navigation, we create websites that leave a lasting impression.</p>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Button onPress={onOpen}>View More</Button>
                        </CardFooter>
                    </Card>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                        <ModalContent>
                            {(onClose) => (
                                <div>
                                    <ModalHeader className="flex flex-col gap-1">Web Design</ModalHeader>
                                    <ModalBody>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti id iusto similique eum dicta modi, distinctio aperiam tempore quo inventore in delectus ipsam, facilis aspernatur. Alias et fugit eligendi facilis.</p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button color="primary" onPress={onClose}>
                                            Action
                                        </Button>
                                    </ModalFooter>
                                </div>
                            )}
                        </ModalContent>
                    </Modal>
                </div>

            </section>

        </main>
    )
}