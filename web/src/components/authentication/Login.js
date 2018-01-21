import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ActiveForm from '../common/ActiveForm';
import { requestLogin } from '../../actions/authentication';
import { headerTransparent } from '../../actions/index';

import { isEmail } from '../../string';

class Login extends Component {
  state = { errors: null }

  componentWillMount() {
    this.props.dispatch(headerTransparent(false))
  }

  //hideFlashMessage = () => this.props.dispatch(hideFlashMessage());

  handleSubmit = e => {
    e.preventDefault();
    let email = e.target.elements['email'].value;
    let password = e.target.elements['password'].value;

    if (email && !isEmail(email)) {
      this.setState({ errors: [{ title: "The Email Address is in an invalid format. Please check and try again." }] });
      return;
    }

    if (email && password) {
      return this.props.dispatch(requestLogin({ email, password }));
    }
  };

  render() {
    return (
      <app-section className="body-content adjust-body adjust-no-submenu login-container
  ">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="ember-view">
                <div className="ember-view __authentication__login-component__d0dc3"><div className="row">
                    <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                      <h2 className="text-center">Log In</h2>
                      <div className="ember-view __authentication__social-login-or-signup__d27c7">
                        <button className="btn social facebook">
                          Log in with Facebook
                        </button>
                        <button className="btn social google">
                          Log in with Google
                        </button>
                      </div>
                      <div className="hr-text" data-content="or" />
        <div className="ember-view __authentication__login-form__e70f4">
        <form onSubmit={this.handleSubmit} noValidate={true}>
                          <div className="rs-form-group has-addon">
                            <span className="addon"><i className="fa fa-envelope" /></span>
                            <div className="ember-view input-error"><div className="rs-input-container">
                                <div className=" ">
                                  <input id="identification" autofocus placeholder="Your Email" name="email" type="text" className="rs-input fs-hide ember-view ember-text-field" />
                                </div>
                              </div>
                            </div></div>
                          <div className="rs-form-group has-addon">
                            <span className="addon"><i className="fa fa-lock" /></span>
                            <div className="ember-view input-error"><div className="rs-input-container">
                                <div className=" ">
                                  <input id="password" placeholder="Password" name="password" type="password" className="rs-input fs-hide ember-view ember-text-field" />
                                </div>
                                </div>
                            </div></div>
                          <div className="terms pad-top-10 ember-view checkbox-container __rs-controls__checkbox__cac59"><input type="checkbox"/>
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
      </app-section>
    )
  }
}

export default connect()(Login);
