import React from "react";

export class Navbar extends React.Component {
  render() {
    var items = ["Work", "About me", "Blog", "Cool stuff I've found"];
    return (
      <div className="navbar flex absolute top-0 right-0 space-x-2 mx-5">
        {items.map(function (item, index) {
          <p key={index}>{item}</p>;
          return <NavbarItem key={index} text={item} />;
        })}
      </div>
    );
  }
}

export const NavbarItem = (props) => {
  <div key={props.key} className="nav-item">
    {props.text}
  </div>;
};
