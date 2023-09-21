import './App.css';
import { useState } from "react";
import Counter from './features/counter/Counter';
import Coin from './features/coin/Coin';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }


  return (
    <div className="App">
      <Counter count={count} incrementCount={incrementCount} decrementCount={decrementCount} />
      <Coin count={count} />
    </div>
  );
}

export default App;
