import React from 'react';

const Thumbnail = ({ src, alt }) => (
  <img className="w-full h-auto" src={src} alt={alt} />
);

export default Thumbnail;
