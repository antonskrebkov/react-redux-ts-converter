import { ratesAPI } from '../services/RatesService';
import { exchangeAPI } from './../services/ExchangeService';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [ratesAPI.reducerPath]: ratesAPI.reducer,
  [exchangeAPI.reducerPath]: exchangeAPI.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ratesAPI.middleware, exchangeAPI.middleware),
})