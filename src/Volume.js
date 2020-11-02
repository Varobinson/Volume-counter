import React, { Component } from "react";

class Volume extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      volume: 50
    };
  }

  picNum = () => {
    return parseInt(this.state.volume);
  };

  handleChange = (event) => {
    if (parseInt(event.target.value) == null) {
      return;
    } else {
      this.setState({
        [event.target.name]: parseInt(event.target.value)
      });
    }
  };

  addNum = (event) => {
    event.preventDefault();
    this.setState({
      volume: this.state.volume + 1
    });
  };

  subNum = (event) => {
    event.preventDefault();
    this.setState({
      volume: this.state.volume - 1
    });
  };
  render() {
    return (
      <form>
        <button type="submit" onClick={this.subNum}>
          -
        </button>
        <input
          type="number"
          name="volume"
          value={this.state.volume}
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.addNum}>
          +
        </button>
      </form>
    );
  }
}

export default Volume;
