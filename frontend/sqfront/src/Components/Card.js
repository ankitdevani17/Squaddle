import React, { useEffect } from "react";
import avatar from "../Image/avatar.jpeg";
// import ReactRoundedImage from "react-rounded-image";
import "./Card.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Card = (props) => {
  const [userdata, setUserdata] = React.useState([]);

  useEffect(() => {
    if (props?.fuser) {
      setUserdata(props.fuser);
      console.log(userdata);
    }
  }, [props.fuser]);

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
          <br></br>

          {
            props.fuser ? 
            <>

              <h5 className="card-title">{userdata.name} </h5>
              <h5 className="card-title">{userdata.university} </h5>
              <h5 className="card-title">React JS, Node JS </h5>
              <h5 className="card-title">Projects </h5>


             {
              console.log(userdata.projects)
             }
              <h5 className="card-title">2. Title</h5>
              <h5 className="card-title">Description</h5>
              <h5 className="card-title">Tech Stack</h5>
              <h5 className="card-title">Linkedin</h5>
              <h5 className="card-title">YOE: {userdata.experience} yr</h5>
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
            </> : "No user found"
          }
        </div>

      </div>
    </div>
  );
};

export default Card;
