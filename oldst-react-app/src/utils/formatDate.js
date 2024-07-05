/**
 * Formats a given date into a readable string.
 * If the date is within the past week, it returns "today", "1 day ago", or "X days ago".
 * Otherwise, it returns the full date in the format "Month Day, Year".
 *
 * @param {string} date - The date to format.
 * @returns {string} - The formatted date string.
 */
const formatDate = (date) => {
  const inputDate = new Date(date);
  const now = new Date();
  const oneWeekInMs = 7 * 24 * 60 * 60 * 1000;
  const diffInMs = now - inputDate;

  if (diffInMs < oneWeekInMs) {
    const diffInDays = Math.floor(diffInMs / (24 * 60 * 60 * 1000));
    switch (diffInDays) {
      case 0:
        return 'today';
      case 1:
        return '1 day ago';
      default:
        return `${diffInDays} days ago`;
    }
  } else {
    const year = inputDate.getFullYear();
    const month = inputDate.toLocaleString('default', { month: 'long' });
    const day = inputDate.getDate();
    return `${month} ${day}, ${year}`;
  }
};

export default formatDate;
