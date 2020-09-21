import React, { Component } from "react";
import signin from "./signin.jpeg";
import "./SignIn.css";
import axios from "axios";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      pass: "",
    };
  }

  handelChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitData = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/sign_in", this.state)
      .then((res) => {
        console.log("Responce from BackEnd", res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  render() {
    return (
      <div className="main">
        <section className="sign-in">
          <div className="container">
            <div className="signin-content">
              <div className="signin-image">
                <img src={signin} alt="sing up" />
                <input
                  type="button"
                  value="Create an account"
                  onClick={this.props.func}
                  className="signup-image-link"
                />
              </div>

              <div className="signin-form">
                <h2 className="form-title">Sign In</h2>
                <form
                  onSubmit={this.submitData}
                  method="POST"
                  className="register-form"
                  id="login-form"
                >
                  <div className="form-group">
                    <input
                      value={this.state.userName}
                      onChange={this.handelChange}
                      type="text"
                      name="userName"
                      id="email"
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      value={this.state.pass}
                      onChange={this.handelChange}
                      type="password"
                      name="pass"
                      id="pass"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                      value="Log in"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
