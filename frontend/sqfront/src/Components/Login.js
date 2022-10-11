import React from 'react'

const Login = () => {

    
    return (
        <div>
            <form>
                <h1>Login</h1>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <a href='#'>Forget Password?</a>
                <br/>
                <button type='button' className="btn btn-dark">Signin</button>
            </form>
        </div>
    )
}

export default Login