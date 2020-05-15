import React, { Component } from 'react';
import Geosuggest from "react-geosuggest";

class SearchBar extends Component {

    render() {
      let { submitLocation } = this.props;

    return (
      <div className="searchBar">
        <Geosuggest onSuggestSelect={submitLocation} />
        <button className="submit-location"></button>
      </div>
    );
  }
}

export default SearchBar;