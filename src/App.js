import React, { useState } from "react";
import "./index.css";

// Project --------------------------------------------------------
// 1. Simple Counter
// 2. Temperature control
// Project --------------------------------------------------------

const App = () => {
  const [tempValue, setTempValue] = useState(20);
  const [tempColor, setTempColor] = useState("neutral")

  const decreaseTemp = () => {
    if (tempValue === 0) return;

    const newTempValue = tempValue - 1;
    if (newTempValue <= 17) {
      setTempColor("cold")
    }
    else if (newTempValue > 17 && newTempValue <= 23) {
      setTempColor("neutral")
    }
    setTempValue(newTempValue)
  }
  const increaseTemp = () => {
    if (tempValue === 30) return;

    const newTempValue = tempValue + 1;
    if (newTempValue > 23) {
      setTempColor("hot")
    }
    else if (newTempValue > 17 && newTempValue <= 23) {
      setTempColor("neutral")
    }
    setTempValue(newTempValue)
  }

  return (
    <div className="app-container">
      <div className="temp-disp-container">
        <div className={`temp-display ${tempColor}`}>{tempValue}°C</div>
      </div>
      <div className="button-container">
        <button onClick={decreaseTemp}>-</button>
        <button onClick={increaseTemp}>+</button>
      </div>
    </div>
  )
}

export default App 