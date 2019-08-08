import React, { Component } from "react";
import "./styles.scss";

class AlertBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  closeAlert = () => {
    this.props.handleAlert(false);
  };

  render() {
    return (
      <div id="snackbar">
        {this.props.content}
        <button className="okBtn" onClick={() => this.closeAlert()}>
          Ok
        </button>
      </div>
    );
  }
}

export default AlertBar;
