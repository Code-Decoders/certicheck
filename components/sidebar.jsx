import { Avatar, Button, Divider } from '@nextui-org/react'
import React from 'react'
import { siteConfig } from "@/config/site";
import { useRouter } from 'next/router';

const Sidebar = () => {
    const router = useRouter()
  return (
    <div className='hidden sm:flex sidebar'>
        <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' className='avatar'/>
        <p className='text-3xl text-500 leading-9 text-center'>Admin</p>
        <p className='text-base text-500 leading-6 text-end'>Aadhaar: 3278 7976 1108</p>
        <p className='text-base text-500 leading-6 text-end mb-5'>Mobile: +91 70410 14595</p>
        {
            siteConfig.navItems.map(val => {
                return <Button onClick={() => router.push(val.href)} key={val.label} color='primary' variant='flat' className='mb-2'>{val.label}</Button>
            })
        }
    </div>
  )
}

export default Sidebar