import Die from "./die"
import "./Dice.css"

export default function Dice({ dice, color = 'slateblue' }) {
    return (
        <div className="Dice">
            {dice.map((v, i) => (
                <Die key={i} val={v} color={color} />
            ))}
        </div>
    );
}