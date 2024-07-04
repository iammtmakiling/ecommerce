import React, { useState } from 'react';
import ProductCard from '../molecules/ProductCard';
import SortDropdown from '../molecules/SortDropdown';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import useFetchProducts from '../../hooks/useFetchProducts';
import Divider from '../atoms/Divider';

const ProductGrid = () => {
  const [sortOption, setSortOption] = useState('title');
  const { products, loading, error, hasMore, setPage } = useFetchProducts(sortOption);
  useInfiniteScroll(hasMore, loading, setPage);

  return (
    <div className="bg-white dark:bg-dark min-h-screen w-full pb-16">
      <div className='flex flex-row justify-between items-center mx-[8rem]'>
        <SortDropdown onChange={setSortOption} />
        <p className='font-josefins text-[1.2rem] italic'>{products.length} products</p>
      </div>
      <Divider margin="my-4" />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {products.map((item) => (
            <ProductCard 
              key={item.id} // Use a unique key for each product
              product={item} 
            />
          ))}
        </div>
        {loading && <p className="text-center mt-6 text-gray-700 dark:text-gray-300 animate-pulse">Loading...</p>}
        {!loading && !error && products.length === 0 && <p className="text-center mt-6 text-gray-700 dark:text-gray-300">No products found</p>}
        {!hasMore && !loading && <p className="text-center mt-6 text-gray-700 dark:text-gray-300">~ end of catalogue ~</p>}
        {error && <p className="text-center mt-6 text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default ProductGrid;
