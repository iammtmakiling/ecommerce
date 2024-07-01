import React from 'react';
import { formatDate } from '../../utils/formatDate';

const Date = ({ date }) => (
  <p className="text-gray-500">{formatDate(date)}</p>
);

export default Date;
