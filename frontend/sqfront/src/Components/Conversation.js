import React from "react";
import "./Conversation.css";

function Conversation({ pic, curruser , toemailuser, settoemailuser}) {
  
  return (
    <div className="Conversation" onClick ={ ()=>{
      if(curruser?.email){
      settoemailuser(curruser?.email)
      
    }
    }}>
      {/* {
        console.log("hello ")
      } */}
      <img src={pic} alt="Profile" className="Conversation_Img" />
      <span className="Conversation_Name">{curruser.name}</span>
    </div>
  );
}

export default Conversation;
