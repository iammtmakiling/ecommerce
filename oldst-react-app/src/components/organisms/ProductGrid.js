import React, { useState, useEffect } from 'react';
import ProductCard from '../molecules/ProductCard';
import SortDropdown from '../molecules/SortDropdown';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import useFetchProducts from '../../hooks/useFetchProducts';
import Divider from '../atoms/Divider';

const ProductGrid = () => {
  const [sortOption, setSortOption] = useState('title');
  const { products, loading, error, hasMore, fetchMore } = useFetchProducts(sortOption);
  const { lastElementRef } = useInfiniteScroll(hasMore, loading, fetchMore);

  useEffect(() => {
    // Effect to reset page when sorting option changes
  }, [sortOption]);

  return (
    <div className="bg-white dark:bg-dark min-h-screen w-full">
    <SortDropdown onChange={setSortOption} />
    <Divider margin="my-4" />
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            ref={index === products.length - 1 ? lastElementRef : null} 
          />
        ))}
      </div>
      {loading && <p className="text-center mt-6 text-gray-700 dark:text-gray-300">Loading...</p>}
      {!hasMore && !loading && <p className="text-center mt-6 text-gray-700 dark:text-gray-300">~ end of catalogue ~</p>}
      {error && <p className="text-center mt-6 text-red-500">{error}</p>}
    </div>
  </div>
  );
};

export default ProductGrid;
