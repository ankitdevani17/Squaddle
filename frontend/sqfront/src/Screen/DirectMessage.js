import React from 'react'
import PersonDM from '../Components/PersonDM'
import PersonChat from '../Components/PersonChat'

const DirectMessage = () => {
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-3 border '>
            <PersonDM/>
            <PersonDM/>
            <PersonDM/>
            <PersonDM/>
            <PersonDM/>
            <PersonDM/>
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
    </>
  )
}

export default DirectMessage