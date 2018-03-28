import React from 'react';
import { connect } from 'react-redux';

import CountryWithFlag from './CountryWithFlag';

import { countries } from '../../actions/staticData';

class PhoneNumberSelectList extends React.Component {
  componentDidMount() {
    this.props.dispatch(countries());
  }

  render() {
    return (
      <div className="intl-tel-input allow-dropdown">
        <CountryWithFlag countries={this.props.countries} onChange={this.props.onChangeCountry} countryId={this.props.countryId}/>
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
