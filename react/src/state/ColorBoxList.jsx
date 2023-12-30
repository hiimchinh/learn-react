import ColorBox from "./ColorBox.jsx";

function ColorBoxList({ rows = 5, columns = 5, colors }) {
    const boxes = Array(rows)
        .fill(0)
        .map(() => Array(columns).fill(1));
    return (
        <div>
            {boxes.map((row, index) => (
                <div style={{ display: "flex" }} key={index}>
                    {row.map((column, i) => (
                        <ColorBox key={index + i} colors={colors} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default ColorBoxList;
