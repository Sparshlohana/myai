import Image from "next/image"

const ProfilePic = () => {
    const image = "/assets/images/profile.jpg"
    return (
        <div>
            <Image src={image} className='rounded-full cursor-pointer' width={50} height={50} alt='profileImg' />
        </div>
    )
}

export default ProfilePic
