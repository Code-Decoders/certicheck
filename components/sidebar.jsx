import { Avatar, Button, Divider } from '@nextui-org/react'
import React from 'react'
import { siteConfig } from "@/config/site";
import { useRouter } from 'next/router';

const Sidebar = () => {
    const router = useRouter()
    if (router.pathname.includes("verify")) {
        return <></>
    }
  return (
    <div className='hidden sm:flex sidebar'>
        <Avatar src='' className='avatar'/>
        <p className='text-3xl text-500 leading-9 text-center'>{router.pathname.includes("admin") ? "Admin" : "Maadhav Sharma"}</p>
        <p className='text-base text-500 leading-6 text-end'>Aadhaar: 3278 7976 1108</p>
        <p className='text-base text-500 leading-6 text-end mb-5'>Mobile: +91 70410 14595</p>
        {
            (router.pathname.includes("admin") ? siteConfig.navAdminItems : siteConfig.navItems).map(val => {
                return <Button onClick={() => router.push(val.href)} key={val.label} color='primary' variant={router.pathname === val.href ? "solid" :'flat'} className='mb-2'>{val.label}</Button>
            })
        }
    </div>
  )
}

export default Sidebar