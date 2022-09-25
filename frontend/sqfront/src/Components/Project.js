import React from 'react'

const Project = () => {
    return (
        <div>
            <h2>Project  # </h2>
            <div className='row'>
                <div className='col-md-3'>
                    <h6>Title</h6>
                    <input type='text' className='form-control' placeholder='Title' />
                    <h6>Group Size</h6>
                    <input type='text' className='form-control' placeholder='Group Size' />
                    <h6>Deployed Link (if any)</h6>
                    <input type='text' className='form-control' placeholder='Group Size' />



                </div>
                <div className='col-1'>

                </div>
                <div className='col-md-4'>
                    <h5>Description of Project and Outcomes</h5>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                        <label for="floatingTextarea2"> Summary</label>
                    </div>
                    {/* <div className="col-md-6"> */}
                        <h6>Github Repo</h6>
                        <input type='text' className='form-control' placeholder='Github Repository' />

                    {/* </div> */}

                </div>
                <div className='col-1'>
                    
                </div>
                <div className='col-md-3'>
                    <h6>Mentor of the Project</h6>
                    <input type='text' className='form-control' placeholder='Title' />
                    <h6>Duration of Project </h6>
                    <input type='text' className='form-control' placeholder='Title' />

                    <h6>Industrial Experience </h6>
                    <input type='text' className='form-control' placeholder='Title' />

                </div>
                <h6>Frameworks Used </h6>
                <div className='row'>
                    <div className='col-md-3'>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">React.js</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">UI Design</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">PHP</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">Python</label>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">Angular.js</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">Node.js</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">Scala</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">C++</label>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">React.js</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">UI Design</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">PHP</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">Python</label>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">Angular.js</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">Node.js</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">Scala</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">C++</label>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Project