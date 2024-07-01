import React, { useState, useEffect } from 'react';
import ProductCard from '../molecules/ProductCard';
import SortDropdown from '../molecules/SortDropdown';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import useFetchProducts from '../../hooks/useFetchProducts';

const ProductGrid = () => {
  const [sortOption, setSortOption] = useState('title');
  const { products, loading, error, hasMore, fetchMore } = useFetchProducts(sortOption);
  const { lastElementRef } = useInfiniteScroll(hasMore, loading, fetchMore);

  useEffect(() => {
    // Effect to reset page when sorting option changes
  }, [sortOption]);

  return (
    <div className="p-4">
      <SortDropdown onChange={setSortOption} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} ref={index === products.length - 1 ? lastElementRef : null} />
        ))}
      </div>
      {loading && <p className="text-center mt-4">Loading...</p>}
      {!hasMore && !loading && <p className="text-center mt-4">~ end of catalogue ~</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default ProductGrid;
