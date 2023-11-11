"use client"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import { PaintBrushIcon, CodeBracketIcon, UsersIcon } from '@heroicons/react/24/outline';
import React from "react";

export function DesCard() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <Card className="max-w-sm">
                <CardHeader className="flex gap-2">
                    <UsersIcon className="h-5 w-5 text-warning" />
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
    )
}