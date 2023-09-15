import Chat from "./chat/Chat"
import Profile from "./profile/Profile"

const ProfileAndChat = () => {
    return (
        <div className="flex gap-1">
            <Profile />
            <Chat />
        </div>
    )
}

export default ProfileAndChat
