'use strict';

// Implement function `rangeOdd(start: number, end: number)` returning
// array with all odd numbers from the range [15, 30] including endpoints
const rangeOdd = (start, end) => {
  if (start > end) return [];
  const array = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) array.push(i);
  }
  return array;
};

module.exports = { rangeOdd };
