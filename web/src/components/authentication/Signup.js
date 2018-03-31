import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ActiveForm from '../common/ActiveForm';
import DropdownList from '../common/DropdownList';
import PopupMessage from '../common/PopupMessage';
import PhoneNumberSelectList from '../common/PhoneNumberSelectList';
import SocialAuth from './SocialAuth';

import { requestLogin, requestSignup, hideSignupPopupMessage } from '../../actions/authentication';
import { requestUserInterests, requestUserRefs } from '../../actions/staticData';
import { headerTransparent } from '../../actions/index';

import '../../styles/authentication.css';
import '../../styles/form.css';
import { emailError, requiredError, ltError, passwordError } from '../../helpers/formValidator';

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    countryId: '',
    errors: {}
  }

  componentWillMount() {
    this.props.dispatch(headerTransparent(false))
  }

  componentDidMount() {
    this.props.dispatch(requestUserInterests());
    this.props.dispatch(requestUserRefs());
  }

  hideFlashMessage = () => this.props.dispatch(hideSignupPopupMessage())
  onChange = (e) => {
    let errors = this.state.errors;

    if (e.target.name === 'email' && emailError(e.target.value)) {
      errors.email = emailError(e.target.value);
    } else {
      errors[e.target.name] = null;
    }

    this.setState({[e.target.name]: e.target.value, errors});
  }

  onChangeCountry = (countryId) => this.setState({countryId});

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.state.errors;

    [{label: "Email", value: 'email'},
     {label: "password", value: 'password'},
     {label: "First name", value: 'firstName'},
     {label: 'Last Name', value: 'lastName'}].forEach(field => {
      if (!this.state[field.value]) {
        errors[field.value] = requiredError(this.state[field.value], field.label);
      }
    })

    if (this.state.email && emailError(this.state.email)) {
      errors.email = emailError(this.state.email)
    }

    if (Object.values(errors).filter(v => v).length > 0) {
      this.setState({errors});
      return;
    }

    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      passwordConfirmation: this.state.confirmPassword
    };

    if (this.state.userInterestId) {
      data.userInterestId = this.state.userInterestId;
    }

    if (this.state.userRefId) {
      data.userRefId = this.state.userRefId;
    }

    if (this.state.digits) {
      const countryIds = Object.keys(this.props.countries);
      data.phoneNumbersAttributes = {
        "0": { digits: this.state.digits, countryId: parseInt(this.state.countryId || countryIds[0]) }
      }
    }

    this.props.dispatch(requestSignup({ user: data }));
  }

  renderInstructions() {
    return (
      <div className="authentication__signup-component__benifits">
        <div className="row hidden-xs three-points">
          <div className="col-sm-4">
            <table>
              <tbody><tr>
                  <td>
                    <img src="https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/illus/Tenant-Occupied-100x80@3x-a1953a95522aee8912cfbbaeb020531d.png" width={100} alt />
                  </td>
                  <td>Buy, fix and flip investment properties from the comfort of your home</td>
                </tr>
            </tbody></table>
          </div>
          <div className="col-sm-4">
            <table>
              <tbody><tr>
                  <td>
                    <img src="https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/illus/Certified-100x80@3x-664c0c78e3ea43053e4a0a6139f16d31.png" width={100} alt />
                  </td>
                  <td>Properties on our marketplace are certified so you can invest with confidence</td>
                </tr>
            </tbody></table>
          </div>
          <div className="col-sm-4">
            <table>
              <tbody><tr>
                  <td>
                    <img src="https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/illus/Property-Manager-100x80@3x-fc2efcd67358fdb918c84c54a55728fc.png" width={100} alt />
                  </td>
                  <td>Select our trusted partners and transact without hassle</td>
                </tr>
            </tbody></table>
          </div>
      </div></div>
    )
  }

  renderHeader() {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="text-center">
            <h2>Welcome to REITSimple</h2>
          </div>
        </div>
      </div>
    )
  }

  renderErrors() {
    if (this.props.errors) {
      return <div className="rs-form-group error">{this.props.errors.map(e => e.title).join(', ')}</div>
    }
  }

  renderSocialSignupWarning() {
    if (this.props.userExist) {
      return <PopupMessage hideHandler={this.hideFlashMessage}>
        This email is already in use. To link your account with a social account, log in and visit My Account settings.
        </PopupMessage>
    }
  }

  render() {
    const userInterests = Object.values(this.props.interests).map(ui => ({value: ui.id, label: ui.title}));
    const userRefs = Object.values(this.props.refs).map(ui => ({value: ui.id, label: ui.title}));

    return (
      <div className="body-content adjust-body adjust-no-submenu login-container">
        {this.renderSocialSignupWarning()}
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="ember-view">
                <div className="authentication__signup-component">
                  <div className="row">
                    <div className="col-xs-12">
                      {this.renderHeader()}
                      {this.renderInstructions()}
                      <div className="row main-content">
                        <div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                          <div className="col-sm-6 col-sm-push-6 right">
                            <div className="row">
                              <SocialAuth className="col-sm-10 col-sm-push-2"
                                fbBtnText="Sign Up with Facebook"
                                gBtnText="Sign Up with Google"
                                type="signup"
                              />
                              <div className="col-sm-2 col-sm-pull-10 text-center">
                                <div data-content="or" className="hr-text " />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-sm-pull-6 left">
                            <div className="row">
                              <ActiveForm onSubmit={this.handleSubmit} submitButtonClassName="btn btn-secondary btn-block" submitButton="Sign up">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="rs-form-group has-addon">
                                      <span className="addon"><i className="fa fa-user" /></span>
                                      <div className={this.state.errors.firstName ? "input-error" : ''}>
                                        <div className="rs-input-container">
                                          <div className="error-border">
                                            <input placeholder="First Name" name="firstName" type="text" onChange={this.onChange} value={this.state.firstName} />
                                          </div>
                                          {this.state.errors.firstName}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="rs-form-group">
                                      <div className={this.state.errors.lastName ? "input-error" : ''}>
                                        <div className="rs-input-container">
                                          <div className="error-border">
                                            <input placeholder="Last Name" name="lastName" type="text" onChange={this.onChange} value={this.state.lastName}/>
                                          </div>
                                          {this.state.errors.lastName}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="rs-form-group full-size">
                                  <div className="rs-form-group has-addon">
                                    <div className="rs-input-container">
                                      <PhoneNumberSelectList onChange={this.onChange} value={this.state.phone} onChangeCountry={this.onChangeCountry} countryId={this.state.countryId}/>

                                    </div>
                                  </div>
                                </div>
                                <div className="rs-form-group has-addon">
                                  <span className="addon"><i className="fa fa-envelope" /></span>
                                  <div className={this.state.errors.email ? "input-error" : ''}>
                                    <div className="rs-input-container">
                                      <div className="error-border">
                                        <input placeholder="Enter Email" name="email" type="text" onChange={this.onChange} value={this.state.email}/>
                                      </div>
                                      {this.state.errors.email}
                                    </div>
                                  </div>
                                </div>
                                <div className="rs-form-group has-addon">
                                  <span className="addon"><i className="fa fa-lock" /></span>
                                  <div className={this.state.errors.password ? "input-error" : ''}>
                                    <div className="rs-input-container">
                                      <div className="error-border">
                                        <input id="passwordInput" placeholder="Enter Password" name="password" type="password" onChange={this.onChange} value={this.state.password}/>
                                      </div>
                                      {this.state.errors.password}
                                    </div>
                                  </div>
                                </div>
                                <div className="rs-form-group has-addon">
                                  <span className="addon"><i className="fa fa-lock" /></span>
                                  <div className={this.state.errors.confirmPassword ? "input-error" : ''}>
                                    <div className="rs-input-container">
                                      <div className="error-border">
                                        <input placeholder="Confirm Password" name="confirmPassword" type="password" onChange={this.onChange} value={this.state.confirmPassword}/>
                                      </div>
                                      {this.state.errors.confirmPassword}
                                    </div>
                                  </div>
                                </div>
                                <div className="rs-form-group">
                                  <DropdownList items={userInterests} title='I am interested in:' onChange={this.onChange} name="userInterestId"/>
                                </div>
                                <div className="rs-form-group">
                                  <DropdownList items={userRefs} title="How did you hear about us?" onChange={this.onChange} name="userRefId"/>
                                </div>
                                {this.renderErrors()}
                                <div className="rs-form-group text-center termsContainer">
                                  <small>
                                    By clicking Sign Up or registering, I agree to
                                    <a href="/terms" target="_blank" > REITSimple&#39;s Terms &amp; Conditions</a>
                                  </small>
                                </div>
                              </ActiveForm>
                              <div className="pad-top-10 checkbox-container">
                                <input type="checkbox"/>
                                <label><span className="ie-radio-fix">Keep me logged in
                              </span></label></div>
                            </div>
                            <div>
                              <div className="text-center">
                                Already a member? <strong><Link to="/login">Sign In</Link></strong>
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
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    interests: state.entities.userInterests,
    refs: state.entities.userRefs,
    errors: state.authentication.errors,
    userExist: state.authentication.userExist,
    countries: state.entities.countries
  }
}

export default connect(mapStateToProps)(Signup);
