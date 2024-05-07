import React from "react";

function Button({ name }) {
  return (
    <div className="m-2 p-2 ">
      <button className="px-3 py-1 rounded-lg bg-slate-300">{name}</button>
    </div>
  );
}

export default Button;
