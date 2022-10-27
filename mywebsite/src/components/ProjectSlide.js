import React from "react";
function ProjectSlide(props) {
  const techs = Object.entries(props.technologies).map(([k, v]) => (
    <div className=" box-border flex grid grid-cols-2 pt-4">
      <div className="flex">
        <div className="w-1/3 align-middle justify-center">
          <img src={v} className="max-h-5 pr-1 mt-1"></img>
        </div>
        <p className="whitespace-nowrap w-1/3 text-lg">{k}</p>
      </div>
    </div>
  ));
  return (
    <div className="w-full">
      <div className=" flex box-border border-2 justify-center">
        <div className="h-20 box-border flex bottom-0 align-middle items-center mb-0 text-center">
          <h3 className="text-3xl ">{props.header}</h3>
        </div>
      </div>
      <div className=" justify-between  border-2 border-t-0">
        <div className="flex justify-center h-64">
          <img
            className="max-h-64 mt-2"
            src={props.image}
            alt={props.alt}
          ></img>
        </div>
        <div className="py-4 px-4 border-b-2 h-28 flex items-center">
          <p className="">{props.description}</p>
        </div>
        <div className="pb-4 grid grid-cols-2 px-4 items-center h-36">
          {techs}
        </div>
      </div>
    </div>
  );
}

export default ProjectSlide;
