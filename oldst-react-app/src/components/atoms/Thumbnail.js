import React from 'react';

const Thumbnail = ({ src, alt }) => {
  console.log('Thumbnail src:', src);
  console.log('Thumbnail alt:', alt);
  return <img className="w-full h-auto" src={src} alt={alt} />;
};

export default Thumbnail;
