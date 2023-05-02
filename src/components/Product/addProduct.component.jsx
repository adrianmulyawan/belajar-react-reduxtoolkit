import React from 'react';

const AddProductComponent = () => {
  return (
    <>
      <h3>Add New Product</h3>
      <hr />
      <div className="card p-3">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name='title' placeholder='Input Product Name' required />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name='description' placeholder='Input Description Product' required />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="text" className="form-control" id="price" name='price' placeholder='Input Product Price' required />
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
