import { useState } from 'react'

export default function Form() {
    const [username, setUsername] = useState('');
    const updateUsername = (e) => {
        setUsername(e.target.value);
    }
    return(
        <form>
            <label htmlFor="username">Enter the username</label>
            <input type="text" value={username} onChange={updateUsername} placeholder="username" id="username"/>
            <button>Submit</button>
        </form>
    )
}