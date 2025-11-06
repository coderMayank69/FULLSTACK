import { useState } from "react"
export default function Scorekeeper() {
    const [scores, setscores] = useState({player1:0, player2:0})
    
    function increaseP1() {
        setscores((score) =>{
            return {...score, player1: score.player1 + 1};
        })
    }
    
    function increaseP2() {
        setscores((score) =>{
            return {...score, player2: score.player2 + 1};
        })
    }
    return <>
    <p>Player 1: {scores.player1}</p>
    <p>Player 2: {scores.player2}</p>

    <button onClick={increaseP1}>+1 Player 1</button>
    <button onClick={increaseP2}>+1 Player 2</button>
    </>
}