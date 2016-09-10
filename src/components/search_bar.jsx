import React, { Component} from 'react';

class SearchBar extends Component {
  render() {
    return (
      <input onChange={this.handleInputChange}/>
    )
  }

  //event handler for input changes
  handleInputChange(e) {
    console.log(e.target.value);
  }
}

export default SearchBar;
