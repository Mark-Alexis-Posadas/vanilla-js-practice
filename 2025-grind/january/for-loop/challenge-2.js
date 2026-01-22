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
  let waterCount = 0;
  let landCount = 0;

  for (let i = 0; i < animals.length; i++) {
    if (
      animals[i] === "tagak" ||
      animals[i] === "tilapia" ||
      animals[i] === "bangus"
    ) {
      waterCount++;
    } else {
      landCount++;
    }
  }
  return `Water animals: ${waterCount}\nLand animals: ${landCount}`;
}

console.log(mgaHayopSaPalayan(animals));
