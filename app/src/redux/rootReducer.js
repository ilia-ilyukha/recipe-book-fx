import {combineReducers} from 'redux';
import {appReducer} from '../redux/reducers/appReducers';

export const rootReducer = combineReducers({
    appReducer,
});