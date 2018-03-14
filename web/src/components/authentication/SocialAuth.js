import React from 'react';
import { connect } from 'react-redux';
import SocialButton from './SocialButton'
import { handleSocialLogin, handleSocialSignup } from '../../actions/authentication';

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
    this.props.dispatch(handleSocialLogin(user, this.props.type));
  }

  handleSocialLoginFailure = (err) => {
    console.error("login:" + err)
  }

  handleSocialSignup = (user) => {
    this.props.dispatch(handleSocialSignup(user));
  }

  handleSocialSignupFailure = (err) => {
    console.error("login:" + err)
  }

  render() {
    return (
        <div className={`social-login-or-signup-component-container ${this.props.className}`}>
        <div className="authentication__social-login-or-signup">
          <SocialButton
            provider='facebook'
            appId={process.env.REACT_APP_FB_APP_API_KEY}
            onLoginSuccess={this.props.type === "signup" ? this.handleSocialSignup : this.handleSocialLogin}
            onLoginFailure={this.props.type === "signup" ? this.handleSocialSignupFailure : this.handleSocialLoginFailure}
            getInstance={this.setNodeRef.bind(this, 'facebook')}
            className="btn social facebook"
          >
            {this.props.fbBtnText || "Sign In with Facebook"}
          </SocialButton>
          <SocialButton
            provider='google'
            appId={process.env.REACT_APP_GOOGLE_APP_API_KEY}
            onLoginSuccess={this.props.type === "signup" ? this.handleSocialSignup : this.handleSocialLogin}
            onLoginFailure={this.props.type === "signup" ? this.handleSocialSignupFailure : this.handleSocialLoginFailure}
            getInstance={this.setNodeRef.bind(this, 'google')}
            className="btn social google"
          >
            {this.props.gBtnText || "Sign In with Google"}
          </SocialButton>
        </div>
      </div>
    )
  }
}

export default connect()(SocialAuth);
