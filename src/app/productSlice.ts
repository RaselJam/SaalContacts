import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import Contact from "../model/Contact";
import Product from "../model/Product";
import { v4 as uuidv4 } from "uuid";

type initialStateType = {
  productList: Product[];
};

const productList: Product[] = [
  {
    id: uuidv4(),
    name: "Hotmail",
    company : "Microsoft"
  }
];

const initialState: initialStateType = {
  productList,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.productList.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const {
        payload: { id, name,  company  },
      } = action;

      state.productList = state.productList.map((product) =>
        product.id === id ? { ...product, name, company } : product
      );
    },
    removeProduct: (state, action: PayloadAction<{ id: string }>) => {
      state.productList = state.productList.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addProduct, updateProduct, removeProduct } =
  productSlice.actions;
export const getProductList = (state: RootState) => state.product.productList;

export default productSlice.reducer;
