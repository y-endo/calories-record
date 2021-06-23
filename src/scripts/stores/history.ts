import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import IMeal from '~/scripts/interfaces/IMeal';

export const fetchData = createAsyncThunk<{ data: IMeal[] }>('fetchData', async () => {
  const res = await fetch('/api/get-meal');
  const json = await res.json();
  return { data: json };
});

const initialState: {
  status: string;
  data: IMeal[];
} = {
  status: '',
  data: []
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
    // fetchData 成功
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = '1';
      state.data = action.payload.data;
    });

    // fetchData 処理中
    builder.addCase(fetchData.pending, state => {
      state.status = '0';
    });

    // fetchData 失敗
    builder.addCase(fetchData.rejected, state => {
      state.status = '-1';
    });
  }
});

export const { setData, clearData } = slice.actions;
export default slice.reducer;
