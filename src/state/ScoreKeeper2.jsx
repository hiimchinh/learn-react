import { useState } from "react";

function ScoreKeeper2({ numPlayers = 2, target = 10 }) {
  const [players, setPlayers] = useState(Array(numPlayers).fill(0));
  const addScore = (i) => {
    setPlayers((previousPlayers) =>
      previousPlayers.map((currentScore, index) => {
        if (index === i) {
          return currentScore + 1;
        }
        return currentScore;
      })
    );
  };
  return (
    <div>
      <ul>
        {players.map((score, index) => (
          <li key={index}>
            Player {index + 1}: {score}&nbsp;
            <button onClick={() => addScore(index)}>+1</button>
            {score >= target && <span>WIN!!!!</span>}
          </li>
        ))}
      </ul>
      <button onClick={() => setPlayers(Array(numPlayers).fill(0))}>
        Reset
      </button>
    </div>
  );
}
export default ScoreKeeper2;
