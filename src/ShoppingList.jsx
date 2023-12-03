import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingList({ items }) {
    return (
        <ul>
            {items.map((item) => <ShoppingListItem item={item}/>)}
        </ul>
    )
}