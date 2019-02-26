/**
 * Recipe details ingredients list
 */

import React, { memo } from 'react';

const renderIngredientList = (ingredientsArr = []) => {
  return ingredientsArr.filter((ingredient) => {
    return ingredient;
  }).map((ingredient) => {
    return <li key={ingredient} className="ingredient-list__item">{ingredient}</li>;
  });
};

const IngredientList = memo(function IngredientList({ ingredientArr }) {
  return (
    <ul className="ingredient-list">
      {renderIngredientList(ingredientArr)}
    </ul>
  );
})

export default IngredientList;
