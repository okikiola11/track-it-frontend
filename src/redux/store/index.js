import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/user';

const rootReducer = combineReducers({
  userStore: userReducer,
});
const store = createStore(rootReducer);

export default store;
