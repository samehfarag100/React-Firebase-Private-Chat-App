import React from "react";
import imgIcon from "../../img/img.png";
import attachIcon from "../../img/attach.png";
import useInputHooks from "../../Hook/messageHook/useInputHooks";

const InputComponent = () => {
  const [setText, text, setImg, handelSend] = useInputHooks();
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something...."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />

      <div className="send">
        <img src={attachIcon} />
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={imgIcon} />
        </label>
        <button onClick={handelSend}>Send</button>
      </div>
    </div>
  );
};

export default InputComponent;
