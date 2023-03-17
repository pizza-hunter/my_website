import React from "react";
import ContentBlock from "../components/ContentBlock";
import InterestsBlock from "../components/InterestsBlock";

function Interests() {
  return (
    <div className="md:flex md:justify-center px-5 md:px-10 overflow-x-hidden">
      <div>
        <div className="md:pt-16">
          <ContentBlock
            headerClasses={"text-basic-h text-shadow-basic text-5xl"}
            header={"Interests"}
            text={`For whatever reason that you'd care to know my interests in media,
               and anything else I decide to include here they are!`}
            textClasses={"text-xl pt-10"}
          />
        </div>
        <InterestsBlock />
      </div>
    </div>
  );
}

export default Interests;
