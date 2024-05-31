// promise syntax
let myPromise = new Promise(
  function (resolve, reject) {
    resolve(); // when successful
    reject(); // when error
  }
  // "Producing Code" (May take some time)
);

// "Consuming Code" (Must wait for a fulfilled Promise)

myPromise.then(
  function (value) {
    console.log(value);
    /* code if successful */
  },
  function (error) {
    console.log(error);
    /* code if some error */
  }
);

function displayAge(age) {
  console.log(age);
}

const myPromiseSample = new Promise(function (res, rej) {
  let age = 30;

  if (age > 28) {
    res("OK");
    return;
  }
  rej("Error");
});

myPromiseSample.then(
  function (value) {
    displayAge(value);
  },
  function (error) {
    displayAge(error);
  }
);

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("success");
  } else {
    reject("sad");
  }
});

p.then((message) => {
  console.log("this is in the then " + message);
}).catch((message) => {
  console.log("This is in the catsh " + message);
});

// Basic Promise Creation:
// Create a promise that resolves with the value "Hello, World!" after 1 second.

const helloWorldPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World!");
  }, 1000);
});

helloWorldPromise.then((message) => console.log(message));

// Chaining Promises:
// Create a promise that resolves with a number and then chain a .then that adds 10 to that number and logs the result.

const numberPromise = new Promise((resolve, reject) => {
  resolve(5);
});

numberPromise
  .then((number) => number + 10)
  .then((result) => console.log(result)); // Should print 15

//Handling Errors:
// Create a promise that rejects with an error message "Something went wrong!" and handle this error using .catch.

const handlingErrorsPromise = new Promise((resolve, reject) => {
  const isTrue = false;
  isTrue ? resolve("success") : reject("Something went wrong!");
});

handlingErrorsPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => console.log(error));
