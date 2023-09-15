'use client'

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
        <div className='bg-[#700c0ca3] w-[69vw] p-[10px] gap-3 rounded-tr-lg flex items-center'>
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
    )
}

export default NavbarChat
