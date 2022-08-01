import React from "react";
import { Link } from "react-router-dom";
import "hamburgers/dist/hamburgers.css";

function Navbar2() {
  return (
    <nav className="">
      <MobileNavbar />
    </nav>
  );
}

class MobileNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    const visible = this.state.visible;
    let nav;
    var activeV = this.state.visible ? "is-active" : "";
    const title = "Hunter Green";
    let titleSpans = [];
    for (let i = 0; i < title.length; i++) {
      let titleSpan;
      i % 3 == 0
        ? (titleSpan = "l")
        : i % 3 == 1
        ? (titleSpan = "a")
        : (titleSpan = "h");

      titleSpans[i] = <span className={"h-t-" + titleSpan}>{title[i]}</span>;
    }
    let button = <ToggleButton onClick={this.toggle} active={activeV} />;
    let navItems = (
      <ul className="">
        <NavItem link="/blogs" text="Blogs" />
        <NavItem link="/work" text="Work" />
        <NavItem link="/coolstuff" text="Cool Stuff" />
      </ul>
    );
    if (visible) {
      nav = (
        <div className="w-52 text-3xl h-screen fixed z-10 top-0 right-0 overflow-x-hidden duration-500 basic-light pt-20 pl-5">
          {navItems}
        </div>
      );
    } else {
      nav = (
        <div className="w-0 text-3xl h-screen fixed z-10 top-0 right-0 overflow-x-hidden duration-500 md:inline-block md:self-end md:px-2 md:mx-2 md:text-xl md:relative md:w-auto md:h-auto">
          {navItems}
        </div>
      );
    }
    return (
      <div className="flex justify-between">
        <div id="title-wrap">
          <Link to="/">
            <h1 className="p-3 text-6xl font-semibold pt-10 md:whitespace-nowrap hover:text-basic-a duration-300">
              {titleSpans}
            </h1>
          </Link>
        </div>
        <div className="text-right fixed right-0 md:flex md:justify-between md:text-center md:relative md:h-auto">
          {button}
          {nav}
        </div>
      </div>
    );
  }
}

const NavItem = (props) => {
  return (
    <div className="pt-3 md:inline-block md:pt-0 md:overflow-hidden">
      <Link to={props.link}>
        <div className=" pt-2 pb-1 pl-5 pr-4 hover:bg-basic rounded-md md:pt-0 md:pb-2 md:hover:bg-basic-l md:hover:translate-y-2 md:duration-300">
          <li className="ease-in duration-600 border-b-2 border-b-slate-200 md:border-none md:text-2xl lg:text-3xl">
            {props.text}
          </li>
        </div>
      </Link>
    </div>
  );
};

const ToggleButton = (props) => {
  return (
    <div className="basic-accent fixed top-0 right-0 w-20 h-16 rounded-bl-full z-20 md:hidden md:h-0 md:w-0">
      <button
        className={"text-basic-h hamburger hamburger--collapse " + props.active}
        type="button"
        onClick={props.onClick}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner text-basic-h"></span>
        </span>
      </button>
    </div>
  );
};

export default Navbar2;
