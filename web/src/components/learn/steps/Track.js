import React from 'react';

export default class Track extends React.PureComponent {
  render() {
    return (
      <div id="step5" className="bg-purple-20 pad-t-b-30-50">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-lg-6">
              <div className="wrapper-copy">
                <h4 className="underline purple"><span>2</span></h4>
                <h2>Track</h2>
                <br className="visible-xs" />
              </div>
            </div>
            <div className="col-sm-5 col-lg-4 col-xl-4 hidden">
              content
            </div>
          </div>
        </div>
      </div>
    )
  }
}
