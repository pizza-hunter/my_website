import React from "react";
import { Carousel } from "../components/Carousel";
import ContentBlock from "../components/ContentBlock";
import { ProjectShowcase } from "../components/ProjectShowcase";
import ProjectSlide from "../components/ProjectSlide";
import projects from "../data/ProjectsData";

var projectBlocks = [];

function Work() {
  for (let i = 0; i < projects.length; i++) {
    projectBlocks.push(
      <ProjectSlide
        header={projects[i].name}
        image={projects[i].image}
        alt={projects[i].alt}
        description={projects[i].description}
        technologies={projects[i].technologies}
        key={projects[i].name}
      />
    );
  }
  return (
    <div className="md:flex md:justify-center ">
      <div className="px-3 md:mx-6 md:w-full rounded-lg">
        <ContentBlock
          header="Work and Projects"
          headerClasses="text-basic-h text-3xl"
          text="A collection of some of the projects i've worked on including webpages, web applications, and mobile applications"
        />
        <main className="flex mt-10 mb-4">
          <Carousel slides={projectBlocks}></Carousel>
        </main>
      </div>
    </div>
  );
}

export default Work;
