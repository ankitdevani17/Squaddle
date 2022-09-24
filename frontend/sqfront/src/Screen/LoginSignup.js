import React from 'react'
import Login from '../Components/Login';
import Signup from '../Components/Signup';


const LoginSignup = () => {
    const [toggle, setToggle] = React.useState(true);

    return (
        <div>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                    </div>
                    <div className='col-md-4'>
                        <button type="button" class="btn btn-primary">Login</button>
                        <button type="button" class="btn btn-light">Signup</button>
                    </div>
                    <div className='col-md-4'>
                    </div>
                </div>


                {
                    toggle ? <Login /> : <Signup />
                }
                



            </div>
        </div>
    )
}

export default LoginSignup