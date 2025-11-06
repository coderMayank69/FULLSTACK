import { useState , useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'

export default function ValidatedShoppingListForm({ addItem }) {
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
        defaultValues: { product: '', quantity: 1 }
    })

    const onSubmit = (values) => {
        const item = { ...values, quantity: Number(values.quantity), id: uuid() }
        addItem(item)
        reset()
    }

    // optional: show live values in the heading
    const productValue = watch('product')
    const quantityValue = watch('quantity')

    // focus/side-effects can be added with useEffect if desired
    useEffect(() => {}, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Product is: {productValue} and quantity is: {quantityValue}</h1>

            <label htmlFor="product">Enter the product</label>
            <input
                id="product"
                {...register('product', { required: 'Product is required' })}
                placeholder="product"
            />
            {errors.product && <p style={{ color: 'red' }}>{errors.product.message}</p>}

            <label htmlFor="quantity">Enter the quantity</label>
            <input
                id="quantity"
                type="number"
                {...register('quantity', { required: 'Quantity is required', valueAsNumber: true, min: { value: 1, message: 'Quantity must be at least 1' }, max: { value: 100, message: 'Quantity must be at most 100' } })}
                placeholder="1"
            />
            {errors.quantity && <p style={{ color: 'red' }}>{errors.quantity.message}</p>}

            <button type="submit">Add item</button>
        </form>
    )
}