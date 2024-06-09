import React, { useState } from 'react';
import './App.css';

function App() {
  const [deposit, setDeposit] = useState('');
  const [result, setResult] = useState(null);

  const APY = 1.0247;
  const DEX_com = 0.14;
  const k = 365 * 24 / 27;
  const cycle_gain = Math.pow(APY, 1 / k);

  const calculateT = () => {
    const A = parseFloat(deposit);
    if (isNaN(A)) {
      alert("Please enter a valid number for the deposit.");
      return;
    }
    console.log(cycle_gain)
    const T = 27 * Math.ceil( Math.log((A + 2 * DEX_com) / A) / Math.log(cycle_gain));
    setResult(T);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">APY Calculator</h1>
        <label className="label" htmlFor="deposit-input">
          Enter the deposit amount (A):
        </label>
        <input
          id="deposit-input"
          className="input"
          type="number"
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
          min="0"
        />
        <button className="button" onClick={calculateT}>Calculate T</button>
        {result !== null && (
          <div className="result">
            <h2 className="result-title">Result</h2>
            <p className="result-value">T = {result.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
