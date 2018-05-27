import React from 'react';

export default class ListViewRow extends React.Component {
  render() {
    return (
      <tr style={{height: "77px"}}>
        {this.props.header.map(obj => this.props.renderListCell(obj))}
      </tr>
    )
  }
}