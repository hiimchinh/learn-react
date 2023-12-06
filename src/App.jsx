import "./App.css";
import Clicker from "./Clicker";
import ColorBox from "./ColorBox";
import ColorList from "./ColorList";
import Counter from "./Counter";
import DoubleDice from "./DoubleDice";
import PropertyList from "./PropertyList";
import ShoppingList from "./ShoppingList";
import Slots from "./Slots";
import Toggler from "./Toggler";

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

  const colors = [
    "#E53935",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
  ];
  return (
    <>
      <ColorBox colors={colors} />
      {/* <Toggler /> */}
      {/* <Counter /> */}
      {/* <Clicker message="Hello World" buttonClick="Do not click!" /> */}
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
