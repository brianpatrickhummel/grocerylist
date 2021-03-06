import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import logo from "./images/logo.png";
import "./App.css";
// import { Link } from 'react-router-dom';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">
                <img src={logo} className="App-logo" alt="logo" />
              </a>
            </Navbar.Brand>
            <Button bsStyle="primary" className="btn-margin" onClick={this.goTo.bind(this, "home")}>
              Home
            </Button>
            {!isAuthenticated() && (
              <Button bsStyle="primary" className="btn-margin" onClick={this.login.bind(this)}>
                Log In
              </Button>
            )}
            {isAuthenticated() && (
              <Button bsStyle="primary" className="btn-margin" onClick={this.logout.bind(this)}>
                Log Out
              </Button>
            )}
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default App;
