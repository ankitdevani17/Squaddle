import React, { useEffect, useState } from 'react'

const Project = (props) => {
    const [toggle, settoggle] = useState(true)

    const [projectData, setprojectData] = useState({
        id: props.projectitem.id,
        title: props.projectitem.title,
        grpsize: props.projectitem.grpsize,
        desc: props.projectitem.desc,
        mentor: props.projectitem.mentor,
        duration: props.projectitem.duration,
        link: props.projectitem.link,
        repo: props.projectitem.repo,
        techstack: props.projectitem.techstack,
    })


    useEffect(() => {
        console.log(toggle)
        settoggle(props.t)
    }, [props.t])

    useEffect(() => {
        setprojectData(props.projectitem);
    }, [props.projectitem])


    const textupdate = (e) => {
        const { name, value } = e.target
        setprojectData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
        console.log(projectData)
    }
    return (
        <div>

        </div>
    )
}

export default Project