import React from 'react';

export default class HeaderRow extends React.Component {
  render() {
    return (
      <thead className="tableFloatingHeaderOriginal">
        <tr>
          {this.props.header.map(obj => this.props.renderHeaderCell(obj))}
        </tr>
      </thead>
    )
  }
}