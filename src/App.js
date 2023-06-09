import React, { useState } from "react";
import "./style.css";
import { Timer } from './Timer';
import { Times } from './Times';
import { Time } from './Time';

export default function App() {
  const [times, setTimes] = useState([Time.record(1), Time.record(2)]);

  return (
    <div className="container">
      <h1>Speedrun Timer</h1>
      <Timer />

      <hr />

      <Times times={times} />
    </div>
  );
}
