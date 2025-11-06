import { useState } from "react";
export default function AdvanceScorekeeper({numPlayers=10 , target = 10}) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));

    const incrementScore = (index) => {
        setScores((prevScores) => 
            prevScores.map((score, i) => i === index ? score + 1 : score)
        );
    };
    const reset = () => {
        setScores(new Array(numPlayers).fill(0));
    }

    return (
        <>
            <h1>Scorekeeper</h1>
            <ul>
                {scores.map((score, index) => (
                    <li key={index}>
                        Player {index + 1}: {score}
                        <button onClick={() => incrementScore(index)}> +1 </button>
                        {score === target && <span> - Winner! </span>}
                    </li>
                ))}
            </ul>
            <button onClick={reset}>Reset All</button>
        </>
    );
}