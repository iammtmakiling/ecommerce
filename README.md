# Kael Jay's BuyCurious Shop

Welcome to **Kael Jay's BuyCurious Shop**, an ecommerce site where you can buy all sorts of stuff. The homepage displays a list of products for you to browse and shop.

## Features

### Product Grid

- **Grid Display**: Products are displayed in a user-friendly grid format.
- **Sorting Options**: Users can sort products in ascending order by "title," "price," or "rating." The product list reloads when a new sorting option is chosen.
- **Product Details**:
  - **Thumbnail**: Displays a thumbnail image to give customers an impression of what they're buying.
  - **Title**: Shows the product name.
  - **Price**: Prices are formatted in dollars (e.g., `$1,351`).
  - **Date**: Displays the date the product was added to the catalog. Dates are shown in relative time (e.g., "3 days ago") unless they are older than one week, in which case the full date is displayed.
- **Infinite Scrolling**: The product grid automatically loads more items as you scroll down.
- **Loading Indicator**: An animated "loading..." message is displayed while data loads.
- **Preemptive Fetching**: The next batch of results is fetched in advance during idle time. It fetch and present products 1000 pixels before reaching the bottom to avoid displaying the loading indicator, enhancing user experience.
- **End of Catalogue**: When the user reaches the end and there are no more products to display, a message saying "~ end of catalogue ~" is shown.

### Advertisements

- **Ads Insertion**: After every 20 products, an advertisement from one of our sponsors is inserted.
- **Random Ads**: Ads are randomly selected, ensuring that the same ad is never shown twice in a row.

### Notes and Additional Feature

- **Static Thumbnails**: Static photos are used, and only the thumbnails are changed since the prior links were not working.
- **Scroll to Top**: An automatic scroll-up feature is added for easier navigation to the top.

## How to Start the App

1. Commands
   npm/yarn install
   npm/yarn run server
   npm/yarn start

## Utilized Tech Stack and File Structure

### Tech Stack

- **React**: For building the user interface.
- **Tailwind CSS**: For styling and design management.

### File Structure

- **Atomic Design**: Utilized to ensure component reusability and maintainability.
  - `src/components`: Contains atomic components (atoms, molecules, organisms, templates, pages).
