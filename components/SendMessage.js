import { useState } from "react";
import { useMoralis } from "react-moralis";

export default function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        messages: message,
        userName: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
          setMessage("");
        },
        (error) => {
          console.log(error.message);
        }
      );
  };
  return (
    <form className="flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl rounded-full shadow-xl border-4 border-blue-400">
      <input
        type="text"
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        placeholder={`Enter a Message ${user.getUsername()}..`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );
}
