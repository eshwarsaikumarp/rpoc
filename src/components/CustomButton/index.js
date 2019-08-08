import React, { Component } from "react";
import "./styles.scss";

class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = e => {
    e.persist();
    this.props.handleClick(e);
  };

  render() {
    return (
      <div>
        <button
          onClick={e => this.handleClick(e)}
          className="btncontainer"
          type="button"
        >
          Login
        </button>
      </div>
    );
  }
}

export default CustomButton;
