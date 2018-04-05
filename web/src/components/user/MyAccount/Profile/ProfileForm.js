import React from 'react';

import PhoneNumberSelectList from '../../../common/PhoneNumberSelectList';
import PopupMessage from '../../../common/PopupMessage';

import { requiredError } from '../../../../helpers/formValidator';

export default class ProfileForm extends React.Component {
  state = {errors: {}};

  onChange = (e) => {
    const name = e.target.name;
    const errors = this.state.errors;

    if (e.target.value) errors[e.target.name] = null;
    this.setState({[name]: e.target.value, errors});
  }

  componentWillMount() {
    this.setData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user !== this.props.user) {
      this.setData(nextProps);
    }
  }

  setData(props) {
    const user= props.user;
    const data = {
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email
    }

    if (user.phoneNumber) {
      data.phoneNumberId = user.phoneNumber.id;
      data.digits = user.phoneNumber.digits || "";
      data.countryId = user.phoneNumber.country_id || "";
    }

    if (user.address) {
      data.addressId = user.address.id;
      data.street1 = user.address.street1 || "";
      data.street2 = user.address.street2 || "";
      data.city = user.address.city || "";
      data.state = user.address.state || "";
      data.postalCode = user.address.postal_code || "";
    }
    this.setState({...data});
  }

  onChangeCountry = (countryId) => this.setState({countryId});

  handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = this.state.errors;
    [{label: "a street address.", value: 'street1'},
    {label: "a city.", value: 'city'},
    {label: "state code.", value: 'state'},
    {label: "a 5-digit zip code.", value: 'postalCode'},
    {label: "valid phone number.", value: 'digits'}
  ].forEach(field => {
      if (!this.state[field.value]) {
        errors[field.value] = requiredError(this.state[field.value], field.label, `Please enter ${field.label}`);
      }
    });

    if (Object.values(errors).filter(v => v).length > 0) {
      this.setState({errors});
      return;
    }

    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };

    if (this.state.digits) {
      const countryIds = Object.keys(this.props.countries);
      data.phoneNumbersAttributes = {
        "0": { digits: this.state.digits, countryId: parseInt(this.state.countryId || countryIds[0], 10) }
      }

      if (this.state.phoneNumberId) {
        data.phoneNumbersAttributes["0"].id = this.state.phoneNumberId;
      }
    }

    data.addressesAttributes = {
      "0": {
        street1: this.state.street1,
        street2: this.state.street2,
        city: this.state.city,
        state: this.state.state,
        postalCode: this.state.postalCode  
      }
    }

    if (this.state.addressId) {
      data.addressesAttributes["0"].id = this.state.addressId;
    }

    this.props.handlePofileUpdate(data).then(payload => {
      if (payload.error) {
        this.setState({errors: payload.payload.response.errors});
      } else {
        this.setState({updated: true});
      }
    });
  }

  handleStatusMessage = (e) => this.setState({updated: false});

  renderStatus() {
    if (this.state.updated) {
      return <PopupMessage type="success" position="bottom" hideHandler={this.handleStatusMessage} >Info updated successfully</PopupMessage>
    }
  }

  render() {
    return (
        <form className="form-horizontal my-account-form" onSubmit={this.handleSubmit}>
          {this.renderStatus()}
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label col-md-4">First Name</label>
                    <div className="col-md-8">
                      <input maxLength={64} type="text" className="form-control fs-hide" value={this.state.firstName} name="firstName"  onChange={this.onChange}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-4">Last Name</label>
                    <div className="col-md-8">
                      <input maxLength={64} type="text" className="form-control fs-hide" value={this.state.lastName} name="lastName"  onChange={this.onChange}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-4">Phone Number</label>
                    <div className="col-md-8">
                      <div className={this.state.errors.digits ? "input-error" : ''}>
                        <div className="rs-input-container">
                          <div className="error-border">
                            <PhoneNumberSelectList onChange={this.onChange} digits={this.state.digits} inputClass="form-control" countryId={this.state.countryId} onChangeCountry={this.onChangeCountry}/>
                          </div>
                          {this.state.errors.digits}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-4">Email Address</label>
                    <div className="col-md-8">
                      <input maxLength={255} readOnly="readonly" type="text" className="form-control fs-hide" value={this.state.email} />
                    </div>
                  </div>
                  </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label col-md-4">Address 1</label>
                    <div className="col-md-8">
                      <div className={this.state.errors.street1 ? "input-error" : ''}>
                        <div className="rs-input-container">
                          <div className="error-border">
                            <input type="text" className="form-control fs-hide" onChange={this.onChange} value={this.state.street1} name="street1"/>
                          </div>
                          {this.state.errors.street1}
                        </div>
                      </div>          
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-4">Address 2</label>
                    <div className="col-md-8">
                      <input type="text" className="form-control fs-hide" onChange={this.onChange} value={this.state.street2} name="street2"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-4">City</label>
                    <div className="col-md-8">
                      <div className={this.state.errors.city ? "input-error" : ''}>
                        <div className="rs-input-container">
                          <div className="error-border">
                            <input type="text" className="form-control fs-hide" onChange={this.onChange} value={this.state.city} name="city"/>
                          </div>
                          {this.state.errors.city}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-4">State</label>
                    <div className="col-md-8">
                      <div className={this.state.errors.state ? "input-error" : ''}>
                        <div className="rs-input-container">
                          <div className="error-border">
                            <input type="text" className="form-control fs-hide" onChange={this.onChange} value={this.state.state} name="state"/>
                          </div>
                          {this.state.errors.state}
                        </div>
                      </div>          
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-4">Zip</label>
                    <div className="col-md-8">
                      <div className={this.state.errors.postalCode ? "input-error" : ''}>
                        <div className="rs-input-container">
                          <div className="error-border">
                            <input maxLength={5} type="text" className="form-control fs-hide" onChange={this.onChange} value={this.state.postalCode} name="postalCode"/>
                          </div>
                          {this.state.errors.postalCode}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="text-center">
                <button className="btn btn-secondary" type="submit">
                  <i className="fa fa-check" />&nbsp;&nbsp;Save Changes
                </button>
              </div>
            </div>
          </div>
        </form>
    )
  }
}
