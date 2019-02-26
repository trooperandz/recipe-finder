/**
 * Render list items
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import RecipeCard from './RecipeCard';
import appActions from '../actions/appActions';

class RecipeList extends Component {
  componentDidMount() {
    const { latestMealsArr, appActions: { fetchLatestMeals } } = this.props;

    if (!latestMealsArr.length) fetchLatestMeals();
  }

  renderRecipeCards() {
    const { latestMealsArr } = this.props;

    return latestMealsArr.map((meal, i) => {
      const {
        recipeId,
        recipeTitle,
        recipeInstructions,
        recipeImageUrl,
      } = meal;

      const imageStyle = {
        backgroundImage: `url(${recipeImageUrl})`,
      };

      return (
        <RecipeCard
          key={recipeId}
          recipeId={recipeId}
          recipeTitle={recipeTitle}
          imageStyle={imageStyle}
        />
      );
    });
  }

  render() {
    return (
      <div className="card-grid-wrapper">
        {this.renderRecipeCards()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    latestMealsArr: state.app.latestMealsArr,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  };
}

RecipeList.propTypes = {
  latestMealsArr: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeList);
