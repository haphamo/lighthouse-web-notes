##Automated testing offers several benefits over manual testing:

- it saves testing time (by not having to perform manual tests over and over)
- it saves debugging time (by catching bugs earlier)
- it makes it easier to program (because we don't need to keep the entire application in our heads, just the part that we're working on... if we break something, our tests will let us know)
- it makes it easier to come back to a program after some time (programmers forget things, but tests do not)
- it makes it easier to work together (we wrote some widget and know how it works, but our team-mates probably don't; our tests will catch bugs introduced by others on our team, and vice versa)
- it acts as documentation (readings tests is a great way to learn about how code is meant to be used)
- it improves the quality of our code (writing code that is easy to test often requires us to change how our code is structured -- for the better)

###Types of Testing

####Unit testing

- simple and precise compared to the other two, much more useful because they are very specific, which makes it easy to pinpoint and then fix the problem
- practice of testing small pieces of code, typically individual functions, alone and isolate
- If your test uses some external resource, like the network or a database, it’s not a unit test
- unit testing is the only testing method which also helps you write better code, Code that’s hard to unit test usually has poor design
- great for preventing regressions – bugs that occur repeatedly
- ideally use all the time, 

####Integration testing

- ex. you could for example validate a database related test by querying the database to check the database state is correct.
- slower compared to unit testing due to complexity
- also might need some set up or configuration, such as the setting up of a test database. This makes writing and maintaining them harder than unit test
- should mainly use them if you need to test two separate systems together, or if a piece of code is too complex to unit test.


####Functional testing

- aka E2E testing, or browser testing
- the testing of complete functionality of some application
- can be difficult to write and maintain due to their very high complexity, run very slowly
- should be used for testing common user interactions, for example: If you would manually test a certain flow of your app in a browser, such as registering an account, you could make that into a functional test
- use functional tests if you have some repeated tests you do manually in the browser, but be careful to not make them too fine-grained, as they can easily become a nightmare to maintain
- The most common tool used for functional testing is Selenium
