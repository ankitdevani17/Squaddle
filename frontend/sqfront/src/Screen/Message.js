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
  const [currmsg, setcurrmsg] = useState("");
  const [isSend, setIsSend] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/userinfo?email=${userlog.email}`)
      .then((res) => {
        if (res.data) {
          setcurruser(res.data.matches);
          // console.log(res.data.matches);
        }
      });
  }, []);

  // {
  //   console.log(toemailuser);
  // }
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [sendmsgclick, setsendmsgclick] = useState(false);

  // const [currentreceivinguser, setcurrentreceivinguser] =
  //   React.useState("Ankit");
  const [convo, setCurrConvo] = React.useState([]);
  const [convo1, setCurrConvo1] = React.useState([]);
  const [conversations, setConversations] = React.useState([
    // {
    //   from_email: "a@g.co",
    //   to_email: "ankitdevani17@gmail.com",
    //   message: "Sending message is working fine",
    //   timestamp: "2022-11-11T18:42:00.339+00:00",
    // },
    // {
    //   from_email: "a@g.co",
    //   to_email: "ankitdevani17@gmail.com",
    //   message: "Sending message is working fine 2",
    //   timestamp: "2023-11-11T18:42:00.339+00:00",
    // },
    // {
    //   from_email: "ankitdevani17@gmail.com",
    //   to_email: "a@g.co",
    //   message: "Sending message is working fine 3",
    //   timestamp: "2022-11-11T18:42:00.339+00:00",
    // },
    // {
    //   from_email: "ankitdevani17@gmail.com",
    //   to_email: "a@g.co",
    //   message: "Sending message is working fine 3",
    //   timestamp: "2024-11-11T18:42:00.339+00:00",
    // },
  ]);
  const messageSent = () => {
    if (toemailuser) {
      axios
        .get(
          `http://localhost:4000/api/v1/message?from_email=${toemailuser}&to_email=${cookies.email}`,
          { mode: "cors" },
          { withCredentials: true }
        )
        .then((res) => {
          // console.log(res.data);
          setCurrConvo(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const reverseMessageSent = () => {
    if (toemailuser) {
      axios
        .get(
          `http://localhost:4000/api/v1/message?from_email=${cookies.email}&to_email=${toemailuser}`,
          { mode: "cors" },
          { withCredentials: true }
        )
        .then((res) => {
          setCurrConvo1(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    messageSent();
  }, [toemailuser]);

  useEffect(() => {
    reverseMessageSent();
  }, [toemailuser]);

  useEffect(() => {
    // setConversations(convo)

    let arr = [...convo];
    arr.push(...convo1);
    console.log(arr);
    arr.sort((a, b) => {
      return new Date(a.timestamp) - new Date(b.timestamp);
    });
    setConversations(arr);
  }, [convo, convo1, sendmsgclick]);

  const sendmessage = () => {
    console.log(currmsg);
    setIsSend(true);
    console.log("hello bhai print karo ");
    axios
      .post("http://localhost:4000/api/v1/message", {
        from_email: cookies.email,
        to_email: toemailuser,
        message: currmsg,
      })
      .then((res) => {
        console.log("msg delivered");
        setcurrmsg("");
        messageSent();
        reverseMessageSent();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="message">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search For Friends" className="chatMenuInput" />

            {curruser.map((user) => {
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
          {toemailuser ? (
            <div className="chatBoxWrapper">
              <div className="chatBoxTop">
                {conversations.map((item) => {
                  return (
                    <>
                      {cookies.email === item.to_email ? (
                        <Text message={item.message} item={item} />
                      ) : (
                        <Text own={true} message={item.message} item={item} />
                      )}
                    </>
                  );
                })}
              </div>
              <div className="chatBoxBottom">
                <textarea
                  className="chatTextInput"
                  placeholder="Type Something..."
                  value={isSend ? "" : currmsg}
                  onChange={(e) => {
                    setIsSend(false);
                    setcurrmsg(e.target.value);
                  }}
                ></textarea>
                <button onClick={sendmessage} className="chatSubmitButton">
                  {" "}
                  Send{" "}
                </button>
              </div>
            </div>
          ) : (
            "No user selected"
          )}
        </div>

        <div className="chatOnline">
          <div className="chatOnlineWrapper"></div>
        </div>
      </div>
    </>
  );
}

export default Message;
