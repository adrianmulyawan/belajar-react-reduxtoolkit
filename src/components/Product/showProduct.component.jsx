import React, {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, productSelector } from '../../features/productSlice';

const ShowProductComponent = () => {
  // > akses state dari store.js (./app/store.js)
  // => menggunakan hooks useSelector(): untuk mendapatkan data dari 'state' yang berada di 'store'.
  // const { 
  //   title, description, price
  // } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const products = useSelector(productSelector.selectAll);
  
  let i = 0;
  useEffect(() => {
    if (i === 0) {
      dispatch(getProducts())
    }
  }, [dispatch, i]);

  return (
    <>
      <h3>Show All Products</h3>
      <hr />
      {
        products.map((product) => {
          return (
            <div key={ product.id } className="card mb-2">
              <div className="card-body">
                <h5 className="card-title">
                  { product.title }
                </h5>
                <p className="card-text">
                  { product.description }
                </p>
                <p className='text-muted'>
                  Rp { product.price },00
                </p>
                <button type="submit" className="btn btn-primary">Edit</button>
                <button type="submit" className="btn btn-danger mx-2">Delete</button>
              </div>
            </div>
          )
        })
      }
    </>
  );
}

export default ShowProductComponent;
