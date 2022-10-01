import React from 'react'

import PersonChat from '../Components/PersonChat'
import DMList from '../Components/DMList'

const DirectMessage = () => {
  return (
    <div >
    <div className='container border'style={{height: "600px"}} >
        <div className='row'>
            <div className='col-md-3 border '>
            <DMList/>
            </div>  
            <div className='col-md-1 ' >
                {/* <div style={{ borderLeft: "3px solid black", height : "560px", position : "absolute"}}>
                </div> */}
            </div> 
            <div className='col-md-8'>
            <PersonChat/>
            </div>      
        </div>
        
    </div>
    <hr/>
    </div>
  )
}

export default DirectMessage