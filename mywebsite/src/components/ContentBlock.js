import React from "react";

function ContentBlock(props) {
  const blockC =
    props.blockClasses !== undefined ? props.blockClasses : "pt-10";
  const headerC =
    props.headerClasses !== undefined
      ? props.headerClasses
      : "text-basic-a text-3xl";
  const textC = props.textClasses !== undefined ? props.textClasses : "pt-8";

  return (
    <div className={blockC}>
      <div className={props.blockClasses}>
        <h1 className={headerC}>{props.header}</h1>
        <p className={textC}>{props.text}</p>
      </div>
    </div>
  );
}

export default ContentBlock;
