/**
 * 
 * JavaScript Interview Question | Array Polyfills
 * 
 * How to implement Array.isArray? 
 * 
 * In this question, the candidate needs to implement a function customIsArray 
 * that mimics the behaviour of Array.isArray method.
 * 
 * The Array.isArray() static method determines whether the passed value is an Array.
 * 
 * Syntax
 * customIsArray(value);
 * 
 * Return value
 * true if value is an Array; otherwise, false.
 * 
 * Examples
 * 
 * // all following calls return true
 * customIsArray([]);
 * customIsArray([1]);
 * customIsArray(new Array());
 * customIsArray(new Array("a", "b", "c", "d"));
 * customIsArray(new Array(3));
 * customIsArray(Array.prototype);
 * 
 * // all following calls return false
 * customIsArray();
 * customIsArray({});
 * customIsArray(null);
 * customIsArray(undefined);
 * customIsArray(17);
 * customIsArray("Array");
 * customIsArray(true);
 * customIsArray(false);
 * customIsArray(new Uint8Array(32));
 * 
 * 
 */

function customIsArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}

// all following calls return true
customIsArray([]);
customIsArray([1]);
customIsArray(new Array());
customIsArray(new Array("a", "b", "c", "d"));
customIsArray(new Array(3));
customIsArray(Array.prototype);

// all following calls return false
customIsArray();
customIsArray({});
customIsArray(null);
customIsArray(undefined);
customIsArray(17);
customIsArray("Array");
customIsArray(true);
customIsArray(false);
customIsArray(new Uint8Array(32));
