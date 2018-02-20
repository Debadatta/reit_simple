import React from 'react';
import { connect } from 'react-redux';

import { emailError } from '../../helpers/formValidator';
import { sendPasswordResetLink } from '../../actions/users';
import { isEmail } from '../../string';

import '../../styles/form.css';

class ForgetPassword extends React.Component {
  state = {
    email: '',
    sent: false
  }

  handleChange = e => this.setState({email: e.target.value});

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.email && emailError(this.state.email)) {
      this.setState({error: emailError(this.state.email)});
      return;
    }

    this.setState({ errors: null }); // reset error message if email if correct

    this.props.dispatch(sendPasswordResetLink(this.state.email)).then(response => {
      if (!response.error) {
        this.setState({sent: true});
      }
      return null;
    });
  }

  render() {
    return (
      <section className="body-content adjust-body container">
        <div className="row">
          <div id="forgot_password" className="col-xs-10 col-xs-offset-1 col-sm-12 col-md-9 col-md-offset-2 col-lg-8">
            <div className="row">
              <div className="col-xs-12 col-sm-7 formContainer">
                <h2>Reset Password</h2>
                <form onSubmit={this.handleSubmit}>
                  <div className="rs-form-group">
                    <div className={this.state.error ? "input-error" : ''}>
        <div className="rs-input-container">
        <div className="error-border">
        <input autoFocus placeholder="Email Address" name="email" type="email" className="rs-input fs-hide ember-text-field" onChange={this.handleChange} value={this.state.email}/>
        </div>
        {this.state.error}
      </div>
        </div>
                  </div>
                  <div className="rs-form-group">
                    <button type="submit" className="btn btn-secondary btn-block" style={{maxWidth: '90%', minWidth: '90%'}} disabled={isEmail(this.state.email) ? '' : 'disabled'}>Send Reset Password Link</button>
                  </div>
                </form>
              </div>
              <div className="col-xs-12 col-sm-4" style={{paddingTop: 25, paddingLeft: 25}}>
                <div>
                  <h3>Reset Your Password</h3>
                  <p>Please enter your account email address and we will send you a link you can use to reset your password.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default connect()(ForgetPassword);
