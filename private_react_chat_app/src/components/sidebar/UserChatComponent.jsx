import React from "react";
import useSidebarHooks from "../../Hook/sidebarHook/useSidebarHooks";
const UserChatComponent = () => {
  const [chats, handelSelect] = useSidebarHooks();
  return (
    <div className="user_chat">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="user_chat_container"
            key={chat[0]}
            onClick={() => handelSelect(chat[1].userInfo)}
          >
            <div className="user_chat_image">
              <img src={chat[1].userInfo.photoURL} />
            </div>

            <div className="user_chat_info">
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UserChatComponent;
