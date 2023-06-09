import React from "react";
import "./style.css";
import { Timer } from './Timer';

export default function App() {
  return (
    <div className="container">
      <h1>Speedrun Timer</h1>
      <Timer />

      <hr />

      <div>TODO: Times</div>
    </div>
  );
}
