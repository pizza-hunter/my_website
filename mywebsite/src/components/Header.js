import React from "react";

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <h1 className="text-6xl font-semibold">{this.props.title}</h1>
      </div>
    );
  }
}
