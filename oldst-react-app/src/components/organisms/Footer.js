import React from 'react';

const Footer = () => {
  return (
    <div className="flex items-center justify-between w-full align-center h-[1rem] bg-white px-8 py-8 font-contax">
      <div className="text-sm">BuyCurious Shop</div>
      <div className="text-sm font-bold">Discover the best deals and trends!</div>
      <div className="text-sm">{new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;
