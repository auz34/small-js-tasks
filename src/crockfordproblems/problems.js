'use strict';

/**
*
*/


var problems = {
   // Write a function that takes an argument returns that argument.
   identity: function(x) {
      return x;
   },

   // Write two binary functions, add and mul, that take two numbers and return their sum and product.
   add: function(x, y) {
      return x + y;
   },

   mul: function(x, y) {
      return x * y;
   },

   // Write a function that takes an argument and returns a function that returns that argument.
   identityf: function(x) {
      return function() {
         return x;
      };
   },

   // Write a function that adds from two invocations.
   // addf(3)(4) // 7
   addf: function(x) {
      return function(y) {
         return x + y;
      };
   },

   // Write a function that takes a binary function, and makes it callable with two invocations.
   // addf = applyf(add);
   // addf(3)(4) // 7
   // applyf(mul)(5)(6) // 30
   applyf: function(fn) {
      return function (x) {
         return function(y) {
            fn(x, y);
         };
      };
   }
};

module.exports = problems;