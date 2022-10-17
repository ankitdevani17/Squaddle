import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Temp = () => {
    // const [setupline, setsetupline] = useState('')
    const [punchline, setpunchline] = useState('')

    const [joke, setjoke] = useState([])
    // useEffect(() => {
    //     fetch('https://official-joke-api.appspot.com/random_joke')
    //         .then(res => res.json()
    //         )
    //         .then((data) => {
    //             // console.log(res)
    //             setjoke(data.id + "..." + data.setup + "..." + data.punchline)
    //         })
    //     // axios.get('https://official-joke-api.appspot.com/random_joke')
    //     //     .then((res) => {
    //     //         console.log(res)
    //     //         setjoke(res.data.setup + "..........." + res.data.punchline)
    //     //     })
    // }, [])



    // const settitleTodo = (e) => {
    //     e.preventDefault();
    //     console.log(e)
    // }
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                setjoke(res.data.filter((data) => {
                    return data.userId === 1
                }))
                console.log(joke)
                // console.log(res)

                // console.log(joke[0].completed)
            })
    }, [])

    

    return (
        <div>
            {
                punchline ? <h1>{punchline}</h1> : <h1></h1>
            }
            {
                
                joke.map( (joke)=>{
                    return(
                        <div>
                            <h6>{joke.title}</h6>
                            <button type='button' onClick={ ()=>{
                                setpunchline(joke.title)
                            }}>Hello todo</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Temp