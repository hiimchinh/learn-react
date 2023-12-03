import "./App.css";
import ColorList from "./ColorList";
import DoubleDice from "./DoubleDice";
import ShoppingList from "./ShoppingList";
import Slots from "./Slots";

function App() {
  const shoppingListData = [
    { id: 1, name: "eggs", quantity: 12, completed: false },
    { id: 2, name: "milk", quantity: 24, completed: true },
    { id: 3, name: "chicken breast", quantity: 4, completed: false },
    { id: 4, name: "carrots", quantity: 30, completed: true },
  ];
  return (
    <>
      <ShoppingList items={shoppingListData} />
      {/* <Slots val1="1" val2="2" val3="3"/>
      <Slots val1="1" val2="1" val3="1"/> */}
    </>
  );
}

export default App;
