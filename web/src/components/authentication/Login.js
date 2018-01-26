import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ActiveForm from '../common/ActiveForm';
import { requestLogin } from '../../actions/authentication';
import { headerTransparent } from '../../actions/index';

import { emailError, requiredError } from '../../helpers/formValidator';

import '../../styles/authentication.css';
import '../../styles/form.css';

class Login extends Component {
  state = { errors: {} }

  componentWillMount() {
    this.props.dispatch(headerTransparent(false))
  }

  //hideFlashMessage = () => this.props.dispatch(hideFlashMessage());

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

    if (emailValue && emailError(emailValue)) {
      errors.email = emailError(emailValue)
    }

    if (Object.values(errors).filter(v => v).length > 0) {
      this.setState({errors});
      return;
    }

    return this.props.dispatch(requestLogin({ email: emailValue, password }));
  };

  renderSocialLoginButtons() {
    return (
        <div className="social-login-or-signup-component-container">
          <div className="authentication__social-login-or-signup">
            <button className="btn social facebook">
              Sign In with Facebook
            </button>
            <button className="btn social google">
              Sign In with Google
            </button>
          </div>
        </div>
    )
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
        {this.renderSocialLoginButtons()}
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
                          <div className="pad-top-10 checkbox-container"><input type="checkbox"/>
                            <label><span className="ie-radio-fix">    Keep me logged in
                              </span></label></div>  <div className="rs-form-group">
                            <button type="submit" className="btn btn-secondary btn-block">
                              Log In
                            </button>
                            <div className="pad-top-10"><a href="/password/forgot" className="ember-view">Forgot password?</a></div>
                          </div>
                        </form>
                      </div>
                      <div className="ember-view __authentication__login-or-signup__toggle__534b3">
                        <div className="pad-top-20">
                          Don't have an account? <strong><a href="/signup" className="ember-view">Sign Up</a></strong>
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

export default connect()(Login);
