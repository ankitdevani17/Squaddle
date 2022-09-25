import React from 'react'
import avatar from '../Image/avatar.jpeg'
import {BsSuitHeartFill} from 'react-icons/bs'
import {ImCross} from 'react-icons/im'

const Card = () => {

  return (
    <div>
        <div className="card" >
            <div className="card-body text-center">
                <img className="rounded"src={avatar}/>
                <h5 className="card-title">Name : Shyam Ram </h5>
                <h5 className="card-title">University :Shyam Ram </h5>
                <h5 className="card-title">Area of Interest : Testing </h5>
                <h5 className="card-title">Performed Projects : </h5>
                <h5 className="card-title">1. Title</h5>
                <h5 className="card-title">Description</h5>
                <h5 className="card-title">Tech Stack</h5>
                <h5 className="card-title">2. Title</h5>
                <h5 className="card-title">Description</h5>
                <h5 className="card-title">Tech Stack</h5>
                <h5 className="card-title">Linkedin</h5>
                <h5 className="card-title">YOE : 2 yrs</h5>

                <button type='button' className='btn btn-warning rounded  '> <ImCross/></button>
                <button type='button' className='btn btn-warning rounded '> <BsSuitHeartFill/></button>
                
            </div>
        </div>
    </div>
  )
}

export default Card