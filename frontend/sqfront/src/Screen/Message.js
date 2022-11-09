import React from "react";
import "./Message.css";
import Conversation from "./Conversation";
import Text from "./Text";
import ChatOnline from "./ChatOnline";
import photo from "../Image/about-bg1.jpeg";
import photo1 from "../Image/avatar.jpeg";

function Message() {
  return (
    <>
      <div className="message">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search For Friends" className="chatMenuInput" />
            <Conversation pic={photo} />
            <Conversation pic={photo1} />
            <Conversation pic={photo} />
            <Conversation pic={photo1} />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Text />
              <Text own={true} />
              <Text />
              <Text own={true} />
              <Text />
              <Text own={true} />
              <Text />
              <Text own={true} />
              <Text />
              <Text own={true} />
              <Text />
            </div>

            <div className="chatBoxBottom">
              <textarea
                className="chatTextInput"
                placeholder="Type Something..."
              ></textarea>
              <button className="chatSubmitButton"> Send </button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline Photo={photo} />
            <ChatOnline Photo={photo1} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
