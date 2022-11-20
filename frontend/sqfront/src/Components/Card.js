import React, { useEffect } from "react";
import avatar from "../Image/avatar.jpeg";
// import ReactRoundedImage from "react-rounded-image";
import "./Card.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Card = (props) => {
  const [userdata, setUserdata] = React.useState(props.fuser);

  const leftswipecard = () => {

  }
  const rightswipecard = () =>{
    
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
                <h5 className="card-title">{userdata?.name} </h5>
                <h5 className="card-title">{userdata?.university} </h5>
                <h5 className="card-title"> </h5>
                <h5 className="card-title">Projects :: </h5>
                <h5 className="card-title">{userdata.projects[0].title }</h5>
                <h5 className="card-title">{userdata.projects[0].Description }</h5>
                <h5 className="card-title">{userdata.projects[0].techstack}</h5>
                <h5 className="card-title">Linkedin</h5>
                <h5 className="card-title">YOE: {userdata.experience} yr</h5>
                <div className="icons">
                  <button type="button" onClick={leftswipecard} className="btn btn-danger round">
                    {" "}
                    <BsArrowLeftCircle size={50} />
                  </button>
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
