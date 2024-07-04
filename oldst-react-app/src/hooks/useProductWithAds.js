import { useState, useEffect } from 'react';

const generateRandomQueryParam = () => {
  return Math.floor(Math.random() * 10000); // Generate a random number
};

const getRandomAdUrl = (previousAd) => {
  let randomIndex;
  let newAd;

  do {
    randomIndex = Math.floor(Math.random() * 10) + 1; // Ensure randomIndex is between 1 and 10
    newAd = `https://unsplash.it/320/200?image=${randomIndex}&r=${generateRandomQueryParam()}`;
  } while (newAd === previousAd);

  return newAd;
};

const useProductWithAds = (products) => {
  const [productsWithAds, setProductsWithAds] = useState([]);
  const [previousAd, setPreviousAd] = useState('');

  useEffect(() => {
    const enhancedProducts = [];
    let adCount = 0;

    products.forEach((product, index) => {
      enhancedProducts.push(product);

      if ((index + 1) % 20 === 0) {
        const adUrl = getRandomAdUrl(previousAd);
        enhancedProducts.push({ id: `ad-${adCount}`, isAd: true, url: adUrl });
        setPreviousAd(adUrl);
        adCount++;
      }
    });

    setProductsWithAds(enhancedProducts);
  }, [products, previousAd]);

  return productsWithAds;
};

export default useProductWithAds;
