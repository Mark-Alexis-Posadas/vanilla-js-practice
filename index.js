// const fetchPromise = fetch("https://jsonplaceholder.typicode.com/users");

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     resolve(fetchPromise);
//   });
// }

// fetchPromise
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Promise.race:
// Create two promises, one that resolves after 3 seconds and one that resolves after 1 second. Use Promise.race to log the result of the promise that resolves first.

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 1000);
});
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("World");
  }, 3000);
});

Promise.race([promiseOne, promiseTwo]).then((values) => {
  console.log(values);
});
