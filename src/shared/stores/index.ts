import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import user from '~/shared/stores/user';
import history from '~/shared/stores/history';

const rootReducer = combineReducers({
  user,
  history
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
