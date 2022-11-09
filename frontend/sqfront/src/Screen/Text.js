import React from "react";
import "./Text.css";
import Photo1 from "../Image/about-bg1.jpeg";
import Photo from "../Image/avatar.jpeg";

function Text({ own }) {
  return (
    <div className={own ? "Text own" : "Text"}>
      <div className="Text_Top">
        {own ? (
          <img src={Photo1} alt="Profile" className="Text_Img" />
        ) : (
          <img src={Photo} alt="Profile" className="Text_Img" />
        )}
        <p className="Text_Msg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="Text_Bottom">1 hour ago</div>
    </div>
  );
}

export default Text;
