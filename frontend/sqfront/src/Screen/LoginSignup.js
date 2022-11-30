import React from 'react'
import Login from '../Components/Login';
import Signup from '../Components/Signup';


const LoginSignup = () => {
    const [toggle, setToggle] = React.useState(true);

    const toggleauth = () =>{
        setToggle(!toggle);
    }
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                    </div>
                    <div className='col-md-4'>
                        <button type="button" onClick={toggleauth} className={ (toggle ? 'btn btn-primary' : 'btn btn-light') }>Login</button>
                        <button type="button" onClick={toggleauth} className={ (!toggle ? 'btn btn-primary' : 'btn btn-light') }>Signup</button>
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