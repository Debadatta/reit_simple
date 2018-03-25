import React from 'react';
import LeftMenu from "./LeftMenu";

import "../../../styles/MyAccount.css";

class MyAccount extends React.Component {
  render() {
    return (
      <section className="body-content adjust-body container">
        <div className="body-wrapper">
          <LeftMenu/>
          <div className="body-wrapper-content my-account">
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
                          <input id="ember2795" maxLength={64} type="text" className="form-control fs-hide ember-view ember-text-field" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-4">Last Name</label>
                        <div className="col-md-8">
                          <input id="ember2796" maxLength={64} type="text" className="form-control fs-hide ember-view ember-text-field" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-4">Phone Number</label>
                        <div className="col-md-8">
                          <div id="ember2805" className="ember-view input-error"><div className="rs-input-container">
                              <div className=" ">
        <div className="intl-tel-input allow-dropdown">
        <input id="ember2818" placeholder="Phone" type="tel" className="form-control full-size fs-hide ember-view ember-text-field" autoComplete="off" /></div>
                              </div>
                              {/**/}</div>
                          </div>          </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-4">Email Address</label>
                        <div className="col-md-8">
                          <input id="ember2819" maxLength={255} readOnly="readonly" type="text" className="form-control fs-hide ember-view ember-text-field" />
                        </div>
                      </div>
                      {/**/}      </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label col-md-4">Address 1</label>
                        <div className="col-md-8">
                          <div id="ember2820" className="ember-view input-error"><div className="rs-input-container">
                              <div className=" ">
                                <input id="ember2821" maxLength={64} type="text" className="form-control fs-hide ember-view ember-text-field" />
                              </div>
                              {/**/}</div>
                          </div>          </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-4">Address 2</label>
                        <div className="col-md-8">
                          <input id="ember2822" maxLength={64} type="text" className="form-control fs-hide ember-view ember-text-field" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-4">City</label>
                        <div className="col-md-8">
                          <div id="ember2823" className="ember-view input-error"><div className="rs-input-container">
                              <div className=" ">
                                <input id="ember2824" maxLength={64} type="text" className="form-control fs-hide ember-view ember-text-field" />
                              </div>
                              {/**/}</div>
                          </div>          </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-4">State</label>
                        <div className="col-md-8">
                          <div id="ember2825" className="ember-view input-error"><div className="rs-input-container">
                              <div className=" ">
                                <input id="ember2826" maxLength={2} type="text" className="form-control fs-hide ember-view ember-text-field" />
                              </div>
                              {/**/}</div>
                          </div>          </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-4">Zip</label>
                        <div className="col-md-8">
                          <div id="ember2827" className="ember-view input-error"><div className="rs-input-container">
                              <div className=" ">
                                <input id="ember2828" maxLength={5} type="text" className="form-control fs-hide ember-view ember-text-field" />
                              </div>
                              {/**/}</div>
                          </div>          </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="text-center">
                    <button className="btn btn-secondary" data-ember-action={2829}>
                      <i className="fas fa-check" />&nbsp;&nbsp;Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <form action className="form-horizontal">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="form-group">
                    <label className="control-label col-md-4">Current Password</label>
                    <div className="col-md-8">
                      <div id="ember2830" className="ember-view input-error"><div className="rs-input-container">
                          <div className=" ">
                            <input id="ember2831" maxLength={255} type="password" className="form-control fs-hide ember-view ember-text-field" />
                          </div>
                          {/**/}</div>
                      </div>        </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-4">New Password</label>
                    <div className="col-md-8">
                      <div id="ember2832" className="ember-view input-error"><div className="rs-input-container">
                          <div className=" ">
                            <input id="passwordInput" maxLength={255} type="password" className="form-control fs-hide ember-view ember-text-field" />
                          </div>
                          {/**/}</div>
                      </div>        </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-4">Re-type New Password</label>
                    <div className="col-md-8">
                      <div id="ember2833" className="ember-view input-error"><div className="rs-input-container">
                          <div className=" ">
                            <input id="ember2834" maxLength={255} type="password" className="form-control fs-hide ember-view ember-text-field" />
                          </div>
                          {/**/}</div>
                      </div>        </div>
                  </div>
                  {/**/}
                  <br />
                  <div className="text-center">
                    <button id="btn-change-password" className="btn btn-secondary" data-ember-action={2835}>
                      <i className="fas fa-check" />&nbsp;&nbsp;Change Password
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {/*<form action="" class="form-horizontal">

    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Assumptions</h3>
        </div>
        <div class="panel-body">
            <div class="row">
            </div>
            <div class="text-center">
                <button class="btn btn-primary" {{action 'saveAssumptions'}}>
                    <i class="fas fa-check"></i>&nbsp;&nbsp;Save Changes
                </button>
            </div>
        </div>
    </div>
</form>*/}
            <h3 className="page-title">
              Trusted Connections
            </h3>
            <div className="panel panel-default">
              <div className="panel-body">
                <p>
                  Connect your Roofstock account to these trusted identity providers and login with ease.
                </p>
                <div className="btn-wrapper">
                  <button disabled className="btn social facebook">
                    Connected
                  </button>
                  </div>
                <div className="btn-wrapper">
                  <button className="btn social google-oauth2" data-ember-action={2838}>
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default MyAccount;
