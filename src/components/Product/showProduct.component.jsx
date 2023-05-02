import React from 'react';
import { useSelector } from 'react-redux';

const ShowProductComponent = () => {
  // > akses state dari store.js (./app/store.js)
  // => menggunakan hooks useSelector(): untuk mendapatkan data dari 'state' yang berada di 'store'.
  const { 
    title, description, price
  } = useSelector((state) => state.product);

  return (
    <>
      <h3>Show All Products</h3>
      <hr />
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            { title }
          </h5>
          <p className="card-text">
            { description }
          </p>
          <p className='text-muted'>
            Rp { price },00
          </p>
        </div>
      </div>
    </>
  );
}

export default ShowProductComponent;
