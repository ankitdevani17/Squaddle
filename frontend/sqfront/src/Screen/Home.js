import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../store/auth-slice';
import Filter from '../Components/Filter'
import Matchdisplay from '../Components/Matchdisplay'
import axios from 'axios';

const Home = () => {
  const userlog = useSelector(state => state.auth.user)
 
  const [user,setuserlist] = useState([])
  
  const [filteron, setfilteron] = useState(false)
  
  useEffect ( ()=>{
    axios.get('http://localhost:4000/api/v1/getallusers')
    .then( (res)=>{
      console.log(res.data)
      setuserlist(res.data)

    })
  },[])
  const [fuser , setfuser] = useState(user[0])

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            {/* <Matchdisplay /> */}
          </div>
          <div className='col-md-2'>
          </div>
          <div className='col-md-4'>
            <Card fuser={fuser} />
          </div>
            {/* <div className='col-md-1'>
            </div> */}
          <div className='col-md-3'>
            {
              filteron &&
              <button type="button" className="btn btn-primary" onClick={() => setfilteron(!filteron)}>Filter +</button>

            }
            {
              !filteron &&
              <div className='container' style={{ backgroundColor: "#ADD8E6" }}>
                <button type="button" className="btn btn-primary" onClick={() => setfilteron(!filteron)}>Filter -</button>
                <Filter />
              </div>

            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home