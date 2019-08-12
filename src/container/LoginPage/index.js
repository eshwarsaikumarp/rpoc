import React, { Component } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomCheckbox from "../../components/CustomCheckbox";
import CustomModal from "../../components/CustomModal";
import { Carousel } from "react-bootstrap";

import "./styles.scss";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailValid: false,
      passwordValid: false,
      errorMsg: "",
      enableModal: false
    };
  }
  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  onClick = e => {
    this.setState(prev => ({
      errorMsg:
        prev.errorMsg === "" ? "Please Fill Login Details" : prev.errorMsg
    }));
    this.handleModal(true);
  };

  handleModal = enableModal => {
    this.setState(() => ({ enableModal }));
  };

  validateField(fieldName, value) {
    let errorMsg = this.state.errorMsg;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        const exp = new RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        emailValid = exp.test(value);
        break;
      case "password":
        passwordValid = value.length >= 6;
        break;
      default:
        break;
    }
    if (!emailValid || !passwordValid) {
      errorMsg = "Please provide Valid Credentials";
    } else {
      errorMsg = "Hoilaa";
    }
    this.setState(() => ({ emailValid, passwordValid, errorMsg }));
  }

  render() {
    const { errorMsg } = this.state;
    return (
      <div className="main-container">
        <div className="loginContainer">
          <img alt="asd" src="https://via.placeholder.com/270" />
          <CustomInput
            type="text"
            handleChange={this.onChange}
            placeholder="Email"
            name="email"
            classname="bordered"
          />
          <CustomInput
            type="password"
            handleChange={this.onChange}
            placeholder="Password"
            name="password"
            classname="borderLess"
          />
          <div className="remember">
            <CustomCheckbox label="Remember me" />
            <span className="coloredtext forgot">Forgot Password?</span>
          </div>
          <CustomButton handleClick={this.onClick} />
          <p>
            Don't Have an account?{" "}
            <span className="coloredtext">SignUp here</span>
          </p>
        </div>
        {this.state.enableModal && (
          <CustomModal
            handleModal={e => this.handleModal(e)}
            // content={errorMsg}
          >
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p>{errorMsg}</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <p>{errorMsg}</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </CustomModal>
        )}
      </div>
    );
  }
}

export default LoginPage;
