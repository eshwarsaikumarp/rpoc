import React, { Component } from "react";
import "./styles.scss";

class CustomCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInput = e => {};

  render() {
    return (
      <div className="checkbox">
        <label className="container">
          {this.props.label}
          <input type="checkbox" />
          <span className="checkmark" />
        </label>
      </div>
    );
  }
}

export default CustomCheckbox;
