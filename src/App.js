import React, { useState } from "react";
import "./style.css";
import { Timer } from './Timer';
import { Times } from './Times';

export default function App() {
  const [times, setTimes] = useState([]);

  const onStop = (time) => {
    setTimes((times) => [...times, time]);
  };

  return (
    <div className="container">
      <h1>Speedrun Timer</h1>
      <Timer onStop={onStop} />

      <hr />

      <Times times={times} />
    </div>
  );
}
