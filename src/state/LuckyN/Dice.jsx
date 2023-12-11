import Die from "./Die.jsx";
import "./Dice.css";

function Dice({ dice, color = "blue" }) {
    return (
        <section className="Dice">
            {dice.map((die, i) => (
                <Die key={i} value={die} color={color} />
            ))}
        </section>
    );
}

export default Dice;
