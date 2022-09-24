import React from 'react'

const Signup = () => {
    return (
        <div>
            <form>
                <h1> SIgnup</h1>
            <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Re-enter Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                
                
                <button type='button' className="btn btn-dark">Create Account</button>
            </form>
        </div>
    )
}

export default Signup