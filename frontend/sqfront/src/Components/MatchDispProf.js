import React from 'react'
import imga from "../Image/avatar.jpeg";
const MatchDispProf = (props) => {
    return (
        
            <div className='col-md-6 '>
                    <img src={imga} alt=".." width={"100px"} style={{borderRadius : "50%"}}/>
                    <h6>{props.name}</h6>
                
            </div>
        
    )
}

export default MatchDispProf