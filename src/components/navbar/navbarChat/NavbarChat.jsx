'use client'

import { SearchIcon, ThreeDots } from '@/components/global/icons/Icons';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const NavbarChat = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        handleShow();
    }, []);

    const handleShow = () => {
        setTimeout(() => {
            setShow(false);
        }, 4000);
    }
    const image = "/assets/images/profile.jpg"
    return (
        <div className='bg-[#700c0ca3] w-[69vw] p-[10px] rounded-tr-lg flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <div>
                    <Image src={image} className='rounded-full cursor-pointer' width={50} height={50} alt='profileImg' />
                </div>
                <div className='flex flex-col'>
                    <div>
                        <h1 className='text-xl font-medium text-white'>Saumya</h1>
                    </div>
                    {show && (
                        <div>
                            <p className='text-[0.85rem] tracking-wide text-[#ffe4e4] font-extralight'>click here for contact info</p>
                        </div>
                    )}
                </div>
            </div>
            <div className='flex items-center gap-7'>
                <SearchIcon className='fill-white cursor-pointer' />
                <ThreeDots className='fill-white cursor-pointer' />
            </div>
        </div>
    )
}

export default NavbarChat
