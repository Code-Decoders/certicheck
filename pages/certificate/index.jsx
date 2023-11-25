"use client"
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
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
    ModalBody,
    CircularProgress
} from "@nextui-org/react";
import NextLink from "next/link";

import SupabaseDatabase from "@/services/supabaseDatabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { VerifyIcon } from "@/components/icons";

const Certificate = () => {
    const router = useRouter()
    const id = router.query.id
    const supabase = createClientComponentClient();
    const [certificate, setCerttificate] = useState()
    const [loading, setLoading] = useState(true)


    const getData = async () => {
        SupabaseDatabase.init(supabase);

        const data = await SupabaseDatabase.getCertificate(parseInt(id))
        console.log(data[0])
        setCerttificate(data[0])
        setLoading(false)
    }

    useEffect(() => {
        if (id)
            getData()
    }, [id])

    const [viewOpen, setViewOpen] = React.useState(false)
    if (!certificate) {
        return <div className='absolute z-2 bottom-0 right-0 left-0 top-0 w-full flex justify-center items-center'><CircularProgress /></div>
    }
    else
        return (
            <div>
                <Button onClick={() => { setViewOpen(true) }} className='absolute z-2 bottom-0 right-0 m-10 rounded-[50%] p-0 w-[200px] h-[200px]'>
                    <VerifyIcon style={{ scale: "4" }} />
                </Button>
                <iframe
                    src={`https://xgxiyspoqvchlcrlizzi.supabase.co/storage/v1/object/public/Certicheck/${certificate['file_id']}.pdf`}
                    frameBorder="0"
                    scrolling="auto"
                    className='w-[100vw] h-[100vh]'
                ></iframe>
                {
                    <Modal size="xl" isOpen={viewOpen} onOpenChange={() => setViewOpen(false)}>
                        <ModalContent>
                            <ModalHeader>Certificate Details</ModalHeader>
                            <ModalBody>
                                <div className='text-xl text-500 mb-1'>{certificate.name}</div>
                                <div className='text-xl text-500 mb-1'>Aadhar Number: {certificate.aadhar}</div>
                                <div className='text-xl text-500 mb-1'>Phone: {certificate.phone}</div>
                                <div className='text-xl text-500 mb-1'>Email Id: {certificate.email}</div>
                                <div className='text-xl text-500 mb-1'>Issued At: {new Date(certificate.created_at).toDateString()}</div>
                            </ModalBody>
                        </ModalContent>
                    </Modal>

                }
            </div>
        )
}

export default Certificate