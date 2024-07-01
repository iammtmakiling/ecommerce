import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProductCard = React.forwardRef(({ product }, ref) => {
  return (
    <div ref={ref} className="border p-4 rounded shadow hover:shadow-lg transition-shadow">
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-2">{`$${product.price.toLocaleString()}`}</p>
      <p className="text-gray-400 text-sm">{formatDate(product.date)}</p>
    </div>
  );
});

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  }).isRequired,
};

export default ProductCard;
