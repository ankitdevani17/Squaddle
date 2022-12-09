import React from "react";
import Modal from "react-bootstrap/Modal";

const Modalmatchinfo = (props) => { 
  return (
    <div>
      <Modal
        show={props.dispmatchmodal}
        onHide={() => {
          props.setdispmatchmodal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.data?.name}'s Detail info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="">
            {props.data?.university
              ? props.data?.university
              : "University data not available"}{" "}
          </h5>

          {props.data?.projects ? (
            props.data?.projects.map((project) => {
              return (
                <div key={project.title}>
                  {console.log("helo")}
                  <h5 className="">
                    Project Title :{" "}
                    {project?.title ? project?.title : "No Project listed"}
                  </h5>
                  <h5 className="">
                    Project Description :{" "}
                    {project?.description
                      ? project?.Ddscription
                      : "No Project listed"}
                  </h5>
                  <h5 className="">
                    Project Techstack :{" "}
                    {project?.frameworks
                      ? project?.frameworks
                      : "No Techstack listed"}
                  </h5>
                </div>
              );
            })
          ) : (
            <h5 className="">No Project listed</h5>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Modalmatchinfo;
