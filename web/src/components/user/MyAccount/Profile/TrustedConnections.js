import React from 'react';
import SocialButton from '../../../authentication/SocialButton';

export default class TrustedConnections extends React.Component {
  connectSocialSuccess = (data) => {
    this.props.connectUserToSocial(data);
  }

  connectSocialFailure = (err) => console.log(err);

  setNodeRef = (provider, node) => {
    if (node) {
      this.nodes[ provider ] = node
    }
  }

  render() {
    const {user} = this.props;
    let fb = false, g = false;

    if (user && user.socialLoginStatus) {
      fb = user.socialLoginStatus.fb;
      g = user.socialLoginStatus.g;
    }

    return (
      <div>
        <h3 className="page-title">
              Trusted Connections
            </h3>
            <div className="panel panel-default">
              <div className="panel-body">
                <p>
                  Connect your ReitSimple account to these trusted identity providers and login with ease.
                </p>
                <div className="btn-wrapper">
                  <SocialButton
            provider='facebook'
            appId={process.env.REACT_APP_FB_APP_API_KEY}
            onLoginSuccess={this.connectSocialSuccess}
            onLoginFailure={this.connectSocialFailure}
            getInstance={this.setNodeRef.bind(this, 'facebook')}
            className="btn social facebook"
            disabled={fb ? "disabled" : ""}
          >
            {fb ? "Connected" : "Connect"}
          </SocialButton>
                  </div>
        <div className="btn-wrapper">
        <SocialButton
            provider='google'
            appId={process.env.REACT_APP_GOOGLE_APP_API_KEY}
            onLoginSuccess={this.connectSocialSuccess}
            onLoginFailure={this.connectSocialFailure}
            getInstance={this.setNodeRef.bind(this, 'google')}
            className="btn social google-oauth2"
            disabled={g ? "disabled" : ""}
          >
            {g ? "Connected" : "Connect"}
          </SocialButton>
                </div>
              </div>
            </div>
        </div>
    )
  }
}
