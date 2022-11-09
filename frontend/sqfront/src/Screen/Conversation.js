import React from "react";
import "./Conversation.css";

function Conversation({pic}) {
  return (
    <div className="Conversation">
      <img src={pic} alt="Profile" className="Conversation_Img" />
      <span className="Conversation_Name">Dhaval Chaudhary</span>
    </div>
  );
}

export default Conversation;
