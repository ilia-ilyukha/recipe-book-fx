import { CREATE_RECIPE } from '../constants';
import { DELETE_RECIPE } from '../constants';
import { SHOW_EDIT_FORM } from '../constants';
import { CLOSE_EDIT_FORM } from '../constants';

const initialState = {
    recipes: [],
    flagEditForm: false
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
        case SHOW_EDIT_FORM:
            return {
                ...state,
                flagEditForm: true,
                editRecipeKey: action.payload
            }
        case CLOSE_EDIT_FORM:
            return {
                ...state,
                flagEditForm: false
            }
        case DELETE_RECIPE:
            delete state.recipes[action.payload.key];
            return {
                ...state,
                recipes: state.recipes
            }
        default:
            return state;
    }
}

