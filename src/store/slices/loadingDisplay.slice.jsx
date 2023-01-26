import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const loadingDisplaySlice = createSlice({
		name: 'loadingDisplay',
    initialState: false,
    reducers: {
        setLoadingDisplay: (state, action) => {
            const loadingDisplay = action.payload;
            return loadingDisplay;
        }
    }
})

export const { setLoadingDisplay } = loadingDisplaySlice.actions;

export default loadingDisplaySlice.reducer;