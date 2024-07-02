import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProducts = (sortOption) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setProducts([]); // Reset products when sortOption changes
    setPage(0); // Reset page number when sortOption changes
  }, [sortOption]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get('http://localhost:8000/products', {
          params: {
            _page: page + 1,
            _limit: 12, // Change limit as per your need
            _sort: sortOption,
          },
        });

        const newProducts = response.data;
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
        setHasMore(newProducts.length > 0);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [sortOption, page]);

  const fetchMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return { products, loading, error, hasMore, fetchMore };
};

export default useFetchProducts;
