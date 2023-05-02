import React from 'react';
import NavbarComponent from '../components/Navbar/navbar.component';

const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container mt-3">
        <h1>Ini adalah halaman utama</h1>
      </div>
    </>
  );
}

export default HomePage;
