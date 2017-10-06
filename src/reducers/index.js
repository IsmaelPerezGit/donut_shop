import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import shops from './shops'

const rootReducer = combineReducers({
    form: formReducer,
    shops
});
export default rootReducer;
