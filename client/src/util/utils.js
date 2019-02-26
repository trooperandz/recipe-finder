/**
 * Shared utility functions
 */

import safeParse from 'safe-json-parse/callback';

/**
 * Util for safely parsing JSON
 */
function safeParseJSON(body) { console.log('body: ', body)
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
 */
function formatLatestMeals(recipeArr = []) {
  if (recipeArr.length) {
    return recipeArr.reduce((returnArr, recipe) => {
      const {
        idMeal: recipeId,
        strMeal: recipeTitle,
        strInstructions: recipeInstructions,
        strMealThumb: recipeImageUrl,
      } = recipe;

      const recipeObj = {
        recipeId,
        recipeTitle,
        recipeInstructions,
        recipeImageUrl,
      };

      returnArr.push(recipeObj);
      return returnArr;
    }, []);
  }

  return recipeArr;
}

export {
  safeParseJSON,
  formatLatestMeals,
};
