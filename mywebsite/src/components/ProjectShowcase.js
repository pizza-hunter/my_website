import React from "react";

let projects = [
  {
    name: "LR Display",
    description:
      "LR (Likelihood Ratio) Display tool, determines the likelihood that a crime scene DNA sample and a sample taken from a potential suspect match. The tool generates a report detailing run information and two graphs for data interpretation.",
    image: "./images/LRDisplay1.png",
    alt: "LR Display entry page",
  },
  {
    name: "STRmix Deconvolution",
    description:
      "A tool which will be deployed by authorised forensic scientists to interrogate data to differentiate multiple sources of DNA profiling extracts found within a provided biological sample such as artefacts or exhibits (e.g. clothing blood stains). By generating useful graphs and tables to represent the data, and providing a smooth process for the forensic experts.",
    image: "./images/STRmix1.png",
    alt: "STRmix entry page",
  },
  {
    name: "Recipe Mate",
    description: "An android app that allows you to create and store recipes",
    image: "./images/RecipeMate02.jpg",
    alt: "Recipe creation screen",
  },
  {
    name: "Pizza Dough calcuator",
    description:
      "An android app of a simple reference calculator for ingredients proportions when making pizza dough",
    image: "./images/PizzaDoughCalc.jpg",
    alt: "Pizza Dough calcuator",
  },
  {
    name: "Calculator",
    description:
      "Flutter app of a calculator for basic addition, subraction, multiplication and division",
    image: "./images/Calculator.jpg",
    alt: "Calcuator",
  },
];
export class ProjectShowcase extends React.Component {
  render() {
    var items = [];
    for (let i = 0; i < projects.length; i++) {
      items.push(
        <Project
          name={projects[i].name}
          description={projects[i].description}
          image={projects[i].image}
        />
      );
    }
    return <div className="grid grid-cols-2 gap-2">{items}</div>;
  }
}

export class Project extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    hidden: false,
  };
  handleHolverEnter = (event) => {
    this.setState({
      hidden: true,
    });
  };
  handleHolverLeave = (event) => {
    this.setState({
      hidden: false,
    });
  };
  render() {
    return (
      <div
        onMouseEnter={this.handleHolverEnter}
        onMouseLeave={this.handleHolverLeave}
      >
        {this.state.hidden ? (
          <div>
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0.885), rgba(0, 0, 0, 0.885)),url(" +
                  this.props.image +
                  ")",
              }}
              className="text-white h-80 bg-cover bg-no-repeat bg-center grid content-center border-8 border-solid border-stone-800"
            >
              <h1 className="text-xl text-center px-3 md:text-2xl ">
                {this.props.description}
              </h1>
            </div>
          </div>
        ) : (
          <div>
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0.585), rgba(0, 0, 0, 0.585)),url(" +
                  this.props.image +
                  ")",
              }}
              className="text-white h-80 bg-cover bg-no-repeat bg-center grid content-center border-8 border-solid border-stone-400"
            >
              <h1 className="text-2xl text-center md:text-4xl ">
                {this.props.name}
              </h1>
            </div>
          </div>
        )}
      </div>
    );
  }
}
