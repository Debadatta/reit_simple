import React from "react";

export default class ContactForm extends React.Component {
  state = {
    show: false
  }

  togglePanel = (e) => this.setState({show: !this.state.show});

  render() {
    return (
      <div className="panel panel-default panel-collapse panel-contact">
        <div className="panel-heading cursor-pointer" onClick={this.togglePanel}>
          {this.props.title}
          <div className="pull-right">
            <i className="fa fa-angle-down" />
          </div>
        </div>
        <div className={`panel-body form-horizontal collapse ${this.state.show ? "in" : null}`} id="financial-contact">
          <div className="form-group">
            <label htmlFor className="control-label col-md-4">First Name</label>
            <div className="col-md-8">
              <input type="text" className="form-control fs-hide" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor className="control-label col-md-4">Last Name</label>
            <div className="col-md-8">
              <input type="text" className="form-control fs-hide" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor className="control-label col-md-4">Title</label>
            <div className="col-md-8">
              <input type="text" className="form-control fs-hide" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor className="control-label col-md-4 fs-hide">Phone Number</label>
            <div className="col-md-8">
              <div className="input-error">
                <div className="rs-input-container">
                  <div className=" ">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>                  
            </div>
          </div>
          <div className="form-group">
            <label htmlFor className="control-label col-md-4 fs-hide">Email Address</label>
            <div className="col-md-8">
              <div className="input-error"><div className="rs-input-container">
                  <div className=" ">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>                  
            </div>
          </div>
        </div>
      </div>    
    )
  }
}