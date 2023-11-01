import { useRef, useState, useEffect } from "react";

export default function Input(){
    const [count, setCount] = useState(0);


    const reff = useRef(0);
    const heading = useRef();
    const inputRef = useRef();


    // function focus(){
    //     // inputRef.current.focus();
    //     console.log(inputRef.current.value);
    //     console.log(inputRef);
    // }


    function counter(){
        console.log(reff.current);
        reff.current += 1;
    }
    return(
        <div>
            <h1 ref={heading}>Hello react</h1>
            <input  type="text" ref={inputRef}/>
            <button onClick={()=>{setCount(count+1)}} >click {count}</button>
            <button onClick={counter} >click ref {reff.current}</button>
        </div>
    )
}