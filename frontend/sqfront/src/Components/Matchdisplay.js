import React, { useEffect, useState } from "react";
import MatchDispProf from "./MatchDispProf";
import LikedDispProf from "./LikedDispProf";
import Modalmatchinfo from "./Modalmatchinfo";
import axios from "axios";

const Matchdisplay = (props) => {
  const [displikeprof, setdisplikeprof] = useState(false);
  const [dispmatchmodal, setdispmatchmodal] = useState(false)
  const [userdata, setuserdata] = useState({})
  const [currclickemail, setcurrclickemail] = useState("")
  const [match, setmatch] = useState(
    props?.userinfo.matches ? props.userinfo.matches : []
  );
  const [matcharr, setmatcharr] = useState([]);
  useEffect ( ()=>{
    let temp = props.user.filter( (item)=>{
      if(item.email === currclickemail){
        setuserdata(item)
      }
    })
  },[currclickemail])
  useEffect(() => {
    let temparr = [];
    let temp = match.filter((item) => {
      if (matcharr.find((matcharr) => matcharr === item.email)) {
      } else {
        temparr.push({ name: item.name, email: item.email });
        // setmatcharr(temparr);
      }
    });

    let finalmatcharr = [];
    for (let i = 0; i < temparr.length; i++) {
      let temp = props.user.filter((item) => {
        if (item.email === temparr[i].email) {
          if (item.matches.find((ite) => ite.email === props.email)) {
            finalmatcharr.push({
              name: temparr[i].name,
              email: temparr[i].email,
            });
          }
        }
      });
    }
    setmatcharr(finalmatcharr);
  }, [props.userinfo.matches]);

  useEffect(() => {}, []);

  useEffect(() => {
    setmatch(props?.userinfo.matches ? props.userinfo.matches : []);
  }, [props.userinfo.matches]);
  return (
    <div style={{ backgroundColor: "yellow  " }}>
      <div className="container text-center">
        <h3>My Matches</h3>
        <div className="row">
        <Modalmatchinfo dispmatchmodal={dispmatchmodal} 
        data={userdata } 
        setdispmatchmodal={setdispmatchmodal}/>
          {matcharr
            ? matcharr.map((mat) => {
                return (
                  <MatchDispProf
                    key={mat.name}
                    matcharr={matcharr}
                    email = {mat.email}
                    setcurrclickemail = {setcurrclickemail}
                    name={mat.name}
                    dispmatchmodal = {dispmatchmodal}
                    setdispmatchmodal = {setdispmatchmodal}
                  />
                );
              })
            : "No match found"}
        </div>
      </div>
      {/* <button type='button' onClick={() => setdisplikeprof(!displikeprof)} className='btn btn-primary mx-5'> {displikeprof ? "+" : "-"} </button>
            {
                !displikeprof

                &&
                <div className='container text-center'>
                    <h3 className='text-center'>
                        People who liked you
                    </h3>
                    <div className='row'>
                        {
                            matches.map((match) => {
                                return (
                                    <>

                                        <LikedDispProf img={match.img} />
                                    </>
                                )
                            }
                            )
                        }
                    </div>
                </div>
            } */}
    </div>
  );
};

export default Matchdisplay;
