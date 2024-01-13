import { useState } from "react";

function Counter(props) {
  const [count, setcount] = useState(0);

  function increment() {
    setcount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setcount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <h2>{props.name}</h2>
      <p>
        {count}
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
      </p>
    </div>
  );
}

export default Counter;
