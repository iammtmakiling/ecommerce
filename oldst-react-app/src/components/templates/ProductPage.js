import React from 'react';
import ProductGrid from '../organisms/ProductGrid';
import Navbar from '../organisms/Navbar';
import Divider from '../atoms/Divider';

const ProductPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-dark">
    <Navbar />
    <Divider margin="mb-[2rem]"/>
    <div className="text-[3rem] font-josefins text-center mt-[-0.5rem]">PRODUCTS</div>
    <Divider margin="mt-[2rem]"/>
    <div className="container mx-auto px-[1rem]">
      <ProductGrid />
    </div>
  </div>
);

export default ProductPage;
