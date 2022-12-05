import React, { useEffect, useState } from "react";
import MatchDispProf from "./MatchDispProf";
import LikedDispProf from "./LikedDispProf";

const Matchdisplay = (props) => {
  const [displikeprof, setdisplikeprof] = useState(false);
  const [match, setmatch] = useState(
    props?.userinfo.matches ? props.userinfo.matches : []
  );
  const [matcharr, setmatcharr] = useState([]);


  useEffect(() => {
    let temparr = []
    let temp = match.filter((item) => {
      if (matcharr.find((matcharr) => matcharr === item.email)) {
      } else {
        temparr.push({ name: item.name, email: item.email });
        setmatcharr(temparr);
      }
    });
    // console.log(props.user);
    // console.log(matcharr)
    
    let finalmatcharr = [];
    for (let i = 0; i < matcharr.length; i++) {
      let temp = props.user.filter((item) => {
        if (item.email === matcharr[i].email  ) {
          if (item.matches.find((ite) => ite.email === props.email)) {
            // console.log("hello ")
            finalmatcharr.push({name : matcharr[i].name , email : matcharr[i].email});
          }
        }
      });
    }
    // console.log(finalmatcharr)
    setmatcharr(finalmatcharr);

  }, [props.userinfo.matches]);

  useEffect(() => {
    setmatch(props?.userinfo.matches ? props.userinfo.matches : []);
  }, [props.userinfo.matches]);
  return (
    <div style={{ backgroundColor: "yellow  " }}>
      <div className="container text-center">
        <h3>My Matches</h3>
        <div className="row">
          {matcharr.map((mat) => {
            return (
              <MatchDispProf
                key={mat.name}
                matcharr={matcharr}
                name={mat.name}
              />
            );
          })}
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
