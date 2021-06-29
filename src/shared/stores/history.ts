import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import IMeal from '~/shared/interfaces/IMeal';

export const fetchHistory = createAsyncThunk<{ data: IMeal[] }>('fetchHistory', async () => {
  const res = await fetch('/api/get-meal');
  const json = await res.json();
  return { data: json };
});

const initialState: {
  fetchHistoryStatus: string;
  data: IMeal[];
  isLoaded: boolean;
} = {
  fetchHistoryStatus: '',
  data: [],
  isLoaded: false
};

const slice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setData: (state, action) => {
      return { ...state, ...{ data: action.payload } };
    },
    clearData: state => {
      return { ...state, ...{ data: [] } };
    }
  },
  extraReducers: builder => {
    // fetchHistory 成功
    builder.addCase(fetchHistory.fulfilled, (state, action) => {
      state.fetchHistoryStatus = '1';
      state.data = action.payload.data;
      state.isLoaded = true;
    });

    // fetchHistory 処理中
    builder.addCase(fetchHistory.pending, state => {
      state.fetchHistoryStatus = '0';
      state.isLoaded = false;
    });

    // fetchHistory 失敗
    builder.addCase(fetchHistory.rejected, state => {
      state.fetchHistoryStatus = '-1';
      state.isLoaded = true;
    });
  }
});

export const { setData, clearData } = slice.actions;
export default slice.reducer;
