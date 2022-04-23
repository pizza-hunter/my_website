import React from "react";

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <h1 className="text-left text-6xl mt-7 pb-5 font-semibold">
          {this.props.title}
        </h1>
      </div>
    );
  }
}
