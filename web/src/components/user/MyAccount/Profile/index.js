import React from 'react';
import { connect } from 'react-redux';

import ProfileForm from "./ProfileForm";
import ChangePasswordForm from "./ChangePasswordForm";
import TrustedConnections from "./TrustedConnections";
import PopupMessage from '../../../common/PopupMessage';

import { requestUserProfile, updateUserProfile } from "../../../../actions/users";
import { connectUserToSocial, hideSocialPopupMessage } from '../../../../actions/authentication';

class Profile extends React.Component {
  componentDidMount() {
    this.props.dispatch(requestUserProfile());
  }

  handlePofileUpdate = (data) => this.props.dispatch(updateUserProfile(data));
  connectUserToSocial = (data) => this.props.dispatch(connectUserToSocial(data));
  hideFlashMessage = () => this.props.dispatch(hideSocialPopupMessage());

  renderStatus() {
    if (this.props.socialError) {
      return <PopupMessage hideHandler={this.hideFlashMessage} >{this.props.socialError.map(o => o.title).join(", ")}</PopupMessage>
    }
  }

  render() {
    return (
      <div className="body-wrapper-content my-account">
        {this.renderStatus()}
        <div className="page-header no-bottom-pad">
          <h3 className="page-title">My Profile</h3>
        </div>
        <ProfileForm
          user={this.props.user}
          countries={this.props.countries}
          handlePofileUpdate={this.handlePofileUpdate}
        />
        <ChangePasswordForm handlePasswordUpdate={this.handlePofileUpdate}/>
        <TrustedConnections user={this.props.user} connectUserToSocial={this.connectUserToSocial}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.entities.users[state.authentication.currentUserId],
    countries: state.entities.countries,
    socialError: state.authentication.socialError
  }
}

export default connect(mapStateToProps)(Profile);
