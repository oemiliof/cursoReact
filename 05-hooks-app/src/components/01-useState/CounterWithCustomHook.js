import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./Counter.css";

export default function CounterWithCustomHook() {
  const { state, increment, decrement, reset } = useCounter(100);

  return (
    <div>
      <h1>Counter with Hook:{state}</h1>

      <hr />

      <button onClick={() => increment(1)} className="btn btn-primary">
        +1
      </button>

      <button onClick={() => decrement(1)} className="btn btn-secondary">
        -1
      </button>

      <button onClick={reset} className="btn btn-warning">
        reset
      </button>
    </div>
  );
}
