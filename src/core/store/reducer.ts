import {combineReducers} from '@reduxjs/toolkit';
import blogReducer from '../../features/main/screens/blog/blogSlice';

const rootReducer = combineReducers({
  blog: blogReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
