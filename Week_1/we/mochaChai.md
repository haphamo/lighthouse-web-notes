##Writing auotmated tests for Javascript

BDD (Behaviour Driven Development)

### Mocha and Chai
<https://www.sitepoint.com/unit-test-javascript-mocha-chai/>
If you want to test code in the browser, run 
`npm install mocha chai --save-dev`
If you want to test Node.js code, in addition to the above, run 
`npm install -g mocha`

- Mocha is the library that allows us to run tests, and Chai contains some helpful functions that we’ll use to verify our test results.

#### Setting up a Directory Structure
Should put your tests in a separate directory from your main code files

#### Setting up a Test Runner: 
Need to set up a simple HTML page to be our test runner page. The page loads Mocha, the testing libraries and our actual test files
- load Mocha’s CSS styles to give our test results nice formatting.
- create a div with the ID mocha. This is where the test results are inserted.
- We load Mocha and Chai. They are located in subfolders of the node_modules folder since we installed them via npm.
- By calling mocha.setup, we make Mocha’s testing helpers available.
- Then, we load the code we want to test and the test files. We don’t have anything here just yet.
- Last, we call mocha.run to run the tests. Make sure you call this after loading the source and test files.

#### The Basic Test Building Blocks
Every test case file follows the same basic pattern
1. you have a `describe` block: describes what we're testing for example, “describe how array should work”.
2. inside the describe, we’ll have `it` blocks: 
- we use a number of `it` functions to create the individual tests – each it should explain one specific behavior
- Consist of 2 params, one string of the desciption, and the other the function

####Writing the test code
- Chai also offers two different styles of writing assertions

####Running the test
- If you are browser testing, there's an extra step you have to do, otherwise use command mocha
- use the optional message parameter for errors.

####Putting it together
Running tests on node or browser