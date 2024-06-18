import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';  // Ensure this path is correct based on your project structure

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;
