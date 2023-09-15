import Navbar from "@/components/navbar/Navbar";
import ProfileAndChat from "@/components/profileAndChat/ProfileAndChat";

export default function Home() {
  return (
    <div className="p-4">
      <Navbar />
      <ProfileAndChat />
    </div>
  )
}
