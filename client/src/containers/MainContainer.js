/**
 * About page
 */

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import RecipeModal from '../components/RecipeModal';
import HeadingMain from '../components/HeadingMain';
import HeroImage from '../components/HeroImage';
import RecipeList from '../components/RecipeList';
import appActions from '../actions/appActions';

class MainContainer extends Component {
  componentDidMount() {
    // Fetch today's recipes on mount
  }

  render() {
    const { } = this.props;

    return (
      <Fragment>
        <RecipeModal />
        <HeroImage />
        <div className="app-wrapper">
          <HeadingMain mainTitle='Recipes of the Day'/>
          <RecipeList />
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {

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
