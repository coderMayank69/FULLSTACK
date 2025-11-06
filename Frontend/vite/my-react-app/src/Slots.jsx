export default function Slots({val1, val2, val3 }) {
    // const win = <h2 style={{color :"green"}}> "You Win";</h2>
    // const lose = <h2 style={{color :"red"}}>"You Lose";</h2> 
    // const congrats = <h3 style={{color :"white"}}>Congrats</h3> 
    
    const isWinner = val1 === val2 && val2 === val3;
    return <>   
    <h1>{val1} {val2} {val3}</h1>
    <h2 style={{color: isWinner?"green":"red"}}>{isWinner? "You win" : "You lose"}</h2>
    {isWinner && <h3 style={{color:"black"}}>Congrats</h3>}
    
    
    </>
}