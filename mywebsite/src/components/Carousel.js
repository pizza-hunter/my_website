import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// TODO: Fix jumping increment, sometimes skips forward or back if clicking too fast
// potentially coudld try to invoke a blocking period during future animation\

export class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      slides: props.slides,
      slideDirection: "",
    };
  }
  handleIncrement = () => {
    this.setState({
      index:
        this.state.index < this.state.slides.length - 1
          ? this.state.index + 1
          : 0,
      slideDirection: "slide_left",
    });
  };
  handleDecrement = () => {
    this.setState({
      index:
        this.state.index > 0
          ? this.state.index - 1
          : this.state.slides.length - 1,
      slideDirection: "slide_right",
    });
  };

  render() {
    const clonedSlide = React.cloneElement(
      this.state.slides[this.state.index],
      { slideDirection: this.state.slideDirection }
    );
    return (
      <div className="carousel relative flex-grow">
        {clonedSlide}

        <div
          onClick=""
          className=" absolute bottom-0 flex w-full text-5xl justify-center align-middle text-center carousel_arrows"
        >
          <div
            className="w-full border-y-2 py-3 carousel_left_arrow"
            onClick={this.handleDecrement}
          >
            <FontAwesomeIcon icon="arrow-left-long" className="" />
          </div>
          <div
            className="w-full border-y-2 border-l-2 py-3 carousel_right_arrow"
            onClick={this.handleIncrement}
          >
            <FontAwesomeIcon icon="arrow-right-long" className="" />
          </div>
        </div>
      </div>
    );
  }
}
