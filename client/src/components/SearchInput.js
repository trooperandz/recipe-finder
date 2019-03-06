import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import appActions from '../actions/appActions';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.onClickSearch = this.onClickSearch.bind(this);
  }

  onClickSearch() {
    const { searchTerm, appActions: { fetchSearchResults } } = this.props;

    fetchSearchResults(searchTerm);
  }

  onSearchInputChange(e) {
    const { appActions: { setSearchTerm } } = this.props;
    const { target: { value } } = e;

    setSearchTerm(value);
  }

  render() {
    const { searchTerm } = this.props;

    return (
      <div className="search">
        <input className="search__input" type="text" onChange={this.onSearchInputChange} value={searchTerm} placeholder="Search recipes..." />
        <i className="fas fa-search" onClick={this.onClickSearch}></i>
        <i className="fas fa-arrow-right" onClick={this.onClickSearch}></i>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: state.app.searchTerm,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchInput);
