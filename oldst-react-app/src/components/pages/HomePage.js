import React from 'react';
import ProductPage from '../templates/ProductPage';
import Navbar from '../organisms/Navbar';
import '../../styles/tailwind.css';

const HomePage = () => (
  <div>
    <Navbar/>
    <ProductPage />
  </div>
);

export default HomePage;
