import React from 'react';

const SIDEBAR = [{value: "profile", label: "My Profile"}, {value: "companyProfile", label: "Company Profile"}, {value: "emailSetting", label: "Email Settings"}, {value: "ira", label: "My IRA Account"}];

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
                    return <li key={obj.value}><a href="javascript:void(0)" className={obj.value === this.props.type ? "active" : null} onClick={this.props.changeView} data-value={obj.value}>{obj.label}</a></li>;
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
