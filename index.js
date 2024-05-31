// Conditional Promise Resolution:
// Create a promise that resolves or rejects based on a random boolean value (true/false). Handle both the resolved and rejected cases.

let promise = new Promise((resolve, reject) => {
  Math.random() < 0.5 ? resolve("True") : reject("false");
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
