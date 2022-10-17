import React from "react";
import avatar from "../Image/avatar.jpeg";
import ReactRoundedImage from "react-rounded-image";
import "./Card.css";
import { BsSuitHeartFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";

const Card = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body text-center">
          {/* <img className="rounded"src={avatar}/> */}
          <div className="image">
            <ReactRoundedImage
              image={avatar}
              roundedColor="#321124"
              imageWidth="150"
              imageHeight="150"
              roundedSize="13"
              borderRadius="70"
              hoverColor="#DD1144"
            />
          </div>
          <br></br>
          <h5 className="card-title">Deepak Ahuja </h5>
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

          <button type="button">
            {" "}
            <ImCross />
          </button>
          <button type="button" className="btn btn-warning rounded ">
            {" "}
            <BsSuitHeartFill />
          </button>
        </div>
      </div>
    </div>
  );
};

//className="btn btn-warning rounded
export default Card;
