import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPostsByTerm = createAsyncThunk('postsSlice/getPosts', async (term) => {
    try {
        const params = encodeURI(term);
    const response = await fetch(`https://www.reddit.com/search.json?q=${params}`);
    const json = await response.json();
    const children = json.data.children;
    const childrenData = children.map((child) => child.data);
    const obj = {};
    for (let child of childrenData) {
        obj[child.id] = child;
    }
    return obj;
    } catch (e) {
        return {}
    }
    
})

export const fetchPostsBySubreddit = createAsyncThunk('postsSlice/getPostsBySubreddit', async (subreddit) => {
    try {
        const response = await fetch(`https://www.reddit.com${subreddit}.json`);
    const json = await response.json();
    const children = json.data.children;
    const childrenData = children.map((child) => child.data);
    const obj = {};
    for (let child of childrenData) {
        obj[child.id] = child;
    }
    return obj;
    } catch (e) {
        return {};
    }
    
})

export const getCommentsByPost = createAsyncThunk('postsSlice/getCommentsById', async (post) => {
    const response = await fetch(`https://www.reddit.com${post.permalink}.json`);
    const json = await response.json();
    console.log(json);
    return json;
})


const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        data: {},
        isLoading: false,
        hasError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPostsByTerm.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.data = action.payload;
        })
        builder.addCase(fetchPostsByTerm.pending, (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        })
        builder.addCase(fetchPostsByTerm.rejected, (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        })
        builder.addCase(fetchPostsBySubreddit.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.data = action.payload;
        })
        builder.addCase(fetchPostsBySubreddit.pending, (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        })
        builder.addCase(fetchPostsBySubreddit.rejected, (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        })
    }   
})
export default postsSlice.reducer;