import React from 'react';
import { connect } from 'react-redux';

import ProfileForm from "./ProfileForm";
import PopupMessage from '../../../common/PopupMessage';

import { requestCompany, updateCompanyDetails } from "../../../../actions/users";

class CompanyProfile extends React.Component {
  state = {saved: false};

  componentDidMount() {
    this.props.dispatch(requestCompany())
  }

  handleStatusMessage = (e) => this.setState({saved: false});

  renderStatus() {
    if (this.state.saved) {
      return <PopupMessage type="success" position="top" hideHandler={this.handleStatusMessage} >Information successfully saved</PopupMessage>
    }
  }

  handleSubmit = (data) => {
    this.props.dispatch(updateCompanyDetails(data)).then(payload => {
      if (!payload.error) this.setState({saved: true});
    });
  }

  render() {
    const {company, businessContact,financialContact, operationsContact, companyAddress, companyPhoneNumber, contactEmailAddresses, contactPhoneNumbers,} = this.props;

    const properties = {
      company,
      businessContact,
      financialContact,
      operationsContact,
      companyAddress,
      companyPhoneNumber,
      contactEmailAddresses,
      contactPhoneNumbers,
      onSubmit: this.handleSubmit
    };

    return (
      <div className="body-wrapper-content my-account my-account-company">
        {this.renderStatus()}
        <div className="page-header no-bottom-pad">
          <h3 className="page-title">Company Profile</h3>
        </div>
        <ProfileForm {...properties}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  let company, businessContact,financialContact, operationsContact, companyAddress, companyPhoneNumber;

  const currentUserId = state.authentication.currentUserId;
  if (currentUserId) {
    company = Object.values(state.entities.companies).find(o => parseInt(o.userId) === parseInt(currentUserId, 10));

    if (company) {
      businessContact = state.entities.businessContacts[company.businessContact.id];
      financialContact = state.entities.financialContacts[company.financialContact.id];
      operationsContact = state.entities.operationsContacts[company.operationsContact.id];
      companyAddress = state.entities.companyAddresses[company.companyAddress.id];
      companyPhoneNumber = state.entities.companyPhoneNumbers[company.companyPhoneNumber.id];
    }
  }

  return {
    company,
    businessContact,
    financialContact,
    operationsContact,
    companyAddress,
    companyPhoneNumber,
    contactEmailAddresses: state.entities.contactEmailAddresses,
    contactPhoneNumbers: state.entities.contactPhoneNumbers
  }
}

export default connect(mapStateToProps)(CompanyProfile);
