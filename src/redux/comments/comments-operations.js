import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://super-ruby-miniskirt.cyclic.app/api/';


export const getComments = createAsyncThunk('reviews/get', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('reviews/')
        
        return data.data.result;
    } catch (error) {
        return rejectWithValue(Notify.failure('Failed to get comments'));
    }
});



export const addComment = createAsyncThunk(
  'reviews/add',
  async (comments, { rejectWithValue }) => {
  try {
     const { data } = await axios.post('reviews/', comments);

      Notify.success('Comment added successfully');
     
      return data.data.result;
  } catch (error) {
     return rejectWithValue(Notify.failure('Failed to add the comment'));
  }
  }
);