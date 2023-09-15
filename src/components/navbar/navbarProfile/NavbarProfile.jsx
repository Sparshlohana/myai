import { ThreeDots } from '@/components/global/icons/Icons'
import Image from 'next/image'
import React from 'react'

const NavbarProfile = () => {
    const image = "/assets/images/profile.jpg"
    return (
        <>
            <div className='bg-[#700c0ca3] p-[10px] w-[30vw] rounded-tl-lg flex items-center justify-between' >
                <div className=''>
                    <Image src={image} className='rounded-full cursor-pointer' width={50} height={50} alt='profileImg' />
                </div>
                <div>
                    <ThreeDots className="fill-white cursor-pointer" />
                </div>
            </div>
        </>
    )
}

export default NavbarProfile
