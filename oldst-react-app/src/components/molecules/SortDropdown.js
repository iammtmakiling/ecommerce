import React from 'react';
import PropTypes from 'prop-types';

const SortDropdown = ({ onChange }) => {
  return (
    <div className="flex flex-row justify-start items-center font-josefins">
      <p className="text-[1.2rem]">Sort by:</p>
      <select
        onChange={(e) => onChange(e.target.value)}
        className="p-[1rem] text-[1.5rem] rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-secondary focus:outline-none"
      >
        <option className="text-[1.2rem] hover:bg-gray-200" value="title">Title</option>
        <option className="text-[1.2rem] hover:bg-gray-200" value="price">Price</option>
        <option className="text-[1.2rem] hover:bg-gray-200" value="rating">Rating</option>
      </select>
    </div>
  );
};

SortDropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SortDropdown;
