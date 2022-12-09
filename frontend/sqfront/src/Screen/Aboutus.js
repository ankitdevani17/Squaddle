import React from "react";
import about_bg from "../Image/about-bg1.jpeg";

const Aboutus = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <img src={about_bg} className="w-100" alt="about_bg" />
        </div>
        <div className="col-md-6">
          <h1>
            <strong>About Us</strong>
          </h1>
          <p>
            Welcome to Squaddle, the peer to peer network of nerds, where you
            can find your coding partner or search relevant projects to work on.
          </p>

          <h1>
            <strong>Vision</strong>
          </h1>
          <p>
            Create a platform to collaborate in others idea to enhance your
            skills and make open source contribution.
          </p>

          <h1>
            <strong>Mission</strong>
          </h1>
          <p>
            The mission of Squaddle is simple: connect Coders globally to make
            them more productive and successful.
          </p>

          <h1>
            <strong>Who Are We?</strong>
          </h1>
          <p>
            Squaddle is an initiative started in August 2022 by a group of students from Ahmedabad University with an aim of easing to find peer programmers to
            transform their ideas into code.
          </p>
        </div>
        <div className="col-md-3">
          <img src={about_bg} className="w-100" alt="about_bg" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
