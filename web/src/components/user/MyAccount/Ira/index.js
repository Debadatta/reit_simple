import React from 'react';

class Ira extends React.Component {
  render() {
    return (
      <div className="body-wrapper-content my-account">
        <div className="page-header no-bottom-pad">
          <h3 className="page-title">My IRA Account</h3>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="col-xs-12" style={{minHeight: 150, padding: 20}}>
                Your IRA account is not synced with REITSImple yet. Learn how you can use a Self-Directed IRA to invest in real estate.
                <br /><br />
                <a href="javascript:void">
                  <button className="btn btn-secondary">Learn More</button>
                </a>    
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Ira;
