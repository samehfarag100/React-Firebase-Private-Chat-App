import React from "react";
import useMessagesHooks from "../../Hook/messageHook/useMessagesHooks";

const Messages = ({ message }) => {
  const [ref, currentUser, data] = useMessagesHooks(message);
  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"} `}
    >
      <div className="message_info">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
        />
        <span>Just now</span>
      </div>

      <div className="message_content">
        <p>{message.text}</p>
        {message.img && <img src={message.img} />}
      </div>
    </div>
  );
};

export default Messages;
