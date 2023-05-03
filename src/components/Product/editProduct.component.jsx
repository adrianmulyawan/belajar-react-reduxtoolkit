import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, productSelector, updateProduct } from '../../features/productSlice';
import { useParams, useNavigate } from 'react-router-dom';

const EditProductComponent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  // > navigate (direct kehalaman tertentu)
  const navigate = useNavigate();
  // > ambil parameter 'id' menggunakan useParams
  const {id} = useParams();

  // > dispatch (update state)
  const dispatch = useDispatch();
  // > ambil data dari state menggunakan useSelector
  // => tapi satu data saja yang akan diambil
  const product = useSelector((state) => productSelector.selectById(state, id));

  let i = 0;
  // > useEffect untuk ambil data product
  useEffect(() => {
    if (i === 0) {
      dispatch(getProducts());
      i++;
    }
  }, [dispatch, i]);

  let j = 0;
  // > useEffect umtuk set 'value' pada form
  useEffect(() => {
    if (j === 0) {
      if (product) {
        setTitle(product.title);
        setDescription(product.description);
        setPrice(product.price);
      }
      j++;
    }
  }, [product, j]);

  // > data yang akan diupdate
  const data = {
    id,
    title,
    description,
    price
  };

  const handleFormUpdateProduct = async (event) => {
    event.preventDefault();

    await dispatch(updateProduct(data));

    navigate('/product');
  } 

  return (
    <>
      <h3>Update Product</h3>
      <hr />
      <div className="card p-3">
        <form onSubmit={ handleFormUpdateProduct }>
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
              Update Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditProductComponent;
