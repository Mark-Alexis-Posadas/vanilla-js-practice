const animals = [
  { name: "Tagak", habitat: "water" },
  { name: "Tilapia", habitat: "water" },
  { name: "Bangus", habitat: "water" },
  { name: "Kalabaw", habitat: "land" },
  { name: "Baka", habitat: "land" },
  { name: "Kambing", habitat: "land" },
  { name: "Aso", habitat: "land" },
  { name: "Palaka", habitat: "water" },
  { name: "Tipaklong", habitat: "land" },
];

function mgaHayopSaPalayan(animals) {
  let waterAnimals = [];
  let landAnimals = [];
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].name === "Kalabaw") {
      continue;
    } else if (animals[i].habitat === "water") {
      waterAnimals.push(animals[i].name);
    } else {
      landAnimals.push(animals[i].name);
    }
  }
  return { water: waterAnimals, land: landAnimals };
}

console.log(mgaHayopSaPalayan(animals));
