export default function Clicker({ message, buttonClick }) {
  return <button onClick={() => alert(buttonClick)}>{message}</button>;
}
