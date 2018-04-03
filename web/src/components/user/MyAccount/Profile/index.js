import React from 'react';
import { connect } from 'react-redux';

import ProfileForm from "./ProfileForm";
import ChangePasswordForm from "./ChangePasswordForm";
import TrustedConnections from "./TrustedConnections";

import { requestUserProfile, updateUserProfile } from "../../../../actions/users";

class Profile extends React.Component {
  componentDidMount() {
    this.props.dispatch(requestUserProfile());
  }

  handlePofileUpdate = (data) => {
    return this.props.dispatch(updateUserProfile(data));
  }

  render() {
    return (
      <div className="body-wrapper-content my-account">
        <div className="page-header no-bottom-pad">
          <h3 className="page-title">My Profile</h3>
        </div>
        <ProfileForm 
          user={this.props.user} 
          countries={this.props.countries}
          handlePofileUpdate={this.handlePofileUpdate}
        />
        <ChangePasswordForm handlePasswordUpdate={this.handlePofileUpdate}/>
        <TrustedConnections/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.entities.users[state.authentication.currentUserId],
    countries: state.entities.countries
  }
}

export default connect(mapStateToProps)(Profile);
