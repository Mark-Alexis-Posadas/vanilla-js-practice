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
