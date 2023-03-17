import React from "react";

function InterestType({ name, sColour, eColour }) {
  return (
    <div
      className={`basis-2/5 rounded-md bg-gradient-to-r from-${sColour}-500 to-${eColour}-500 h-44 hover:basis-7/12 hover:ease-in-out hover:delay-75 cursor-pointer transition-all`}
    >
      <h1 className="text-7xl p-5">{name}</h1>
    </div>
  );
}

export default InterestType;
