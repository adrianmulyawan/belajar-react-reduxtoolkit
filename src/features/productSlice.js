// > Fungsi Slice
// > Digunakan untuk memisahkan kode logika aplikasi menjadi bagian yang terpisah, sehingga lebih mudah untuk dikelola / diorganisir.

// > createSlice
// => Fungsi yang terdapat initial state, reducer, action creator, dan action tab secara otomatis.
// => Untuk memudahkan penulisan kode redux.
import { createSlice } from "@reduxjs/toolkit";

// > Buat slice untuk product
const productSlice = createSlice({
  // => Nama reducers
  name: "product",
  // => Nilai awalnya
  initialState: {
    title: "Product Title 1",
    description: "Product Description 1",
    price: "1000000",
  },
  // => Aksi reducers
  reducers: {
    // # Ketika update
    update: (state, action) => {
      // ~ state.title => berasal dari initialState
      // ~ action.payload => data yang kita kirim ke action
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.price = action.payload.price;
    },
  },
});

// > Export actions
export const { update } = productSlice.actions
// > Export reducers (yang akan digunakan di ./app/store.js)
export default productSlice.reducer;