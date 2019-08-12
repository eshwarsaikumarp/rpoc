import React, { Component } from "react";
import "./styles.scss";

class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  closeModal = () => {
    this.props.handleModal(false);
  };

  render() {
    return (
      <div id="modalbar">
        <div className="modal-container">
          <p className="closeIcon" onClick={() => this.closeModal()}>
            X
          </p>
          <h2>Modal Window</h2>
          <hr />
          <div className="content">{this.props.content}</div>
          {this.props.children}
          <hr />
        </div>
      </div>
    );
  }
}

export default CustomModal;
