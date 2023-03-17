import React, { Children } from "react";

/*
    Call to action element, child element can be nested within
    @param: header - heading text
    @param: text - main text
*/
function CallToAction({ children, header, text }) {
  // Display button if defined
  if (children !== undefined) {
    var child = <div className="pb-8 flex justify-evenly">{children}</div>;
  }

  return (
    <div className="bg-basic-h rounded-3xl mt-28">
      <div className="px-3">
        <div className="px-3 pb-10">
          <h1 className="text-basic-l text-5xl lg:text-6xl text-shadow-basic text-center pt-10">
            {header}
          </h1>
          <p className="text-center pt-10 lg:px-40 text-2xl">{text}</p>
        </div>
        {child}
      </div>
    </div>
  );
}

export default CallToAction;
