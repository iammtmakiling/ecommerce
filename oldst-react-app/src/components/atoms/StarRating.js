import React from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<span key={i}>&#9733;</span>); // Full star
    } else if (rating >= i - 0.5) {
      stars.push(<span key={i}>&#9734;</span>); // Half star
    } else {
      stars.push(<span key={i}>&#9734;</span>); // Empty star
    }
  }

  return <div className="star-rating text-black">{stars}</div>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
