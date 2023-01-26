import { createSlice } from "@reduxjs/toolkit";
import { setLoadingDisplay } from "./loadingDisplay.slice";
import axios from "axios";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      const products = action.payload;
      return products;
    },
  },
});

export const getProductsThunks = () => (dispatch) => {
  dispatch(setLoadingDisplay(true));
  axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products`)
    .then((res) => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setLoadingDisplay(false)));
};

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
