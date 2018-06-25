import React, { Component } from "react";
import { AUTH_TOKEN } from "../../constants";
import { graphql, compose, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: true, // switch between Login and SignUp
      email: "",
      password: "",
      name: ""
    };
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{ width: '300px', display: 'flex', flexDirection: 'column'}}>
          <h2 className="mv3">{this.state.login ? "Login" : "Sign Up"}</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {!this.state.login && (
              <input style={{}}
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                type="text"
                placeholder="Your name"
              />
            )}
            <input
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              type="text"
              placeholder="Your email address"
            />
            <input
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
              placeholder="Choose a safe password"
            />
          </div>
          <div className="flex mt3">
            <button onClick={() => this._confirm()}>
              {this.state.login ? "login" : "create account"}
            </button>
            <div
              className="pointer button"
              onClick={() => this.setState({ login: !this.state.login })}
            >
              {this.state.login
                ? "need to create an account?"
                : "already have an account?"}
            </div>
          </div>
        </div>
      </div>
    );
  }

  _confirm = async () => {
    const { name, email, password } = this.state;

    if (this.state.login) {
      const result = await this.props.loginMutation({
        variables: {
          email,
          password
        }
      });

      const { token } = result.data.login;
      this._saveUserData(token);
      console.log('TOKEN: ' + token);
    } else {

      const result = await this.props.signupMutation({
        variables: {
          name,
          email,
          password
        }
      });

      const { token } = result.data.signup;
      console.log('TOKEN: ' + token);

      this._saveUserData(token);
    }

    this.props.history.push(`/home`)
    // const users = await this.props.getUsersQuery;
    console.log('here');
  };

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
}

export default Login;