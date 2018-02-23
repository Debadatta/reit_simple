import React from 'react';

export default class PasswordSecurityInfo extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-5">
        <div className="infoContainer">
          <h3>Provide a new password</h3>
          <p>Please enter a new password and you'll be logged in to your account.</p>
          <hr />
          <h3>Security You Can Trust</h3>
          <p>
            REITSimple ensures the security of your information with the latest encryption technologies.
          </p>
          <div style={{display: 'none'}}><div style={{textDecoration: 'none', textAlign: 'center', display: 'block', verticalAlign: 'baseline', fontSize: '100%', fontStyle: 'normal', textIndent: 0, lineHeight: 1, width: 'auto', margin: '0px auto', padding: 0, border: 0, background: 'transparent', position: 'relative', top: 0, right: 0, bottom: 0, left: 0, clear: 'both', float: 'none', cursor: 'default'}}><img src="//seal.digicert.com/seals/cascade/?s=fX1sKgG7,3,m,www.roofstock.com" alt="DigiCert Seal" tabIndex={0} style={{textDecoration: 'none', textAlign: 'center', display: 'block', verticalAlign: 'baseline', fontSize: '100%', fontStyle: 'normal', textIndent: 0, lineHeight: 1, width: 'auto', margin: '0px auto', padding: 0, border: 0, background: 'transparent', position: 'relative', top: 0, right: 0, bottom: 0, left: 0, clear: 'both', float: 'none', cursor: 'pointer'}} /></div></div>
        </div>
      </div>
    )
  }
}
