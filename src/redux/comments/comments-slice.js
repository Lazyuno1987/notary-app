import { createSlice } from '@reduxjs/toolkit';

import { getComments, addComment } from './comments-operations';


const initialState = {
  comments: [],
  isLoading: false,
 
};


const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: {
        [getComments.pending]: state => {
            state.isLoading = true;
        },
        [getComments.fulfilled]: (state, { payload }) => {
            state.comments = payload;
           
            state.isLoading = false;
        },
        [getComments.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },

        [addComment.pending]: (state) => {
         state.isLoading = true;
          
        },
        [addComment.fulfilled]: (state, { payload }) => {
           
            state.isLoading = false;
            state.comments = [
                ...state.comments,
                payload,
            ];
            
        },
        [addComment.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        }
    },
})


export default commentsSlice.reducer;
