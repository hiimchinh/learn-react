import { useState } from "react";
import "./ColorBox.css";
export default function ColorBox() {
  const [color, setColor] = useState("red");
  const changeColor = () => {
    setColor(
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
    );
  };
  return (
    <div
      className="ColorBox"
      style={{ backgroundColor: color }}
      onClick={changeColor}
    ></div>
  );
}
