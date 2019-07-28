import {CREATE_RECIPE} from '../constants';
import {DELETE_RECIPE} from '../constants';
import {SHOW_EDIT_FORM} from '../constants';
import {CLOSE_EDIT_FORM} from '../constants';



export const createRecipeAction = (name, description) => {
    return {
        type: CREATE_RECIPE,
        payload: {name, description}
    }
}

export const showEditFormAction = (key) => {
    return {
        type: SHOW_EDIT_FORM,
        payload: key
    }
}
export const closeEditFormAction = () => {
    return {
        type: CLOSE_EDIT_FORM
    }
}

export const deleteRecipeAction = (key) => {
    return {
        type: DELETE_RECIPE,
        payload: {key}
    }
}