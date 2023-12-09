import "./App.css";
import Dice from "./LuckyN/Dice.jsx";

function App() {
    return (
        <>
            <Dice dice={[1, 2, 3]} color={"red"} />
            <Dice dice={[6, 4, 3]} color={"green"} />
            <Dice dice={[3, 5, 6]} />
        </>
    );
}

export default App;
