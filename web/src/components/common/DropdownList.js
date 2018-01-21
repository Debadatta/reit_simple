import React from 'react';

export default class DropdownList extends React.Component {
  render() {
    let titleOption;
    if (this.props.title) {
      titleOption = <option value="">{this.props.title}</option>;
    }

    return (
      <select onChange={this.props.onChange} name={this.props.name}>
        {titleOption}
        {this.props.items && this.props.items.map((item, i) => {
          return (
              <option value={item.value} key={i}>
              {item.label}
            </option>
          )
        })}
      </select>
    )
  }
}
