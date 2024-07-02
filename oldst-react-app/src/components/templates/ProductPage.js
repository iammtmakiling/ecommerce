import React from 'react';
import ProductGrid from '../organisms/ProductGrid';
import Navbar from '../organisms/Navbar';

const ProductPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-dark">
    <Navbar />
    <hr className="border-gray-200 mb-[2rem] w-full" />
    <div className="text-[3rem] font-josefins text-center mt-[-0.5rem]">PRODUCTS</div>
    <hr className="border-gray-200 mt-[2rem] w-full" />
    <div className="container mx-auto px-[1rem]">
      <ProductGrid />
    </div>
  </div>
);

export default ProductPage;
