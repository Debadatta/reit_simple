import React, { Component } from 'react';
import { connect } from 'react-redux';

import ChangePasswordForm from '../common/ChangePasswordForm';
import PasswordSecurityInfo from '../common/PasswordSecurityInfo';
import { fetchResetPasswordUserInfo, resetPasswordRequest } from '../../actions/users';
import { loadCurrentUser } from '../../actions/authentication';
import { requiredError, passwordError } from '../../helpers/formValidator';

import '../../styles/form.css';

class ResetPassword extends Component {
  state = { password: '', confirmPassword: '', errors: {} };

  componentWillMount() {
    this.props.dispatch(fetchResetPasswordUserInfo(this.props.match.params.token)).then(response => {
      if (!response.error) {
        const name = response.payload.data.attributes.fullName;
        const email = response.payload.data.attributes.email;
        this.setState({name, email});
      } else {
        this.setState({codeError: response.payload.response.errors});
      }
    });
  }

  onChange = event => this.setState({ [event.target.name]: event.target.value});
  handleCheckboxChecked = e => this.setState({ showPwd: e.target.checked });

  submitData = e => {
    e.preventDefault();

    if (requiredError(this.state.password, 'password')) {
      const errors = {...this.state.errors, password: requiredError(this.state.password, 'password', "Please enter at least 6 characters."), confirmPassword: null}
      return this.setState({ errors });
    }

    if (passwordError(this.state.password, this.state.confirmPassword)) {
      const errors = {...this.state.errors, confirmPassword: passwordError(this.state.password, this.state.confirmPassword, "Your confirm password does not match."), password: null}
      return this.setState({ errors });
    }

    let user = {
      password: this.state.password,
      passwordConfirmation: this.state.confirmPassword
    };

    this.props.dispatch(resetPasswordRequest({ user, resetCode: this.props.match.params.token })).then(response => {
      if (!response.error) {
        this.props.dispatch(loadCurrentUser());
        this.props.history.push({ pathname: '/' });
      }
      return response;
    });
  };

  renderContent() {
    if (this.state.codeError) {
      return (
        <div className="row" style={{padding: "10px", textAlign: 'center'}}>
          {this.state.codeError.map(o => o.title).join(', ')}
        </div>
      )
    }

    const passwordProperties = {
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      name: this.state.name,
      email: this.state.email,
      onChange: this.onChange,
      handleSubmit: this.submitData,
      errors: this.state.errors
    };

    return (
      <div className="row">
        <ChangePasswordForm {...passwordProperties}/>
        <PasswordSecurityInfo/>
      </div>
    )
  }

  render() {
    return (
      <section className="body-content adjust-body container">
        <div className="row">
          <div id="reset_password" className="password col-xs-10 col-xs-offset-1 col-sm-12 col-md-9 col-md-offset-2 col-lg-8">
            {this.renderContent()}
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
