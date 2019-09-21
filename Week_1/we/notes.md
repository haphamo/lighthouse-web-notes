#Intro to Modules

wet code (a.k.a  Write Every Time, Write Everything Twice", "We Enjoy Typing" or "Waste Everyone's Time)


dry (Don't Repeat Yourself) code  

A DRY approach eliminates that redundancy by using frameworks that reduce or eliminate all those editing tasks except the most important ones, leaving the extensibility of adding new knowledge variables in one place

Every file in node is a module. Each file that Node runs is actually considered a separate module.

Exports, requiring 

Here's the basic syntax to import a module from our local filesystem using require:

```javascript
const sayHelloTo = require('./myModule');
```
the extension is not nnecessary but will still work (although redundant).

A file must export code before it can be required!

###Conclusion
- modules are its way of organizing code into individual files
- every js file in node is implicitly a module
  - we can console.log(module) and see its details
- module.exports tells node what to export from a file
  - it defaults to {}
- we can use require with relative paths (like ./myModule)
  - it doesn't need the .js extension, as that is implied