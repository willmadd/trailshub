import React, { Component } from 'react';
import SearchBar from './SearchBar';


class SearchModal extends Component {

    render() {
      let { submitLocation, initialLayout } = this.props;
        return (
          <div
            className={`searchModal ${initialLayout ? "initial" : "secondary"}`}
          >
            <h2>Search for Mountain Bike Trails in Your Area</h2>
            <SearchBar submitLocation={submitLocation} />
          </div>
        );
    }
}

export default SearchModal;