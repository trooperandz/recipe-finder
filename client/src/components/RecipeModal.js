/**
 * The recipe detail modal
 */

import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import IngredientList from './IngredientList';
import IconClose from './IconClose';
import IconHeart from './IconHeart';
import appActions from '../actions/appActions';
import { fetchFavorites } from '../util/utils';

class RecipeModal extends PureComponent {
  constructor(props) {
    super(props);

    this.onClickCloseIcon = this.onClickCloseIcon.bind(this);
    this.onClickHeartIcon = this.onClickHeartIcon.bind(this);
  }

  componentWillUnmount() {
    this.element.remove();
  }

  onClickCloseIcon() {
    const {
      isRecipeModalActive,
      appActions: { updateRecipeModalStatus },
    } = this.props;

    updateRecipeModalStatus(isRecipeModalActive);
  }

  // Save favorite in local storage on heart icon click
  onClickHeartIcon() {
    const {
      isRecipeModalActive,
      appActions: { updateRecipeFavorites },
      recipeDetailObj: {
        recipeId,
        recipeTitle,
        imageStyle,
        ingredientArr,
        recipeInstructions,
      },
    } = this.props;

    const favoritesObj = fetchFavorites();

    favoritesObj[recipeId] = recipeTitle;
    updateRecipeFavorites(favoritesObj);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoritesObj));
  }

  render() {
    const {
      isRecipeModalActive,
      recipeDetailObj: {
        recipeTitle,
        imageStyle,
        ingredientArr,
        recipeInstructions,
      },
    } = this.props;

    if (isRecipeModalActive) {
      return (
        <div className="recipe-modal-wrapper" ref={el => this.element = el}>
          <div className="recipe-modal">
            <div className="icon-modal-wrapper">
              <IconClose onClickCloseIcon={this.onClickCloseIcon} />
              <IconHeart onClickHeartIcon={this.onClickHeartIcon} />
            </div>
            <div className="recipe-modal__image" style={imageStyle}></div>
            <div className="recipe-modal__text-wrapper">
              <div className="recipe-modal__title">{recipeTitle}</div>
              <IngredientList ingredientArr={ingredientArr} />
              <div className="recipe-modal__title">Directions</div>
              <div className="recipe-modal__instructions">{recipeInstructions}</div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }
}

function mapStateToProps(state) {
  return {
    isRecipeModalActive: state.app.isRecipeModalActive,
    recipeDetailObj: state.app.recipeDetailObj,
  };
}

function mapDispatchToProps(dispatc) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeModal);
