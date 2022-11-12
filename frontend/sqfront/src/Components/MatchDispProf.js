import React from 'react'

const MatchDispProf = (props) => {
    return (
        
            <div className='col-md-6 '>
                    <img src={props.img} alt=".." width={"100px"} style={{borderRadius : "50%"}}/>
                    <h6>{props.name}</h6>
                
            </div>
        
    )
}

export default MatchDispProf