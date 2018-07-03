import React, { Component } from "react";
import { AUTH_TOKEN, LOGIN_URL, METHOD_POST, SIGNUP_URL } from "../../constants";
import { FetcherPost } from '../../utils/Fetcher'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Person from '@material-ui/icons/Person';
import Lock from '@material-ui/icons/Lock';
import Email from '@material-ui/icons/Email';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  cssLabel: {
    '&$cssFocused': {
      color: 'rgb(252, 253, 253)',
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: 'rgb(252, 253, 253)',
    },
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  menu: {
    width: 200,
  },
});

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: true, // switch between Login and SignUp
      email: "",
      password: "",
      name: "",
      age: '',
      multiline: 'Controlled',
      currency: 'EUR',
      loginAnimation: ''
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


  render() {
    const { classes } = this.props;
    return (
      <div className="login-main-background" style={{ height: '100vh', display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
        <div style={{ flexDirection: 'column', background: 'none', width: '50%', justifyContent: 'start', display: 'flex' }}>
          <Paper style={{ borderRadius: '50%', background: 'none', alignSelf: 'flex-end', marginTop: '30px' }} elevation={24}>
            <div style={{
              flexDirection: 'column', textAlign: 'center', width: '150px', height: '150px', borderStyle: 'dotted', borderRadius: '50%', alignSelf: 'center',
              justifyContent: 'center',
              display: 'flex',
              fontSize: '1rem',
              fontWeight: 'bold',
              fontFamily: 'monospace',
              color: '#fc6767'
            }}>
              <Icon style={{ fontSize: '80px', alignSelf: 'center', color: '#fc6767' }}>business</Icon>
            </div>
          </Paper>
          <Paper style={{ borderRadius: '50%', background: 'none', alignSelf: 'center' }} elevation={24}>
            <div style={{
              flexDirection: 'column', textAlign: 'center', width: '120px', height: '120px', borderStyle: 'dotted', borderRadius: '50%', alignSelf: 'center',
              justifyContent: 'center',
              display: 'flex',
              fontSize: '4rem',
              fontWeight: 'bold',
              fontFamily: 'monospace',
              color: '#fc6767'
            }}>
              <Icon style={{ fontSize: '60px', alignSelf: 'center', color: '#fc6767' }}>widgets</Icon>
            </div>
          </Paper>
          <Paper style={{ borderRadius: '50%', background: 'none', alignSelf: 'flex-end' }} elevation={24}>
            <div style={{
              flexDirection: 'row', textAlign: 'center', width: '300px', height: '300px', borderStyle: 'dotted', borderRadius: '50%', alignSelf: 'center',
              justifyContent: 'center',
              display: 'flex',
              fontSize: '8rem',
              fontWeight: 'bold',
              fontFamily: 'monospace',
              color: '#fc6767'
            }}>
              <div style={{ display: 'flex', alignSelf: 'center' }}>N</div>
              <Icon style={{ fontSize: '80px', alignSelf: 'center', color: '#fc6767' }}>hdr_weak</Icon>

              <div style={{ display: 'flex', alignSelf: 'center' }}>X</div>
            </div>
          </Paper>
        </div>
        <div style={{ flex: '1', justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
          <Paper className="login-background " style={{ alignSelf: 'center', height: '350px', width: '200px', color: 'white', minWidth: '300px', padding: '80px', borderRadius: '10px' }} elevation={24}>
            <div>
              <form className={classes.container + " zoomIn"} noValidate autoComplete="off">
                <h2 style={{ alignSelf: 'center' }} className={this.state.loginAnimation}>{this.state.login ? "Login" : "Sign Up"}</h2>
                {!this.state.login && (
                  <TextField style={{ width: '100%' }}
                    id="name"
                    label="Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                    margin="normal"
                    placeholder="your username"
                    InputLabelProps={{
                      style: { fontWeight: 'bold' }
                    }}
                    InputProps={{
                      style: { color: 'white' },
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                    }}
                  />)}
                <TextField
                  id="email"
                  label="Email"
                  className={classes.textField}
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                  margin="normal"
                  placeholder="e. g. manolo@manolo.com"
                  InputLabelProps={{
                    style: { fontWeight: 'bold' }
                  }}
                  InputProps={{
                    classes: {
                      underline: styles.cssUnderline
                    },
                    style: { color: 'white' },
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  type="password"
                  id="password"
                  label="Password"
                  className={classes.textField}
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                  margin="normal"
                  placeholder="password"
                  InputLabelProps={{
                    style: { fontWeight: 'bold' }
                  }}
                  InputProps={{
                    style: { color: 'white' },
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <br style={{ flex: 1 }} />
                <Button style={{ color: 'white', borderColor: 'white' }} variant="outlined" size="medium" onClick={() => this._confirm()}>
                  {this.state.login ? "login" : "create account"}
                </Button>
                <br style={{ flex: 1 }} />
                <Button style={{ color: '#343e55' }} onClick={() => this.setState({ login: !this.state.login })} size="small" className={classes.button}>
                  {this.state.login
                    ? "need to create an account?"
                    : "already have an account?"}
                </Button>
              </div>
            </div>
          </Paper>

        </div>
      </div>
    );
  }

  _confirm = async () => {
    const { name, email, password } = this.state;
    let result = null;

    if (this.state.login) {
      result = await FetcherPost(METHOD_POST, LOGIN_URL, { email, password }, false)
    } else {
      result = await FetcherPost(METHOD_POST, SIGNUP_URL, { name, email, password }, false)
    }

    if (result) {
      this._saveUserData(result.token);
      this.props.history.push(`/dashboards`)
    }
    // const users = await this.props.getUsersQuery;
  };

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
}

export default withStyles(styles)(Login);