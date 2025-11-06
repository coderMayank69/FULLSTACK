import { useState } from "react";
import './ColorBoxes.css'

const randomChoice = (arr) => {
     const idx = Math.floor(Math.random()* arr.length);
     return arr[idx];
}

export default function ColorBoxes({ colors }) {
    const [color, setColor] = useState(randomChoice(colors));
    const toggle =()=>{
            setColor(randomChoice(colors))
    }
    return (
        <>
        <div onClick={toggle} className="container" style={{ backgroundColor: color}}>

        </div>
        </>
    )
}