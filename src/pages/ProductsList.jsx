import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsThunks } from "../store/slices/products.slice";

const ProductsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunks());
  }, []);

  return (
    <div>
      <h2>Products List</h2>
    </div>
  );
};

export default ProductsList;
