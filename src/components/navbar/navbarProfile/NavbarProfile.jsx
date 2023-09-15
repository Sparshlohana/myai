import { ThreeDots } from '@/components/global/icons/Icons'
import ProfilePic from '@/components/global/profilePic/ProfilePic'

const NavbarProfile = () => {
    return (
        <>
            <div className='bg-[#700c0ca3] p-[10px] w-[30vw] rounded-tl-lg flex items-center justify-between' >
                <ProfilePic />
                <div>
                    <ThreeDots className="fill-white cursor-pointer" />
                </div>
            </div>
        </>
    )
}

export default NavbarProfile
