import "./Button.css";

function Button({ children = "Click me", onClick }) {
    return (
        <button className="Button" onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
