import React from "react";
import "./Conversation.css";

function Conversation({ pic, curruser , toemailuser, settoemailuser}) {
  
  return (
    <div className="Conversation" onClick ={ ()=>{
      if(curruser?.email){
      settoemailuser(curruser?.email)
    }
    }}>
     
      {/* <img src={pic} alt="Profile" className="Conversation_Img" /> */}
      <h4 className="Conversation_Name">{curruser.name}</h4>
    </div>
  );
}

export default Conversation;
