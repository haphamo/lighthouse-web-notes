###Objects

- is a collection of key-value pairs:

```javascript
const myObject = {
  key: "value",
  anotherKey: "another value"
};
```
- above code is object literal syntax

- Practically every programming language makes use of key-value collections, and they go by many different names. Ruby has the Hash type, Python has dictionaries, Java has Hashtable and HashMap.

- Contain key-value pairs; each key maps to a value
- Contain keys which are always strings (or symbols, but it's less common and not important right now)
- Have unique keys; the same key cannot appear twice in an object
- Have their keys point to values which can be of any type

```javascript
const tinyObject = { "size": "Tiny" };
```
Note that while our key size is enclosed in double quotes like a string, it can still be considered a string without the qoutes around it. So we can save a few characters and make it read nicer by writing this instead:
```javascript
const tinyObject = { size: "Tiny" };
```

- Object values can be of any type. Undefined has a special meaning when accessing values in an object.
- When accessing an object property using the square brackets (`[]`) syntax, the key must be quoted (as a string). Otherwise it would be considered a variable name instead of a string literal.
-When writing out object literals, like `{ myKey: "some value" }`, the key is always interpreted as a literal string, even if it's unquoted. It's only necessary to use quotes around the key if the key contains spaces, hyphens or periods. For instance: `{ "my-hyphenated-key": "some value" }`.

The following example shows two ways of specifying the same value in an object literal: using a literal string for the value, or using a variable.
```javascript
const spam = "spam";
person["dislikes"] = { food: spam, "e-mail": "spam" };
```

####Objects & Iteration
- JavaScript objects, `{key: value}`, themselves are not iterable in the way that arrays are. Instead we need to do things a little differently, using a `for...in` statement.

Example:
```javascript
var planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};

for (var planet in planetMoons) {
  var numberOfMoons = planetMoons[planet];
  console.log("Planet: " + planet + ", # of Moons: "+ numberOfMoons);
}
```
Limitations
- objects can sometimes have properties that they inherit from their prototype chain as well as method names. An additional filtering step is sometimes necessary:
```javascript
for (var planet in planetMoons) {
  // additional filter for object properties:
  if (planetMoons.hasOwnProperty(planet)) {
    //  ...
  }
}
```
- Functions can only return one thing. That thing can (as we've seen) be a primitive data type, like a number, a boolean, null or a string. In some cases it makes sense to return an object.