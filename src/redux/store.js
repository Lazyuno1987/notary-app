import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './comments/comments-slice'


export const store = configureStore({
    reducer: {
        comments: commentsReducer,
    }
})