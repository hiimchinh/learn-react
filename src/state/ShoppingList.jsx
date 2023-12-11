import ShoppingListItem from "./ShoppingListItem.jsx";

export default function ShoppingList({ items }) {
    return (
        <ul>
            {items.map((item) => (
                <ShoppingListItem key={item.id} item={item} />
            ))}
        </ul>
    );
}
