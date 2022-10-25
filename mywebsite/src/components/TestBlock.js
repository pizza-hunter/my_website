import React from "react";
function TestBlock(props) {
  return (
    <div className="bg-basic-l">
      <h3 className="text-4xl">{props.header}</h3>
      <img className="max-h-96" src={props.image} alt={props.alt}></img>
      <p>{props.description}</p>
    </div>
  );
}

export default TestBlock;
