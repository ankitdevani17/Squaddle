import React from "react";
import "./ChatOnline.css";

function ChatOnline({ Photo }) {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img className="chatOnlineImg" src={Photo} alt="" />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Dhaval Chaudhary</span>
      </div>
    </div>
  );
}

export default ChatOnline;
