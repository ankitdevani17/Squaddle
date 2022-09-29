import React, {useEffect} from 'react'

const Project = (props) => {
    
    const [edit,setedit] = React.useState(false)
    const deleteproject = () => {
        
        
    }
    const editproject = () => {
        setedit(true)
    }

    const submitproject = () => {
        setedit(false) 
    }
    const [projectData, setprojectData] = React.useState({
        id : props.projectitem.id,
        title: props.projectitem.title,
        grpsize: props.projectitem.grpsize,
        desc: props.projectitem.desc,
        mentor: props.projectitem.mentor,
        duration: props.projectitem.duration,
        link: props.projectitem.link,
        repo: props.projectitem.repo,
        techstack: props.projectitem.techstack,
    })

    useEffect(() => {
      setprojectData(props.projectitem);
      console.log(props.projectitem);
    }, [props.projectitem])
    


    const textupdate = (e) => {
        const { name, value } = e.target
        setprojectData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
        console.log(projectData)
    }
    return (
        <div>
            <br />
            <h2>Project  {projectData.id}
                <button type="button" onClick={editproject} className="btn btn-secondary mx-3">Edit </button>
                <button type="button"onClick={deleteproject}   className="btn btn-danger">Delete</button>
            </h2>
            {edit && <fieldset  >
            <div className='row'>
                <div className='col-md-3'>
                    <h6>Title</h6>
                    <input type='text' className='form-control' name='title' onChange={textupdate} value={projectData.title}  />
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
                    {/* <div className="col-md-6"> */}
                    <h6>Github Repo</h6>
                    <input type='text' className='form-control' name="repo" onChange={textupdate} value={projectData.repo} placeholder='Github Repository' />

                    {/* </div> */}

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
                {/* <div className='row'>
                    <div className='col-md-3'>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">React.js</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">UI Design</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">PHP</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">Python</label>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">Angular.js</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">Node.js</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">Scala</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">C++</label>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">React.js</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">UI Design</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">PHP</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">Python</label>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">Angular.js</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">Node.js</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">Scala</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">C++</label>
                        </div>
                    </div>


                </div> */}

            </div>
            <br />
            <button type='submit' onClick={submitproject} className='btn btn-primary'>Submit</button>
            </fieldset>
            }
        </div>
    )
}

export default Project