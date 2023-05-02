// Fungsi Slice
// > Digunakan untuk memisahkan kode logika aplikasi menjadi bagian yang terpisah, sehingga lebih mudah untuk dikelola / diorganisir.

// > createSlice
// => Fungsi yang terdapat initial state, reducer, action creator, dan action tab.
// => Untuk memudahkan penulisan kode redux.
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    title: "Product 1",
    description: 'Product Description 1',
    price: "100000",
  },
  reducers: {
    update: (state, action) => {
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.price = action.payload.price;
    },
  },
});

export const { update } = productSlice.actions;
export default productSlice.reducer;