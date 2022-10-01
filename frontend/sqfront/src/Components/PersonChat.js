import React from 'react'
import avatarimg from '../Image/avatar.jpeg'
const PersonChat = () => {
  return (
    <div className="container border" style={{ height: "590px" }}>
      <div className="row " style={{height : "50px"}}>
        <div className='col-1 border'>
          <img className='' style={{ borderRadius: "50%", height: "50px", width: "auto" }} src={avatarimg} alt='...' />
          
        </div>
        <div className='col-3 align-self-center border' >
          <p className='border'>Hello User 2</p>
        </div>
      </div >
      <div className="row" >
        <img className='' style={{ borderRadius: "50%", height: "50px", width: "auto" }} src={avatarimg} alt='...' />
      </div>
      <div className="row">
        <input type='text' className='form-control' placeholder='Type your message here...' />
      </div>


    </div >
  )
}

export default PersonChat