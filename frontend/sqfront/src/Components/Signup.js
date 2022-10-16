import React,{useState} from 'react'

const Signup = () => {
    const [name,setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const textupdate = (e) => {
        const { name, value } = e.target
        if(name === 'name'){
            console.log(value)
            setName(value)
            
        }
        if (name === 'email') {
            console.log(value)
            setEmail(value)
        }
        if (name === 'password') {
            console.log(value)
            setPassword(value)
        }
        if (name === 'password2') {
            console.log(value)
            setPassword2(value)
        }
    }
    
    const signup= ((e) => { 
        e.preventdefault()
        if(password){
            if(password === password2){
                console.log("Password matches")
            }
        }
        
        // 
        // fetch('http://localhost:4000/api/v1/register', {
        //     method: 'POST' , mode : 'cors',
        //     headers : {
        //         'Content-Type': 'application/json'
        //     },
        //     body : JSON.stringify({
        //         name : name,
        //         email : email,
        //         password : password
        //     })
        // })

    })

    return (
        <div>
            <form>
                <h1> SIgnup</h1>
            <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputName" onChange={textupdate} name="name" value={name} aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={email} onChange={textupdate} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={password} onChange={textupdate} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Re-enter Password</label>
                    <input type="password" className="form-control" name="password2" value={password2} onChange={textupdate} id="exampleInputPassword2" />
                </div>
                <button type='submit'  onClick={signup} className="btn btn-dark">Create Account</button>
            </form>
        </div>
    )
}

export default Signup