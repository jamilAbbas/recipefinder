import {combineReducers} from 'redux';
import { SET_RECIPES, FAVOURITE_RECIPE} from '../actions';

function recipies(state=[],action){
  switch (action.type) {
    case SET_RECIPES:
      return action.items;
      break;
    default:
      return state;

  }
}
function favouriteRecipies(state=[], action){
  switch (action.type) {
    case FAVOURITE_RECIPE:
    state = [...state,action.recipe]
      return state;
      break;
    default:
      return state;

  }
}
const rootReducer = combineReducers({
  recipies,
  favouriteRecipies
})
export default rootReducer;
