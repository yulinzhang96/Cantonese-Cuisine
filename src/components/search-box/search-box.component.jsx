import React from 'react';

import './search-box.styles.css';

class SearchBox extends React.Component {
  render() {
    return (
      <input
        className='search-box'
        type='search'
        placeholder='Search Cuisine...'
        onChange={this.props.onSearchChange}
      />
    );
  }
}

export default SearchBox;
