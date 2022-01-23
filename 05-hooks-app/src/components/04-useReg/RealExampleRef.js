import React, { useState } from "react";
import { MultiplesCustomsHooks } from "../03-examples/MultiplesCustomsHooks";

import "../03-examples/custom.css";

export default function RealExampleRef() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>RealExampleRef</h1>

      <hr />

      {show && <MultiplesCustomsHooks />}

      <button
        className="btn btn-primary mt-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
    </div>
  );
}
