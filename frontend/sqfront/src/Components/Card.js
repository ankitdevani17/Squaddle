import React, { useEffect, useState } from "react";
import avatar from "../Image/avatar.jpeg";
// import ReactRoundedImage from "react-rounded-image";
import "./Card.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Modaluserinfo from "./Modaluserinfo";

const Card = (props) => {
  const [userdata, setUserdata] = React.useState(props.fuser);
  const [dispmodal, setdispmodal] = useState(false);
  const leftswipecard = () => {

  }
  const rightswipecard = () =>{
    
  }

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
                <h5 className="card-title">{userdata?.name} </h5>
                <h5 className="card-title">{userdata?.university ?userdata?.university : "University data not available"} </h5>
                <h5 className="card-title"> </h5>
                <h5 className="card-title">Projects :: </h5>
                {
                  userdata?.project ? userdata.project.map ( (item)=>{
                    return(
                      <>
                      <h5 className="card-title">{item.title} </h5>
                      <h5 className="card-title">{item.description} </h5>
                      <h5 className="card-title">{item.techstack} </h5>
                      </>
                    )
                  }):"No Project listed"
                }
               <h5 className="card-title">Linkedin :  {userdata?.linkedinURL ? userdata?.linkedinURL : "Linkedin Url not displayable"}</h5>
                <h5 className="card-title">YOE: {userdata?.experience ? userdata?.experience: "No experience displayed"} yr</h5>
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
