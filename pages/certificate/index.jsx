"use client"
import { useRouter } from 'next/router'
import React from 'react'
import { Navbar } from "@/components/navbar";
import {
    Button,
    Kbd,
    Link,
    Input,
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody
} from "@nextui-org/react";
import NextLink from "next/link";

import { VerifyIcon } from "@/components/icons";

const Certificate = () => {
    const router = useRouter()
    const id = router.query.id

    const [viewOpen, setViewOpen] = React.useState(false)
    return (
        <div>
            <Button onClick={() => {setViewOpen(true)}} className='absolute z-2 bottom-0 right-0 m-10 rounded-[50%] p-0 w-[200px] h-[200px]'>
                <VerifyIcon style={{ scale: "4" }} />
            </Button>
            <iframe
                src="https://certifier-production-storage.s3.eu-west-1.amazonaws.com/a36efe5c-3957-45d6-876b-f2bccdea5966/pdf-files/8561f0dc-fbe5-43ef-bdb9-3d23791e659e.pdf"
                frameBorder="0"
                scrolling="auto"
                className='w-[100vw] h-[100vh]'
            ></iframe>
            {
                <Modal size="xl" isOpen={viewOpen} onOpenChange={() => setViewOpen(false)}>
                    <ModalContent>
                        <ModalHeader>Certificate Details</ModalHeader>
                        <ModalBody>
                            <div className='text-xl text-500 mb-1'>John Smith</div>
                            <div className='text-xl text-500 mb-1'>Issued At: 22/11/2023</div>
                        </ModalBody>
                    </ModalContent>
                </Modal>

            }
        </div>
    )
}

export default Certificate