import React, { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

import "../05-useLayoutEffect/layout.css";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  useEffect(() => {}, [increment]);

  return (
    <div>
      <h1>CallBackHook</h1>

      <hr />

      <h2>{counter}</h2>

      <ShowIncrement increment={increment} />
    </div>
  );
};
