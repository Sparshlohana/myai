import NavbarChat from "./navbarChat/NavbarChat"
import NavbarProfile from "./navbarProfile/NavbarProfile"

const Navbar = () => {
    return (
        <div className="flex gap-1">
            <NavbarProfile />
            <NavbarChat />
        </div>
    )
}

export default Navbar
