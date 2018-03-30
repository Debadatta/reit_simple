import React from 'react';

export default class TrustedConnections extends React.Component {
  render() {
    return (
        <div>
        <h3 className="page-title">
              Trusted Connections
            </h3>
            <div className="panel panel-default">
              <div className="panel-body">
                <p>
                  Connect your ReitSimple account to these trusted identity providers and login with ease.
                </p>
                <div className="btn-wrapper">
                  <button disabled className="btn social facebook">
                    Connected
                  </button>
                  </div>
                <div className="btn-wrapper">
                  <button className="btn social google-oauth2">
                    Connect
                  </button>
                </div>
              </div>
            </div>
        </div>
    )
  }
}
