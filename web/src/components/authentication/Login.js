import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ActiveForm from '../common/ActiveForm';
import SocialAuth from './SocialAuth';

import { requestLogin } from '../../actions/authentication';
import { headerTransparent } from '../../actions/index';

import { emailError, requiredError } from '../../helpers/formValidator';

import '../../styles/authentication.css';
import '../../styles/form.css';

class Login extends Component {
  state = { errors: {}, isRemember: false };

  componentWillMount() {
    this.props.dispatch(headerTransparent(false))
  }

  //hideFlashMessage = () => this.props.dispatch(hideFlashMessage());
  togglekeepMeLoggedin = (e) => this.setState({isRemember: !this.state.isRemember});
  handleChange = (e) => {
    let errors = this.state.errors;

    if (e.target.name === 'email' && emailError(e.target.value)) {
      errors.email = emailError(e.target.value);
    } else {
      errors[e.target.name] = null;
    }

    this.setState({[e.target.name]: e.target.value, errors});
  }

  handleSubmit = e => {
    e.preventDefault();
    const emailValue = this.state.email;
    const password = this.state.password;
    let errors = this.state.errors;

    if (!emailValue && !password) {
      errors.email = requiredError(emailValue, 'email');
      errors.password = requiredError(password, "password");
    } else if (!emailValue) {
      errors.email = requiredError(emailValue, "email");
      errors.password = null;
    } else if (!password) {
      errors.email = null;
      errors.password = requiredError(password, "password");
    } else {
      errors = {};
    }

    if (Object.values(errors).filter(v => v).length > 0) {
      this.setState({errors});
      return;
    } else if (emailValue && emailError(emailValue)) {
      errors.email = emailError(emailValue)
      return;
    }

    return this.props.dispatch(requestLogin({ 
      email: emailValue, 
      password, 
      rememberMe: this.state.isRemember ? this.state.isRemember : null }));
  };

  renderErrors() {
    if (this.props.errors) {
      return <div className="rs-form-group error">{this.props.errors.map(e => e.title).join(', ')}</div>
    }
  }

  render() {
    return (
      <div className="body-content adjust-body adjust-no-submenu login-container
  ">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="ember-view">
                <div className="authentication__login-component">
                  <div className="row">
                    <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                      <h2 className="text-center">Log In</h2>
                      <SocialAuth/>
                      <div className="hr-text" data-content="or" />
                      <div>
                        <form onSubmit={this.handleSubmit} noValidate={true}>
                          <div className="rs-form-group has-addon">
                            <span className="addon"><i className="fa fa-envelope" /></span>
                            <div className={this.state.errors.email ? "input-error" : ''}>
                              <div className="rs-input-container">
                                <div className="error-border">
                                  <input id="identification" autoFocus placeholder="Your Email" name="email" type="text" className="rs-input fs-hide ember-view ember-text-field" onChange={this.handleChange}/>
                                </div>
                                {this.state.errors.email}
                              </div>
                          </div></div>
                          <div className="rs-form-group has-addon">
                            <span className="addon"><i className="fa fa-lock" /></span>
                            <div className={this.state.errors.password ? "input-error" : ''}><div className="rs-input-container">
                                <div className="error-border">
                                  <input id="password" placeholder="Password" name="password" type="password" className="rs-input fs-hide ember-view ember-text-field" onChange={this.handleChange}/>
                                </div>
                                {this.state.errors.password}
                              </div>
                          </div></div>
                          {this.renderErrors()}
                          <div className="pad-top-10 checkbox-container">
                            <input type="checkbox" checked={this.state.isRemember}/>
                            <label onClick={this.togglekeepMeLoggedin}><span className="ie-radio-fix">Keep me logged in
                          </span></label></div>
                          <div className="rs-form-group">
                            <button type="submit" className="btn btn-secondary btn-block">
                              Log In
                            </button>
                            <div className="pad-top-10"><Link to="/password/forgot">Forgot password?</Link></div>
                          </div>
                        </form>
                      </div>
                      <div className="ember-view __authentication__login-or-signup__toggle__534b3">
                        <div className="pad-top-20">
                          Don&#39;t have an account? <strong><Link to="/signup">Sign Up</Link></strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    errors: state.authentication.errors
  }
}

export default connect(mapStateToProps)(Login);
