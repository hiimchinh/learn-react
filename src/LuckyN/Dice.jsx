import Die from "./Die.jsx";

function Dice({ dice }) {
    return (
        <section className="Dice">
            {dice.map((die, i) => (
                <Die key={i} value={die} />
            ))}
        </section>
    );
}

export default Dice;
