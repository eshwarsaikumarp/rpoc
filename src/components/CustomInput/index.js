import React, { Component } from "react";
import "./styles.scss";

class CustomInput extends Component {
  handleInput = e => {
    e.persist();
    this.props.handleChange(e);
  };

  render() {
    const { placeholder } = this.props;
    return (
      <div>
        <input
          onChange={e => this.handleInput(e)}
          name={this.props.name}
          placeholder={placeholder}
          type={this.props.type}
          className={this.props.classname}
        />
      </div>
    );
  }
}

export default CustomInput;
