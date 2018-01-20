import React from 'react';

export default class HomeAdvisors extends React.Component {
  render() {
    return (
      <section className="call-advisor">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 col-sm-push-7 col-md-5 col-md-push-7">
              <h2 className="accent-bar-orange">
                Advisors Are Here to Help
              </h2>
              <p>
                Whether you're a savvy investor looking for multiple buys or a first-timer ready to crack into the lucrative real-estate market, we will partner with you every step of the away.
              </p>
              <br className="visible-xs" />
            </div>
            <div className="col-sm-7 col-sm-pull-5 col-md-pull-5">
              <table>
                <tbody><tr>
                    <td className="visual-wrapper">
                      <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/thumb-zach-evanish.png" alt="Zach Evanish" className="img-responsive" width={160} />
                    </td>
                    <td className="text-wrapper">
                      <p className="hidden-xs">
                        <small>
                          <strong>Zach Evanish</strong><br />
                          Director of Client Advisory Services
                        </small>
                      </p>
                      <a href="https://calendly.com/roofstock-buy" onclick="trackCtaClicked('Schedule a Call');" className="btn btn-solid btn-primary btn-lg margin-t-20">
                        Schedule a Call
                      </a>
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div> {/* /.row */}
        </div>
      </section>
    )
  }
}
