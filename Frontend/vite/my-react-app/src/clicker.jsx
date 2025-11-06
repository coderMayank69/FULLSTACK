export default function Clicker({ message, btnText }) {
    return <button onClick={() => alert(message)}>{btnText}</button>
}