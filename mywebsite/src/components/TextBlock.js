import React from "react";

export const TextBlock = (props) => (
  <div className={props.className}>
    <p className="pl-1 text-base">{props.text}</p>
  </div>
);
