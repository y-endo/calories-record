import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import IUser from '~/shared/interfaces/IUser';

export const setUser = createAsyncThunk<{ data: IUser | null }>('setUser', async () => {
  const res = await fetch('/api/get-user');
  const json = await res.json();
  return { data: json };
});

const initialState: {
  data: IUser | null;
  setUserStatus: string;
} = {
  data: null,
  setUserStatus: ''
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearData: state => {
      return { ...state, ...{ data: null } };
    }
  },
  extraReducers: builder => {
    builder.addCase(setUser.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.setUserStatus = '1';
    });

    builder.addCase(setUser.pending, state => {
      state.setUserStatus = '0';
    });

    builder.addCase(setUser.rejected, state => {
      state.setUserStatus = '-1';
    });
  }
});

export const { clearData } = slice.actions;
export default slice.reducer;
