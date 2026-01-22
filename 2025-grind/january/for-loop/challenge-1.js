const animals = [
  "tagak",
  "tilapia",
  "bangus",
  "kalabaw",
  "baka",
  "kambing",
  "aso",
  "palaka",
  "tipaklong",
];

function mgaHayopSaPalayan(animals) {
  let result = [];
  for (let i = 0; i < animals.length; i++) {
    if (
      animals[i] === "tagak" ||
      animals[i] === "tilapia" ||
      animals[i] === "bangus"
    ) {
      result.push(`${animals[i]} lives in water`);
    } else {
      result.push(`${animals[i]} lives on land`);
    }
  }

  return result;
}

console.log(mgaHayopSaPalayan(animals));
