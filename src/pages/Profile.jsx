import { Eye, LogOut } from "lucide-react";
import { useState } from "react";
import Data from "./Data";


const Profile = () => {

  const [showData, setShowData] = useState(false)
  
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="h-screen bg-[#14161b]">
      <nav className="h-20 bg-indigo-300 text-white font-bold text-2xl flex justify-center gap-16 items-center">
        <button
         onClick={() =>setShowData(true)}
          className="flex gap-2 justify-center items-center hover:scale-110 active:scale-95"
        >
          View Details <Eye size={19} strokeWidth={3.5} />
        </button>

        <button
          onClick={logout}
          className="flex items-center justify-center gap-2 hover:scale-110 active:scale-95"
        >
          Log Out <LogOut size={19} strokeWidth={3.5} color="white" />
        </button>
      </nav>

      <div className="flex justify-center  h-[calc(100vh-5rem)]">
      { !showData ? (<div className=" flex items-center"><h1 className="text-white font-extrabold text-5xl">
          Welcome, {user?.name}
        </h1></div>) : (
          <Data onBack={() =>setShowData(false)}   />
        )}
      </div>
    </div>
  );
};

export default Profile;
