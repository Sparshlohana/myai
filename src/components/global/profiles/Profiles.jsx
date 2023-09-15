import React from 'react'
import ProfilePic from '../profilePic/ProfilePic'

const Profiles = () => {
    return (
        <div className="hover:bg-[#620B08] p-3 flex items-center gap-4 cursor-pointer">
            <ProfilePic />
            <div className='flex flex-col'>
                <div>
                    <h1 className='text-lg font-medium text-white'>Sparsh&apos;s AI</h1>
                </div>
                <div>
                    <p className='text-[0.8rem] tracking-wide text-[#ffe4e4] font-extralight'>Latest chat</p>
                </div>
            </div>
        </div>
    )
}

export default Profiles
