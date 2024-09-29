import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import categoryReducer from './categorySlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    category: categoryReducer,
  },
});

export default store;
