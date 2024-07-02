import React from 'react';
import ProductGrid from '../organisms/ProductGrid';
import Navbar from '../organisms/Navbar';
import Divider from '../atoms/Divider';

const ProductPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-dark">
    <Navbar />
    <Divider margin="mb-[2rem]"/>
    <p className="text-[3rem] font-josefins text-center mt-[-0.5rem]">PRODUCTS</p>
    <Divider margin="mt-[2rem] mb-[1rem]"/>
    <ProductGrid />
  </div>
);

export default ProductPage;
