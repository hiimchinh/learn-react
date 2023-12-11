import Dice from "./Dice.jsx";
import { useState } from "react";
import { getRolls } from "./utils.js";
import "./LuckyN.css";

function LuckyN({ numDice = 2, winCheck, title = "Dice Roll:" }) {
    const [dice, setDice] = useState(getRolls(numDice));
    const hasWon = winCheck(dice);

    const reRoll = () => {
        setDice(getRolls(numDice));
    };
    return (
        <main className="LuckyN">
            <h1>
                {title}: {hasWon && "You won!!"}
            </h1>
            <Dice dice={dice} />
            <button onClick={reRoll}>Re roll</button>
        </main>
    );
}
export default LuckyN;
