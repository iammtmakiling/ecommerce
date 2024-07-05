import { useEffect } from 'react';

/**
 * Custom hook to implement infinite scrolling.
 * @param {boolean} hasMore - Indicates if there are more items to load.
 * @param {boolean} loading - Indicates if the current data is being loaded.
 * @param {function} setPage - Function to set the current page.
 */
const useInfiniteScroll = (hasMore, loading, setPage) => {
  useEffect(() => {
    const handleScroll = () => {
      if (loading || !hasMore) return;

      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 10) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore, setPage]);
};

export default useInfiniteScroll;
