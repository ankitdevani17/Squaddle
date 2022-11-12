import React, { useState } from 'react'
import Card from '../Components/Card'
import Filter from '../Components/Filter'
import Matchdisplay from '../Components/Matchdisplay'

const Home = () => {
  const [filteron, setfilteron] = useState(false)
  
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Matchdisplay />
          </div>
          <div className='col-md-2'>
          </div>
          <div className='col-md-4'>
            <Card />
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