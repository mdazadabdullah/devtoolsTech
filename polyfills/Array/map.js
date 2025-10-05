/**
 * JavaScript Interview Question | Array Polyfills
 * 
 * How to implement Array.prototype.map?
 * 
 * In this question, the candidate needs to implement a function customMap
 * that mimics the behaviour of Array.prototype.map method.
 * 
 * Parameters
 * 
 * A function to execute for each element in the array. 
 * It should return a transform value as per callback function.
 * 
 * element: The current element being processed in the array.
 * index: The index of the current element being processed in the array.
 * array: The array filter() was called upon.
 * thisArg (Optional)
 * A value to use this when executing callbackFn.
 * 
 * Return value
 * 
 * It should return a transform value as per callback function.
 * If no elements pass the test, an empty array is returned.
 * 
 * Examples
 * 
 * const numbers = [1, 2, 3, 4, 5];
 * function getSquareOfNumber(num) {
 *      return num * num;
 * } 
 * const squareNumbers = number.customMap(getSquareOfNumber);
 * console.log(squareNumbers);
 * expected output: Array [1, 4, 9, 16, 25];
 * 
 */

function customMap(callbackFn, thisArg) {
  // DO NOT REMOVE
  'use strict';
  // write your code below
  if (typeof callbackFn === 'null') throw new TypeError('null is not a function')
  if (typeof callbackFn === 'undefined') throw new TypeError('undefined is not a function')
  if (typeof callbackFn !== 'function') throw new TypeError(`${callbackFn} is not a function`)
  
  const res = [];
  let flag = 0;
  while(flag < this.length) {
    if(this.hasOwnProperty(flag)) {
      const value = this[flag]
      const needValue = callbackFn.call(thisArg, value, flag, this)
      res[flag] = needValue;
    }
    flag++
  }
  return res
}

// DO NOT CHANGE
Array.prototype.customMap = customMap;
const numbers = [1, 2, 3, 4, 5];
function getSquareOfNumber(num) {
     return num * num;
} 
const squareNumbers = numbers.customMap(getSquareOfNumber);
console.log(squareNumbers);
// expected output: Array [1, 4, 9, 16, 25];

