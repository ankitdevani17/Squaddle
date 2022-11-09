import React, { useEffect, useState } from "react";
import axios from "axios";

const Practice = () => {
    const [data, setData] = useState([]);
    const [tempdata, settempData] = useState([]);
    const [vardata, setvardata] = useState([])
    //   useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {

    //       setData(res.data);
    //     });
    //   }, []);

    //   useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //       .then((res) => {
    //         return res.json();
    //       })
    //       .then((res) => {
    //         settempData(res);
    //       });
    //   }, []);

    const datafetch = async () => {
        return await fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json()
            )
    };
    useEffect(() => {
        const t = datafetch();
        t.then((data) => {
            return setvardata(data)
        });
    }, []);

    return (
        <div>
            
            <table className="border">
                <tbody>
                    <tr>
                        <th className="border">Sr. No</th>
                        <th className="border">Name</th>
                        <th className="border">Email</th>
                    </tr>

                    {
                        vardata.map((item) => {
                            return (
                                <tr key={item.email}>
                                    <td className="border">{item.id}</td>
                                    <td className="border">{item.username}</td>
                                    <td className="border">{item.email}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};

export default Practice;
