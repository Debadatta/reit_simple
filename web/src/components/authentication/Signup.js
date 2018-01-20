import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ActiveForm from '../common/ActiveForm';
import DropdownList from '../common/DropdownList';
import { requestLogin, requestSignup } from '../../actions/authentication';
import { isEmail } from '../../string';

const INTERESTIN_OPTIONS = [{label: 'Buying Properties', value: 'Buying Properties'}, {label: 'Selling Properties', value: 'Selling Properties'}, {label: 'Inviting Clients as a Broker or Agent', value: 'Inviting Clients as a Broker or Agent'}]
const REF_ABOUT_US_OPTIONS = [{label: 'Friend', value: 'Friend'}, {label: 'Google', value: 'Google'}];

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      passwordConfirmation: this.state.confirmPassword
    };

    if (this.state.phone) {
      data.phoneNumbersAttributes = {
        "0": { digits: this.state.phone }
      }
    }

    this.props.dispatch(requestSignup({ user: data }));
  }

  renderInstructions() {
    return (
      <div>
        <div className="row hidden-xs three-points">
          <div className="col-sm-4">
            <table>
              <tbody><tr>
                  <td>
                    <img src="https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/illus/Tenant-Occupied-100x80@3x-a1953a95522aee8912cfbbaeb020531d.png" width={100} alt />
                  </td>
                  <td>Buy and sell tenant-occupied rental houses outside your local market</td>
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
                  <td>Select a trusted local property manager and own without the hassle</td>
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
          <div className="hero text-center">
            <h2>Welcome to ITERSimple</h2>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          {this.renderHeader()}
          {this.renderInstructions()}
          <div className="row main-content">
            <div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
              <div className="col-sm-6 left">
                <div>
                  <ActiveForm onSubmit={this.handleSubmit} submitButtonClassName="btn btn-secondary btn-block" submitButton="Sign up">
                    <div className="row">
                      <div className="col-sm-6">
                        <input placeholder="First Name" name="firstName" type="text" onChange={this.onChange} value={this.state.firstName} />
                      </div>
                      <div className="col-sm-6">
                        <input placeholder="Last Name" name="lastName" type="text" onChange={this.onChange} value={this.state.lastName}/>
                      </div>
                    </div>
                    <div className="rs-form-group full-size">
                      <input placeholder="Phone" name="phone" type="tel" autoComplete="off" onChange={this.onChange} value={this.state.phone}/>
                    </div>
                    <div>
                      <input placeholder="Enter Email" name="email" type="text" onChange={this.onChange} value={this.state.email}/>
                    </div>
                    <div >
                      <input id="passwordInput" placeholder="Enter Password" name="password" type="password" onChange={this.onChange} value={this.state.Password}/>
                    </div>
                    <div>
                      <input placeholder="Confirm Password" name="confirmPassword" type="password" onChange={this.onChange} value={this.state.confirmPassword}/>
                    </div>
                    <div className="rs-form-group">
                      <DropdownList items={INTERESTIN_OPTIONS} title='I am interested in:' onChange={this.onChange}/>
                    </div>
                    <div className="rs-form-group">
                      <DropdownList items={REF_ABOUT_US_OPTIONS} title="How did you hear about us?" onChange={this.onChange}/>
                    </div>
                    <div>
                      <small>
                        By clicking Sign Up or registering, I agree to
                        <a href="#" target="_blank"> ITERSimple's Terms &amp; Conditions</a>
                      </small>
                    </div>
                  </ActiveForm>
                  <div className="rs-form-group">
                    <input type="checkbox"/>
                    <label htmlFor="isPersistent" className="terms">Keep me logged in</label>
                  </div>
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
    );
  }
}

export default connect()(Signup);
