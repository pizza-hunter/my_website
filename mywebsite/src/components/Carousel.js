import React from "react";

export class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      slides: props.slides,
    };
  }
  handleIncrement = () => {
    this.setState({
      index:
        this.state.index < this.state.slides.length - 1
          ? this.state.index + 1
          : (this.state.index = 0),
    });
  };
  handleDecrement = () => {
    this.setState({
      index:
        this.state.index > 0
          ? this.state.index - 1
          : (this.state.index = this.state.slides.length - 1),
    });
  };

  render() {
    return (
      <div>
        <div>
          <button
            className="bg-white h-8 w-8 text-black ml-2"
            onClick={this.handleIncrement}
          >
            +
          </button>
          <button
            className="bg-white h-8 w-8 text-black ml-2"
            onClick={this.handleDecrement}
          >
            -
          </button>
        </div>
        <div className="flex justify-center">
          <div className="">{this.state.slides[this.state.index]}</div>
        </div>
      </div>
    );
  }
}
