import Rating from '@mui/material/Rating';
import { useState } from 'react';
export default function RatingDemo() {
    const [score, setScore] = useState(2);
    return (
        <div>
            <h1>Rating Demo</h1>
            <Rating
                name="simple-controlled"
                value={score}
                onChange={(event, newValue) => {
                    setScore(newValue);
                }}
            />
            <p>Your score is: {score}</p>
        </div>
    );
}