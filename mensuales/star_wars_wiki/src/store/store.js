import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { starwarsApi } from '../services/starwarsService';

export const store = configureStore({
    reducer: {
        [starwarsApi.reducerPath]: starwarsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(starwarsApi.middleware)
});

setupListeners(store.dispatch);