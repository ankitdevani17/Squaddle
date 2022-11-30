import React, { useState,useEffect } from "react";
import "./Message.css";
import axios from "axios"

import Conversation from "../Components/Conversation";
import Text from "../Components/Text";
import ChatOnline from "../Components/ChatOnline";
import photo from "../Image/about-bg1.jpeg";
import photo1 from "../Image/avatar.jpeg";
import { useCookies } from "react-cookie";



function Message() {
  const getMessage = async ()=>{
   
    // setCurrConvo(res.data)
    // console.log(res)
  }

  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [currentreceivinguser, setcurrentreceivinguser] = React.useState("Ankit");
const[convo,setCurrConvo]= React.useState([])
  const [conversations, setConversations] = React.useState([
    {
      from_email: "a@g.co",
      to_email: "ankitdevani17@gmail.com",
      message: "Sending message is working fine",
      timestamp: "2022-11-11T18:42:00.339+00:00",
    },
    {
      from_email: "a@g.co",
      to_email: "ankitdevani17@gmail.com",
      message: "Sending message is working fine 2",
      timestamp: "2023-11-11T18:42:00.339+00:00",
    },
    {
      from_email: "ankitdevani17@gmail.com",
      to_email: "a@g.co",
      message: "Sending message is working fine 3",
      timestamp: "2022-11-11T18:42:00.339+00:00",
    },
    {
      from_email: "ankitdevani17@gmail.com",
      to_email: "a@g.co",
      message: "Sending message is working fine 3",
      timestamp: "2024-11-11T18:42:00.339+00:00",
    },
  ]);
  const currentchattinguser = (e) => {
    setcurrentreceivinguser(e.target.value);
  };

  useEffect (()=>{
    axios
    .get(`http://localhost:4000/api/v1/message`,{
      from_email : "a@g.co",
      to_email:"ankitdevani17@gmail.com"
    })
    .then((res) => {
      if (res.data) {
        // setcurruser(res.data);
        console.log(res)
      }
    })
    .catch((err) => {
      // console.log(err)
    });
    },[])
  return (
    <>
      <div className="message">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search For Friends" className="chatMenuInput" />
            <Conversation
              onClick={currentchattinguser}
              curruser={currentreceivinguser}
              pic={photo}
            />
             <button className="chatSubmitButton" onClick = {getMessage}> Chat with Ankit</button>
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              {conversations

                // .sort((item) => {
                //   return item.sort((x, y) => {
                //     return new Date(x.timestamp) < new Date(y.timestamp) ? 1 : -1
                //   })
                // })

                .map((item) => {
                  return (
                    <>
                      {cookies.email === item.to_email ? (
                        <Text own={true} message={item.message} />
                      ) : (
                        <Text message={item.message} />
                      )}
                    </>
                  );
                })}
              {}
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
            {/* <ChatOnline Photo={photo} /> */}
            {/* <ChatOnline Photo={photo1} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
