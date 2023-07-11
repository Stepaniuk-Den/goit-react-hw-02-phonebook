import React, { Component } from 'react';
import { StyledFilterBar } from './FilterBar.styled';

export default class FilterBar extends Component {
  handleInputChange = event => {
    this.props.onFilter(event.target.value);
  };
  render() {
    return (
      <StyledFilterBar>
        Find contact by name
        <input
          onChange={this.handleInputChange}
          type="text"
          name="search"
          value={this.props.filter}
        />
      </StyledFilterBar>
    );
  }
}
