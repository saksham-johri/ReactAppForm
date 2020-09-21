import "./SignUp.css";
import signUp from "./signup.jpg";
import React, { Component } from "react";
import axios from "axios";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      pass: "",
      email: "",
      fname: "",
      lname: "",
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
      .post("http://localhost:8080/sign_up", this.state)
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
        <section className="signup">
          <div className="container">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                  onSubmit={this.submitData}
                >
                  <div className="form-group">
                    <input
                      type="text"
                      value={this.state.userName}
                      onChange={this.handelChange}
                      name="userName"
                      id="name"
                      placeholder="Username"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      value={this.state.pass}
                      onChange={this.handelChange}
                      name="pass"
                      id="pass"
                      placeholder="Password"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      value={this.state.email}
                      onChange={this.handelChange}
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      value={this.state.fname}
                      onChange={this.handelChange}
                      name="fname"
                      id="name"
                      placeholder="First Name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="text"
                      value={this.state.lname}
                      onChange={this.handelChange}
                      name="lname"
                      id="name"
                      placeholder="Last Name"
                    />
                  </div>

                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signup"
                      id="signup"
                      className="form-submit"
                      value="Register"
                    />
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <img src={signUp} alt="sing up" />
                <input
                  type="button"
                  value="I am already member"
                  onClick={this.props.func}
                  className="signup-image-link"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
