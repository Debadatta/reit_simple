import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ActiveForm from '../common/ActiveForm';
import { requestLogin } from '../../actions/authentication';
import { isEmail } from '../../string';

class Login extends Component {
  state = { errors: null }

  //hideFlashMessage = () => this.props.dispatch(hideFlashMessage());

  handleSubmit = e => {
    let email = e.target.elements['email'].value;
    let password = e.target.elements['password'].value;

    if (email && !isEmail(email)) {
      e.preventDefault();
      this.setState({ errors: [{ title: "The Email Address is in an invalid format. Please check and try again." }] });
      return;
    }

    if (email && password) {
      return this.props.dispatch(requestLogin({ email, password }));
    }
  };

  render() {
    return (
      <section className="site-access">
        <section className="site-access__wrapper">
          <ActiveForm
            className="site-access__form"
            submitButton="Login"
            onSubmit={this.handleSubmit}
            activeFormButtonSpace="site-access__form__submit-btn"
            noValidate
          >
            <input type="email" name="email" placeholder="Email" required className="site-access__form__input" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="site-access__form__input site-access__form__input--no-bottom-space"
            />
            <div className="text-right">
              <Link to="/forgot">forgot password ?</Link>
            </div>
          </ActiveForm>
        </section>
      </section>
    );
  }
}

export default connect()(Login);
