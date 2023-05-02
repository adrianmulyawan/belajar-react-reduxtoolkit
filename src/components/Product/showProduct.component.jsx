import React from 'react';

const ShowProductComponent = () => {
  return (
    <>
      <h3>Show All Products</h3>
      <hr />
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Nama Product</h5>
          <p className="card-text">
            Description Product
          </p>
          <p className='text-muted'>
            Rp 100.000,00
          </p>
        </div>
</div>
    </>
  );
}

export default ShowProductComponent;
