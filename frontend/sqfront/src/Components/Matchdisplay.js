import React, { useState } from 'react'
import MatchDispProf from './MatchDispProf'
import LikedDispProf from './LikedDispProf'
const Matchdisplay = () => {
    const [displikeprof, setdisplikeprof] = useState(false)
    const matches = [
        {
            name: "Rahul",
            img: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1666327705~exp=1666328305~hmac=5b91ccd010fc3b2ee94de3a84fdde39c87684d8e7717ea0cae53af9dee609687"
        },
        {
            name: "Rahul",
            img: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1666327705~exp=1666328305~hmac=5b91ccd010fc3b2ee94de3a84fdde39c87684d8e7717ea0cae53af9dee609687"
        },
        {
            name: "Rahul",
            img: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1666327705~exp=1666328305~hmac=5b91ccd010fc3b2ee94de3a84fdde39c87684d8e7717ea0cae53af9dee609687"
        },
        {
            name: "Rahul",
            img: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1666327705~exp=1666328305~hmac=5b91ccd010fc3b2ee94de3a84fdde39c87684d8e7717ea0cae53af9dee609687"
        },
        {
            name: "Rahul",
            img: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1666327705~exp=1666328305~hmac=5b91ccd010fc3b2ee94de3a84fdde39c87684d8e7717ea0cae53af9dee609687"
        },
        {
            name: "Rahul",
            img: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1666327705~exp=1666328305~hmac=5b91ccd010fc3b2ee94de3a84fdde39c87684d8e7717ea0cae53af9dee609687"
        },

    ]
    return (
        <div style={{ backgroundColor: "yellow  " }}>
            <div className='container text-center'>
                <h3>
                    My Matches
                </h3>
                <div className='row'>
                    {
                        matches.map((match) => {
                            return (
                                <>
                                    <MatchDispProf name={match.name} img={match.img} />
                                </>
                            )
                        }
                        )
                    }
                </div>
            </div>
            <button type='button' onClick={() => setdisplikeprof(!displikeprof)} className='btn btn-primary mx-5'> {displikeprof ? "+" : "-"} </button>
            {
                !displikeprof

                &&
                <div className='container text-center'>
                    <h3 className='text-center'>
                        People who liked you
                    </h3>
                    <div className='row'>
                        {
                            matches.map((match) => {
                                return (
                                    <>

                                        <LikedDispProf img={match.img} />
                                    </>
                                )
                            }
                            )
                        }
                    </div>
                </div>
            }


        </div>
    )
}

export default Matchdisplay