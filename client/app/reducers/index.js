import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { emailReducer, modalReducer } from './reducers.js'


const allReducers = combineReducers({
  form: formReducer,
  email: emailReducer,
  modal: modalReducer
});

export default allReducers;
