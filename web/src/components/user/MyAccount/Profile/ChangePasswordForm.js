import React from 'react';
import PopupMessage from '../../../common/PopupMessage';

import { requiredError, gtError, passwordError } from '../../../../helpers/formValidator';

export default class ChangePasswordForm extends React.Component {
  state= {
    currentPassword: "",
    password: "",
    passwordConfirmation: "",
    errors: {}
  };

  onChange = (e) => {
    const errors = this.state.errors;
    
    if (e.target.name === "passwordConfirmation" && 
    this.state.password !== e.target.value) {
      errors.passwordConfirmation = passwordError(this.state.password, e.target.value, "Your confirm password does not match.");
    } else if (e.target.name === "password" && e.target.value.length < 6) {
      errors.password = gtError(e.target.value, 6, "Please enter at least 6 characters.");
    } else {
      errors[e.target.name] = null;
    }

    this.setState({[e.target.name]: e.target.value, errors});
  }
  
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.state.errors;

    [{label: "Current Password", value: 'currentPassword', message: "Please provide your current password."},
     {label: "Password", value: 'password', message: "Please enter at least 6 characters."},
     {label: "Password Confirmation", value: 'passwordConfirmation', message: "Please confirm your new password."}].forEach(field => {
      if (!this.state[field.value]) {
        errors[field.value] = requiredError(this.state[field.value], field.label, field.message);
      }
    })

    if (Object.values(errors).filter(v => v).length > 0) {
      this.setState({errors});
      return;
    }

    const data = {
      currentPassword: this.state.currentPassword,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation
    }

    this.props.handlePasswordUpdate(data).then(payload => {
      if (payload.error) {
        this.setState({errors: payload.payload.response.errors, updated: false});
      } else {
        this.setState({
          password: "", 
          currentPassword: "", 
          passwordConfirmation: "", 
          errors: {}, 
          updated: true
        });
      }
    })
  }

  handleStatusMessage = (e) => this.setState({updated: false});

  renderStatus() {
    if (this.state.updated) {
      return <PopupMessage type="success" position="bottom" hideHandler={this.handleStatusMessage} >Info updated successfully</PopupMessage>
    }
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit} className="form-horizontal">
          {this.renderStatus()}
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="form-group">
                <label className="control-label col-md-4">Current Password</label>
                <div className="col-md-8">
                  <div className={this.state.errors.currentPassword ? "input-error" : ''}>
                    <div className="rs-input-container">
                      <div className="error-border">
                        <input maxLength={255} value={this.state.currentPassword} type="password" onChange={this.onChange} name="currentPassword" className="form-control fs-hide" />
                      </div>
                      {this.state.errors.currentPassword}
                    </div>
                  </div>        
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-4">New Password</label>
                <div className="col-md-8">
                  <div className={this.state.errors.password ? "input-error" : ''}>
                    <div className="rs-input-container">
                      <div className="error-border">
                        <input id="passwordInput" maxLength={255} value={this.state.password} onChange={this.onChange} name="password" type="password" className="form-control fs-hide" />
                      </div>
                      {this.state.errors.password}
                    </div>
                  </div>        
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-4">Re-type New Password</label>
                <div className="col-md-8">
                  <div className={this.state.errors.passwordConfirmation ? "input-error" : ''}>
                    <div className="rs-input-container">
                      <div className="error-border">
                        <input maxLength={255} value={this.state.passwordConfirmation} type="password" className="form-control fs-hide" name="passwordConfirmation" onChange={this.onChange} />
                      </div>
                      {this.state.errors.passwordConfirmation}
                    </div>
                  </div>        
                </div>
              </div>
              <br />
              <div className="text-center">
                <button id="btn-change-password" className="btn btn-secondary">
                  <i className="fa fa-check" />&nbsp;&nbsp;Change Password
                </button>
              </div>
            </div>
          </div>
        </form>
    )
  }
}
