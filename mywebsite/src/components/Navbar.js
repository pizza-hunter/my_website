import React from "react";
import { NavLink } from "react-router-dom";
const navbarItemTitles = [
  {
    title: "Work",
    link: "work",
  },
  {
    title: "About me",
    link: "about",
  },
  {
    title: "Blog",
    link: "blog",
  },
  {
    title: "Cool stuff I've found",
    link: "coolstuff",
  },
];

export class Navbar extends React.Component {
  render() {
    const navbarItems = navbarItemTitles.map((item) => (
      <li className="inline-block px-2 mx-2 text-xl">
        <NavLink to={"/" + item.link}></NavLink> {item.title}
      </li>
    ));
    console.log(navbarItems);
    return (
      <div className="inline-block self-end">
        <ul className="pb-5" id="navbar">
          {navbarItems}
        </ul>
      </div>
    );
  }
}
