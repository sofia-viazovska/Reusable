'use strict';

/* Call function from function in loop
- Implement function `average` with signature
  `average(a: number, b: number): number`
  calculating average (arithmetic mean).
  */

const average = (a, b) => (a + b) / 2;


/*
- Implement function `square` with signature
  `square(x: number): number` calculating square of x.
  */

const square = (x) => x * x;

/*
- Implement function `cube` with signature
  `cube(x: number): number` calculating cube of x.
  */

const cube = (x) => x ** 3;

/*
- Call `square` and `cube` in loop 0 to 9, pass results
  to function `average` on each iteration.
  Add calculation results to array and return this array
  from function `calculate`.

Call functions `square` and `cube` in loop, then pass their
results to fun/*
- Call `square` and `cube` in loop 0 to 9, pass results
  to function `average` on each iteration.
  Add calculation results to array and return this array
  from function `calculate`.

Call functions `square` and `cube` in loop, then pass their
results to function `average`. Print what `average` returns. */

const calculate = () => {
  const array = [];
  for (let i = 0; i <= 9; i++) {
    const x = average(square(i), cube(i));
    array.push(x);
  }
  return array;
};

module.exports = { square, cube, average, calculate };
