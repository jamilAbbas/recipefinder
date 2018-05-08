export const SET_RECIPES = 'SET_RECIPES';
export const FAVOURITE_RECIPE = 'FAVOURITE_RECIPE';

export function setRecipies(items){
  return{
    type:SET_RECIPES,
    items
  }
}

export function favoriteRecipe(recipe){
  return{
    type:FAVOURITE_RECIPE,
    recipe
  }
}
