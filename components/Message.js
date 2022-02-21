import { useMoralis } from "react-moralis";
import TimeAgo from "timeago-react";
import Avatar from "./Avatar";
function Message({ message }) {
  const { user } = useMoralis();

  const isUserMessage =
    message.attributes.ethAddress === user.get("ethAddress");
  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}>
        <Avatar username={message.attributes.userName} />
      </div>
      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage
            ? "rounded-br-none bg-pink-300"
            : "rounded-bl-none bg-blue-300"
        }`}
      >
        <p>{message.attributes.messages}</p>
      </div>
      <TimeAgo
        className={`text-[11px] italic text-gray-400 ${
          isUserMessage && "order-first pr-1"
        }`}
        datetime={message.createdAt}
      />
      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? "text-pink-300" : "text-blue-300"
        }`}
      >
        {message.attributes.userName}
      </p>
    </div>
  );
}

export default Message;
