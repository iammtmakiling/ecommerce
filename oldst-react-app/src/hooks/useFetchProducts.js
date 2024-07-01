import { useState, useEffect } from 'react';

// Mock data
const mockProducts = [
  {
    id: 1,
    title: "iPhone 9",
    price: 549,
    rating: 4.69,
    description: "An apple mobile which is nothing like apple",
    thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    date: new Date('2022-01-01')
  },
  {
    id: 2,
    title: "iPhone X",
    price: 899,
    rating: 4.44,
    description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
    date: new Date('2022-01-05')
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    price: 1249,
    rating: 4.09,
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    thumbnail: "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
    date: new Date('2022-01-10')
  },
  {
    id: 4,
    title: "OPPOF19",
    price: 280,
    rating: 4.3,
    description: "OPPO F19 is officially announced on April 2021.",
    thumbnail: "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
    date: new Date('2022-01-15')
  },
  {
    id: 5,
    title: "Huawei P30",
    price: 499,
    rating: 4.09,
    description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    thumbnail: "https://dummyjson.com/image/i/products/5/thumbnail.jpg",
    date: new Date('2022-01-20')
  }
];

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
    setLoading(true);
    setError(null);

    const sortedProducts = [...mockProducts].sort((a, b) => {
      if (sortOption === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortOption === 'price') {
        return a.price - b.price;
      } else if (sortOption === 'rating') {
        return b.rating - a.rating;
      }
      return 0;
    });

    setTimeout(() => {
      const newProducts = sortedProducts.slice(page * 2, (page + 1) * 2);
      setProducts(prevProducts => [...prevProducts, ...newProducts]);
      setLoading(false);
      setHasMore(newProducts.length > 0);
    }, 1000);

  }, [sortOption, page]);

  const fetchMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return { products, loading, error, hasMore, fetchMore };
};

export default useFetchProducts;
