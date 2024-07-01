const formatDate = (date) => {
    const inputDate = new Date(date);
    const now = new Date();
    const oneWeekInMs = 7 * 24 * 60 * 60 * 1000;
  
    const diffInMs = now - inputDate;
  
    if (diffInMs < oneWeekInMs) {
      const diffInDays = Math.floor(diffInMs / (24 * 60 * 60 * 1000));
      if (diffInDays === 0) {
        return 'today';
      } else if (diffInDays === 1) {
        return '1 day ago';
      } else {
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
  