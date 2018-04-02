import React from 'react';

export default class ChangePasswordForm extends React.Component {
  state= {
    currentPassword: "",
    password: "",
    passwordConfirmation: ""
  };

  onChange = (e) => this.setState({[e.target.name]: e.target.value});
  
  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      currentPassword: this.state.currentPassword,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation
    }

    this.props.handlePasswordUpdate(data).then(payload => {
      if (payload.error) {
        this.setState({errors: payload.payload.response.errors});
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-horizontal">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="form-group">
                <label className="control-label col-md-4">Current Password</label>
                <div className="col-md-8">
                  <div className="input-error"><div className="rs-input-container">
                      <div className=" ">
                        <input maxLength={255} value={this.state.currentPassword} type="password" onChange={this.onChange} name="currentPassword" className="form-control fs-hide" />
                      </div>
                    </div>
                </div>        </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-4">New Password</label>
                <div className="col-md-8">
                  <div className="input-error"><div className="rs-input-container">
                      <div className=" ">
                        <input id="passwordInput" maxLength={255} value={this.state.password} onChange={this.onChange} name="password" type="password" className="form-control fs-hide" />
                      </div>
                    </div>
                </div>        </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-4">Re-type New Password</label>
                <div className="col-md-8">
                  <div className="input-error"><div className="rs-input-container">
                      <div className=" ">
                        <input maxLength={255} value={this.state.passwordConfirmation} type="password" className="form-control fs-hide" name="passwordConfirmation" onChange={this.onChange} />
                      </div>
                      </div>
                </div>        </div>
              </div>
              <br />
              <div className="text-center">
                <button id="btn-change-password" className="btn btn-secondary">
                  <i className="fa fa-check" />&nbsp;&nbsp;Change Password
                </button>
              </div>
            </div>
          </div>
        </form>
    )
  }
}
