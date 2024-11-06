'use strict';

const range = (start, end) => {
  if (start > end) {
    return [];
  }
  const array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
};

module.exports = { range };
