import React from 'react'
import Axios from "axios"
import { useEffect, useState } from 'react'
// fetch("https://catfact.ninja/fact")
// .then((res) => res.json())
// .then((data) => {
//     console.log(data);
// });

const Login = () => {
    const [current, setCurrent] = useState("");
    function fetchRandomNumber() {
        Axios("http://127.0.0.1:8000/testing/")
        .then((res) => {
            setCurrent(res.data.data);
        })
        .catch(error => {
            console.error('AxiosError:', error);
          });    
    }
    // useEffect(() => {
    //     fetchRandomNumber();
    // }, []);
    return(
        <div>
        <h1>this is api fetch response page</h1>
        <button onClick={fetchRandomNumber}>generate response</button>
        <p>{current}</p>
        </div>
    )
}

export default Login;