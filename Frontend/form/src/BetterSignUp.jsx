import { useState } from 'react'

export default function BetterSignUp() {
    const [formData, setFormData] = useState({ Firstname: '', Lastname: '' });

    const handleChange = (e) => {
        const changeField = e.target.name;
        const changeValue = e.target.value;
        setFormData(prev => ({ ...prev, [changeField]: changeValue }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted', formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="Firstname">Enter the Firstname</label>
            <input
                type="text"
                value={formData.Firstname}
                onChange={handleChange}
                name="Firstname"
                placeholder="Firstname"
                id="Firstname"
            />

            <label htmlFor="Lastname">Enter the Lastname</label>
            <input
                type="text"
                value={formData.Lastname}
                onChange={handleChange}
                name="Lastname"
                placeholder="Lastname"
                id="Lastname"
            />

            <button type="submit">Submit</button>
        </form>
    )
}
