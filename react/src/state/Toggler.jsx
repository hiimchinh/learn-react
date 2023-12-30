import { useState } from "react";
import "./Toggler.css";

export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  return (
    <p className="Toggler" onClick={() => setIsHappy(!isHappy)}>
      {isHappy ? "😄" : "😥"}
    </p>
  );
}
