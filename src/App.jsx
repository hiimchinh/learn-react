import './App.css'
import ColorList from './ColorList'
import DoubleDice from './DoubleDice'
import ShoppingList from './ShoppingList'
import Slots from './Slots'


function App() {
  const shoppingListData = [
    {name: 'eggs', quantity: 12, completed: false},
    {name: 'milk', quantity: 24, completed: true},
    {name: 'chicken breast', quantity: 4, completed: false},
    {name: 'carrots', quantity: 30, completed: true},
  ];
  return (
    <>
      <ShoppingList items={shoppingListData}/>
      {/* <Slots val1="1" val2="2" val3="3"/>
      <Slots val1="1" val2="1" val3="1"/> */}
    </>
  )
}

export default App
