import React from "react";
import { Link } from "react-router-dom";
import "hamburgers/dist/hamburgers.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(e) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(e.target)) {
      this.setState({
        visible: false,
      });
    }
  }

  toggle = () => {
    if (window.innerWidth <= 768) {
      this.setState({
        visible: !this.state.visible,
      });
    }
  };

  createTitlespans(title) {
    let titleSpans = [];
    for (let i = 0; i < title.length; i++) {
      let titleSpan = this.determineSpanColour(i);

      titleSpans[i] = (
        <span key={i} className={"h-t-" + titleSpan}>
          {title[i]}
        </span>
      );
    }
    return titleSpans;
  }

  determineSpanColour(i) {
    switch (i % 3) {
      case 1:
        return "a";
      case 2:
        return "h";
      default:
        return "";
    }
  }

  render() {
    const visible = this.state.visible;
    let nav;
    var activeV = this.state.visible ? "is-active" : "";
    const title = "Hunter Green";
    let titleSpans = this.createTitlespans(title);
    let button = (
      <MobileNavToggleButton onClick={this.toggle} active={activeV} />
    );
    let navItems = (
      <ul className="">
        <NavTab onClick={this.toggle} link="/work" text="Work" />
        <NavTab onClick={this.toggle} link="/interests" text="Interests" />
      </ul>
    );
    // Condition for showing/hiding nav in mobile view
    if (visible) {
      nav = (
        <div className="w-52 text-3xl h-screen fixed top-0 right-0 overflow-x-hidden duration-500 bg-basic-l pt-20 pl-5">
          <NavTab onClick={this.toggle} link="/" text="Home" />
          {navItems}
        </div>
      );
    } else {
      nav = (
        <div className="w-0 text-3xl h-screen fixed top-0 right-0 overflow-x-hidden duration-500 md:inline-block md:self-end md:px-2 md:mx-2 md:text-xl md:relative md:w-auto md:h-auto md:pr-10">
          {navItems}
        </div>
      );
    }
    return (
      <nav>
        <div className="flex justify-between pb-10">
          <div id="title-wrap">
            <Link to="/">
              <h1
                id="pageHeader"
                className="text-6xl font-semibold md:pt-10 pt-20 md:whitespace-nowrap duration-500 md:hover:-translate-y-1 px-5 md:pl-10"
              >
                {titleSpans}
              </h1>
            </Link>
          </div>
          <div
            ref={this.wrapperRef}
            className="text-right relative z-10  md:flex md:justify-between md:text-center md:relative md:h-auto"
          >
            {button}
            {nav}
          </div>
        </div>
      </nav>
    );
  }
}

const NavTab = (props) => {
  return (
    <div className="pt-3 md:inline-block md:pt-0 md:overflow-hidden">
      <Link to={props.link} onClick={props.onClick}>
        <div className=" pt-2 pb-1 pl-5 pr-4 hover:bg-basic rounded-md md:pt-0 md:pb-2 md:hover:bg-basic-l md:hover:bg-opacity-20 md:hover:translate-y-2 md:duration-300">
          <li className="ease-in duration-600 border-b-2 border-b-slate-200 md:border-none md:text-2xl lg:text-3xl list-none">
            {props.text}
          </li>
        </div>
      </Link>
    </div>
  );
};

const MobileNavToggleButton = (props) => {
  return (
    <div className="bg-basic-a absolute top-0 right-0 w-20 h-16 rounded-bl-full z-20 md:hidden md:h-0 md:w-0">
      <button
        className={"hamburger hamburger--collapse " + props.active}
        type="button"
        onClick={props.onClick}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  );
};

export default Navbar;
