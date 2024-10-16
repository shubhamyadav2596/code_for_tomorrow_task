import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: true,
    currentPage: 1,
    itemsPerPage: 6,
  },
  reducers: {
    removePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    });
  },
});

export const { removePost, setPage } = postsSlice.actions;
export default postsSlice.reducer;
