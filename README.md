Sing For Needs
==============

Sing For Needs is a non-profit set up to allow content creators to link their creations to deserving causes.

Initial Screenshot

![](https://dl.dropbox.com/s/wtdrdt4ied7zfy5/Screenshot%202018-08-22%2015.38.11.png?dl=0)


Installation
------------

1) checkout code:

```
$ git clone https://github.com/AgileVentures/sfn-react
$ cd sfn-react
```

2) install dependencies

```
$ yarn
```

3) run application

```
$ yarn start
```


Tests
-----

To run unit tests use:

```
yarn test
```

To run acceptance tests first start the test server:

```
yarn testserver # runs on port 8081
```

and then in another terminal you can run the acceptance tests like so

```
yarn features
```

TODO:

* have the url actually loaded into the iframe
  - extracting the youtube id <-- good to unit test?
  - being able to test what the iframe is pointing to --> grabbing the src variable?
* work out if there is any good emerging standard for app/test layout
  - stephen grider course on testing react? https://www.udemy.com/react-redux-tutorial/
  - reviewing documentation more extensively
* rename the tests folder (others also using __test__)


DONE

* work out how we can avoid react-scripts test running in watch mode
  - use "CI=true"
* cleanly separate different kinds of tests
  - use `--testPathPattern=__tests__` 
* worked out how unit tests would work with redux
  - https://medium.com/netscape/testing-a-react-redux-app-using-jest-and-enzyme-b349324803a9
  - https://github.com/Gethyl/ReactReduxTestingUsingJestEnzyme/blob/master/__test__/Home.spec.js
  - https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/testing.md#navigating
* clean up app/UX
  - better navigation
  - acknowledge when user submits a youtube video DONE CLUMSILY


Note: This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

