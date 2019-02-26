/**
 * Favorites sidenav
 */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import appActions from '../actions/appActions';
import { fetchFavorites } from '../util/utils'

class SideNav extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isSideNavActive: false,
    };

    this.handleSideNavClose = this.handleSideNavClose.bind(this);
  }

  componentDidMount() {
    const { appActions: { updateRecipeFavorites } } = this.props;
    updateRecipeFavorites(fetchFavorites());
  }

  // Toggle the active state
  handleSideNavClose() {
    const { isSideNavActive } = this.state;

    this.setState({
      isSideNavActive: !isSideNavActive,
    });
  }

  // Render the side nav favorite recipes list
  renderListItems() {
    const { recipeFavoritesObj } = this.props;

    const listItems = Object.keys(recipeFavoritesObj);

    if (listItems.length) {
      const listItems = Object.keys(recipeFavoritesObj).map((recipeId) => {
        return (
          <li
            className="sidenav__list-item"
            key={recipeId} >
            {recipeFavoritesObj[recipeId]}
          </li>
        );
      });

      return listItems;
    }

    return <li className="sidenav__list-item">No saved recipes!</li>
  };

  render() {
    const { isSideNavActive } = this.state;

    const activeClassName = isSideNavActive ? 'sidenav--active' : null;
    const hiddenStyle = isSideNavActive ? 'hidden' : null;

    return (
      <div className={`sidenav ${activeClassName}`}>
        <i className="far fa-times-circle" onClick={this.handleSideNavClose}></i>
        <div className="sidenav__img"></div>
        <div className="sidenav__title">Favorites
          <i className={`fas fa-bars ${hiddenStyle}`} onClick={this.handleSideNavClose}>&nbsp;
            <span className="sidenav__open">Favorites</span>
          </i>
        </div>
        <ul className="sidenav__list">
          {this.renderListItems()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipeFavoritesObj: state.app.recipeFavoritesObj,
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
)(SideNav);
