import React from "react";
import "./Conversation.css";

function Conversation({pic, curruser}) {
  return (
    <div className="Conversation">
      <img src={pic} alt="Profile" className="Conversation_Img" />
      <span className="Conversation_Name">{curruser}</span>
    </div>
  );
}

export default Conversation;
