import React from "react";
import { Carousel } from "../components/Carousel";
import TestBlock from "../components/TestBlock";

let projects = [
  {
    name: "Signature Shower Screens",
    description:
      "Rehaul of a shower screen and wardrobes business, designed in figma and developed in wordpress",
    // image: "./images/techIcons/reportlab.svg",
    // image: "./images/techIcons/Js.webp",
    image: "./images/sss.jpg",
    alt: "Signature Shower Screens and Wardrobes homepage hero",
    technologies: {
      Figma: "./images/techIcons/figma.png",
      JavaScript: "./images/techIcons/Js.webp",
      WordPress: "./images/techIcons/wordpress.png",
      Tailwind: "./images/techIcons/tailwind.png",
    },
  },
  {
    name: "LR Display",
    description:
      "LR (Likelihood Ratio) Display tool, determines the likelihood that a crime scene DNA sample and a sample taken from a potential suspect match. The tool generates a report detailing run information and two graphs for data interpretation.",
    image: "./images/LRDisplay1.png",
    alt: "LR Display entry page",
    technologies: {
      Python: "./images/techIcons/python.png",
      Django: "./images/techIcons/django.svg",
      JavaScript: "./images/techIcons/Js.webp",
      Bootstrap: "./images/techIcons/bootstrap.png",
      Matplotlib: "./images/techIcons/matplotlib.png",
      ReportLab: "./images/techIcons/reportlab.svg",
    },
  },
  {
    name: "STRmix Deconvolution",
    description:
      "A tool which will be deployed by authorised forensic scientists to interrogate data to differentiate multiple sources of DNA profiling extracts found within a provided biological sample such as artefacts or exhibits (e.g. clothing blood stains). By generating useful graphs and tables to represent the data, and providing a smooth process for the forensic experts.",
    image: "./images/STRmix1.png",
    alt: "STRmix entry page",
    technologies: {
      Python: "./images/techIcons/python.png",
      Django: "./images/techIcons/django.svg",
      JavaScript: "./images/techIcons/Js.webp",
      Bootstrap: "./images/techIcons/bootstrap.png",
    },
  },
  {
    name: "Recipe Mate",
    description: "An android app that allows you to create and store recipes",
    image: "./images/RecipeMate02.jpg",
    alt: "Recipe creation screen",
    technologies: {
      Java: "./images/techIcons/java.svg",
      "Android Studio": "./images/techIcons/androidstudio.png",
    },
  },
  {
    name: "Pizza Dough Calcuator",
    description:
      "An android app of a simple reference calculator for ingredients proportions when making pizza dough",
    image: "./images/PizzaDoughCalc.jpg",
    alt: "Pizza Dough calcuator",
    technologies: {
      Java: "./images/techIcons/java.svg",
      "Android Studio": "./images/techIcons/androidstudio.png",
    },
  },
  {
    name: "Calculator",
    description:
      "Flutter app of a calculator for basic addition, subraction, multiplication and division",
    image: "./images/Calculator.jpg",
    alt: "Calcuator",
    technologies: {
      Flutter: "./images/techIcons/flutter.svg",
      Dart: "./images/techIcons/dart.svg",
    },
  },
];

var testBlocks = [];

function Blog() {
  for (let i = 0; i < projects.length; i++) {
    testBlocks.push(
      <TestBlock
        header={projects[i].name}
        image={projects[i].image}
        alt={projects[i].alt}
        description={projects[i].description}
        technologies={projects[i].technologies}
      />
    );
  }
  return <Carousel slides={testBlocks}></Carousel>;
}

export default Blog;
