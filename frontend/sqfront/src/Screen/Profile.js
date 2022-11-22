import React, { useState, useEffect } from 'react'
import image from '../Image/avatar.jpeg'
import { useCookies } from 'react-cookie'
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios';

const Profile = () => {

    const [projectlist, setProjectlist] = useState([])
    const [Profobj, setProfobj] = useState([])
    const [putdatadb, setputdatadb] = useState(false)
    const [cookies, setCookie, removeCookie] = useCookies(null)

    const areaofinterestselect = (e) => {
        console.log(e);
        setProfobj({
            ...Profobj,
            role : e
        })
        console.log(Profobj);
    }
    const profinitialization = (e) => {
        const r = e.target.name
        const s = e.target.value
        // console.log(s)
        setProfobj(
            {
                ...Profobj,
                [r]: s
            }
        )
        // console.log(Profobj)
    }
    const imageupload = (e) => {
        // const r = e.target.name
        // const s = e.target.files[0]
        // console.log("image upload")
        // setProfobj({
        //     ...Profobj,
        //     [r]: s
        // })
        // console.log(Profobj.image)
    }

    const deleteproject = (id) => {
        setProjectlist(projectlist.filter((pro) => pro.id !== id))
    }
    const textupdate = (e, ind) => {
        const { name, value } = e.target
        // console.log({ name, value }) 
        let newprojectlist = [...projectlist]
        newprojectlist[ind][name] = value
        setProjectlist(newprojectlist)

    }
    const editproject = (id) => {

        setProjectlist(
            projectlist.map((pro) => {
                if (pro.id === id) {
                    return {
                        ...pro,
                        edit: false
                    }
                }
                return pro
            })
        )
    }

    const submitproject = (id) => {

        setProjectlist(
            projectlist.map((pro) => {
                if (pro.id === id) {
                    return {
                        ...pro,
                        edit: true
                    }
                }
                return pro
            })
        )
    }

    const addProject = () => {
        setProjectlist((projectlist) => {
            return (
                [
                    ...projectlist,
                    {
                        id: (projectlist.length === 0) ? 1 : projectlist[projectlist.length - 1].id + 1,
                        title: '', grpsize: '', desc: '', mentor: '', duration: '', link: '', repo: '', techstack: ''
                    }
                ]
            )
        })


    }

    useEffect(() => {
        setProfobj({
            ...Profobj,
            projects: projectlist
        })
        // console.log(projectlist)
    }, [projectlist])


    const submitprofiledb = () => {
        setputdatadb(true)
    }


    useEffect(() => {
        if (putdatadb) {
            axios.put('http://localhost:4000/api/v1/register',
                {
                    ...Profobj,
                    email: cookies.email
                },
                { mode: 'cors' },
                { withCredentials: true }
               
            ).then((res) => {
                console.log(Profobj)
                console.log(res)
                setputdatadb(false)
            })
        }
    }, [putdatadb])


    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <img src={Profobj.image} className="image-style align-content-center flex justify-content-center my-4 mx-3" alt="..."></img>
                        <input type="file" name="" value={Profobj.image} onClick={imageupload} className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                    </div>

                    <div className='col-md-4'>
                        <h5>Name : </h5>
                        <input type='text' className='form-control' name="name" onChange={profinitialization} value={Profobj.name} placeholder='' />
                        <h5>University : </h5>
                        <input type='text' className='form-control' name="university" onChange={profinitialization} value={Profobj.university} placeholder='' />
                        {/* <h4>Social URLs</h4> */}
                        <h5>Linkedin :  </h5>
                        <input type='text' className='form-control' name="linkedinURL" onChange={profinitialization} value={Profobj.linkedinURL} placeholder='Linkedin Url' />
                    </div>
                    <div className='col-md-1'>
                    </div>
                    <div className='col-md-4'>
                        <h5>Short Bio</h5>
                        <div className="form-floating">
                            <textarea className="form-control" name="bio" onChange={profinitialization} value={Profobj.bio} placeholder="" id="floatingTextarea2" style={{ height: "110px" }}></textarea>
                            <label  >Short Intro about yourself </label>
                        </div>
                        <h5>Twitter :  </h5>
                        <input type='text' className='form-control' name="twitterURL" onChange={profinitialization} value={Profobj.twitterURL} placeholder='' />

                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-3'>
                        <h5>Area of Interest</h5>
                        <DropdownButton
                            title={Profobj.role ? Profobj.role : "Select Interest"}
                            id="dropdown-menu-align-right"
                            onSelect={areaofinterestselect}

                        >
                            <Dropdown.Item eventKey="Frontend">Frontend</Dropdown.Item>
                            <Dropdown.Item eventKey="Backend">Backend</Dropdown.Item>
                            <Dropdown.Item eventKey="Data Science">Data Science</Dropdown.Item>
                            <Dropdown.Item eventKey="Machine Learning">Machine Learning</Dropdown.Item>
                            <Dropdown.Item eventKey="QA Testing">QA Testing</Dropdown.Item>
                        </DropdownButton>
                    </div>


                    <div className='col-md-3'>
                        <h6>Industrial Experience </h6>
                        <input type='number' className='form-control' name="experience" onChange={profinitialization} value={Profobj.experience} placeholder='Title' />
                    </div>
                </div>

                <h3>Projects
                    <button type="button" onClick={addProject} className="mx-3 btn btn-primary">Add Project</button>
                </h3>
                {
                    projectlist.map((project, ind) => {
                        return (
                            <div key={ind}>
                                <h2 >
                                    Project {ind + 1}
                                    <button type="button" onClick={() => editproject(project.id)} className="btn btn-secondary mx-3" disabled={!project.edit}>Edit </button>
                                    <button type="button" onClick={() => deleteproject(project.id)} className="btn btn-danger" >Delete</button>
                                </h2>
                                <br />
                                {
                                    <fieldset disabled={project.edit}>
                                        <div className='row'>
                                            <div className='col-md-3'>
                                                <h6>Title</h6>
                                                <input type='text' className='form-control' name='title' onChange={(e) => { textupdate(e, ind) }} />
                                                <h6>Group Size</h6>
                                                <input type='number' className='form-control' name='grpsize' onChange={(e) => { textupdate(e, ind) }} placeholder='Group Size' />
                                                <h6>Deployed Link (if any)</h6>
                                                <input type='text' className='form-control' name='link' onChange={(e) => { textupdate(e, ind) }} placeholder='Group Size' />
                                            </div>
                                            <div className='col-1'>
                                            </div>
                                            <div className='col-md-4'>
                                                <h5>Description of Project and Outcomes</h5>
                                                <div className="form-floating">
                                                    <textarea className="form-control" name='desc' onChange={(e) => { textupdate(e, ind) }} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                                    <label > Summary</label>
                                                </div>

                                                <h6>Github Repo</h6>
                                                <input type='text' className='form-control' name="repo" onChange={(e) => { textupdate(e, ind) }} placeholder='Github Repository' />
                                            </div>
                                            <div className='col-1'>
                                            </div>
                                            <div className='col-md-3'>
                                                <h6>Mentor of the Project</h6>
                                                <input type='text' className='form-control' name='mentor' onChange={(e) => { textupdate(e, ind) }} placeholder='Title' />
                                                <h6>Duration of Project </h6>
                                                <input type='number' className='form-control' name='duration' onChange={(e) => { textupdate(e, ind) }} placeholder='Title' />


                                            </div>
                                            <h6>Frameworks Used </h6>
                                            <div className="form">
                                                <input type='text' className='form-control' name='techstack' onChange={(e) => { textupdate(e, ind) }} placeholder='Tech Stack used' />
                                            </div>


                                        </div>
                                        <br />
                                    </fieldset>
                                }
                                {/* <button type='submit' onClick={() => submitproject(project.id)} className='btn btn-primary' disabled={project.edit}>Submit</button > */}
                            </div>
                        )
                    }
                    )
                }
                <button type="submit" onClick={submitprofiledb} className='btn btn-primary'>Submit</button>
            </div>
        </div>
    )
}

export default Profile