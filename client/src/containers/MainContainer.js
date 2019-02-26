/**
 * About page
 */

import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import SearchInput from '../components/SearchInput';
import SideNav from '../components/SideNav';
import RecipeModal from '../components/RecipeModal';
import HeadingMain from '../components/HeadingMain';
import HeroImage from '../components/HeroImage';
import RecipeList from '../components/RecipeList';
import appActions from '../actions/appActions';

class MainContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.onClickBackToLatest = this.onClickBackToLatest.bind(this);
  }

  onClickBackToLatest() {
    const { appActions: { updateSearchActiveStatus } } = this.props;

    updateSearchActiveStatus(false);
  }

  renderBackToLatestLink() {
    const { isSearchActive } = this.props;

    if (isSearchActive) {
      return <div className="back-link" onClick={this.onClickBackToLatest}>Back to Latest</div>
    }

    return null;
  }

  render() {
    const {
      isSearchActive,
      searchTerm,
      appActions: { fetchRecipeDetail },
      match: { params }, // from Router
      history,
    } = this.props;

    if (params && params.id) fetchRecipeDetail(params.id);

    const mainTitle = (isSearchActive ? `Search Results for ${searchTerm}` : 'Recipes of the Day');

    return (
      <Fragment>
        <SearchInput />
        <SideNav />
        <RecipeModal />
        <HeroImage />
        <div className="app-wrapper">
          <HeadingMain mainTitle={mainTitle}/>
          {this.renderBackToLatestLink()}
          <RecipeList history={history}/>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    isSearchActive: state.app.isSearchActive,
    searchTerm: state.app.searchTerm,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  };
}

MainContainer.propTypes = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainContainer);
