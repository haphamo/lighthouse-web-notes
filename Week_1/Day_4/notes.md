#Javascript Functions as Objects

Functions are first-class objects:
1. functions can be store in varaibles and passed around
2. functions can do everything that other objects can do (like having properties assigned to them)

Callback Functions are functins passed into another function("receiver" function). 
The receiver function is therefore accepting behavior to perform by calling the callback function that it now has access to.
The receiver function can decide to call the callback function at any time, as many times as it wants.

First-class citizen (or First-class object): An object with no restrictions on its creation, destruction, or usage

High-order functions: A function that takes a function as an argument, or returns a function as a result

Using callbacks in Javascript.
.filter() returns true/false
```javascript
const numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
const evens = numbers.filter(function(num) {
  return (num % 2 == 0);
});
console.log("Subset of even numbers:", evens);
```
the call back function is:
```javascript
function(num) {
  return (num % 2 == 0);
}
```
Its job is to take in a number and return `true` if the number is divisible by 2, and `false` otherwise.
