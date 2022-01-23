import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";

import "../05-useLayoutEffect/layout.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>

      <hr />

      <p>{memoProcesoPesado}</p>

      <h2>Counter: {counter}</h2>

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
