import React from "react";
import Messages from "./Messages";
import useMessageContainer from "../../Hook/messageHook/useMessageContainer";

const MessagesContainer = () => {
  const [messages] = useMessageContainer();
  return (
    <div className="messages_container">
      {messages.map((m) => (
        <Messages message={m} key={m.id} />
      ))}
    </div>
  );
};

export default MessagesContainer;
