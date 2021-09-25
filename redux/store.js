import { configureStore } from "@reduxjs/toolkit";
import  favoritesSliceReducer  from './features/favorites';


const store =  configureStore({
  reducer: {
    favorites: favoritesSliceReducer, // favorites is the state
  },
})

export default store;
