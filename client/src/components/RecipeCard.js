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
    console.log('clicked recipe')
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
