import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div className="section">
      <h2>useState</h2>
      <button onClick={() => setCount(count => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default UseState;
