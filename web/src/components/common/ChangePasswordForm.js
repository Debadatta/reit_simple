import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ChangePasswordForm extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-7 formContainer">
        <h2>
          Reset Password
        </h2>
        <div>
          <label className="accountInfo">Account Information</label>
          <form id="passwordForm" onSubmit={this.props.handleSubmit}>
            <div className="rs-form-group" style={{whiteSpace: 'nowrap'}}>
              <input disabled type="text" value={this.props.name}/>
              <i className="fa fa-check check" />
            </div>
            <div className="rs-form-group" style={{whiteSpace: 'nowrap'}}>
              <input disabled type="text"  value={this.props.email}/>
              <i className="fa fa-check check " />
            </div>
            <div className="rs-form-group">
              <div className={this.props.errors.password ? "input-error" : ''}>
                <div className="rs-input-container">
                  <div className="error-border">
                    <input id="passwordInput" placeholder="Enter Password" type="password" className="rs-input" name="password" value={this.props.password} onChange={this.props.onChange}/>
                  </div>
                  {this.props.errors.password}
                </div>
            </div>  </div>
            <div className="rs-form-group">
              <div className={this.props.errors.confirmPassword ? "input-error" : ''}>
                <div className="rs-input-container">
                  <div className="error-border">
                    <input placeholder="Confirm Password" type="password" className="rs-input" name="confirmPassword" value={this.props.confirmPassword} onChange={this.props.onChange}/>
                  </div>
                  {this.props.errors.confirmPassword}
                </div>
            </div>  </div>
            <div className="rs-form-group row">
              <div className="buttonContainer">
                <button type="submit" className="btn btn-primary">Reset Password</button>
              </div>
              <div className="input-error"><div className="rs-input-container">
                  <div className=" ">
                  </div>
                </div>
              </div>
            </div>
            <div className="rs-form-group">
              <input id="isPersistent" type="checkbox" className="ember-view ember-checkbox" /><label htmlFor="isPersistent" className="terms">Keep me logged in</label>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

ChangePasswordForm.propsTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  parentClass: PropTypes.string
};
