import Box from "./Box.jsx";
import "./BoxGrid.css";
import { useState } from "react";

function BoxGrid() {
    const [boxes, setBoxes] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]);
    const reset = () => {
        setBoxes([
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
        ]);
    };
    const toggle = (i) => {
        setBoxes((prevState) => {
            return prevState.map((active, index) =>
                index === i ? !active : active
            );
        });
    };
    return (
        <div className="BoxGrid">
            {boxes.map((box, i) => (
                <Box key={i} isActive={box} setIsActive={() => toggle(i)} />
            ))}
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default BoxGrid;
