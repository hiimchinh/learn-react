import "./App.css";
import LuckyN from "./LuckyN/LuckyN.jsx";
import { sumDice } from "./LuckyN/utils.js";

function App() {
    const lessThan4 = (dice) => {
        return sumDice(dice) < 4;
    };
    const allSameValues = (dice) => {
        return dice.every((v) => v === dice[0]);
    };
    return (
        <>
            <LuckyN winCheck={lessThan4} title="Less than 4" />
            <LuckyN
                numDice={3}
                winCheck={allSameValues}
                title="All same value dice"
            />
        </>
    );
}

export default App;
