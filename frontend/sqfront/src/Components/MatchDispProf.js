import React,{useEffect} from 'react'
import imga from "../Image/avatar.jpeg";
const MatchDispProf = (props) => {

        useEffect ( ()=>{
        },[])

    return (
            <div className='col-5 '>
                    <img src={imga} alt=".." width={"80px"} style={{borderRadius : "50%"}}/>
                    <h6>{props.name}</h6>
            </div>
        
    )
}

export default MatchDispProf