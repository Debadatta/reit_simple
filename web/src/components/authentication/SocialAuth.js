import React from 'react';
import { connect } from 'react-redux';
import SocialButton from './SocialButton'
import { handleSocialLogin } from '../../actions/authentication';
import dotenv from  "dotenv";

class SocialAuth extends React.Component {
  constructor (props) {
    super(props)

    this.nodes = {}
  }

  setNodeRef = (provider, node) => {
    if (node) {
      this.nodes[ provider ] = node
    }
  }

  handleSocialLogin = (user) => {
    this.props.dispatch(handleSocialLogin(user));
  }

  handleSocialLoginFailure = (err) => {
    console.error("login:" + err)
  }

  render() {
    return (
      <div className="social-login-or-signup-component-container">
        <div className="authentication__social-login-or-signup">
          <SocialButton
            provider='facebook'
            appId={process.env.REACT_APP_FB_APP_API_KEY}
            onLoginSuccess={this.handleSocialLogin}
            onLoginFailure={this.handleSocialLoginFailure}
            getInstance={this.setNodeRef.bind(this, 'facebook')}
            className="btn social facebook"
          >
            Sign In with Facebook
          </SocialButton>
          <button className="btn social google">
            Sign In with Google
          </button>
        </div>
      </div>
    )
  }
}

export default connect()(SocialAuth);
