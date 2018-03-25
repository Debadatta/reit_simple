import React from 'react';

export default class LeftMenu extends React.Component {
  render() {
    return (
      <div className="left-nav">
            <div>
                <div className="panel-group">
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab">
                      <h4 className="panel-title">
                        <a role="button" data-toggle="collapse" data-target="#left-nav-collapseOne">
                          My Account
                        </a>
                      </h4>
                    </div>
                    <div id="left-nav-collapseOne" className="panel-collapse collapse in" >
                      <ul className="list-group">
                        <li><a id="ember2734" href="/my-account" className="ember-view active">My Profile </a></li>
                        <li><a id="ember2735" href="/my-account/company" className="ember-view">Company Profile</a></li>
                        <li><a id="ember2752" href="/my-account/email-settings" className="ember-view">Email Settings</a></li>
                        <li><a id="ember2769" href="/my-account/ira" className="ember-view">My IRA Account</a></li>
                         </ul>
                    </div>
                  </div>
                </div>
              </div>
          </div>
    )
  }
}
