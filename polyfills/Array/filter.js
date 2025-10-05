/**
 * JavaScript Interview Question | Array Polyfills
 * 
 * How to implement Array.prototype.filter?
 * 
 * In this question, the candidate needs to implement a function customFilter 
 * that mimics the behaviour of Array.prototype.filter method.
 * 
 * The filter() method of Array instances creates a shallow copy of a portion 
 * of a given array, filtered down to just the elements from the given array 
 * that pass the test implemented by the provided function.
 * 
 * Parameters
 * 
 * A function to execute for each element in the array. 
 * It should return a truthy value to keep the element in the resulting array, 
 * and a falsy value otherwise. The function is called with the following arguments:
 * 
 * element: The current element being processed in the array.
 * index: The index of the current element being processed in the array.
 * array: The array filter() was called upon.
 * thisArg (Optional)
 * A value to use this when executing callbackFn.
 * 
 * Return value
 * 
 * A shallow copy of the given array containing just the elements that pass the test. 
 * If no elements pass the test, an empty array is returned.
 * 
 * Examples
 * 
 * const numbers = [12, 5, 8, 130, 44];
 * function isGreaterThanTen(value) {
 *      return value > 10;
 * } 
 * const filteredNumbers = number.customFilter(isGreaterThanTen);
 * console.log(filteredNumbers);
 * expected output: Array [12, 130, 44];
 * 
 */

function customFilter(callbackFn, thisArg) {
  // DO NOT REMOVE
  'use strict';
  // write your code below
  if (typeof callbackFn === 'null') throw new TypeError('null is not a function')
  if (typeof callbackFn === 'undefined') throw new TypeError('undefined is not a function')
  if (typeof callbackFn !== 'function') throw new TypeError(`${callbackFn} is not a function`)
  
  const res = []
  let flag = 0;
  while(flag < this.length) {
    if(this.hasOwnProperty(flag)) {
      const value = this[flag]
      const needToAdd = callbackFn.call(thisArg, value, flag, this)
      needToAdd && res.push(value)
    }
    flag++
  }
  return res
}

// DO NOT CHANGE
Array.prototype.customFilter = customFilter;
const numbers = [12, 5, 8, 130, 44];
function isGreaterThanTen(value) {
    return value > 10;
} 
const filteredNumbers = numbers.customFilter(isGreaterThanTen);
console.log(filteredNumbers);
// expected output: Array [12, 130, 44];

