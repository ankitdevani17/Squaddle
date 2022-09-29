import React from 'react'
import image from '../Image/avatar.jpeg'
import Proj from '../Components/Project'

const Profile = () => {

    const imageupload = () => {
    }

    const deleteproject = (id) => {
        console.log(id)

    }
    const addProject = () => {
        addprojectlist((projectlist) => {
            return(
            [
                ...projectlist, 
                { 
                    id: projectlist.length + 1, title: '', grpsize: '', desc: '', mentor: '', duration: '', link: '', repo: '', techstack: '' 
                }
            ]
            )
        })
    }
    

    const [projectlist, addprojectlist] = React.useState([
        {
            id : 1,
            title: 'Project 1',
            grpsize: '2',
            desc: 'This is a project',
            mentor: 'Mentor 1',
            duration: '2',
            link: '',
            repo: '',
            techstack: '',
        },
        // {
        //     id : 2,
        //     title: 'Project 1',
        //     grpsize: '2',
        //     desc: 'This is a project',
        //     mentor: 'Mentor 1',
        //     duration: '2',
        //     link: '',
        //     repo: '',
        //     techstack: '',
        // },

       
    ])

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <img src={image} className="image-style align-content-center flex justify-content-center my-4 mx-3" alt="..."></img>
                        <input type="file" onChange={imageupload} className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                    </div>

                    <div className='col-md-4'>
                        <h5>Name : </h5>
                        <input type='text' className='form-control' placeholder='Shyam' />
                        <h5>University : </h5>
                        <input type='text' className='form-control' placeholder='IIT B' />
                        {/* <h4>Social URLs</h4> */}
                        <h5>Linkedin :  </h5>
                        <input type='text' className='form-control' placeholder='Linkedin Url' />
                    </div>
                    <div className='col-md-1'>
                    </div>
                    <div className='col-md-4'>
                        <h5>Short Bio</h5>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "110px" }}></textarea>
                            <label  >Short Intro about yourself </label>
                        </div>
                        <h5>Twitter :  </h5>
                        <input type='text' className='form-control' placeholder='Twitter Url' />

                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-3'>
                        <h5>Area of Interest</h5>
                        <div className="dropdown">
                            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Web Development </a></li>
                                <li><a className="dropdown-item" href="#">App Development</a></li>
                                <li><a className="dropdown-item" href="#">ML/AI</a></li>
                                <li><a className="dropdown-item" href="#">DevOps</a></li>
                                <li><a className="dropdown-item" href="#">Networks</a></li>
                                <li><a className="dropdown-item" href="#">CP</a></li>
                            </ul>
                        </div>
                    </div>


                    <div className='col-md-3'>
                        <h6>Industrial Experience </h6>
                        <input type='text' className='form-control' placeholder='Title' />

                    </div>
                </div>

                <h3>Projects
                    <button type="button" onClick={addProject} className="mx-3 btn btn-primary">Add Project</button>
                </h3>
                {
                    projectlist.map((project) => {
                        return (
                                <Proj projectitem={project} key={project.id}  />  
                        )
                    }
                    )
                }
                {/* <Proj/> */}




            </div>
        </div>
    )
}

export default Profile