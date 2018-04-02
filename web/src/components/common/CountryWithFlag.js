import React from 'react';

export default class CountryWithFlag extends React.Component {
  state = {
    showDropdown: false
  };

  showDropdown = () => this.setState({showDropdown: !this.state.showDropdown});
  onChange = (id, e) => {
    this.props.onChange(id);
    this.setState({showDropdown: false});
  }

  renderCountry = (country) => {
    return (
      <li key={country.id} className={`country ${country.isPreferred ? "preferred" : ''}`} onClick={this.onChange.bind(this, country.id)}>
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

    let selectedFlag, selectedCountry = this.props.countries[0];
    if (this.props.countryId) {
      selectedCountry = this.props.countries.find(c => parseInt(c.id, 10) === parseInt(this.props.countryId, 10));
    }

    if (selectedCountry) {
      selectedFlag = (
        <div className="selected-flag" tabIndex="0" title={`${selectedCountry.name}: +${selectedCountry.dialCode}`}>
          <div className={`iti-flag ${selectedCountry.countryCode}`}></div>
          <div className="iti-arrow"></div>
        </div>
      )
    }

    return (
        <div className="flag-container" onClick={this.showDropdown}>
          {selectedFlag}
          <ul className={`country-list ${this.state.showDropdown ? "show" : "hide"}`}>
            { preferredCountries.map(this.renderCountry) }
            <li className="divider"></li>
            { countries.map(this.renderCountry) }
          </ul>
        </div>
    )
  }
}
