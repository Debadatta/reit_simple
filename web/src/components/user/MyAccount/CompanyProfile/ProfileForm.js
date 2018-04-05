import React from "react";

import ContactForm from "./ContactForm";

class ProfileForm extends React.Component {
    render() {
      return(
        <div className="panel panel-default form-horizontal my-account-form">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor className="control-label col-md-4">Company Name</label>
                  <div className="col-md-8 form-control-static">
                    <input type="text" className="form-control fs-hide" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor className="control-label col-md-4">Sell</label>
                  <div className="col-md-8 form-control-static">
                    <span>You are authorized to sell your Properties on Roofstock</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label col-md-4">Address 1</label>
                  <div className="col-md-8 form-control-static">
                    <div className="ember-view input-error">
                      <div className="rs-input-container">
                        <div className=" ">
                          <input type="text" className="form-control fs-hide" />
                        </div>
                      </div>
                    </div>                  
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor className="control-label col-md-4">Address 2</label>
                  <div className="col-md-8 form-control-static">
                    <div className="input-error">
                      <div className="rs-input-container">
                        <div className=" ">
                          <input type="text" className="form-control fs-hide" />
                        </div>
                      </div>
                    </div>                  
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor className="control-label col-md-4">City</label>
                  <div className="col-md-8 form-control-static">
                    <div className="input-error">
                      <div className="rs-input-container">
                        <div className=" ">
                          <input type="text" className="form-control fs-hide" />
                        </div>
                      </div>
                    </div>                  
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor className="control-label col-md-4">State</label>
                  <div className="col-md-8 form-control-static">
                    <div className="input-error">
                      <div className="rs-input-container">
                        <div className=" ">
                          <input type="text" className="form-control fs-hide" />
                        </div>
                      </div>
                    </div>                  
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor className="control-label col-md-4">Zip</label>
                  <div className="col-md-8 form-control-static">
                    <div  className="input-error">
                      <div className="rs-input-container">
                        <div className=" ">
                          <input type="text" className="form-control fs-hide" />
                        </div>
                      </div>
                    </div>                  
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor className="control-label col-md-4">Phone</label>
                  <div className="col-md-8 form-control-static">
                    <div  className="input-error">
                      <div className="rs-input-container">
                        <div className=" ">
                          <input type="text" className="form-control fs-hide" />
                        </div>
                      </div>
                    </div>                  
                  </div>
                </div>
              </div>
            </div>
            {["Business Contact", "Financial Contact", "Operations Contact"].map(type => {
              return <ContactForm title={type} />
            })}            
            <br />
            <div className="text-center">
              <button className="btn btn-secondary">
                <i className="fa fa-check" />&nbsp;&nbsp;Save Changes
              </button>
            </div>
          </div>
        </div>
      )
    }
}

export default ProfileForm;