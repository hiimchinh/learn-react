import "./App.css";
import Clicker from "./Clicker";
import ColorList from "./ColorList";
import DoubleDice from "./DoubleDice";
import PropertyList from "./PropertyList";
import ShoppingList from "./ShoppingList";
import Slots from "./Slots";

function App() {
  const shoppingListData = [
    { id: 1, name: "eggs", quantity: 12, completed: false },
    { id: 2, name: "milk", quantity: 24, completed: true },
    { id: 3, name: "chicken breast", quantity: 4, completed: false },
    { id: 4, name: "carrots", quantity: 30, completed: true },
  ];
  const properties = [
    { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
    { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
    { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
    { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
    { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
    { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
  ];
  return (
    <>
      <Clicker message="Hello World" buttonClick="Do not click!" />
      {/* <div>
        <PropertyList properties={properties} />
      </div> */}
      {/* <ShoppingList items={shoppingListData} /> */}
      {/* <Slots val1="1" val2="2" val3="3"/>
      <Slots val1="1" val2="1" val3="1"/> */}
    </>
  );
}

export default App;
