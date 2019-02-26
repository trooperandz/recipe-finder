/**
 * Each individual recipe card
 */

import React, { PureComponent } from 'react';

class RecipeCard extends PureComponent {
  constructor(props) {
    super(props);

    this.onClickRecipe = this.onClickRecipe.bind(this)
  }

  onClickRecipe() {
    const {
      isRecipeModalActive,
      updateRecipeModalStatus,
      updateRecipeDetail,
      recipeId,
      recipeTitle,
      recipeInstructions,
      ingredientArr,
      imageStyle,
      history,
    } = this.props;

    const recipeDetailObj = {
      recipeId,
      recipeTitle,
      recipeInstructions,
      ingredientArr,
      imageStyle,
    };

    // TODO: this history push is causing unwanted modal renders while typing search inputs...
    // history.push(`/${recipeId}`);
    updateRecipeModalStatus(isRecipeModalActive);
    updateRecipeDetail(recipeDetailObj);
  }

  render() {
    const {
      recipeId,
      recipeTitle,
      imageStyle,
    } = this.props;

    return (
      <div className="recipe-card" onClick={this.onClickRecipe}>
        <div className="recipe-card__title">{recipeTitle}</div>
        <div className="recipe-card__image" style={imageStyle}></div>
      </div>
    );
  }
}

export default RecipeCard;
