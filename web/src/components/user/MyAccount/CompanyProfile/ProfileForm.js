import React from "react";

import ContactForm from "./ContactForm";
import { ltError, requiredError } from "../../../../helpers/formValidator";

class ProfileForm extends React.Component {
  state = {
    company: {},
    businessContact: {},
    financialContact: {},
    operationsContact: {},
    companyAddress: {},
    companyPhoneNumber: {},
    businessContactPhoneNumber: {},
    financialContactPhoneNumber: {},
    operationsContactPhoneNumber: {},
    businessContactEmailAddress: {},
    financialContactEmailAddress: {},
    operationsContactEmailAddress: {},
    errors: {digits: null}
  };

  componentWillMount() {
    this.setStateToProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setStateToProps(nextProps);
  }

  setStateToProps(props) {
    const {company, businessContact,financialContact, operationsContact, companyAddress, companyPhoneNumber, contactEmailAddresses, contactPhoneNumbers} = props;

    if (company) {
      const data = {
        company: company,
        businessContact,
        financialContact,
        operationsContact,
        companyAddress,
        companyPhoneNumber
      }

      if (businessContact) {
        data.businessContactEmailAddress = contactEmailAddresses[businessContact.contactEmailAddress.id];
        data.businessContactPhoneNumber = contactPhoneNumbers[businessContact.contactPhoneNumber.id];
      }

      if (financialContact) {
        data.financialContactEmailAddress = contactEmailAddresses[financialContact.contactEmailAddress.id];
        data.financialContactPhoneNumber = contactPhoneNumbers[financialContact.contactPhoneNumber.id];
      }

      if (operationsContact) {
        data.operationsContactEmailAddress = contactEmailAddresses[operationsContact.contactEmailAddress.id];
        data.operationsContactPhoneNumber = contactPhoneNumbers[operationsContact.contactPhoneNumber.id];
      }

      this.setState({...data});
    }
  }

  onChangeCompany = (e) => {
    const company = this.state.company;
    company[e.target.name] = e.target.value;

    this.setState({company});
  }

  onChangeCompanyAddress = (e) => {
    const companyAddress = this.state.companyAddress;
    companyAddress[e.target.name] = e.target.value;
    const errors = this.state.errors;
    [{value: "street1", message: "Please enter a street address."}, {value: "city", message: "Please enter a city."}, {value: "state", message: "Please enter a state."}, {value: "postalCode", message: "Please enter a 5-digit zip code."}].map(obj => {
      if (obj.value === e.target.name) errors[e.target.name] = requiredError(e.target.value, obj.value, obj.message);
    })
    this.setState({companyAddress, errors});
  }

  onChangeCompanyPhoneNumber = (e) => {
    if (e.target.name === "digits") {
      const errors = this.state.errors;
      errors.digits = ltError(e.target.value, 9, "Please enter a 10-digit phone number.");
      this.setState({errors});
    }

    const companyPhoneNumber = this.state.companyPhoneNumber;
    companyPhoneNumber[e.target.name] = e.target.value;

    this.setState({companyPhoneNumber});
  }

  onChangeContact = (e, type, error) => {
    const contact = this.state[type];
    contact[e.target.name] = e.target.value;
    const errors = this.state.errors;
    errors[type]= error

    this.setState({[type]: contact, errors});
  }

  validated() {
    const errors = Object.values(this.state.errors);
    return errors.filter(e => e).length === 0;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.validated()) return null;

    const data = {
      company: {
        ...this.state.company,
        companyAddressAttributes: this.state.companyAddress,
        companyPhoneNumberAttributes: this.state.companyPhoneNumber,
        businessContactAttributes: {
          ...this.state.businessContact,
          contactPhoneNumberAttributes: this.state.businessContactPhoneNumber,
          contactEmailAddressAttributes: this.state.businessContactEmailAddress
        },
        financialContactAttributes: {
          ...this.state.financialContact,
          contactPhoneNumberAttributes: this.state.financialContactPhoneNumber,
          contactEmailAddressAttributes: this.state.financialContactEmailAddress
        },
        operationsContactAttributes: {
          ...this.state.operationsContact,
          contactPhoneNumberAttributes: this.state.operationsContactPhoneNumber,
          contactEmailAddressAttributes: this.state.operationsContactEmailAddress
        }
      }
    }
    this.props.onSubmit(data);
  }

  render() {
    return(
      <div className="panel panel-default form-horizontal my-account-form">
        <div className="panel-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor className="control-label col-md-4">Company Name</label>
                <div className="col-md-8 form-control-static">
                  <input type="text" name="name" onChange={this.onChangeCompany} className="form-control fs-hide" value={this.state.company.name || ""} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor className="control-label col-md-4">Sell</label>
                <div className="col-md-8 form-control-static">
                  <span>You are authorized to sell your Properties on Roofstock</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label col-md-4">Address 1</label>
                <div className="col-md-8 form-control-static">
                  <div className={this.state.errors.street1 ? "input-error" : ''}>
                    <div className="rs-input-container">
                      <div className=" ">
                        <input type="text" className="form-control fs-hide" name="street1" onChange={this.onChangeCompanyAddress}  value={this.state.companyAddress.street1 || ""}/>
                      </div>
                      {this.state.errors.street1}
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor className="control-label col-md-4">Address 2</label>
                <div className="col-md-8 form-control-static">
                  <div className="input-error">
                    <div className="rs-input-container">
                      <div className=" ">
                        <input type="text" className="form-control fs-hide"  name="street2" value={this.state.companyAddress.street2 || ""} onChange={this.onChangeCompanyAddress}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor className="control-label col-md-4">City</label>
                <div className="col-md-8 form-control-static">
                  <div className={this.state.errors.city ? "input-error" : ''}>
                    <div className="rs-input-container">
                      <div className=" ">
                        <input type="text" className="form-control fs-hide" name="city" onChange={this.onChangeCompanyAddress} value={this.state.companyAddress.city || ""}/>
                      </div>
                      {this.state.errors.city}
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor className="control-label col-md-4">State</label>
                <div className="col-md-8 form-control-static">
                  <div className={this.state.errors.state ? "input-error" : ''}>
                    <div className="rs-input-container">
                      <div className=" ">
                        <input type="text" name="state" onChange={this.onChangeCompanyAddress} className="form-control fs-hide" value={this.state.companyAddress.state || ""} />
                      </div>
                      {this.state.errors.state}
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor className="control-label col-md-4">Zip</label>
                <div className="col-md-8 form-control-static">
                  <div className={this.state.errors.postalCode ? "input-error" : ''}>
                    <div className="rs-input-container">
                      <div className=" ">
                        <input type="text" className="form-control fs-hide" name="postalCode" onChange={this.onChangeCompanyAddress} value={this.state.companyAddress.postalCode || ""}/>
                      </div>
                      {this.state.errors.postalCode}
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor className="control-label col-md-4">Phone</label>
                <div className="col-md-8 form-control-static">
                  <div className={this.state.errors.digits ? "input-error" : ''}>
                    <div className="rs-input-container">
                      <div className=" ">
                        <input type="text" className="form-control fs-hide" name="digits" onChange={this.onChangeCompanyPhoneNumber} value={this.state.companyPhoneNumber.digits || ""}/>
                      </div>
                      {this.state.errors.digits}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {[{label: "Business Contact", value: "businessContact"}, {label: "Financial Contact", value: "financialContact"}, {label: "Operations Contact", value: "operationsContact"}].map(obj => {
          const error = {
            ...this.state.errors[`${obj.value}PhoneNumber`],
            ...this.state.errors[`${obj.value}EmailAddress`]
          };

          return <ContactForm obj={obj} onChange={this.onChangeContact} contact={this.state[obj.value]} phoneNumber={this.state[`${obj.value}PhoneNumber`]} emailAddress={this.state[`${obj.value}EmailAddress`]} key={obj.value} error={error}/>
          })}
          <br />
          <div className="text-center">
            <button className="btn btn-secondary" onClick={this.handleSubmit}>
              <i className="fa fa-check" />&nbsp;&nbsp;Save Changes
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileForm;
