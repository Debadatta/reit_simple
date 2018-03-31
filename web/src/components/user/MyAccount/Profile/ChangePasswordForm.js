import React from 'react';

export default class ChangePasswordForm extends React.Component {
  render() {
    return (
      <form action className="form-horizontal">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="form-group">
                <label className="control-label col-md-4">Current Password</label>
                <div className="col-md-8">
                  <div className="input-error"><div className="rs-input-container">
                      <div className=" ">
                        <input maxLength={255} type="password" className="form-control fs-hide" />
                      </div>
                    </div>
                </div>        </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-4">New Password</label>
                <div className="col-md-8">
                  <div className="input-error"><div className="rs-input-container">
                      <div className=" ">
                        <input id="passwordInput" maxLength={255} type="password" className="form-control fs-hide" />
                      </div>
                    </div>
                </div>        </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-4">Re-type New Password</label>
                <div className="col-md-8">
                  <div className="input-error"><div className="rs-input-container">
                      <div className=" ">
                        <input maxLength={255} type="password" className="form-control fs-hide" />
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
