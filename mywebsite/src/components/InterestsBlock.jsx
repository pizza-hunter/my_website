import React from "react";
import InterestType from "./InterestType";

class InterestsBlock extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      index: -1,
    };
  }

  handleSelect = (e) => {
    e.target.value === this.state.index
      ? this.setState({ index: -1 })
      : this.setState({ index: e.target.value });
  };

  render() {
    // Names in boxes
    if (this.state.index === -1) {
      return (
        <div>
          <div className="md:pt-32 flex flex-row md:pb-3 justify-between ">
            <InterestType name="Movies" sColour="sky" eColour="indigo" />
            <InterestType name="Books" sColour="fuchsia" eColour="violet" />
          </div>
          <div className="md:pt-32 flex flex-row md:pb-3 justify-between ">
            <InterestType name="Music" sColour="green" eColour="lime" />
            <InterestType name="Games" sColour="red" eColour="orange" />
          </div>
        </div>
      );
    }
    // Names in tabs with one detailed view
    else {
    }
    return "";
  }
}

export default InterestsBlock;
