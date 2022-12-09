import React from "react";
import Modal from "react-bootstrap/Modal";

const Modaluserinfo = (props) => {
  return (
    <div>
      <Modal
        show={props.dispmodal} 
        onHide={() => {
          props.setdispmodal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.data?.name}'s Detail info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="">
          University:{" "}
            {props.data?.university
              ? props.data?.university
              : "University data not available"}{" "}
              {/* {console.log(props.data)} */}
          </h5>

          <h5 className="">
          Bio:{" "}
            {props.data?.bio
              ? props.data?.bio
              : "Bio not available"}{" "}
              {/* {console.log(props.data)} */}
          </h5>
          {props.data?.projects ? (
            props.data?.projects.map((project) => {
              return (
                <div key={project.title}>
                  {console.log("helo")}
                  <h4>Projects</h4>
                  <h5 className="">
                    Title :{" "}
                    {project?.title ? project?.title : "No Project listed"}
                  </h5>
                  <h5 className="">
                    Project Description :{" "}
                    {project?.Description
                      ? project?.Description
                        : "No Project listed"}
                  </h5>
                  <h5 className="">
                    Group size :{" "}
                    {project?.groupsize
                      ? project?.groupsize
                      : "-"}
                  </h5>
                  <h5 className="">
                    Mentor :{" "}
                    {project?.mentor
                      ? project?.mentor
                      : "No Mentor"}
                  </h5>
                  <h5 className="">
                    Duration :{" "}
                    {project?.duration
                      ? project?.duration
                      : "-"}
                  </h5>
                  <h5 className="">
                    Project Techstack :{" "}
                    {project?.frameworks
                      ? project?.frameworks
                      : "No Project listed"}
                  </h5>
                  <h5 className="">
                    Github Repo Link :{" "}
                    {project?.repo
                      ? project?.repo
                      : "Link not available"}
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

export default Modaluserinfo;
