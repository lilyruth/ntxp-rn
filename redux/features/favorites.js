import { createSlice } from '@reduxjs/toolkit';



export const favoritesSlice = createSlice({
  name: "favorites", //needs to be name of state
  initialState: { value: [] }, 
  reducers: {
     addPlantToFavorites: (state, action) => {
       let favorites = state.value;
       if (favorites.includes(action.payload) === false) { 
         state.value.push(action.payload)
       }
     }, 
     removePlantFromFavorites: (state, action) => {
          state.value = state.value.filter(item => item !== action.payload)
          }
  }
})

export const { addPlantToFavorites, removePlantFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;



  