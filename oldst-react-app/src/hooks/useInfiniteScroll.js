import { useEffect } from 'react';

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
