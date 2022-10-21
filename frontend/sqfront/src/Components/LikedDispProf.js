import React from 'react'

const MatchDispProf = (props) => {
    return (
        
            <div className='col-md-4'>
                    <img src={props.img} alt=".." width={"100%"} style={{borderRadius : "50%", filter: "blur(6px)"}}/>
                    {/* <h6>{props.name}</h6> */}
            </div>
        
    )
}

export default MatchDispProf