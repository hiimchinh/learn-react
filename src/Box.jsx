import "./Box.css";
import { useState } from "react";
function Box() {
    const [isToggle, setIsToggle] = useState(false);
    const toggle = () => {
        setIsToggle(!isToggle);
    };

    return (
        <div
            className="Box"
            style={{ backgroundColor: isToggle ? "red" : "black" }}
            onClick={toggle}
        ></div>
    );
}
export default Box;
