import React from 'react'

const Filter = () => {
    return (
        <div>
            <div className='row '>
                {/* <div className='col-md-2'>
                </div>     */}
                <div className='col-md-10'>
               
            <span>Filter Profile by Preference</span> 
           
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

            <label htmlFor="customRange2" className="form-label">Years of Experience </label>
            <input type="range" className="form-range form-range-track-width-80" min="0" max="3" step="0.5" id="customRange2"></input>

            <h5>Specific Expertise for Development</h5>

            <div className='row'>
                <div className='col-md-6'>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Frontend
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Backend
                        </label>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Full Stack
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            QA/Testing
                        </label>
                    </div>
                </div>
            </div>



            <h6>Frameworks</h6>
            <div className='row'>
                <div className='col-md-6'>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">React.js</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">UI Design</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">PHP</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Python</label>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Angular.js</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Node.js</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Scala</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">C++</label>
                    </div>
                </div>
                

            </div>
            </div>   
                <div className='col-md-2'>
                </div>   
            </div>
        </div>
    )
}

export default Filter