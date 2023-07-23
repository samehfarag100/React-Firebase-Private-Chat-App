import React, { useContext } from "react";
import camIcon from "../img/cam.png";
import moreIcon from "../img/more.png";
import addIcon from "../img/add.png";
import MessagesContainer from "./messges/MessagesContainer";
import InputComponent from "./messges/InputComponent";
import { ChatContext } from "../context/ChatContext";
const MessagesComponent = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat"> 
      <div className="chat_container">
        <span>{data.user?.displayName}</span>
        <div className="chat_icons">
          <img src={camIcon} />
          <img src={addIcon} />
          <img src={moreIcon} />
        </div>
      </div>
      <MessagesContainer />
      <InputComponent />
    </div>
  );
};

export default MessagesComponent;
