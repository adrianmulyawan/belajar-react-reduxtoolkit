import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { update } from '../../features/productSlice';

const AddProductComponent = () => {
  // > State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  
  // > Mengubah state yang berada di store
  // => menggunakan method 'useDispatch'
  // const dispatch = useDispatch();

  const handleFormAddProduct = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <h3>Add New Product</h3>
      <hr />
      <div className="card p-3">
        <form onSubmit={ handleFormAddProduct }>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name='title' value={ title } onChange={ (event) => setTitle(event.target.value) } placeholder='Input Product Name' required />
          </div>
          <div className="msb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name='description' value={ description } onChange={ (event) => setDescription(event.target.value) } placeholder='Input Description Product' required />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="text" className="form-control" id="price" name='price' value={ price } onChange={ (event) => setPrice(event.target.value) } placeholder='Input Product Price' required />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Save Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProductComponent;
