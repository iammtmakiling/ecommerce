import React from 'react';
import PropTypes from 'prop-types';

const SortDropdown = ({ onChange }) => {
  return (
    <select 
      onChange={(e) => onChange(e.target.value)} 
      className="p-2 border rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-secondary shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
    >
      <option value="title">Title</option>
      <option value="price">Price</option>
      <option value="rating">Rating</option>
    </select>
  );
};

SortDropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SortDropdown;
