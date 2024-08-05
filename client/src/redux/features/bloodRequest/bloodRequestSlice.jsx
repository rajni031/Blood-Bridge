// client/src/redux/features/bloodRequest/bloodRequestSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk for submitting a blood request
export const submitBloodRequest = createAsyncThunk(
  '/api/blood-requests',// ihav emade changes here
  async (requestData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/blood-requests', requestData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const bloodRequestSlice = createSlice({
  name: 'bloodRequest',
  initialState: {
    requests: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitBloodRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitBloodRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.requests.push(action.payload);
      })
      .addCase(submitBloodRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bloodRequestSlice;
