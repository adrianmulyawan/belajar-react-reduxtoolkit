import React from 'react';
import NavbarComponent from '../components/Navbar/navbar.component';
import AddProductComponent from '../components/Product/addProduct.component';
import ShowProductComponent from '../components/Product/showProduct.component';

const ProductPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container mt-3">
        <div className="row justify-content-center">
          {/* Add Product */}
          <div className="col-sm-12 col-md-6 col-lg-7">
            <div className="card p-3">
              <AddProductComponent />
            </div>
          </div>
          {/* Show Product */}
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="card p-3">
              <ShowProductComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
