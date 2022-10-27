import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// TODO: Fix jumping increment, sometimes skips forward or back if clicking too fast
// potentially coudld try to invoke a blocking period during future animation
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
        <div className="flex justify-center">
          <div className="">{this.state.slides[this.state.index]}</div>
        </div>
        <div className="flex w-full text-5xl justify-center align-middle text-center carousel_arrows">
          <div
            className="w-full border-2 border-t-0 py-3 carousel_left_arrow"
            onClick={this.handleIncrement}
          >
            <FontAwesomeIcon icon="arrow-left-long" className="" />
          </div>
          <div
            className="w-full border-2 border-t-0 border-l-0 py-3 carousel_right_arrow"
            onClick={this.handleDecrement}
          >
            <FontAwesomeIcon icon="arrow-right-long" className="" />
          </div>
        </div>
      </div>
    );
  }
}
