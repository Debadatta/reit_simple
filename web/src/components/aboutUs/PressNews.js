import React from 'react';

export default class PressNews extends React.PureComponent {
  render() {
    return (
      <section id="news" className="latest-news">
            <div className="container">
              <h2>See What the Press is Saying</h2>
              <h3 className="font-prox" />
              <div className="news-items">
                <div className="item">
                  <a href="http://www.forbes.com/sites/mnewlands/2017/01/10/investing-in-single-family-homes-has-never-been-easier-says-this-oakland-startup/"><img width={770} height={217} src="https://www.roofstock.com/wp-content/uploads/2016/11/forbes-logo-770x217.png" className="attachment-medium size-medium" alt="forbes-logo" /></a>
                  <span className="date">January 10, 2017</span>
                  <a href="http://www.forbes.com/sites/mnewlands/2017/01/10/investing-in-single-family-homes-has-never-been-easier-says-this-oakland-startup/"><q>Investing In Single-Family Homes Has Never Been Easier, Says This Oakland Startup</q></a>
                </div>
                <div className="item">
                  <a href="https://techcrunch.com/2017/10/04/roofstock-a-marketplace-for-single-family-homes-with-tenants-just-closed-on-35-million-in-new-funding/"><img width={226} height={70} src="https://www.roofstock.com/wp-content/uploads/2016/07/TechCrunch.png" className="attachment-medium size-medium" alt="TechCrunch logo" /></a>
                  <span className="date">October 4, 2017</span>
                  <a href="https://techcrunch.com/2017/10/04/roofstock-a-marketplace-for-single-family-homes-with-tenants-just-closed-on-35-million-in-new-funding/"><q>Roofstock, a marketplace for single-family homes with tenants, just closed on $35 million in new funding</q></a>
                </div>
              </div>
              <a className="callout-link" href="/about-us/press/">See More From The Press <i className="fa fa-chevron-right" /></a>
            </div>
          </section>
    )
  }
}
