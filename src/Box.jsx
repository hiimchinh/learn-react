import "./Box.css";
function Box({ isActive, setIsActive }) {
    return (
        <div
            className="Box"
            style={{ backgroundColor: isActive ? "red" : "black" }}
            onClick={setIsActive}
        ></div>
    );
}
export default Box;
