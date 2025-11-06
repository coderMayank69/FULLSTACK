import {useState} from 'react';
import {v4 as uuid} from 'uuid';
import ValidatedShoppingListForm from './validatedShoppingListForm';

export default function ShoppingList(){
    const [items, setItems] = useState([
        {id: uuid(),product: 'Apples', quantity: 3},
        {id: uuid(),product: 'Bananas', quantity: 2},
        {id: uuid(),product: 'Oranges', quantity: 4}
    ]);
    const addItem = (item) => {
        // add the new item as a single element (item is an object, not an array)
        setItems(prevItems => [...prevItems, item]);
    }
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map(i =>
                     <li key={i.id}>
                        {i.product} - {i.quantity}
                        </li>
                    )}
            </ul>
            <ValidatedShoppingListForm addItem={addItem}/>
        </div>
    )
}