import React from "react";
import { Carousel } from "../components/Carousel";
import ProjectSlide from "../components/ProjectSlide";
import projects from "../data/ProjectsData";

var projectBlocks = [];

function Blog() {
  for (let i = 0; i < projects.length; i++) {
    projectBlocks.push(
      <ProjectSlide
        header={projects[i].name}
        image={projects[i].image}
        alt={projects[i].alt}
        description={projects[i].description}
        technologies={projects[i].technologies}
      />
    );
  }
  return <Carousel slides={projectBlocks}></Carousel>;
}

export default Blog;
