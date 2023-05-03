// > Fungsi Slice
// > Digunakan untuk memisahkan kode logika aplikasi menjadi bagian yang terpisah, sehingga lebih mudah untuk dikelola / diorganisir.

// > createSlice
// => Fungsi yang terdapat initial state, reducer, action creator, dan action tab secara otomatis.
// => Untuk memudahkan penulisan kode redux.
// > createAsyncThunk
// => Digunakan untuk bermain dengan async function (berhubungan dengan asynchronous / komunikasi dengan api)
// > createEntityAdapter
// => Mempermudah manipulasi state dalam format array object.
// => Menormalisasi data yang berhubungan dengan nested data.
import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

// > Method untuk get seluruh data product (mendapatkan seluruh data product)
// => createAsyncThunk(namaThunk, callback)
// # arguments pertama yang menjadi fungsi ketika pending, fullfilled, atau rejected
export const getProducts = createAsyncThunk("products/getProducts", async () => {
  try {
    const response = await axios.get('http://localhost:3004/products');
    return response.data;
  } catch (error) {
    return error.message;
  }
});

// > Method untuk tambah data (insert new Product)
export const insertProduct = createAsyncThunk("products/insertProduct", async (data) => {
  try {
    const response = await axios.post('http://localhost:3004/products', data);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

// > Method untuk delete data product
export const deleteProduct = createAsyncThunk("products/deleteProducts", async (id) => {
  try {
    await axios.delete(`http://localhost:3004/products/${id}`);
    return id;
  } catch (error) {
    return error.message;
  }
});

// > Entity Adapater untuk Product
const productEntity = createEntityAdapter({
  selectId: (product) => product.id,
});

// > Buat slice untuk product
const productSlice = createSlice({
  // => Nama reducers
  name: "product",
  // => Nilai awalnya
  initialState: productEntity.getInitialState(),
  // => Aksi reducers
  // reducers: {
  //   // # Ketika update
  //   update: (state, action) => {
  //     // * dispatch function update
  //     // ~ state.title => berasal dari initialState
  //     // ~ action.payload => data yang kita kirim ke action
  //     state.title = action.payload.title;
  //     state.description = action.payload.description;
  //     state.price = action.payload.price;
  //   },
  // },
  // => Extra reducers
  extraReducers: {
    // > Kondisi getProduct
    // => Ketika sedang pending (menunggu data product)
    // # set isLoading = true
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    // => Ketika fullfilled (data product berhasil didapatkan)
    // # Ambil data dari api dan di set ke initial state
    // # set isLoading = false
    [getProducts.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload);
      state.isLoading = false;
    },
    // => Ketika rejected (gagal mendapatkan data product)
    // # set isLoading = false
    // # set state error menjadi pesan error
    [getProducts.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },

    // > Kondisi getProduct
    // => Ketika sedang pending (menunggu data product)
    // # set isLoading = true
    [insertProduct.pending]: (state) => {
      state.isLoading = true;
    },
    // => Ketika berhasil disimpan
    // # set isLoading = false
    [insertProduct.fulfilled]: (state, action) => {
      productEntity.addOne(state, action.payload);
      state.isLoading = false
    },
    // => Ketika rejected (gagal menyimpan data product)
    // # set isLoading = false
    // # set state error menjadi pesan error
    [insertProduct.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },

    // > Kondisi deleteProduct
    // => Ketika sedang pending (menunggu data product)
    // # set isLoading = true
    [deleteProduct.pending]: (state) => {
      state.isLoading = true;
    },
    // => Ketika berhasil dihapus
    // # set isLoading = false
    [deleteProduct.fulfilled]: (state, action) => {
      productEntity.removeOne(state, action.payload);
      state.isLoading = false;
    },
    // => Ketika rejected (gagal menghapus data product)
    // # set isLoading = false
    // # set state error menjadi pesan error
    [deleteProduct.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

// > Export actions
// export const { update } = productSlice.actions;

// > Export selector untuk digunakan oleh component
export const productSelector = productEntity.getSelectors((state) => state.product);

// > Export reducers (yang akan digunakan di ./app/store.js)
export default productSlice.reducer;