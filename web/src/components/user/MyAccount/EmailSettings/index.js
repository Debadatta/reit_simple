import React from 'react';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';

import ToggleSwitch from "../../../common/ToggleSwitch";

import { 
  requestEmailNotificationSetting, requestEmailPreferenceSetting,
  updateEmailNotificationSetting, updateEmailPreferenceSetting
 } from "../../../../actions/users";

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
    emailNotificationSetting: {},
    emailPreferenceSetting: {}
  };

  componentDidMount() {
    if (!this.props.emailNotificationSetting) this.props.dispatch(requestEmailNotificationSetting());
    if (!this.props.emailPreferenceSetting) this.props.dispatch(requestEmailPreferenceSetting());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.emailNotificationSetting !== nextProps.emailNotificationSetting) {
      this.setState({emailNotificationSetting: {...nextProps.emailNotificationSetting}});
    }

    if (this.props.emailPreferenceSetting !== nextProps.emailPreferenceSetting) {
      this.setState({emailPreferenceSetting: {...nextProps.emailPreferenceSetting}});
    }
  }

  handleSettings = (name, value) => {
    const spltArr = name.split("_");
    const data = this.state[spltArr[0]];
    data[spltArr[1]] = value;
    this.setState({[spltArr[0]]: data});
  }

  updateEmailSettings = (e) => {
    e.preventDefault();

    if (!isEqual(this.props.emailNotificationSetting, this.state.emailNotificationSetting)) {
      this.props.dispatch(updateEmailNotificationSetting({emailNotificationSetting: this.state.emailNotificationSetting})).then(payload => {
        if (!payload.error) {
          this.setState({updated: true});
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      })
    }
    if (!isEqual(this.props.emailPreferenceSetting, this.state.emailPreferenceSetting)) {
      this.props.dispatch(updateEmailPreferenceSetting({emailPreferenceSetting: this.state.emailPreferenceSetting})).then(payload => {
        if (!payload.error) {
          this.setState({updated: true});
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      })
    }
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

  renderStatus() {
    if (this.state.updated) {
      return (
        <div className="section">
          You have successfully updated your email settings.<br />
          You will still continue to receive all emails related to your REITSimple account, and any transactions you have made on REITSimple.<br />
          Please note:<br />
          <ul>
            <li>If you save a new filter with a notification, you will start receiving all filter-related emails again</li>
            <li>If you add a new property to your cart, you will start receiving all property availability emails again</li>
          </ul>
        </div>
      )
    }
  }

  render() {
    const { emailNotificationSetting, emailPreferenceSetting } = this.props;

    return (
      <div className="body-wrapper-content my-account email-settings">
        <div className="page-header no-bottom-pad">
          <h3 className="page-title">Email Preferences and Notifications</h3>
        </div>
        {this.renderStatus()}
        <div className="section">
          <h3 className="page-title">Email Preference Settings</h3>
          <div className="settings-container">
            {emailPreferenceSetting && EMAIL_PREFERENCE_SETTING_OPTIONS.map(obj => this.renderSetting(obj, "emailPreferenceSetting"))}          
          </div>
        </div>
        <div className="section">
          <h3 className="page-title">Notification Emails</h3>
          <div className="settings-container">
            {emailNotificationSetting && EMAIL_NOTIFICATION_SETTING_OPTIONS.map(obj => this.renderSetting(obj, "emailNotificationSetting"))}          
          </div>
        </div>
        <div className="section button-container clearfix">
          <input type="button" className="btn btn-secondary" value="Update Email Settings" onClick={this.updateEmailSettings}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const emailNotificationSetting = Object.values(state.entities.emailNotificationSettings).find(e => parseInt(e.userId, 10) === parseInt(state.authentication.currentUserId, 10));
  const emailPreferenceSetting = Object.values(state.entities.emailPreferenceSettings).find(e => parseInt(e.userId, 10) === parseInt(state.authentication.currentUserId, 10));
  return { emailNotificationSetting, emailPreferenceSetting }
}

export default connect(mapStateToProps)(EmailSettings);
