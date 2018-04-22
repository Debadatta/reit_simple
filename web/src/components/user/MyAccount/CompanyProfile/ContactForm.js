import React from "react";

import { emailError, ltError } from "../../../../helpers/formValidator";

export default class ContactForm extends React.Component {
  state = {
    show: false
  }

  togglePanel = (e) => this.setState({show: !this.state.show});

  onChange = (e) => {
    e.preventDefault();
    this.props.onChange(e, this.props.obj.value);
  }

  onChangeEmailAddress = (e) => {
    e.preventDefault();
    let error = emailError(e.target.value, "Please provide a valid email address.");
    if (error) {
      error = { address: error }
    }
    this.props.onChange(e, `${this.props.obj.value}EmailAddress`, error);
  }

  onChangePhoneNumber = (e) => {
    e.preventDefault();
    let error = ltError(e.target.value, 9, "Please enter a 10-digit phone number.");
    if (error) {
      error = { digits: error }
    }

    this.props.onChange(e, `${this.props.obj.value}PhoneNumber`, error);
  }

  render() {
    return (
      <div className="panel panel-default panel-collapse panel-contact">
        <div className="panel-heading cursor-pointer" onClick={this.togglePanel}>
          {this.props.obj.label}
          <div className="pull-right">
            <i className="fa fa-angle-down" />
          </div>
        </div>
        <div className={`panel-body form-horizontal collapse ${this.state.show ? "in" : null}`} id="financial-contact">
          <div className="form-group">
            <label htmlFor className="control-label col-md-4">First Name</label>
            <div className="col-md-8">
              <input type="text" name="firstName" value={this.props.contact.firstName || ""} onChange={this.onChange} className="form-control fs-hide" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor className="control-label col-md-4">Last Name</label>
            <div className="col-md-8">
              <input type="text" className="form-control fs-hide" name="lastName" onChange={this.onChange} value={this.props.contact.lastName || ""}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor className="control-label col-md-4">Title</label>
            <div className="col-md-8">
              <input type="text" className="form-control fs-hide" name="title" onChange={this.onChange} value={this.props.contact.title || ""}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor className="control-label col-md-4 fs-hide">Phone Number</label>
            <div className="col-md-8">
              <div className={this.props.error.digits ? "input-error" : ''}>
                <div className="rs-input-container">
                  <div className=" ">
                    <input type="text" className="form-control" name="digits" onChange={this.onChangePhoneNumber} value={this.props.phoneNumber.digits || ""} />
                  </div>
                  {this.props.error.digits}
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor className="control-label col-md-4 fs-hide">Email Address</label>
            <div className="col-md-8">
              <div className={this.props.error.address ? "input-error" : ''}>
                <div className="rs-input-container">
                  <div className=" ">
                    <input type="text" className="form-control" name="address" onChange={this.onChangeEmailAddress} value={this.props.emailAddress.address || ""}/>
                  </div>
                  {this.props.error.address}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
