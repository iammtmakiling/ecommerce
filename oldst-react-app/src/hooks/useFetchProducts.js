import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Custom hook to fetch and sort products from the local database with pagination support.
 * @param {string} sortOption - The option by which to sort the products ('title', 'price', 'rating').
 * @returns {object} - Contains products, loading state, error state, sorting state, and pagination state.
 */
const useFetchProducts = (sortOption) => {
  // States
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Effect to handle initial fetch and sorting
  useEffect(() => {
    setLoading(true);
    setError(null);
    setProducts([]);
    setPage(1);

    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/products?_sort=${sortOption}&_page=1&_limit=20`);
        setProducts(response.data);
        setHasMore(response.data.length > 0);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [sortOption]);

  // Effect to fetch more products when the page changes
  useEffect(() => {
    if (page === 1) return; // Skip initial fetch

    setLoading(true);
    setError(null);

    const fetchMoreProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/products?_sort=${sortOption}&_page=${page}&_limit=20`);
        setProducts((prev) => [...prev, ...response.data]);
        setHasMore(response.data.length > 0);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchMoreProducts();
  }, [page, sortOption]);

  // Effect to handle preemptive fetching
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight - 1000) return;
      if (!loading && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return { products, loading, error, hasMore, setPage };
};

export default useFetchProducts;
