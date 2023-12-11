export default function ShoppingListItem({ item }) {
  return (
    <li
      style={{
        color: item.completed ? "gray" : "red",
        textDecoration: item.completed ? "line-through" : "",
      }}
    >
      {item.name} - {item.quantity}
    </li>
  );
}
