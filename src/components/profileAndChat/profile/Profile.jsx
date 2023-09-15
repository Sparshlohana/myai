import ProfilePic from "@/components/global/profilePic/ProfilePic"
import Profiles from "@/components/global/profiles/Profiles"
import Search from "@/components/global/search/Search"

const Profile = () => {
    return (
        <div className="bg-[#540000] w-[30vw]">
            <div className="p-3"><Search /></div>
            <div className="max-h-[78vh] overflow-auto scrollbar">
                <Profiles />
                <Profiles />
                <Profiles />
                <Profiles />
                <Profiles />
                <Profiles />
                <Profiles />
                <Profiles />
                <Profiles />
                <Profiles />
                <Profiles />
                <Profiles />
                <Profiles />
                <Profiles />
                <Profiles />
                <Profiles />
                <Profiles />
            </div>
        </div>
    )
}

export default Profile
