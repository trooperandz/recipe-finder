/**
 * Render main page recipe cards list
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import RecipeCard from './RecipeCard';
import appActions from '../actions/appActions';

class RecipeList extends Component {
  componentDidMount() {
    const {
      latestMealsArr,
      appActions: { fetchLatestMeals }
    } = this.props;

    if (!latestMealsArr.length) fetchLatestMeals();
  }

  renderRecipeCards() {
    const {
      latestMealsArr,
      isRecipeModalActive,
      searchResultsArr,
      isSearchActive,
      history,
      appActions: { updateRecipeModalStatus, updateRecipeDetail },
    } = this.props;

    let activeRecipeArr = latestMealsArr;

    // Set active recipe array depending on search status
    if (searchResultsArr && isSearchActive) activeRecipeArr = searchResultsArr;

    return activeRecipeArr.map((meal, i) => {
      const {
        recipeId,
        recipeTitle,
        recipeInstructions,
        recipeImageUrl,
        ingredientArr,
      } = meal;

      const imageStyle = {
        backgroundImage: `url(${recipeImageUrl})`,
      };

      return (
        <RecipeCard
          key={recipeId}
          recipeId={recipeId}
          recipeTitle={recipeTitle}
          recipeInstructions={recipeInstructions}
          ingredientArr={ingredientArr}
          imageStyle={imageStyle}
          isRecipeModalActive={isRecipeModalActive}
          updateRecipeModalStatus={updateRecipeModalStatus}
          updateRecipeDetail={updateRecipeDetail}
          history={history}
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
    searchResultsArr: state.app.searchResultsArr,
    isSearchActive: state.app.isSearchActive,
    isRecipeModalActive: state.app.isRecipeModalActive,
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
