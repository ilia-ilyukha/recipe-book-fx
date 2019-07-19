import {CREATE_RECIPE} from '../constants';
import {DELETE_RECIPE} from '../constants';



export const createRecipeAction = (name, description) => {
    return {
        type: CREATE_RECIPE,
        payload: {name, description}
    }
}

export const deleteRecipeAction = (key) => {
    return {
        type: DELETE_RECIPE,
        payload: {key}
    }
}