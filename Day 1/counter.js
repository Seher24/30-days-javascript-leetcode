/**
 * Day 1 - Counter Function
 * Problem: Given an integer n, return a counter function.
 * Each call returns current value and increments by 1.
 *
 * Example:
 * Input: n = 10
 * Output: 10, 11, 12
 */

const createCounter = (n) => {
  return () => n++;
};

// Example usage
const counter = createCounter(10);

console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
