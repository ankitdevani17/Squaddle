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
  const [searchUser, setSearchUser] = useState("");
  const [toemailuser, settoemailuser] = useState("");
  const [currmsg, setcurrmsg] = useState("");
  const [isSend, setIsSend] = useState(true);
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/userinfo?email=${userlog.email}`)
      .then((res) => {
        if (res.data) {
          setcurruser(res.data.matches);
          
        }
      });
  }, []);

 
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [sendmsgclick, setsendmsgclick] = useState(false);

  
  const [convo, setCurrConvo] = React.useState([]);
  const [convo1, setCurrConvo1] = React.useState([]);
  const [conversations, setConversations] = React.useState([]);
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
    let arr = [...convo];
    arr.push(...convo1);
    console.log(arr);
    arr.sort((a, b) => {
      return new Date(a.timestamp) - new Date(b.timestamp);
    });
    setConversations(arr);
  }, [convo, convo1, sendmsgclick]);

  const sendmessage = () => {
    var newTime = new Date().toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });
    console.log("newtime is ", newTime);
    // setFormattedTime(newTime);
    console.log(currmsg);
    setIsSend(true);
    // console.log("hello bhai print karo ");
    axios
      .post("http://localhost:4000/api/v1/message", {
        from_email: cookies.email,
        to_email: toemailuser,
        message: currmsg,
        timestamp: newTime,
      })
      .then((res) => {
        console.log(newTime);
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
            <input
              placeholder="Search For Friends"
              className="chatMenuInput"
              onChange={(e) => {
                setSearchUser(e.target.value);
              }}
            />

            {curruser
              .filter((val) => {
                if (searchUser === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchUser.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((user) => {
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
