import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import history from '~/scripts/stores/history';

const rootReducer = combineReducers({
  history
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
