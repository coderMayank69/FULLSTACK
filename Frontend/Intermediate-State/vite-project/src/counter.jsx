import { useState } from "react"
export default function Counter(){
    const [count, setCount] = useState(0);
    const toggle = () => {
        setCount(count + 1);
    }
    return <>
        <p>Count : {count}</p>
        <button onClick={toggle}>+1</button>
    </>
}