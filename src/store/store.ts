import { ratesAPI } from '../services/RatesService';
import { exchangeAPI } from './../services/ExchangeService';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import exchangeReducer from './reducers/exchangeSlice';


const rootReducer = combineReducers({
  exchangeReducer,
  [ratesAPI.reducerPath]: ratesAPI.reducer,
  [exchangeAPI.reducerPath]: exchangeAPI.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ratesAPI.middleware, exchangeAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch