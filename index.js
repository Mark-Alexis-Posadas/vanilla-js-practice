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
