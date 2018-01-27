import React from 'react';

export default class Step1 extends React.Component {
  render() {
    return (
      <div id="step1" className="pad-b-30-50">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-lg-6">
              <div className="wrapper-copy">
                <h4 className="underline orange"><span>1</span></h4>
                <h2>Search</h2>
                <p>Use custom filters to tailor your search by list price, desired return, location and more.</p>
                <p>Sign up for alerts and be one of the first to get notified when a matching property becomes available.</p>
                <div className="pad-top-10">
                  <button className="btn btn-primary" data-ember-action={1448}>Sign Up</button>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-lg-6">
              <div className="wrapper-img center-block">
                <img src="https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/how-it-works/filter-1939f69d630371fc9bce0c458d586995.png" alt className="img-responsive" />
                <p className="smaller border-left">Set up custom filters and alerts based on your investing criteria.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
