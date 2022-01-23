import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";

import "../05-useLayoutEffect/layout.css";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);

  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Memorize</h1>
      <hr />
      <h2>
        Counter: <Small value={counter} />
      </h2>
      <button className="btn btn-primary" onClick={() => increment()}>
        Increment
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setShow(!show)}
      >
        show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
