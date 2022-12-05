import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";
import Filter from "../Components/Filter";
import Matchdisplay from "../Components/Matchdisplay";
import axios from "axios";
import { useCookies } from "react-cookie";

const Home = () => {
  const userlog = useSelector((state) => state.auth.user);
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [user, setuserlist] = useState([]);
  const [filteron, setfilteron] = useState(false);
  const [curruser, setcurruser] = useState({});
  const [userloaded, setuserloaded] = useState(false);
  const [userinpendinglist, setuserinpendinglist] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/getallusers").then((res) => {
      if (res.data) {
        setuserlist(res.data);
        
        // setuserloaded(true);
        // setuserinpendinglist(res.data);
        // console.log(res.data);
      }
    });
  }, []);

  useEffect(() => {
    if (userlog) {
      // console.log(userlog);
      axios
        .get(`http://localhost:4000/api/v1/userinfo?email=${userlog.email}`)
        .then((res) => {
          if (res.data) {
            setcurruser(res.data);
            // console.log(res.data)
          }
        })
        .catch((err) => {
          // console.log(err)
        });
    }
  }, []);

  useEffect(() => {
    // setuserloaded(false)
    let temparr = [];
    let temp = user.filter((item) => {
      if (item.email !== cookies.email) {
        if (!curruser.matches.find((ite) => ite.email === item.email)) {
          temparr.push(item);
          console.log("hello 1");
        }
      }
    });
    console.log(temparr)
    setuserinpendinglist(temparr);
    // console.log(userinpendinglist)
    // console.log(userinpendinglist?.length, user.length, curruser.matches.length)

    if(userinpendinglist?.length < user.length && curruser.matches?.length>0){
      setuserloaded(true)
    }
  },[]);

  useEffect(() => {

  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Matchdisplay
              user={user}
              userinfo={curruser}
              email={cookies.email}
            />
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4">
            {userloaded
              ? userinpendinglist.map((item) => {
                  if (item.email !== userlog.email) {
                    return (
                      <div key={item.id}>
                        <Card fuser={item} />
                      </div>
                    );
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
                Filter +
              </button>
            )}
            {!filteron && (
              <div className="container" style={{ backgroundColor: "#ADD8E6" }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setfilteron(!filteron)}
                >
                  Filter -
                </button>
                <Filter />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
