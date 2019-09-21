#Intro to Modules

wet code (a.k.a  Write Every Time, Write Everything Twice", "We Enjoy Typing" or "Waste Everyone's Time)


dry (Don't Repeat Yourself) code  

A DRY approach eliminates that redundancy by using frameworks that reduce or eliminate all those editing tasks except the most important ones, leaving the extensibility of adding new knowledge variables in one place

Every file in node is a module. Each file that Node runs is actually considered a separate module.

Exports, require

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

#Packages and npm

- npm is a package manager that is a powerful feature of Node.js
- allows us to install and use open-source JavaScript packages


- packages are self-contained code libraries that we can install and use in our projects

- all modules are packages but not all packages are used as modules

Below is an example of a package
```javacscipt 
Shapes             <- Package name
  - Circle.js      <- 
  - Rectangle.js   <- Modules that belong to the Shapes package
  - Square.js      <-
```

A library is a collection of pre-written code. Libraries can be private, but many are packaged up nicely, branded and made publicly available for other developers to use in their own projects.

All Node.js projects have a file called `package.json`. They have basic attr. like the project name, description and author.

Custom scripts in `package.json`
 This portion allows us to run commands using an alias:
 ```javascript
 npm run myscript
```
Dependencies In `package.json`
- The dependencies section of package.json lists the packages that need to be installed for the project to run properly

##What's required in your package.json file
<https://docs.npmjs.com/files/package.json>

- Name
- Version
- Description
- keywords
- Homepage
- Bugs
- License
- People fields: authors, contributors
- Files
- Main

##Package-lock.json

❗We should always avoid editing the package-lock.json this file directly. We modify it indirectly via commands like npm install.
More reading:
<https://www.google.com/search?q=npm+docs+package+lock+json&oq=npm+docs+package+lock+json>
<https://chaseonsoftware.com/2015/07/my-gitignore-conventions/#node_modules>

- the package-lock.json file lists all the details about our project's dependencies.

##Stretch Reading

Semantic Versoning <http://semver.org/>
node-semver is used to parse Node package versions <https://github.com/npm/node-semver>