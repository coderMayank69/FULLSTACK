import { useState } from "react";

export default function ProfileSearchForm({ search }){
    const [username, setUsername] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        search(username);
        setUsername("");
    }

    function handleChange(e){
        setUsername(e.target.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={handleChange} />
            <button type="submit">Search</button>
        </form>
    );

}