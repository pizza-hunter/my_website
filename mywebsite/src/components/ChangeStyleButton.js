import React from "react";

export class ChangeStyleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      styles: ["basic", "light", "dark", "blue", "funky", "lakers"],
    };
  }

  updateIndex = () => {
    this.setState({
      index:
        this.state.index < this.state.styles.length - 1
          ? this.state.index + 1
          : (this.state.index = 0),
    });
    this.changeStyle();
  };

  changeStyle = () => {
    var body = document.getElementsByTagName("body");
    body.classList.remove(this.styles[this.index - 1]);
    body.classList.add(this.styles[this.index]);
  };

  render() {
    return (
      <div>
        <button
          className="p-2 mt-2 bg-blue-500 rounded-sm"
          onClick={this.updateIndex}
        >
          Next Style
        </button>
        {this.state.index}
      </div>
    );
  }
}
