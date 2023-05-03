import React from 'react';
import NavbarComponent from '../components/Navbar/navbar.component';
import EditProductComponent from '../components/Product/editProduct.component';

const EditProductPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container mt-3">
        <div className="row justify-content-center">
          {/* Edit Product */}
          <div className="col-sm-12 col-md-10 col-lg-10">
            <div className="card p-3">
              <EditProductComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProductPage;
