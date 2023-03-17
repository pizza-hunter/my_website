import React from "react";

function ContentBlock({
  blockClasses,
  headerClasses,
  textClasses,
  header,
  text,
}) {
  const blockC = blockClasses !== undefined ? blockClasses : "pt-10";
  const headerC =
    headerClasses !== undefined ? headerClasses : "text-basic-a text-3xl";
  const textC = textClasses !== undefined ? textClasses : "pt-8";

  return (
    <div className={blockC}>
      <div className={blockClasses}>
        <h1 className={headerC}>{header}</h1>
        <p className={textC}>{text}</p>
      </div>
    </div>
  );
}

export default ContentBlock;
