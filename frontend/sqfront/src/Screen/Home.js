import React from 'react'
import Card from '../Components/Card'
import Filter from '../Components/Filter'

const Home = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <Filter/>
          </div>
          <div className='col-md-4'>
            <Card />
          </div>
          <div className='col-md-4'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home