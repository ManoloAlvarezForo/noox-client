import React, { Component } from "react";
import { AUTH_TOKEN, LOGIN_URL, METHOD_POST, SIGNUP_URL } from "../../constants";
import { FetcherPost } from '../../Utils/Fetcher'

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
          <form style={{ display: 'flex', flexDirection: 'column' }}>
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
          </form>
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
    let result = null;

    if (this.state.login) {
      result  = await FetcherPost(METHOD_POST, LOGIN_URL, {email, password}, false)
    } else {
      result  = await FetcherPost(METHOD_POST, SIGNUP_URL, {name, email, password}, false)
    }
    
    if (result) {
      this._saveUserData(result.token);
      this.props.history.push(`/home`)
    }
    // const users = await this.props.getUsersQuery;
  };

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
}

export default Login;