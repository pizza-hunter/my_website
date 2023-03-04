import React from "react";
class ProjectSlide extends React.Component {
  render() {
    const techs = Object.entries(this.props.technologies).map(([k, v]) => (
      <div key={k} className=" box-border grid grid-cols-2 pt-4">
        <div className="flex">
          <div className="w-1/3 align-middle justify-center">
            <img src={v} className="max-h-5 pr-1 mt-1" alt=""></img>
          </div>
          <p className="whitespace-nowrap w-1/3 text-lg">{k}</p>
        </div>
      </div>
    ));
    return (
      <div
        id="slideWrap"
        className={
          this.props.slideDirection +
          " " +
          "grid w-full left-0 absolute top-0 md:grid-cols-2 md:flex-col-reverse"
        }
      >
        <div
          id="title"
          className="h-full grid text-center justify-center content-center md:text-left md:justify-start md:pl-20"
        >
          <h3 className="text-3xl md:text-5xl">{this.props.header}</h3>
        </div>
        <div id="picture" className="py-2 grid justify-center content-center ">
          <img
            className="max-h-80 object-cover"
            src={this.props.image}
            alt={this.props.alt}
          ></img>
        </div>
        <div
          id="description"
          className="h-full px-4 grid justify-center content-center md:content-end md:pb-10 "
        >
          <p className="text-lg">{this.props.description}</p>
        </div>
        <div
          id="techs"
          className="h-full pb-4 grid grid-cols-2 px-4 items-center "
        >
          {techs}
        </div>
      </div>
    );
  }
}

export default ProjectSlide;
