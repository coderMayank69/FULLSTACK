export default function Die({ side = 6 }) {
    const num1 = Math.floor(Math.random() * side) + 1;
    const num2 = Math.floor(Math.random() * side) + 1;
    const styles ={ color: num1 === num2 ? 'green' : 'red' };
    return (
        <div className="Die" style={styles}>
            {num1 === num2 && <h3>You win!</h3>}
            <h2>DOUBLE DIES</h2>
            
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    );
}