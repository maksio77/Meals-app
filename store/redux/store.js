import { configureStore } from "@reduxjs/toolkit";
import favorivesReducer from './favorites';

export const store = configureStore({
      reducer: {
            favoriteMeals: favorivesReducer
      }
});