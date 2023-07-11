import React, { Component } from 'react';

export default class FilterBar extends Component {
  handleInputChange = event => {
    this.props.onFilter(event.target.value);
  };
  render() {
    return (
      <label>
        Find contact by name
        <input
          onChange={this.handleInputChange}
          type="text"
          name="search"
          value={this.props.filter}
        />
      </label>
    );
  }
}
