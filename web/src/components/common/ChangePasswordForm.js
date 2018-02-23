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
          <form id="passwordForm" data-ember-action={1745}>
            <div className="rs-form-group" style={{whiteSpace: 'nowrap'}}>
              <input id="ember1755" disabled type="text"/>
              <i className="fa fa-check check" />
            </div>
            <div className="rs-form-group" style={{whiteSpace: 'nowrap'}}>
              <input disabled type="text" />
              <i className="fa fa-check check " />
            </div>
            <div className="rs-form-group">
              <div className="ember-view input-error">
                <div className="rs-input-container">
                  <div className=" ">
                    <input id="passwordInput" placeholder="Enter Password" type="password" className="rs-input" />
                  </div>
                </div>
            </div>  </div>
            <div className="rs-form-group">
              <div className="input-error"><div className="rs-input-container">
                  <div className=" ">
                    <input placeholder="Confirm Password" type="password" className="rs-input" />
                  </div>
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
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  parentClass: PropTypes.string
};
