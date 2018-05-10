import React from 'react';
import { Link } from 'react-router-dom';

export default class SubHeader extends React.Component {
  renderRightContent() {
    return (
      <div className="hidden-xs pull-right">
        <ul className="nav navbar-nav">
          <li className="visible-md-* hidden-sm">
            <a className data-ember-action={2096}>
              <i className="fa fa-whatsapp" />
              Talk to an Advisor
            </a>
          </li>
          <li>
            <a href="/saved-roofs" title="Saved Roofs" className="menu-icon saved-roofs-icon ember-view">  
              <div id="ember2122" className="ember-view __icons__saved-roofs-icon__5d0b1">
                <i className="icon icon-saved-roofs" />
              </div>
            </a>
          </li>
          <li>
            <a href="/cart" title="Cart" className="menu-icon cart-icon ember-view">
              <div className="ember-view __icons__cart-icon__4a679">
                <i className="icon icon-cart" />
              </div>
            </a>
          </li>
          <li>
            <a title="Recently Viewed" className="menu-icon recently-viewed-icon">
              <div className="ember-view">
                <i className="icon icon-recent" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    )
  }

  renderLeftContent() {
    return (
      <ul className="nav navbar-nav pull-left">
        <li className="hidden-xs">
          <Link to="/investment-property-marketplace">Browse Properties</Link>
        </li>
      </ul>
    )
  }

  render() {
    return (
      <div className="sub-menu hidden-xs unauthenticated">
        <div className="container">
          {this.renderLeftContent()}
        </div>
      </div>
    )
  }
}
