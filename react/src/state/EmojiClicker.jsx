import { useState } from "react";
import { v4 as uuid } from "uuid";
function getRandomEmoji() {
  const emojis = ["😀", "🤣", "😡", "🥶", "🤢", "👿", "🤡"];
  const index = Math.floor(Math.random() * emojis.length);
  return emojis[index];
}

function EmojiClicker() {
  const [emojis, setEmojis] = useState([
    { id: uuid(), emoji: getRandomEmoji() },
  ]);
  const addEmoji = () => {
    setEmojis((oldEmojis) => {
      return [...oldEmojis, { id: uuid(), emoji: getRandomEmoji() }];
    });
  };
  const deleteEmoji = (id) => {
    setEmojis((oldEmojis) => oldEmojis.filter((e) => e.id !== id));
  };
  const updateToHeart = () => {
    setEmojis((oldEmojis) =>
      oldEmojis.map((e) => {
        return { ...e, emoji: "❤️" };
      })
    );
  };
  return (
    <div>
      {emojis.map((e) => (
        <span
          key={e.id}
          style={{ fontSize: "4rem" }}
          onClick={() => deleteEmoji(e.id)}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>+1 Emoji</button>
      <button onClick={updateToHeart}>Update all to hearts</button>
    </div>
  );
}
export default EmojiClicker;
