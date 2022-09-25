import React from 'react'

const Filter = () => {
    return (
        <div>
            <div className='row '>
                {/* <div className='col-md-2'>
                </div>     */}
                <div className='col-md-10'>
               
            <h4>Filter Profile by Preference</h4>

            <h5>Area of Interest</h5>
            <div class="dropdown">
                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Web Development </a></li>
                    <li><a class="dropdown-item" href="#">App Development</a></li>
                    <li><a class="dropdown-item" href="#">ML/AI</a></li>
                    <li><a class="dropdown-item" href="#">DevOps</a></li>
                    <li><a class="dropdown-item" href="#">Networks</a></li>
                    <li><a class="dropdown-item" href="#">CP</a></li>
                </ul>
            </div>

            <label for="customRange2" class="form-label">Years of Experience </label>
            <input type="range" class="form-range form-range-track-width-80" min="0" max="3" step="0.5" id="customRange2"></input>

            <h5>Specific Expertise for Development</h5>

            <div className='row'>
                <div className='col-md-6'>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Frontend
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Backend
                        </label>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Full Stack
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                            QA/Testing
                        </label>
                    </div>
                </div>
            </div>



            <h6>Frameworks</h6>
            <div className='row'>
                <div className='col-md-6'>
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
                <div className='col-md-6'>
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
                <div className='col-md-2'>
                </div>   
            </div>
        </div>
    )
}

export default Filter