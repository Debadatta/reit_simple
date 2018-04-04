import React from 'react';
import { connect } from 'react-redux';

import ProfileForm from "./ProfileForm";

class CompanyProfile extends React.Component {
  render() {
    return (
      <div className="body-wrapper-content my-account">
        <div className="page-header no-bottom-pad">
          <h3 className="page-title">Company Profile</h3>
        </div>
        <ProfileForm/>
      </div>
    )
  }
}

export default connect()(CompanyProfile);
