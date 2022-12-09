import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";
import Filter from "../Components/Filter";
import Matchdisplay from "../Components/Matchdisplay";
import axios from "axios";
import { useCookies } from "react-cookie";

const Home = (props) => {
  
  const userlog = useSelector((state) => state.auth.user);
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [interestforfilter, setinterestforfilter] = useState("");
  const [user, setuserlist] = useState([]);
  const [storegetuser, setstoregetuser] = useState([]);
  const [filteron, setfilteron] = useState(false);
  const [curruser, setcurruser] = useState({});
  const [userloaded, setuserloaded] = useState(false);
  const [cardNumber, setCardNumber] = useState(0);
  const [userinpendinglist, setuserinpendinglist] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/getallusers").then((res) => {
      if (res.data) {
        setuserlist(res.data);
        setstoregetuser(res.data);
        
      }

    });
  }, []);
  useEffect(() => {
    if (user) {
      if (interestforfilter) {
        console.log(interestforfilter, "badalll agaya");

        if (interestforfilter === "All") {
          setuserlist(storegetuser);
        } else {
          let temp = user.filter((item) => {
            if (item?.role) {
              if (item.role.includes(interestforfilter)) {
                return item;
              } else {
                console.log("else me hai ");
              }
            } else {
              return item;
            }
          });
          console.log(temp);
          setuserlist(temp);
        }
      }
    }
  }, [interestforfilter]);

  useEffect(() => {
    if (cookies.email) {
      // console.log(userlog);
      axios
        .get(`http://localhost:4000/api/v1/userinfo?email=${cookies.email}`)
        .then((res) => {
          setcurruser(res.data)
        })
        .catch((err) => {});
    }
  }, [user]);

  useEffect(() => {
    let temparr = [];
    console.log(curruser)
    console.log(user)
    if (curruser.matches) {
      
      let temp = user.filter((item) => {
        
        if (item.email !== cookies.email) {
          // console.log("here is curr", curruser)
          if (curruser.matches.find((ite) => ite.email === item.email)) {
            console.log("match m ")
          } else if (
            curruser.leftSwipe.find((ite) => ite.email === item.email)
          ) {
            console.log("left swipe ")

          } else {
            temparr.push(item);
            
          }
        }
      });
    }
    else{
      temparr = user.filter ( (item)=>{
        if(item.email!==cookies.email){
        }
        else{
          return item
        }
      })

    }

    console.log(temparr)
    console.log(userinpendinglist)
    setuserinpendinglist(temparr)
    setuserloaded(true)
  }, [user]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Matchdisplay
              user={user}
              userinfo={curruser}
              email={cookies.email}
              listofmatchuser={props.listofmatchuser}
              setlistofmatchuser={props.setlistofmatchuser}
            />
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4">
            {userloaded
              ? userinpendinglist.map((item, key) => {
                  if (key == cardNumber) {
                    if (item.email !== userlog.email) {
                      return (
                        <div key={item.id}>
                          <Card
                            fuser={item}
                            email={cookies.email}
                            cardNumber={cardNumber}
                            setCardNumber={setCardNumber}
                          />
                        </div>
                      );
                    }
                  }
                })
              : "Loading"}
          </div>
          {/* <div className='col-md-1'>
            </div> */}
          <div className="col-md-3">
            {filteron && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setfilteron(!filteron)}
              >
              Filter by +
              </button>
            )}
            {!filteron && (
              <div className="container" style={{ backgroundColor: "skyblue" }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setfilteron(!filteron)}
                >
                Filter by -
                </button>
                <Filter
                  interestforfilter={interestforfilter}
                  setinterestforfilter={setinterestforfilter}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
