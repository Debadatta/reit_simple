import React from 'react';
import ChangePasswordForm from "./ChangePasswordForm";

export default class ProfileForm extends React.Component {
  render() {
    return (
      <div>
        <div className="page-header no-bottom-pad">
          <h3 className="page-title">My Profile</h3>
        </div>
        <form action className="form-horizontal my-account-form">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label col-md-4">First Name</label>
                    <div className="col-md-8">
                      <input maxLength={64} type="text" className="form-control fs-hide" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-4">Last Name</label>
                    <div className="col-md-8">
                      <input maxLength={64} type="text" className="form-control fs-hide" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-4">Phone Number</label>
                    <div className="col-md-8">
                      <div className="input-error"><div className="rs-input-container">
                          <div className=" ">
                            <div className="intl-tel-input allow-dropdown">
                              <input placeholder="Phone" type="tel" className="form-control full-size fs-hide" autoComplete="off" /></div>
                          </div>
                        </div>
                    </div>          </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-4">Email Address</label>
                    <div className="col-md-8">
                      <input maxLength={255} readOnly="readonly" type="text" className="form-control fs-hide" />
                    </div>
                  </div>
                  </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label col-md-4">Address 1</label>
                    <div className="col-md-8">
                      <div className="input-error"><div className="rs-input-container">
                          <div className=" ">
                            <input maxLength={64} type="text" className="form-control fs-hide" />
                          </div>
                        </div>
                    </div>          </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-4">Address 2</label>
                    <div className="col-md-8">
                      <input maxLength={64} type="text" className="form-control fs-hide" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-4">City</label>
                    <div className="col-md-8">
                      <div className="input-error"><div className="rs-input-container">
                          <div className=" ">
                            <input maxLength={64} type="text" className="form-control fs-hide" />
                          </div>
                        </div>
                    </div>          </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-4">State</label>
                    <div className="col-md-8">
                      <div className="input-error"><div className="rs-input-container">
                          <div className=" ">
                            <input maxLength={2} type="text" className="form-control fs-hide" />
                          </div>
                        </div>
                    </div>          </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-4">Zip</label>
                    <div className="col-md-8">
                      <div className="input-error"><div className="rs-input-container">
                          <div className=" ">
                            <input maxLength={5} type="text" className="form-control fs-hide" />
                          </div>
                        </div>
                    </div></div>
                  </div>
                </div>
              </div>
              <br />
              <div className="text-center">
                <button className="btn btn-secondary">
                  <i className="fa fa-check" />&nbsp;&nbsp;Save Changes
                </button>
              </div>
            </div>
          </div>
        </form>
        <ChangePasswordForm/>
      </div>
    )
  }
}
