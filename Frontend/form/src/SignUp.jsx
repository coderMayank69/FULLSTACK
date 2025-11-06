import { useState } from 'react'

export default function Signup() {
    const [Firstname, setFirstname] = useState('');
    const [Lastname, seLastname] = useState('');
    const updateFirstname = (e) => {
        setFirstname(e.target.value);
    }
    const updateLastname = (e) => {
        seLastname(e.target.value);
    }
    return(
        <form>
            <label htmlFor="Firstname">Enter the Firstname</label>
            <input type="text" value={Firstname} onChange={updateFirstname} placeholder="Firstname" id="Firstname"/>
            <label htmlFor="Lastname">Enter the Lastname</label>
            <input type="text" value={Lastname} onChange={updateLastname} placeholder="Lastname" id="Lastname"/>
            <button>Submit</button>
            </form>
    )
}