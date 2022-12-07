import axios from "axios";
import React, { useEffect, useState } from "react";
import imga from "../Image/avatar.jpeg";

import { useCookies } from "react-cookie";

const MatchDispProf = (props) => {
  const [datamatchuser, setdatamatchuser] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const displayprof = () => {
    console.log("helo ")
    console.log(props.dispmatchmodal)
    props.setdispmatchmodal(true)
    props.setcurrclickemail(props.email)
  };

//   useEffect(() => {
//     axios.get("http://localhost:4000/api/v1//matchedUser", {
//       params: props.matcharr,
//     },
//     {
//         email: cookies.email,
//       },
//       { mode: "cors" },
//       { withCredentials: true }).then ((res)=>{
//         console.log(res.data)
//     })
//     ;
//   }, []);
  return (
    <div className="col-5 " onClick={displayprof}>
      <img src={imga} alt=".." width={"80px"} style={{ borderRadius: "50%" }} />
      <h6>{props.name}</h6>
    </div>

  );
};

export default MatchDispProf;
