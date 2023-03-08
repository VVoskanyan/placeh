import { applyMiddleware, combineReducers, createStore } from 'redux';
import {postsReducer} from './postsSlice';
import thunkMiddleWare from 'redux-thunk';

const store = createStore(combineReducers({
    posts:postsReducer
}), applyMiddleware(thunkMiddleWare)
);

export default store;