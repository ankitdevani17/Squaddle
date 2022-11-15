import React from "react";
import avatar from "../Image/avatar.jpeg";
// import ReactRoundedImage from "react-rounded-image";
import "./Card.css";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
} from "react-icons/bs";



const Card = (props) => {
  return (
    <div  >
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
          <br></br>
          <h5 className="card-title">depak </h5>
          <h5 className="card-title">Ahmedabad University </h5>
          <h5 className="card-title">React JS, Node JS </h5>
          <h5 className="card-title">Projects </h5>

          <div>
            <h5 className="card-title">1. Title</h5>
            <h5 className="card-title">Description</h5>
            <h5 className="card-title">Tech Stack</h5>
          </div>
          <h5 className="card-title">2. Title</h5>
          <h5 className="card-title">Description</h5>
          <h5 className="card-title">Tech Stack</h5>
          <h5 className="card-title">Linkedin</h5>
          <h5 className="card-title">YOE: 2 yrs</h5>
          <div className="icons">
            <button type="button" className="btn btn-danger round">
              {" "}
              <BsArrowLeftCircle size={50} />
            </button>
            <button type="button" className="btn btn-success round">
              {" "}
              <BsArrowRightCircle size={50} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
