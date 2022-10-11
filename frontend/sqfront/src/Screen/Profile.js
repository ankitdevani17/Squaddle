import React, { useState } from 'react'
import image from '../Image/avatar.jpeg'
import Proj from '../Components/Project'

const Profile = () => {
    const [edit, setedit] = useState(false)
    const imageupload = () => {
    }

    const deleteproject = (id) => {
        addprojectlist(projectlist.filter((pro) => pro.id !== id))
    }
    const editproject = () => {
        console.log("hello")
        console.log(edit)
        setedit(true)
    }

    const submitproject = () => {
        console.log("hello")
        console.log(edit)
        setedit(false)
    }
    const addProject = () => {
        addprojectlist((projectlist) => {
            return (
                [
                    ...projectlist,
                    {
                        id: (projectlist.length == 0) ? 1 : projectlist[projectlist.length - 1].id + 1, title: '', grpsize: '', desc: '', mentor: '', duration: '', link: '', repo: '', techstack: ''
                    }
                ]
            )
        })
    }


    const [projectlist, addprojectlist] = useState([
        {
            id: 1,
            title: 'Project 1',
            grpsize: '2',
            desc: 'This is a project',
            mentor: 'Mentor 1',
            duration: '2',
            link: '',
            repo: '',
            techstack: '',
        },
        {
            id: 2,
            title: 'Project 1',
            grpsize: '2',
            desc: 'This is a project',
            mentor: 'Mentor 1',
            duration: '2',
            link: '',
            repo: '',
            techstack: '',
        },
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
                {/* {
                    projectlist.map((project, ind, edit) => {
                        return (
                            <>
                                <h2>Project {ind + 1}
                                    <button type="button" onClick={editproject} className="btn btn-secondary mx-3">Edit </button>
                                    <button type="button" onClick={() => deleteproject(project.id)} className="btn btn-danger">Delete</button>
                                </h2>
                                <br />
                                {
                                    <fieldset disabled={!toggle}>
                                        <div className='row'>
                                            <div className='col-md-3'>
                                                <h6>Title</h6>
                                                <input type='text' className='form-control' name='title' onChange={textupdate} value={projectData.title} />
                                                <h6>Group Size</h6>
                                                <input type='number' className='form-control' name='grpsize' onChange={textupdate} value={projectData.grpsize} placeholder='Group Size' />
                                                <h6>Deployed Link (if any)</h6>
                                                <input type='text' className='form-control' name='link' onChange={textupdate} value={projectData.link} placeholder='Group Size' />
                                            </div>
                                            <div className='col-1'>
                                            </div>
                                            <div className='col-md-4'>
                                                <h5>Description of Project and Outcomes</h5>
                                                <div className="form-floating">
                                                    <textarea className="form-control" name='desc' onChange={textupdate} value={projectData.desc} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                                    <label > Summary</label>
                                                </div>

                                                <h6>Github Repo</h6>
                                                <input type='text' className='form-control' name="repo" onChange={textupdate} value={projectData.repo} placeholder='Github Repository' />
                                            </div>
                                            <div className='col-1'>
                                            </div>
                                            <div className='col-md-3'>
                                                <h6>Mentor of the Project</h6>
                                                <input type='text' className='form-control' name='mentor' value={projectData.mentor} onChange={textupdate} placeholder='Title' />
                                                <h6>Duration of Project (months)</h6>
                                                <input type='number' className='form-control' name='duration' value={projectData.duration} onChange={textupdate} placeholder='Title' />


                                            </div>
                                            <h6>Frameworks Used </h6>
                                            <div className="form">
                                                <input type='text' className='form-control' name='techstack' value={projectData.techstack} onChange={textupdate} placeholder='Tech Stack used' />
                                            </div>


                                        </div>
                                        <br />
                                    </fieldset>
                                }
                                <button type='submit' onClick={submitproject} className='btn btn-primary' disabled={edit}>Submit</button >
                            </>
                        )
                    }
                    )
                } */}

            </div>
        </div>
    )
}

export default Profile