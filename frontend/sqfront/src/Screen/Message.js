import React, { useState, useEffect } from "react";
import "./Message.css";
import axios from "axios";

import Conversation from "../Components/Conversation";
import Text from "../Components/Text";
import ChatOnline from "../Components/ChatOnline";
import photo from "../Image/about-bg1.jpeg";
import photo1 from "../Image/avatar.jpeg";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";

function Message() {
  const userlog = useSelector((state) => state.auth.user);
  const [curruser, setcurruser] = useState([]);

  const [toemailuser, settoemailuser] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/userinfo?email=${userlog.email}`)
      .then((res) => {
        if (res.data) {
          setcurruser(res.data.matches);
          console.log(res.data.matches);
        }
      });
  }, []);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  // const [currentreceivinguser, setcurrentreceivinguser] =
  //   React.useState("Ankit");
  const [convo, setCurrConvo] = React.useState([]);
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
  // const currentchattinguser = (e) => {
  //   setcurrentreceivinguser(e.target.value);
  // };

  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://localhost:4000/api/v1/message?from_email=a@g.co&to_email=${toemailuser}`,
  //       { withCredentials: true, mode: "cors" }
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       // setCurrConvo(res.data)
  //     });
  // }, []);

  return (
    <>
      <div className="message">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search For Friends" className="chatMenuInput" />
            {
              console.log(toemailuser)
            }
            {
            curruser.map((user) => {
              return (
                <>
                  <Conversation
                    toemailuser={toemailuser}
                    settoemailuser={settoemailuser}
                    curruser={user}
                  />
                </>
              );
            })}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              {conversations.map((item) => {
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
          <div className="chatOnlineWrapper"></div>
        </div>
      </div>
    </>
  );
}

export default Message;
