import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import user from '~/scripts/stores/user';
import history from '~/scripts/stores/history';

const rootReducer = combineReducers({
  user,
  history
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
