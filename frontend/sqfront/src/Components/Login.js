import React from 'react'
import 'whatwg-fetch';
const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loginsuccess, setLoginsuccess] = React.useState(false)
    const [loginfail, setLoginfail] = React.useState(false)
    const textupdate = (e) => {
        const { name, value } = e.target
        if (name === 'email') {
            setEmail(value)
        }
        if (name === 'password') {
            setPassword(value)
        }
    }

    const login = ((e) => {
        e.preventDefault()
        // console.log(email, password)
        fetch('http://localhost:4000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            //cors


            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    console.log("Login Successful")
                    setLoginsuccess(true)
                    setLoginfail(false)
                }
            })
            .catch(error => {
                setLoginfail(true)
                setLoginsuccess(false)
                throw (error)
                
            })

    })






    return (
        <div>
            {
                loginsuccess &&
                <div className="alert alert-success" role="alert">
                    Login Successful
                </div>
            }
            {
                loginfail &&
                <div className="alert alert-danger" role="alert">
                    Login Failed
                </div>
            }

            <form>
                <h1>Login</h1>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={textupdate} name="email" value={email} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={textupdate} name="password" value={password} id="exampleInputPassword1" />
                </div>
                <a href='#'>Forget Password?</a>
                <br />
                <button type='button' onClick={login} className="btn btn-dark">Signin</button>
            </form>
        </div>
    )
}

export default Login