import React, { useEffect, useState } from "react";
import avatar from "../Image/avatar.jpeg";
import { useCookies } from "react-cookie";
import axios from "axios";
// import ReactRoundedImage from "react-rounded-image";
import "./Card.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Modaluserinfo from "./Modaluserinfo";

const Card = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [userdata, setUserdata] = React.useState(props.fuser);
  const [dispmodal, setdispmodal] = useState(false);
  const [rightswipeclick , setrightswipeclick] = useState(false);
  const [leftswipeclick , setleftswipeclick] = useState(false);

  const leftswipecard = () => {
    console.log("left");
    console.log("cookies wala", cookies.email)
    setleftswipeclick(true);
    props.setCardNumber(props.cardNumber + 1);
    axios.put("http://localhost:4000/api/v1/leftswipe", {
      email: cookies.email,
      leftSwipeEmail : props.fuser.email,
    }, {mode:'cors'},{ withCredentials: true }).then(res => {
    console.log(res.data);}
    )
  }
  const rightswipecard = () =>{
    console.log("rightswipe")
    console.log("right me swipe ", props.fuser.email)
    setrightswipeclick(true);
    props.setCardNumber(props.cardNumber + 1);
    axios.put("http://localhost:4000/api/v1/addmatch", {
      email: cookies.email,
      matchedEmail : props.fuser.email,
    }, {mode:'cors'},{ withCredentials: true }).then(res => {
    console.log(res.data);}
    )
  }
  useEffect( ()=>{
    if(rightswipeclick){
      // console.log("email - ", props.email)
      // console.log("card email =" ,userdata.email)
      
    }
    setrightswipeclick(false)
    },[rightswipeclick])

  useEffect ( ()=>{
    if(leftswipeclick){
      console.log("email - ", props.email)
      console.log("card email =" ,userdata.email )
    }
    setleftswipeclick(false)
  },[leftswipeclick])

  const dispmoreinfo = ()=>{
    setdispmodal(true)
  }
  

  return (
    <div>
      <div className="card">
        <div className="card-body text-center">
          {/* <img className="rounded"src={avatar}/> */}
          <div className="image">
            {/* <ReactRoundedImage
              image={avatar}
              roundedColor="#321124"
              imageWidth="150"
              imageHeight="150"
              roundedSize="13"
              borderRadius="70"
              hoverColor="#DD1144"
            /> */}
          </div>
          <br/>
          {
            props.fuser ?
              <>
              <Modaluserinfo dispmodal={dispmodal} data={userdata } setdispmodal={setdispmodal}/>
                <h5 className="card-title">Name: {userdata?.name} </h5>
                <h5 className="card-title">University: {userdata?.university ?userdata?.university : "University data not available"} </h5>
                {/* <h5 className="card-title"> </h5> */}
                {/* <h5 className="card-title">Projects :: </h5> */}
                {
                  userdata?.projects ? userdata.projects.map ( (item)=>{
                    return(
                      <>
                      {/* <h5 className="card-title">
                        Title: {""}{item.title} </h5> */}
                      {/* <h5 className="card-title">{item.description} </h5>
                      <h5 className="card-title">{item.techstack} </h5> */}
                      </>
                    )
                  }):"No Project listed"
                }
               <h5 className="card-title">Area of Interest: {userdata?.role ? userdata?.role: "Not available"} yr</h5>
               <h5 className="card-title">YOE: {userdata?.experience ? userdata?.experience: "Experience not available"} yr</h5>
               <h5 className="card-title">Linkedin:  {userdata?.linkedinURL ? userdata?.linkedinURL : "Linkedin Url not available"}</h5>
               <h5 className="card-title">Twitter:  {userdata?.twitterURL ? userdata?.twitterURL : "Twitter Url not available"}</h5>
               
                <div className="icons">
                  <button type="button" onClick={leftswipecard} className="btn btn-danger round">
                    {" "}
                    <BsArrowLeftCircle size={50} />
                  </button>
                  <button type="button" onClick={dispmoreinfo} className="btn btn-dark">More user info</button>

                  <button type="button"  onClick = {rightswipecard} className="btn btn-success round">
                    {" "}
                    <BsArrowRightCircle size={50} />
                  </button>

                </div>
              </> : "No user found"
          }
        </div>

      </div>
    </div>
  );
};

export default Card;
