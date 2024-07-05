import React, { useState, useEffect } from 'react';
import ProductGrid from '../organisms/ProductGrid';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import Divider from '../atoms/Divider';
import ScrollButton from '../atoms/ScrollButton';

const ProductPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-dark">
      <Navbar />
      <Divider margin="mb-[2rem]" />
      <p className="text-[3rem] font-josefins text-center mt-[-0.5rem]">PRODUCTS</p>
      <Divider margin="mt-[2rem] mb-[1rem]" />
      <ProductGrid />
      <Divider margin="mt-[2rem]" />
      <Footer />
      <ScrollButton isVisible={isVisible} />
    </div>
  );
};

export default ProductPage;
