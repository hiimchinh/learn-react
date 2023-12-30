import { useState } from "react";
import "./ColorBox.css";

function randomChoice(list) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}
export default function ColorBox({ colors }) {
  const [color, setColor] = useState(randomChoice(colors));
  const changeColor = () => {
    setColor(randomChoice(colors));
  };
  return (
    <div
      className="ColorBox"
      style={{ backgroundColor: color }}
      onClick={changeColor}
    ></div>
  );
}
