/**
 * Shared utility functions
 */

import safeParse from 'safe-json-parse/callback';

/**
 * Util for safely parsing JSON
 */
function safeParseJSON(body) {
  let parsedResponse;

  safeParse(body, (err, json) => {
    if (err) {
      console.log('JSON parse error...');
      parsedResponse = {};
    }

    parsedResponse = json;
  });

  return parsedResponse;
}

/**
 * Format the latest meals response
 * Why didn't the api give us an ingredients array?  #meanface
 */
function formatLatestMeals(recipeArr) {
  if (recipeArr && recipeArr.length) {
    return recipeArr.reduce((returnArr, recipe) => {
      const {
        idMeal: recipeId,
        strMeal: recipeTitle,
        strInstructions: recipeInstructions,
        strMealThumb: recipeImageUrl,
        strIngredient1: ingredient1,
        strIngredient2: ingredient2,
        strIngredient3: ingredient3,
        strIngredient4: ingredient4,
        strIngredient5: ingredient5,
        strIngredient6: ingredient6,
        strIngredient7: ingredient7,
        strIngredient8: ingredient8,
        strIngredient9: ingredient9,
        strIngredient10: ingredient10,
        strIngredient11: ingredient11,
        strIngredient12: ingredient12,
        strIngredient13: ingredient13,
        strIngredient14: ingredient14,
        strIngredient15: ingredient15,
        strIngredient16: ingredient16,
        strIngredient17: ingredient17,
        strIngredient18: ingredient18,
        strIngredient19: ingredient19,
        strIngredient20: ingredient20,
      } = recipe;

      const ingredientArr = [
        ingredient1,
        ingredient2,
        ingredient3,
        ingredient4,
        ingredient5,
        ingredient6,
        ingredient7,
        ingredient8,
        ingredient9,
        ingredient10,
        ingredient11,
        ingredient12,
        ingredient13,
        ingredient14,
        ingredient15,
        ingredient16,
        ingredient17,
        ingredient18,
        ingredient19,
        ingredient20,
      ];

      const recipeObj = {
        recipeId,
        recipeTitle,
        recipeInstructions,
        recipeImageUrl,
        ingredientArr,
      };

      returnArr.push(recipeObj);
      return returnArr;
    }, []);
  }

  return [];
}

/**
 * Fetch favorites from local storage
 */
function fetchFavorites() {
  let favorites = localStorage.getItem('favoriteRecipes');
  return (favorites) ? safeParseJSON(favorites) : {};
}

export {
  safeParseJSON,
  formatLatestMeals,
  fetchFavorites,
};
