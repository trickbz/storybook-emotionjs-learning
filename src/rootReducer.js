import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Reducers
import loaderReducer from "./reducers/loaderReducer";
import popupReducer from "./reducers/popupReducer";

export default combineReducers({
  loader: loaderReducer,
  popups: popupReducer,
  form: formReducer
});
