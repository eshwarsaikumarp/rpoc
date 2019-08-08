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
          <h2>Modal Window</h2>
          <hr />
          <div className="content">{this.props.content}</div>
          <hr />
          <div className="actions">
            <button className="okBtn" onClick={() => this.closeModal()}>
              Ok
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomModal;
