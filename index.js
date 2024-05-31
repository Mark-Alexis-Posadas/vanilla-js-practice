// Promise.all:

// Create two promises that resolve with different values after 1 and 2 seconds, respectively. Use Promise.all to handle both promises and log the results.

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 1000);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("World");
  }, 2000);
});

Promise.all([promiseOne, promiseTwo]).then((values) => {
  console.log(values);
});
