import React from 'react';

import PhoneNumberSelectList from '../../../common/PhoneNumberSelectList';

export default class ProfileForm extends React.Component {
  state = {}
  onChange = (e) => {
    const name = e.target.name;
    this.setState({[name]: e.target.value});
  }

  onChangeCountry = (countryId) => this.setState({countryId});

  componentWillReceiveProps(nextProps) {
    if(nextProps.user !== this.props.user) {
      const user= nextProps.user;
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
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };

    if (this.state.digits) {
      const countryIds = Object.keys(this.props.countries);
      data.phoneNumbersAttributes = {
        "0": { digits: this.state.digits, countryId: parseInt(this.state.countryId || countryIds[0]) }
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
      }
    });
  }

  render() {
    return (
        <form className="form-horizontal my-account-form" onSubmit={this.handleSubmit}>
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
                      <div className="input-error">
                        <div className="rs-input-container">
                          <PhoneNumberSelectList onChange={this.onChange} digits={this.state.digits} inputClass="form-control" countryId={this.state.countryId} onChangeCountry={this.onChangeCountry}/>
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
                      <div className="input-error">
                        <div className="rs-input-container">
                          <div className=" ">
                            <input type="text" className="form-control fs-hide" onChange={this.onChange} value={this.state.street1} name="street1"/>
                          </div>
                        </div>
                    </div>          </div>
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
                      <div className="input-error"><div className="rs-input-container">
                          <div className=" ">
                            <input type="text" className="form-control fs-hide" onChange={this.onChange} value={this.state.city} name="city"/>
                          </div>
                        </div>
                    </div>          </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-4">State</label>
                    <div className="col-md-8">
                      <div className="input-error"><div className="rs-input-container">
                          <div className=" ">
                            <input type="text" className="form-control fs-hide" onChange={this.onChange} value={this.state.state} name="state"/>
                          </div>
                        </div>
                    </div>          </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-4">Zip</label>
                    <div className="col-md-8">
                      <div className="input-error"><div className="rs-input-container">
                          <div className=" ">
                            <input maxLength={5} type="text" className="form-control fs-hide" onChange={this.onChange} value={this.state.postalCode} name="postalCode"/>
                          </div>
                        </div>
                    </div></div>
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
