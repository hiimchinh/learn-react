import Dice from "./Dice.jsx";
import { useState } from "react";
import { getRolls, sumDice } from "./utils.js";
import "./LuckyN.css";

function LuckyN({ numDice = 2, goal = 7 }) {
    const [dice, setDice] = useState(getRolls(numDice));
    const hasWon = sumDice(dice) === goal;

    const reRoll = () => {
        setDice(getRolls(numDice));
    };
    return (
        <main className="LuckyN">
            <h1>Roll dice game: {hasWon && "You won!!"}</h1>
            <Dice dice={dice} />
            <button onClick={reRoll}>Re roll</button>
        </main>
    );
}
export default LuckyN;
