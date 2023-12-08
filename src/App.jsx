import "./App.css";
import ScoreKeeper2 from "./ScoreKeeper2";
// import EmojiClicker from "./EmojiClicker";

function App() {
  return (
    <>
      <ScoreKeeper2 numPlayers={3} target={3} />
      {/* <EmojiClicker /> */}
    </>
  );
}

export default App;
