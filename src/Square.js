import React from "react";
export { status } from "./Helper";

function Square({ handleClick, value, status }) {
  return (
    <button
      className="cell"
      onClick={handleClick}
      disabled={status || value ? true : false}
    >
      {value}
    </button>
  );
}

export default Square;
