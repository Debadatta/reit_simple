import React from 'react';

import ToggleSwitch from "../../../common/ToggleSwitch";

import "../../../../styles/settings.css";

const EMAIL_PREFERENCE_SETTING_OPTIONS = [
  {name: "newsAndAnnouncementsEnabled", title: "News & Announcements", desc: "Keep up to date on company news and promotional offers. Be the first to know about new markets and website features."},
  {name: "bulletinEnabled", title: "REITSimple Bulletin", desc: "Stay savvy with insightful content on real estate investing and industry trends from our monthly newsletter."},
  {name: "coursesEnabled", title: "REIT Courses", desc: "Take our courses build for all level of investors to become an expert in single family flips, flips versus rentals, key investment strategies, Optimizing returns and identifying profitable markets."}
];

const EMAIL_NOTIFICATION_SETTING_OPTIONS = [
  {name: "filterNotificationEnabled", title: "Filter Notifications", desc: "Get notified when a new property is added to your saved filters"},
  {name: "propertyAvailabilityEnabled", title: "Property Availability", desc: "Know when a property you like becomes available or unavailable"},
  {name: "propertyUpdatesEnabled", title: "Property Updates", desc: "For any update regarding an existing property"}
];

class EmailSettings extends React.Component {
  state = {
    emailPreference: {},
    emailNotification: {}
  };

  handleSettings = (name, value) => {
    const spltArr = name.split("_");
    const data = this.state[spltArr[0]];
    data[spltArr[1]] = value;
    this.setState({[spltArr[0]]: data});
  }

  renderSetting(obj, type) {
    const data = this.state[type];

    return (
      <div className="setting-row row" key={obj.name}>
        <div className="section-description col-md-10 col-xs-8">
          <div className="title">{obj.title}</div>
          <div className="desc hidden-xs">{obj.desc}</div>
        </div>
        <div className="section-switch col-md-2 col-xs-4">
          <ToggleSwitch onChange={this.handleSettings} checked={data[obj.name] || false} name={`${type}_${obj.name}`}/>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="body-wrapper-content my-account">
        <div className="page-header no-bottom-pad">
          <h3 className="page-title">Email Preferences and Notifications</h3>
        </div>
        <div className="section">
          <h3 className="page-title">Email Preference Settings</h3>
          <div className="settings-container">
            {EMAIL_PREFERENCE_SETTING_OPTIONS.map(obj => this.renderSetting(obj, "emailPreference"))}          
          </div>
        </div>
        <div className="section">
          <h3 className="page-title">Notification Emails</h3>
          <div className="settings-container">
            {EMAIL_NOTIFICATION_SETTING_OPTIONS.map(obj => this.renderSetting(obj, "emailNotification"))}          
          </div>
        </div>
        <div className="section button-container clearfix">
          <input type="button" className="btn btn-secondary" value="Update Email Settings"/>
        </div>
      </div>
    )
  }
}

export default EmailSettings;
