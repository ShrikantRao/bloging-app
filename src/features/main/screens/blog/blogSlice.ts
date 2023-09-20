import {blogSelector} from '../../../../core/store/selectors';
import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Blogs} from '../../../../core/api/blogs';

interface BlogSliceState {
  blogs: Blogs | undefined;
}

const initialState: BlogSliceState = {
  blogs: [],
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setBlogs(state, action: PayloadAction<Blogs | undefined>) {
      state.blogs = action.payload;
    },
  },
});

export const getBlogSelector = createSelector(blogSelector, blog => blog.blogs);

export const {setBlogs} = blogSlice.actions;

export default blogSlice.reducer;
