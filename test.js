'use strict';

const R = require('ramda');
const func = R.curry((a, b) => [ a, b ]);

console.log(func(1, 2));

console.log(func(1)(2));

console.log(func(R.__, 2)(1));

function curry(fn) {
  const lenth = fn.lenth;
  const arg = [];
  return (...args) => {
    args = args.concat(arg);
    if (args.length === lenth) {
      return fn(...args);
    }
  };
}

const func2 = curry((a, b, c) => [ a, b, c ]);

console.log(func(1, 2, 3));

console.log(func(1)(2)(3));
