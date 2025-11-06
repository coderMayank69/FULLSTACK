import { useState } from 'react'
import {v4 as uuid} from 'uuid';

export default function ShoppingListForm({addItem}) {
    const [formData, setFormData] = useState({ product: 'b', quantity: 0 })

    const handleChange = (e) => {
        const changeField = e.target.name
        // coerce numeric inputs to numbers
        const changeValue = e.target.type === 'number' ? Number(e.target.value) : e.target.value
        setFormData(prev => ({ ...prev, [changeField]: changeValue }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // for now just log the data - prevents page reload so controlled inputs keep working
        addItem({...formData, id: uuid()})
        setFormData({product:'', quantity:0})
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Product is: {formData.product} and quantity is: {formData.quantity}</h1>

            <label htmlFor="product">Enter the product</label>
            <input
                type="text"
                name="product"
                id="product"
                value={formData.product}
                onChange={handleChange}
                placeholder="product"
            />

            <label htmlFor="quantity">Enter the quantity</label>
            <input
                type="number"
                name="quantity"
                id="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="1"
            />

            <button type="submit">Add item </button>
        </form>
    )
}