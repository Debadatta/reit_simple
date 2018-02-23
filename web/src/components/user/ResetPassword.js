import React, { Component } from 'react';
import { connect } from 'react-redux';

import ChangePasswordForm from '../common/ChangePasswordForm';
import PasswordSecurityInfo from '../common/PasswordSecurityInfo';
//import { resetPasswordRequest } from '../../actions/users';
import { loadCurrentUser } from '../../actions/authentication';

import '../../styles/form.css';

class ResetPassword extends Component {
  state = { password: '', confirmPassword: '', errors: null };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  };

  handleCheckboxChecked = e => this.setState({ showPwd: e.target.checked });

  submitData = e => {
    e.preventDefault();

    if (this.state.password === '' || this.state.confirmPassword === '') {
      return this.setState({ errors: [{ title: 'Please fill up the required fields.' }] });
    }

    if (this.state.password !== this.state.confirmPassword) {
      return this.setState({ errors: [{ title: "Your password confirmation doesn't match." }] });
    }

    let user = {
      password: this.state.password,
      passwordConfirmation: this.state.confirmPassword
    };

    // this.props.dispatch(resetPasswordRequest({ user, resetCode: this.props.match.params.token })).then(response => {
    //   if (!response.error) {
    //     this.props.dispatch(loadCurrentUser());
    //     this.props.history.push({ pathname: '/' });
    //   }
    //   return response;
    // });
  };

  render() {
    const disableSubmitButton = this.state.score < 3 || this.state.password !== this.state.confirmPassword;
    const passwordProperties = {
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      onChange: this.onChange
    };

    return (
      <section className="body-content adjust-body container">
        <div className="row">
          <div id="reset_password" className="password col-xs-10 col-xs-offset-1 col-sm-12 col-md-9 col-md-offset-2 col-lg-8">
            <div className="row">
              <ChangePasswordForm/>
              <PasswordSecurityInfo/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.user.errors
  };
}

export default connect(mapStateToProps)(ResetPassword);
