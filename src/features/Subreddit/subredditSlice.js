import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubreddits = createAsyncThunk('subredditsSlice/getSubreddits', async () => {
    const response = await fetch(`https://www.reddit.com/subreddits.json`);
    const json = await response.json();
    const children = json.data.children;
    return children;
})

const subredditSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: {},
        isLoading: false,
        hasError: false,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchSubreddits.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.subreddits = action.payload;
        })
        builder.addCase(fetchSubreddits.pending, (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        })
        builder.addCase(fetchSubreddits.rejected, (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        })
    }
})

export default subredditSlice.reducer;