import React from "react";
import ContentBlock from "../components/ContentBlock";
import { ProjectShowcase } from "../components/ProjectShowcase";

function Work() {
  return (
    <div className="md:flex md:justify-center ">
      <div className="px-3 md:w-3/4 trial rounded-lg border-r-4 border-b-4 border-double border-basic-h">
        <ContentBlock
          header="Work and Projects"
          headerClasses="text-basic-h text-3xl"
          text="A collection of some of the projects i've worked on including webpages, web applications, and mobile applications"
        />
        <ProjectShowcase />
      </div>
    </div>
  );
}

export default Work;
