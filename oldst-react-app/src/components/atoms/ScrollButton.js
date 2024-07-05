import React from 'react';
import PropTypes from 'prop-types';

/**
 * ScrollToTopButton component that scrolls the page to the top when clicked.
 *
 * @param {boolean} isVisible - Determines if the button should be visible.
 */
const ScrollButton = ({ isVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-20 h-20 bg-white text-black rounded-full p-3 shadow-md hover:shadow-lg transition duration-100 border border-black-500"
      >
        <span style={{ fontSize: '2rem', color: "grey" }}>&#8679;</span>
      </button>
    )
  );
};

ScrollButton.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default ScrollButton;
