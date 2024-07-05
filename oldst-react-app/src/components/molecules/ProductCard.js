import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import StarRating from '../atoms/StarRating';
import Divider from '../atoms/Divider';

const ProductCard = React.forwardRef(({ product }, ref) => {
  // Directly use the path from the public folder
  const imageSrc = process.env.PUBLIC_URL + product.thumbnail;

  return (
    <div ref={ref} className="border p-4 rounded-lg shadow-md hover:shadow-lg hover:cursor-pointer transition-shadow bg-white border-1 flex flex-col justify-between h-full">
      <div>
        <img src={imageSrc} alt={product.title} className="w-full h-56 object-cover mb-4 rounded-lg" />
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <div className='flex items-center gap-3 mb-4'>
          <p className='font-bold'>{product.rating}</p>
          <StarRating rating={product.rating} />
        </div>
      </div>
      <div>
      <Divider margin="my-4" />
      <div className='flex justify-between items-end mt-auto'>
        <p className="text-gray-500 text-sm">{formatDate(product.date)}</p>
        <p className="text-lg font-bold text-gray-700">${product.price.toLocaleString()}</p>
      </div>
      </div>
    </div>
  );
});

ProductCard.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
