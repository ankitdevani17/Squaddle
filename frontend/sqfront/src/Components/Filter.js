import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const Filter = (props) => {
    // const [interest , setinterest ] = useState("");
  const selectfilterpref = (e) => {
    // setinterest(e);
    props.setinterestforfilter (e);
  };
  return (
    <div>
      <div className="row ">
        <div className="col-md-10">
          <span>Filter Profile by Preference</span>

          <h5>Area of Interest</h5>
          
          <DropdownButton
            title={ props.interestforfilter ? props.interestforfilter : "Select Interest"}
            id="dropdown-menu-align-right"
            onSelect={selectfilterpref}
          >
            <Dropdown.Item eventKey="Frontend">Frontend</Dropdown.Item>
            <Dropdown.Item eventKey="Backend">Backend</Dropdown.Item>
            <Dropdown.Item eventKey="Data Science">Data Science</Dropdown.Item>
            <Dropdown.Item eventKey="Machine Learning">
              Machine Learning
            </Dropdown.Item>
            <Dropdown.Item eventKey="QA Testing">QA Testing</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Filter;
