import { useMoralis } from "react-moralis";
export default function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUserName = () => {
    const userName = prompt(
      `Enter Your new Username (current: ${user.getUsername()})`
    );

    if (!userName) return;

    setUserData({ username: userName });
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        disabled={isUserUpdating}
        className="hover:text-pink-700"
        onClick={setUserName}
      >
        Change your username
      </button>
    </div>
  );
}
