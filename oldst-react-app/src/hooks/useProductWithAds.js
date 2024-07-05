import { useState, useEffect } from 'react';

/**
 * Generates a random query parameter to avoid image caching.
 * @returns {number} A random number.
 */
const generateRandomQueryParam = () => {
  return Math.floor(Math.random() * 10000);
};

/**
 * Generates a random ad URL, ensuring it is different from the previous ad.
 * @param {string} previousAd - The URL of the previous ad.
 * @returns {string} A new random ad URL.
 */
const getRandomAdUrl = (previousAd) => {
  let randomIndex;
  let newAd;

  do {
    randomIndex = Math.floor(Math.random() * 10) + 1;
    newAd = `https://unsplash.it/320/200?image=${randomIndex}&r=${generateRandomQueryParam()}`;
  } while (newAd === previousAd);

  return newAd;
};

/**
 * Custom hook to enhance products with ads.
 * @param {Array} products - The array of products.
 * @returns {Array} The array of products interspersed with ads.
 */
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
