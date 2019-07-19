
import { CREATE_RECIPE } from '../constants';
import { DELETE_RECIPE } from '../constants';

const initialState = {
    name: '',
    age: 25,
    skills: ['React']
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case CREATE_RECIPE:
            let recipes = [];
            if (state.recipes) {
                recipes = state.recipes.concat(action.payload);
            } else {
                recipes = [action.payload]
            }

            return {
                ...state,
                recipes: recipes
            }
        case DELETE_RECIPE:
            delete state.recipes[action.payload.key];
console.log(state.recipes);
            return {
                ...state,
                recipes: state.recipes
            }
        default:
            return state;
    }
}

