import React, { useEffect, useState } from "react";
import MatchDispProf from "./MatchDispProf";
import LikedDispProf from "./LikedDispProf";
const Matchdisplay = (props) => {
  const [displikeprof, setdisplikeprof] = useState(false);
  const [match, setmatch] = useState(
    props?.userinfo.matches ? props.userinfo.matches : []
  );

  useEffect(() => {
      setmatch(props?.userinfo.matches ? props.userinfo.matches : []);
      
  }, [props.userinfo.matches]);
  return (
    <div style={{ backgroundColor: "yellow  " }}>
      <div className="container text-center">
        <h3>My Matches</h3>
        <div className="row">
          {
            // console.log(match)
          }
          {match.map((mat) => {
            return (
                <MatchDispProf key={mat.name} name={mat.name} />
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
