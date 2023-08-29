"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
const Profile = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("logout success");
      router.push("/login");
    } catch (error) {
      console.log(error.message);

      toast.error(error.message);
    }
  };
  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-white">Profile</h1>
      <button
        onClick={logout}
        className="bg-blue-700 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
      >
        logout
      </button>
    </div>
  );
};

export default Profile;
