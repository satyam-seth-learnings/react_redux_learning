import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button className="button" aria-label="Increment value" onClick={() => { setCount(count + 1) }}> + </button>

      <span className="value">Count: {count}</span>

      <button className="button" aria-label="Decrement value" onClick={() => { setCount(count - 1) }}> - </button>
    </div>
  );
}

export default App;
