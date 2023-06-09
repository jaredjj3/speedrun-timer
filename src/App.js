import React, { useState } from "react";
import "./style.css";
import { Timer } from './Timer';
import { Times } from './Times';

export default function App() {
  const [times, setTimes] = useState([]);

  return (
    <div className="container">
      <h1>Speedrun Timer</h1>
      <Timer />

      <hr />

      <Times />
    </div>
  );
}
