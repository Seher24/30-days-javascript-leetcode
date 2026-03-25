/**
 * Problem: Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 * Link: https://leetcode.com/problems/create-hello-world-function/?envType=study-plan-v2&envId=30-days-of-javascript
 * Difficulty: Easy
 */

/**
 * @return {Function}
 */
const createHelloWorld = () => {
  return (...args) => "Hello World";
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
