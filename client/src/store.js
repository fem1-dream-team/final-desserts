import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// const initialState = {};

// const thunkMiddleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store