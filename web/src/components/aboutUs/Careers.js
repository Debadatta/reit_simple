import React from 'react';

export default class Careers extends React.PureComponent {
  render() {
    return (
      <section id="careers" className="careers-callout">
        <div className="container">
        <h2>Join the Team</h2>
        <p>We’re always on the lookout for talented and driven individuals to join us.</p>
        <a className="callout-link" href="/about-us/careers">Learn about Career Opportunities <i className="fa fa-chevron-right" /></a>
        </div>
      </section>
    )
  }
}
