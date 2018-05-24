import React from 'react';

import HeaderRow from './HeaderRow';
import ListViewRow from './ListViewRow';

import './index.scss';

export default class ListView extends React.Component {
  render() {
    return (
      <div className="market-properties-list">
        <div className="table-responsive">
          <table className="properties table" style={{ padding: "0px" }}>
            <HeaderRow header={this.props.header} renderHeaderCell={this.props.renderHeaderCell}/>
            <tbody>
              { [1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                <ListViewRow key={i} header={this.props.header} renderListCell={this.props.renderListCell}/>
                ))
              }
            </tbody>
          </table>
          <div className="row-overlay">
          </div>
        </div>
      </div>
    )
  }
}