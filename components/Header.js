import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
function Header() {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-400 border-b-2 border-pink-700 text-center">
      <div className="relative h-48 w-48 mx-auto border-gray-800 border-8 rounded-full">
        {/* Avatar */}
        <Avatar logoutOnPress />
      </div>
      {/* Message */}
      <h1 className="text-2xl md:text-3xl ">Welcome to the Metaverse</h1>
      <h2 className="text-3xl md:text-4xl font-mono truncate">
        {user.getUsername()}
      </h2>

      {/* Change username component */}
      <ChangeUsername />
    </div>
  );
}

export default Header;
