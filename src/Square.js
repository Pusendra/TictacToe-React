import React from "react";
export { status } from "./Helper";

function Square({ onClick, value, status }) {
  return (
    <button
      className="cell"
      onClick={onClick}
      disabled={status ? true : value ? true : false}
    >
      {value}
    </button>
  );
}

export default Square;
