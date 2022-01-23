import React, { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("Me volvi a generar :(");

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          increment(5);
        }}
      >
        Incrementar
      </button>
    </div>
  );
});