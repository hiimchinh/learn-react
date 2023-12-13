import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm.jsx";
import { v4 as uuid } from "uuid";

function ShoppingList() {
    const [items, setItems] = useState([
        { id: 1, product: "apple", quantity: 2 },
        { id: 2, product: "orange", quantity: 5 },
    ]);
    const addItem = (item) => {
        setItems((currentItems) => {
            return [...currentItems, { id: uuid(), ...item }];
        });
    };
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.product} - {item.quantity}
                    </li>
                ))}
            </ul>
            <ShoppingListForm addItem={addItem} />
        </div>
    );
}

export default ShoppingList;
