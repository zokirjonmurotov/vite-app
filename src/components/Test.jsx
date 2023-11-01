import { useEffect, useState } from "react";
import React from "react";


export default function Test(){
    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            setData(data)})
    },[])

    console.log('rerendering');

    if (!data) {
        return(
            <h1>Loading...</h1>
        )
    }

    return(
        <div>
            <h1>{data.title}</h1>
            <button onClick={()=>{setCount(count+1)}}>click {count}</button>
        </div>
    )
}