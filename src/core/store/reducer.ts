import {combineReducers} from '@reduxjs/toolkit';
import blogReducer from '../../features/main/blogSlice';

const rootReducer = combineReducers({
  blog: blogReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
