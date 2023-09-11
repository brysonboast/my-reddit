import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './features/Posts/postSlice';
import searchTermReducer from './features/SearchBar/searchSlice';
import subredditReducer from './features/Subreddit/subredditSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    searchTerm: searchTermReducer,
    subreddits: subredditReducer
  },
});

export default store;