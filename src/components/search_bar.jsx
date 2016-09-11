import React, { Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
    return (
      <div>
        <input
          value={this.state.term} onChange={this.handleInputChange.bind(this)}/>
        Value of the input: {this.state.term}
      </div>
    )
  }
  //event handler for input changes
  handleInputChang(e) {
    this.setState({ term: e.target.value });
  }
}

export default SearchBar;
