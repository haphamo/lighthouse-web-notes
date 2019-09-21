//The function that we want to use but in the main.js file.
const sayHelloTo = function(person) {
  console.log(`Hello, ${person}`);
}
//this is the export. Other files can't receive anything from here unless exported!
//module.exports = sayHelloTo;

//console.log(module); // => by default node will export an empty object for each file