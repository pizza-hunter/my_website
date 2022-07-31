import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
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
    let button;
    var activeV = this.state.visible ? "is-active" : "";
    if (visible) {
      button = <ToggleButton onClick={this.toggle} active={activeV} />;
      nav = (
        <div className="w-52 text-3xl h-screen fixed z-10 top-0 right-0 overflow-x-hidden duration-500 basic-light pt-20 pl-5">
          <ul className="">
            <NavItem link="/" text="Home" />
            <NavItem link="/blogs" text="Blogs" />
            <NavItem link="/work" text="Work" />
            <NavItem link="/coolstuff" text="Cool Stuff" />
          </ul>
        </div>
      );
    } else {
      button = <ToggleButton onClick={this.toggle} active={activeV} />;
      nav = (
        <div className="w-0 text-3xl h-screen fixed z-10 top-0 right-0 overflow-x-hidden duration-500"></div>
      );
    }
    return (
      <div className="flex justify-between">
        <div>
          <h1 className="p-3 text-6xl font-semibold">Hunter Green</h1>
        </div>
        <div className="text-right fixed right-0 ">
          {button}
          {nav}
        </div>
      </div>
    );
  }
}

const NavItem = (props) => {
  return (
    <div className="pt-3">
      <Link to={props.link}>
        <div className=" pt-2 pb-1 pl-5 pr-4  hover:bg-basic rounded-md">
          <li className="ease-in duration-600 border-b-2 border-b-slate-200 ">
            {props.text}
          </li>
        </div>
      </Link>
    </div>
  );
};

const ToggleButton = (props) => {
  return (
    <div className="basic-accent fixed top-0 right-0 w-20 h-16 rounded-bl-full z-20">
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

// class largeNavbar extends React.Component() {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <div id="navbar-wrapper" className="flex justify-between">
//           <h1 className=" p-3 text-6xl font-semibold">Hunter Green</h1>
//         </div>
//         <div className="inline-block self-end">
//           <ul className="pb-5" id="navbar">
//             <li className="inline-block px-2 mx-2 text-xl">
//               <Link to="/">Home</Link>
//             </li>
//             <li className="inline-block px-2 mx-2 text-xl">
//               <Link to="/blogs">Blogs</Link>
//             </li>
//             <li className="inline-block px-2 mx-2 text-xl">
//               <Link to="/work">Work</Link>
//             </li>
//             <li className="inline-block px-2 mx-2 text-xl">
//               <Link to="/coolstuff">Cool stuff</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

export default Navbar2;
