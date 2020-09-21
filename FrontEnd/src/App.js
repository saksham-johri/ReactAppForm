import React, { Component } from "react";
import SignIn from "./components/SignIn/SignIn.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signup: true,
    };
  }

  changeState = () => {
    var temp = this.state.signup ? false : true;
    this.setState({
      signup: temp,
    });
  };

  render() {
    if (this.state.signup) return <SignUp func={this.changeState} />;
    else return <SignIn func={this.changeState} />;
  }
}
