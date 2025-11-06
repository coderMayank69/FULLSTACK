export default function Colorlist({ colors = [] }){
    return <>
        <h2>COLOR_LIST</h2>
        <ul>
            {colors.map(c => 
                <li style={{color: c}}>{c}</li>)}
        </ul>
    </>
}