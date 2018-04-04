import React from 'react';
import { Link } from 'react-router-dom';

const SIDEBAR = [
  {value: "profile", label: "My Profile", url: "/my-account"}, 
  {value: "companyProfile", label: "Company Profile", url: "/my-account/company"}, 
  {value: "emailSetting", label: "Email Settings", url: "/my-account/email-settings"},
  {value: "ira", label: "My IRA Account", url: "/my-account/ira"}
];

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
                  {SIDEBAR.map(obj => {
                    return (
                      <li key={obj.value}>
                        <Link to={obj.url} className={this.props.location.pathname === obj.url ? "active" : null} onClick={this.props.changeView} data-value={obj.value}>{obj.label}</Link>
                      </li>
                    )
                   })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
