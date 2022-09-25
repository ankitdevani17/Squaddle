import React from 'react'
import image from '../Image/avatar.jpeg'
const PersonDM = () => {
  return (
    <div>
        <div className='row border'>
            <div className='col-md-4 '>
            <img src={image} className="image-style align-content-center w-50 h-50  my-4 mx-3" style={{borderRadius : "50%"}}></img>    
            </div>
            <div className='col-md-7 '>
                <h6>Name</h6>
                <p>Initial msg ...</p>
            </div>
            
        </div>
    </div>
  )
}

export default PersonDM