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
} from "@nextui-org/react";
import NextLink from "next/link";

import { Logo } from "@/components/icons";

const Certificate = () => {
    const router = useRouter()
    const id = router.query.id
    return (
        <div className="relative flex flex-col h-screen">

            <NextUINavbar maxWidth="xl" position="sticky" height={"108px"}>
                <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                    <NavbarBrand className="gap-3 max-w-fit">
                        <NextLink className="flex justify-start items-center gap-1" href="/">
                            <Logo size={80} />
                            <p className="text-inherit" style={{ fontSize: "30px" }}>CertiCheck</p>
                        </NextLink>
                    </NavbarBrand>
                </NavbarContent>
            </NextUINavbar>
            <main className="container px-6">
                {
                    id ? (
                        <div className='flex w-full gap-10'>
                            <iframe
                                src="https://certifier-production-storage.s3.eu-west-1.amazonaws.com/a36efe5c-3957-45d6-876b-f2bccdea5966/pdf-files/8561f0dc-fbe5-43ef-bdb9-3d23791e659e.pdf"
                                frameBorder="0"
                                scrolling="auto"
                                className='flex-1 h-[85vh]'
                            ></iframe>
                            <div className='flex-1'>
                                <div className='text-3xl text-500 leading-9 mb-2'>Domicle Certificate</div>
                                <div className='text-xl text-500 mb-1'>John Smith</div>
                                <div className='text-xl text-500 mb-1'>Issued At: 22/11/2023</div>
                                <div className='text-base text-500 mb-1'>Verified: Yes</div>
                            </div>
                        </div>
                    ) : <div className='text-lg'>No Certificate Found</div>
                }
            </main>
        </div>
    )
}

export default Certificate