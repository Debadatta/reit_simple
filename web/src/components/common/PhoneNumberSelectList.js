import React from 'react';
import { connect } from 'react-redux';

import { countries } from '../../actions/staticData';

class PhoneNumberSelectList extends React.Component {
  state = {
    showDropdown: false
  };

  componentDidMount() {
    this.props.dispatch(countries());
  }

  showDropdown = () => this.setState({showDropdown: !this.state.showDropdown});

  renderCountry(country) {
    return (
      <li key={country.id} className={`country ${country.isPreferred ? "preferred" : ''}`}>
        <div className="flag-box">
          <div className={`iti-flag ${country.countryCode}`}></div>
        </div>
        <span className="country-name">{country.name}</span>
        <span className="dial-code">+{country.dialCode}</span>
      </li>
    )
  }

  render() {
    let preferredCountries = [];
    const countries = this.props.countries.filter(c => {
      if (c.isPreferred) {
        preferredCountries.push(c);
        return false;
      }
      return true;
    })

    let selectedFlag;
    const selectedCountry = this.state.selectedCountry || this.props.countries[0];

    if (selectedCountry) {
      selectedFlag = (
        <div className="selected-flag" tabIndex="0" title={`${selectedCountry.name}: +${selectedCountry.dialCode}`}>
          <div className={`iti-flag ${selectedCountry.countryCode}`}></div>
          <div className="iti-arrow"></div>
        </div>
      )
    }

    return (
      <div className="intl-tel-input allow-dropdown">
        <div className="flag-container" onClick={this.showDropdown}>
          {selectedFlag}
          <ul className={`country-list ${this.state.showDropdown ? "show" : "hide"}`}>
            { preferredCountries.map(this.renderCountry) }
            <li className="divider"></li>
            { countries.map(this.renderCountry) }
          </ul>
        </div>
        <input placeholder="Phone" name="phone" type="tel" autoComplete="off" onChange={this.props.onChange} value={this.props.value} className={this.props.inputClass}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    countries: Object.values(state.entities.countries)
  }
}

export default connect(mapStateToProps)(PhoneNumberSelectList);
